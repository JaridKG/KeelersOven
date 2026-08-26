import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Served from https://jaridkg.github.io/KeelersOven/ on GitHub Pages,
// so production builds need the repo name as the base path.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/KeelersOven/' : '/',
  plugins: [vue()],
}))
