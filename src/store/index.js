import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "../router/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    tags: [],
    isSortByStatus: 0,
    filterMode: 0,
    isFilterdByTag: false,
    filterTagId: 0,
    activeItemId: 0,
    editMode: false,
    deleteMode: false,
    isItemsLoaded: false,
    isTagsLoaded: false,
    isNoItem: false,
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
    isSortByStatus(state) {
      return state.isSortByStatus;
    },
    filterMode(state) {
      return state.filterMode;
    },
    isFilterdByTag(state) {
      return state.isFilterdByTag;
    },
    filterTagId(state) {
      return state.filterTagId;
    },
    activeItemId(state) {
      return state.activeItemId;
    },
    editMode(state) {
      return state.editMode;
    },
    deleteMode(state) {
      return state.deleteMode;
    },
    isItemsLoaded(state) {
      return state.isItemsLoaded;
    },
    isTagsLoaded(state) {
      return state.isTagsLoaded;
    },
    isNoItem(state) {
      return state.isNoItem;
    },
  },
  mutations: {
    updateItem(state, { id, newItem }) {
      let _arr = state.items.map((item) => {
        return item.id === id ? newItem : item;
      });
      state.items = _arr;
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
    setSortByStatus(state, isActive) {
      state.isSortByStatus = isActive;
    },
    setFilterMode(state, mode) {
      state.filterMode = mode;
    },
    setFilterdByTag(state, isActive) {
      state.isFilterdByTag = isActive;
    },
    setFiterTagId(state, id) {
      state.filterTagId = id;
    },
    setActiveItemId(state, tagId) {
      state.activeItemId = tagId;
    },
    setEditMode(state, isActive) {
      state.editMode = isActive;
    },
    setIsItemsLoaded(state, isActive) {
      state.isItemsLoaded = isActive;
    },
    setIsTagsLoaded(state, isActive) {
      state.isTagsLoaded = isActive;
    },
    setDeleteMode(state, isActive) {
      state.deleteMode = isActive;
    },
    setIsNoItem(state, isActive) {
      state.isNoItem = isActive;
    },
  },
  actions: {
    fetchItems({ state, commit }) {
      commit("setIsItemsLoaded", false);
      commit("setIsNoItem", false);
      firebase
        .firestore()
        .collection("boards/1/items")
        .get()
        .then((docs) => {
          commit("clearItems");
          docs.forEach((doc) => {
            commit("addItem", doc.data());
          });
          commit(
            "setIsNoItem",
            !state.items.some((item) => {
              return item.id === state.activeItemId;
            }) && state.editMode
          );
          commit("setIsItemsLoaded", true);
        })
        .catch(() => {
          router.push("/error");
          commit("setIsItemsLoaded", true);
        });
    },
    fetchTags({ commit }) {
      commit("setIsTagsLoaded", false);
      firebase
        .firestore()
        .doc("boards/1/tags/0")
        .get()
        .then((doc) => {
          commit("clearTags");
          doc.data().tags.forEach((tag) => {
            commit("addTag", tag);
          });
          commit("setIsTagsLoaded", true);
        })
        .catch(() => {
          router.push("/error");
          commit("setIsTagsLoaded", true);
        });
    },
    saveUpdate({ dispatch }, { id, newItem }) {
      firebase
        .firestore()
        .doc("boards/1/items/" + id)
        .set(newItem)
        .then(() => {
          dispatch("fetchItems");
          router.push("/");
        });
    },
    deleteItemById({ dispatch }, id) {
      firebase
        .firestore()
        .doc("boards/1/items/" + id)
        .delete()
        .then(() => {
          dispatch("fetchItems");
          router.push("/");
        });
    },
    saveUpdateTags({ dispatch }, { tmpTags }) {
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
