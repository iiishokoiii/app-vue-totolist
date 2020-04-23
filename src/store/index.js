import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
// import doc from "../main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    tags: [],
    sortMode: 0,
    isFilterd: false,
    filterTagId: 0,
  },
  getters: {
    items(state) {
      return state.items;
    },
    itemById(state) {
      return (id) => {
        let arr = state.items.filter((item) => {
          return item.id === id;
        });
        return arr[0];
      };
    },
    tags(state) {
      return state.tags;
    },
    sortMode(state) {
      return state.sortMode;
    },
    isFilterd(state) {
      return state.isFilterd;
    },
    filterTagId(state) {
      return state.filterTagId;
    },
  },
  mutations: {
    updateItem(state, { idx, newItem }) {
      state.items[idx] = newItem;
    },
    addItem(state, newItem) {
      state.items.push(newItem);
    },
    addTag(state, newTag) {
      state.tags.push(newTag);
    },
    clearItems(state) {
      state.items = [];
    },
    clearTags(state) {
      state.tags = [];
    },
    changeSortMode(state, { mode }) {
      state.sortMode = mode;
    },
    changeIsFilterd(state, { isActive }) {
      state.isFilterd = isActive;
    },
    changeFiterTagId(state, { id }) {
      state.filterTagId = id;
    },
  },
  actions: {
    fetchItems({ commit }) {
      firebase
        .firestore()
        .collection("boards/1/items")
        .get()
        .then((docs) => {
          commit("clearItems");
          docs.forEach((doc) => {
            commit("addItem", doc.data());
          });
        })
        .catch(() => {
          this.$router.push("/error");
        });
    },
    fetchTags({ commit }) {
      firebase
        .firestore()
        .doc("boards/1/tags/0")
        .get()
        .then((doc) => {
          commit("clearTags");
          doc.data().tags.forEach((tag) => {
            commit("addTag", tag);
          });
        })
        .catch(() => {
          this.$router.push("/error");
        });
    },
    updateItemById({ dispatch }, { id, newItem }) {
      firebase
        .firestore()
        .doc("boards/1/items/" + id)
        .set(newItem)
        .then(() => {
          dispatch("fetchItems");
        });
    },
    deleteItemById({ dispatch }, { id }) {
      firebase
        .firestore()
        .doc("boards/1/items/" + id)
        .delete()
        .then(() => {
          dispatch("fetchItems");
        });
    },
    updateTags({ dispatch }, { tmpTags }) {
      firebase
        .firestore()
        .doc("boards/1/tags/0")
        .set({ tags: tmpTags })
        .then(() => {
          dispatch("fetchTags");
        });
    },
  },
  modules: {},
});
//
