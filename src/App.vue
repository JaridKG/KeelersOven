<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

// Temporary client-side gate while the site is in preview.
// NOT real security — anyone can read this in the page source.
// To be replaced with proper auth once the backend exists.
const PASSWORD = 'Password'
const unlocked = ref(false)
try {
  unlocked.value = sessionStorage.getItem('keelers-unlocked') === '1'
} catch {
  /* storage unavailable; gate simply asks again */
}

const attempt = ref('')
const error = ref(false)

function unlock() {
  if (attempt.value === PASSWORD) {
    unlocked.value = true
    error.value = false
    try {
      sessionStorage.setItem('keelers-unlocked', '1')
    } catch {
      /* ignore */
    }
  } else {
    error.value = true
    attempt.value = ''
  }
}
</script>

<template>
  <div v-if="!unlocked" class="lock-screen">
    <img :src="logoUrl" alt="Keelers Oven" class="logo">
    <p class="tagline">Homemade cookies. Made to share &mdash; but you won't want to.</p>
    <p>We're still warming up the oven — this site is in private preview.</p>
    <form @submit.prevent="unlock">
      <label for="site-password">Password</label>
      <input id="site-password" v-model="attempt" type="password" autocomplete="off" autofocus>
      <button type="submit">Enter</button>
    </form>
    <p v-if="error" class="lock-error">That's not it — please try again.</p>
  </div>

  <template v-else>
    <header>
      <h1><img :src="logoUrl" alt="Keelers Oven" class="logo"></h1>
      <p class="tagline">Homemade cookies. Made to share &mdash; but you won't want to.</p>
    </header>

    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/products">Products</RouterLink></li>
        <li><RouterLink to="/markets">Farmers Markets</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>

    <main>
      <RouterView />
    </main>

    <footer>
      <p>&copy; 2026 Keelers Oven &middot; @keelersoven &middot; <RouterLink to="/contact">Contact us</RouterLink></p>
      <p class="footer-tagline">Thank you for supporting small &amp; local!</p>
    </footer>
  </template>
</template>
