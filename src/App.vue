<script setup>
import { RouterLink, RouterView } from 'vue-router'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`
</script>

<template>
  <header>
    <h1><img :src="logoUrl" alt="Keelers Oven" class="logo"></h1>
    <p class="tagline">Homemade cookies. Made to share.</p>
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
