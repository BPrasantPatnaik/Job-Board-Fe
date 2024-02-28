import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//https://backend-dn5h.onrender.com
//https://backend-dn5h.onrender.com
//https://job-board-be.onrender.com
export default defineConfig({
  //yeh server likhne se hmlog ko cors wala problem khatam hojayega
  server: {
    proxy: {
      '/api':{
        target:'https://job-board-be.onrender.com',
        changeOrigin:true,
        secure:false,
        ws:true
      }
      
    }},
  plugins: [react()],
})
