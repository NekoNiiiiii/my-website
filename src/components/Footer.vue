<template>
  <footer class="site-footer">
    <div class="container">
      <p>© {{ new Date().getFullYear() }} Nico Le Grange</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { border-top: 1px solid var(--border); margin-top: 900px; padding: 28px 0; color: var(--muted); }
p { margin: 0; }
</style>
