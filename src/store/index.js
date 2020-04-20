import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tmpItem: {},
    items: [
      {
        id: 1,
        title: "Vueコンポーネントの学習",
        isChecked: true,
        tag: "Vue.jsの学習",
        tagIdx: [0, 1],
        deadline: "2020-04-20"
      },
      {
        id: 2,
        title: "vuexの学習",
        isChecked: false,
        tag: "Vue.jsの学習",
        tagIdx: [0],
        deadline: "2020-03-20"
      },
      {
        id: 3,
        title: "書籍：xxxxxx",
        isChecked: false,
        tag: "読書",
        tagIdx: [0],
        deadline: "2020-04-19"
      }
    ],
    tags: ["タグ１", "タグ２"]
  },
  getters: {
    item(state) {
      return idx => state.items[idx];
    },
    itemLength(state) {
      return state.items.length;
    },
    tags(state) {
      return state.tags;
    }
  },
  mutations: {
    updateItem(state, { idx, newItem }) {
      return (state.items[idx] = newItem);
    }
  },
  actions: {},
  modules: {}
});
