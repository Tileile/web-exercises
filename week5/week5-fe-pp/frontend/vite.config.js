import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
// Redirect requests to routes starting with "/api" to the target server at 
//"http://localhost:4000", so that the frontend can make API requests to "/api" 
// and proxy middleware forwards these requests to the backend, which is running 
// on a different port during development.
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});

