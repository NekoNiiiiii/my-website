<template>
  <section class="home">
    <div class="hero">
    <div class="home-inner">
      <h1>Websites and simple tools for small businesses</h1>
      <p class="lead">
        I build clean, reliable websites and internal tools that solve real problems with a focus on clarity and usability.
      </p>

      <div class="actions">
  <router-link class="btn" to="/contact">Contact me</router-link>
  <router-link class="btn secondary" to="/projects">View projects</router-link>
</div>

<section class="about">
  <h2>About me</h2>

  <p>
    I’m a developer based in Potchefstroom, South Africa, focused on building
    clean, practical websites and internal tools for small businesses.
  </p>

  <p>
    I enjoy working closely with clients, keeping things simple, and delivering
    solutions that are easy to understand, maintain, and grow over time.
  </p>
  <p>
    I’ve worked on real-world projects for surveying, manufacturing, and agriculture.
  </p>

</section>



      <div class="grid">
        <div class="card">
          <h2>Websites</h2>
          <p>Professional, fast websites that are easy to maintain and update.</p>
        </div>

        <div class="card">
          <h2>Custom tools</h2>
          <p>Dashboards, calculators, and internal systems to save time and reduce mistakes.</p>
        </div>

        <div class="card">
          <h2>Support</h2>
          <p>Small improvements, fixes, and ongoing help when you need it.</p>
        </div>
      </div>

      <section class="projects-preview">
        <h2 class="section-title">Recent projects</h2>

        <div class="projects-grid">
          <div class="project">
            <a :href="westSurveysImg" target="_blank" rel="noopener">
  <img :src="westSurveysImg" alt="WestSurveys website" />
</a>
            <h3>WestSurveys</h3>
            <p>Business website for a professional surveying company.</p>
          </div>

          <div class="project">
            <a :href="leGranoImg" target="_blank" rel="noopener">
  <img :src="leGranoImg" alt="Le Grano cost calculator" />
</a>
            <h3>Le Grano cost calculator</h3>
            <p>Internal tool to calculate and track manufacturing costs.</p>
          </div>

          <div class="project">
            <a :href="farmToolImg" target="_blank" rel="noopener">
  <img :src="farmToolImg" alt="Farm management tools" />
</a>
            <h3>Farm management tools</h3>
            <p>Small dashboards and planning tools for agricultural workflows.</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  </section>
</template>

<script setup>
import westSurveysImg from "../assets/projects/west-surveys.png";
import leGranoImg from "../assets/projects/le-grano.png";
import farmToolImg from "../assets/projects/farm-tool.png";
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.project a {
  display: block;
}

.project a:hover img {
  cursor: zoom-in;
}

.btn {
  display: inline-block;
  padding: 10px 14px;
  border-radius: 12px;
  background: var(--accent);
  color: #ffffff;
  border: 1px solid var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.btn:hover {
  filter: brightness(0.98);
  text-decoration: none;
}

.btn.secondary {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--border);
}

.hero{
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.about {
  margin: 56px 0;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  max-width: 900px;
}

.about h2 {
  margin-bottom: 12px;
}

.about p {
  margin-bottom: 12px;
  color: var(--muted);
  line-height: 1.6;
}

.about-highlight {
  margin-top: 16px;
  padding-left: 12px;
  border-left: 3px solid var(--accent);
  color: var(--text);
}


.home-inner {
  width: 100%;
  max-width: 980px;
  padding-top: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.projects-preview {
  margin-top: 56px;
}

.section-title {
  margin-bottom: 18px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.project {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
  cursor: pointer;
}


.project img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--border);
}


.project h3 {
  margin: 12px 14px 4px;
  color: var(--accent);
  font-size: 1rem;
}

.project p {
  margin: 0 14px 14px;
  color: var(--muted);
  font-size: 0.95rem;
}

.project:hover {
  transform: translateY(-2px);
  border-color: rgba(22, 101, 52, 0.35); /* soft green hint */
  box-shadow: 0 12px 30px rgba(17, 24, 39, 0.12);
}


/* Responsive */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project img {
    height: 220px;
  }
}
</style>
