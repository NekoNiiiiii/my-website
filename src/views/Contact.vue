<template>
  <section class="contact">
    <h1>Contact</h1>
    <p class="lead">
      If you want a website or a small custom tool, send me a message and tell me what you need.
    </p>

    <div class="grid">
      <!-- Contact details -->
      <div class="card">
        <h2>Reach me</h2>

        <div class="item">
          <div class="label">Email</div>
          <a class="value" :href="`mailto:${email}`">{{ email }}</a>
        </div>

        <div class="item">
          <div class="label">WhatsApp</div>
          <a class="value" :href="whatsappLink" target="_blank" rel="noopener">
            {{ whatsappDisplay }}
          </a>
        </div>

        <div class="item">
          <div class="label">Location</div>
          <div class="value">{{ location }}</div>
        </div>
      </div>

      <!-- What to include -->
      <div class="card">
        <h2>What to include</h2>
        <p class="muted">
          To reply quickly, it helps if you include:
        </p>

        <ul class="list">
          <li>What you want built (website / tool / update)</li>
          <li>Your timeline (e.g. “this month”)</li>
          <li>Any examples you like (links / screenshots)</li>
          <li>Optional: your budget range (even a rough idea)</li>
        </ul>

        <div class="note">
          If you’re not sure, just tell me what problem you’re trying to solve. I’ll help you decide.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const email = "legrangenico5@gmail.com";

const whatsappNumber = "27769951520";

const whatsappDisplay = "+27 76 995 1520";
const location = "Potchefstroom, South Africa";

const whatsappLink = `https://wa.me/${whatsappNumber}`;
</script>

<style scoped>
.contact {
  max-width: 980px;
  margin: 0 auto;
}

.lead {
  margin-top: 6px;
  margin-bottom: 22px;
  color: var(--muted);
  max-width: 70ch;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.card h2 {
  margin-bottom: 12px;
}

.item {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid var(--border);
}

.value {
  word-break: break-word;
}


.item:first-of-type {
  border-top: none;
  padding-top: 0;
}

.label {
  color: var(--muted);
  font-weight: 600;
}

.value {
  color: var(--text);
  text-decoration: none;
}

.value:hover {
  text-decoration: underline;
}

.muted {
  color: var(--muted);
  margin-bottom: 10px;
}

.list {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
}

.note {
  margin-top: 14px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--text);
}

/* Responsive */
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .item {
    grid-template-columns: 1fr;
  }

  .label {
    margin-bottom: 4px;
  }
}
</style>
