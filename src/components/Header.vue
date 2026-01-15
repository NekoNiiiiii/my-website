<template>
  <header class="site-header">
    <div class="header-inner">
      <div class="container header-content">
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// No script needed anymore
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
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navigation */
.nav {
  display: flex;
  gap: 18px;
  font-size: 20px;
}

.nav a {
  color: var(--text);
  text-decoration: none;
}

.nav a.router-link-active {
  color: var(--accent);
}

.nav a:hover {
  text-decoration: underline;
}
</style>
