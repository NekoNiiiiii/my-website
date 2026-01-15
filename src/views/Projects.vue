<template>
  <section class="projects">
    <header class="top">
      <h1>Projects</h1>
      <p class="lead">
        A few recent builds focused on clarity, reliability, and solving real-world problems for small businesses.
      </p>
    </header>

    <div class="list">
      <!-- Project 1 -->
      <article class="project">
        <a class="shot" :href="westSurveysImg" target="_blank" rel="noopener">
          <img :src="westSurveysImg" alt="WestSurveys website screenshot" />
        </a>

        <div class="content">
          <div class="heading">
            <h2>WestSurveys</h2>
            <div class="tags">
              <span class="tag">Vue</span>
              <span class="tag">Router</span>
              <span class="tag">Responsive UI</span>
            </div>
          </div>

          <div class="meta">
            <div class="block">
              <h3>Goal</h3>
              <p>Create a clean, professional business website that is easy to navigate and maintain.</p>
            </div>

            <div class="block">
              <h3>What I built</h3>
              <ul>
                <li>Multi-page layout (Home / Projects / Contact) with Vue Router</li>
                <li>Clear services sections and consistent spacing/typography</li>
                <li>Mobile-friendly navigation and layout</li>
              </ul>
            </div>

            <div class="block">
              <h3>Result</h3>
              <p>A modern, readable site that communicates services quickly and looks professional on desktop and mobile.</p>
            </div>
          </div>

          <div class="links">
            <span class="hint">Links available on request</span>
          </div>
        </div>
      </article>

      <!-- Project 2 -->
      <article class="project">
        <a class="shot" :href="leGranoImg" target="_blank" rel="noopener">
          <img :src="leGranoImg" alt="Le Grano cost calculator screenshot" />
        </a>

        <div class="content">
          <div class="heading">
            <h2>Le Grano cost calculator</h2>
            <div class="tags">
              <span class="tag">Internal tool</span>
              <span class="tag">Costing</span>
              <span class="tag">Dashboards</span>
            </div>
          </div>

          <div class="meta">
            <div class="block">
              <h3>Goal</h3>
              <p>Reduce errors and save time by calculating product costs consistently for a small manufacturing business.</p>
            </div>

            <div class="block">
              <h3>What I built</h3>
              <ul>
                <li>Cost inputs and calculation logic for materials, labour, and overheads</li>
                <li>A clean UI that keeps the workflow simple and repeatable</li>
                <li>Room to expand into history tracking and multi-user access</li>
              </ul>
            </div>

            <div class="block">
              <h3>Result</h3>
              <p>A practical tool that makes costing faster and more reliable, with a clear path for future features.</p>
            </div>
          </div>

          <div class="links">
            <span class="hint">Private/internal project — demo available</span>
          </div>
        </div>
      </article>

      <!-- Project 3 -->
      <article class="project">
        <a class="shot" :href="farmToolImg" target="_blank" rel="noopener">
          <img :src="farmToolImg" alt="Farm management tools screenshot" />
        </a>

        <div class="content">
          <div class="heading">
            <h2>Farm management tools</h2>
            <div class="tags">
              <span class="tag">Planning</span>
              <span class="tag">Operations</span>
              <span class="tag">Automation</span>
            </div>
          </div>

          <div class="meta">
            <div class="block">
              <h3>Goal</h3>
              <p>Create simple planning tools that help track day-to-day operations and reduce manual mistakes.</p>
            </div>

            <div class="block">
              <h3>What I built</h3>
              <ul>
                <li>Small dashboards and planning views for recurring tasks</li>
                <li>Clean layouts that focus on speed and usability</li>
                <li>Export-friendly structure for sharing or reporting</li>
              </ul>
            </div>

            <div class="block">
              <h3>Result</h3>
              <p>Clear, lightweight tools that support real workflows without unnecessary complexity.</p>
            </div>
          </div>

          <div class="links">
            <span class="hint">Demo available on request</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import westSurveysImg from "../assets/projects/west-surveys.png";
import leGranoImg from "../assets/projects/le-grano.png";
import farmToolImg from "../assets/projects/farm-tool.png";
</script>

<style scoped>
.projects {
  max-width: 980px;
  margin: 0 auto;
}

.top {
  margin-bottom: 18px;
}

.lead {
  color: var(--muted);
  margin-top: 8px;
  max-width: 75ch;
}

.list {
  display: grid;
  gap: 18px;
}

.project {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 360px 1fr;
}

.shot {
  display: block;
  border-right: 1px solid var(--border);
}

.shot img {
  width: 100%;
  height: 100%;
  min-height: 240px;
  object-fit: cover;
  display: block;
}

.shot:hover img {
  cursor: zoom-in;
}


.heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.heading h2 {
  margin: 0;
}

.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tag {
  font-size: 0.8rem;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--muted);
  background: #fff;
}

.meta {
  margin-top: 12px;
  display: grid;
  gap: 12px;
}

.block h3 {
  margin: 0 0 6px;
  font-size: 0.95rem;
}

.block p {
  margin: 0;
  color: var(--muted);
}

.block ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
}

.links {
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.link {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: var(--text);
  background: #fff;
}

.link:hover {
  border-color: rgba(22, 101, 52, 0.35);
}

.hint {
  color: var(--muted);
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 900px) {
  .project {
    grid-template-columns: 1fr;
  }

  .shot {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .shot img {
    min-height: 220px;
  }

  .heading {
    flex-direction: column;
  }

  .tags {
    justify-content: flex-start;
  }
}

/* =========================
   FIX: remove forced full-height flex layout
   (this is what creates the huge blank gap)
   ========================= */

.page {
  display: block !important;
  min-height: auto !important;
}

/* If main was being stretched by flex */
.page > .content,
.page > main.content {
  flex: initial !important;
}

</style>
