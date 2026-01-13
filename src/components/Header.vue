<template>
  <header class="site-header">
    <div class="header-inner">
        <div class="container header-content"></div>
      <!-- Left: dropdown menu -->
      <div class="left">
        <button
          class="menu-btn"
          type="button"
          @click="toggleMenu"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div v-if="isOpen" class="menu-backdrop" @click="closeMenu"></div>

        <div v-if="isOpen" class="menu">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <router-link to="/projects" @click="closeMenu">Projects</router-link>
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
        </div>
      </div>


      <!-- Right: normal nav (optional) -->
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const isOpen = ref(false);
const router = useRouter();

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function closeMenu() {
  isOpen.value = false;
}

// Close menu on ESC
function onKeyDown(e) {
  if (e.key === "Escape") closeMenu();
}

// Close menu on route change
router.afterEach(() => closeMenu());

onMounted(() => window.addEventListener("keydown", onKeyDown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeyDown));
</script>

<style scoped>
.site-header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  width: 100%;
}

.header-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
}


/* LEFT: hamburger */
.left {
  position: relative;
  justify-self: start;
}

/* Bigger hamburger */
.menu-btn {
  appearance: none;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 22px; /* 👈 bigger */
  line-height: 1;
  cursor: pointer;
}

.menu-btn:hover {
  border-color: var(--accent);
}

/* Dropdown menu */
.menu {
  position: absolute;
  top: 52px;
  left: 0;
  min-width: 200px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px;
  display: grid;
  gap: 8px;
  z-index: 11;
}

/* Backdrop */
.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10;
}

/* Center brand */
.brand {
  justify-self: center;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}

.nav {
  grid-column: 2;
  justify-self: center;
  display: flex;
  gap: 18px;
  font-size: 20px;
}

.nav a {
  color: var(--text);
}

.nav a.router-link-active {
  color: var(--accent);
}

/* Mobile: hide right nav */
@media (max-width: 720px) {
  .nav {
    display: none;
  }
}

</style>
