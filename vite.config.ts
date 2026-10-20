import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 让 /admin/* 路径在开发模式下直接返回 public/admin 下的静态文件，
// 避免被 SPA fallback 交给 React Router 处理。
function adminStatic() {
  return {
    name: 'admin-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url.startsWith('/admin')) {
          const file = url === '/admin' || url === '/admin/' ? 'index.html' : url.replace(/^\/admin\//, '')
          const abs = join(__dirname, 'public', 'admin', file)
          if (existsSync(abs)) {
            const ext = abs.split('.').pop() ?? 'html'
            const types: Record<string, string> = {
              html: 'text/html',
              yml: 'text/yaml',
              yaml: 'text/yaml',
              js: 'application/javascript',
              css: 'text/css',
            }
            res.setHeader('Content-Type', types[ext] ?? 'application/octet-stream')
            res.end(readFileSync(abs))
            return
          }
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), adminStatic()],
  // 部署到子路径时改为 '/你的仓库名/'，根域名部署保持 '/'
  base: './',
})
