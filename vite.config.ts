import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()]
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src')
        }
      ]
    })
  ]
})
