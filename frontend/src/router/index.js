import { createRouter, createWebHistory } from "vue-router";

import AuthLayout from "../layouts/AuthLayout.vue";
import MainLayout from "../layouts/MainLayout.vue";

import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import StudentListView from "../views/StudentListView.vue";
import StudentFormView from "../views/StudentFormView.vue";

const routes = [
  {
    path: "/login",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: LoginView,
      },
    ],
  },
  {
    path: "/",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "students",
        name: "StudentList",
        component: StudentListView,
      },
      {
        path: "students/new",
        name: "StudentNew",
        component: StudentFormView,
      },
      {
        path: "students/:id/edit",
        name: "StudentEdit",
        component: StudentFormView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem("token");

  if (to.meta.requiresAuth && !isAuth) {
    return next({ name: "Login" });
  }

  if (to.name === "Login" && isAuth) {
    return next({ name: "Home" });
  }

  return next();
});

export default router;
