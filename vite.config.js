import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./styles/scss/_variables.scss";
          @import "./styles/scss/_mixins.scss";
        `
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});