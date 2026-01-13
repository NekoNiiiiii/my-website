import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Websites & Tools for Small Businesses | Nico Le Grange",
      },
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
      meta: {
        title: "Projects | Nico Le Grange",
      },
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: {
        title: "Contact | Nico Le Grange",
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

/* Update page title on route change */
router.afterEach((to) => {
  document.title = to.meta.title || "Nico Le Grange";
});

export default router;
