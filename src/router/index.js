import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import Edit from "../views/Edit.vue";
import Add from "../views/Add.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    component: List
  },
  {
    path: "/edit/:id",
    name: "edit",
    props: route => ({ id: Number(route.params.id) }),
    component: Edit
  },
  {
    path: "/add/",
    name: "add",
    component: Add
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
