# Daisy Zeng · A Life in Progress

个人简历/介绍网站，基于 **React 18 + TypeScript + Vite + Tailwind CSS v4**，使用 **Decap CMS** 作为可视化内容后台。

## 技术栈

- React 18 + React Router 6
- TypeScript
- Vite 5
- Tailwind CSS v4
- Lucide React（图标）
- Decap CMS（内容管理后台）

## 目录结构

```
.
├── content/                  # 所有可编辑内容（Decap CMS 读写这些文件）
│   ├── profile.json          # 个人资料
│   ├── journey.json          # 人生关键节点（时间线）
│   ├── projects.json         # 项目与经历
│   ├── notes-settings.json   # 笔记分类与"正在形成的答案"
│   └── notes.json            # 笔记文章列表
├── public/
│   ├── admin/                # Decap CMS 后台
│   │   ├── index.html
│   │   └── config.yml        # 后台字段配置
│   ├── images/               # 图片资源（可替换）
│   └── favicon.svg
├── src/
│   ├── components/           # 可复用组件
│   ├── pages/                # 页面
│   ├── data/                 # 从 content/*.json 导入的薄封装（含类型）
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # 主题与全局样式
├── vite.config.ts
└── package.json
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动前台（http://localhost:5173）
npm run dev

# 同时启动前台 + CMS 后台编辑服务
npm run dev:cms
```

启动后访问：

| 地址 | 用途 |
|---|---|
| http://localhost:5173 | 前台网站 |
| http://localhost:5173/admin | Decap CMS 内容后台 |

> `npm run dev:cms` 会同时启动 Vite 和 `decap-server`（本地文件代理，监听 8081 端口），让 CMS 直接读写本地 `content/` 下的 JSON 文件。

## 内容编辑（CMS 后台）

访问 `/admin`，左侧选择集合，编辑后点击 **发布 → 立即发布**，内容会直接写入 `content/*.json`，前台自动热更新。

可编辑的集合：

1. **个人资料** — 姓名、学校、专业、关键词、联系方式
2. **人生关键节点** — 时间线各阶段
3. **项目与经历** — 项目卡片及详情章节
4. **笔记分类与专栏** — 分类入口和"正在形成的答案"
5. **笔记文章** — 文章列表（目前为空，展示空状态）

### 不通过 CMS 也能编辑

直接修改 `content/*.json` 文件即可，结构和 `src/data/*.ts` 中的类型定义一一对应。

## 生产构建

```bash
npm run build       # 产出 dist/
npm run preview     # 本地预览生产构建
```

## 部署

### 方式一：Vercel（推荐）

1. 把项目推到 GitHub 仓库
2. 在 [vercel.com](https://vercel.com) Import 该仓库
3. Framework Preset 选 **Vite**，Build Command `npm run build`，Output Directory `dist`
4. 点击 Deploy，获得 `https://xxx.vercel.app`

### 方式二：Netlify

类似 Vercel，Import 仓库后自动识别 Vite 配置。

### 方式三：GitHub Pages

1. 修改 `vite.config.ts` 中的 `base` 为 `/你的仓库名/`
2. `npm run build`
3. 把 `dist/` 内容推到 `gh-pages` 分支

## 线上启用 CMS 后台（GitHub OAuth）

本地用 `decap-server` 免登录编辑；线上需要配置 GitHub OAuth，让 CMS 直接读写仓库。

### 步骤

**1. 修改 `public/admin/config.yml`**

把这两行改成你的信息：

```yaml
backend:
  name: github
  repo: 你的GitHub用户名/仓库名
  branch: main
  base_url: https://oauth-proxy-你的项目.vercel.app
```

**2. 创建 GitHub OAuth App**

- 打开 https://github.com/settings/developers → **New OAuth App**
- Application name: 随意（如 `Daisy Zeng CMS`）
- Homepage URL: 你的网站地址
- Authorization callback URL: `https://oauth-proxy-你的项目.vercel.app/callback`
- 创建后复制 **Client ID** 和 **Client Secret**

**3. 部署 OAuth 代理到 Vercel**

最简单的方式是使用 [`decap-oauth-proxy`](https://github.com/reshiram19/decap-oauth-proxy) 或 `netlify-cms-oauth-provider`，一键部署到 Vercel，并在环境变量中填入上一步的 Client ID 和 Secret。

**4. 配置完成**

访问 `https://你的域名/admin`，点击"使用 GitHub 登录"，授权后即可在线编辑。每次保存会自动 commit 到仓库，Vercel 自动重新构建发布。

> 如果不想配置 OAuth，也可以只在本地用 `npm run dev:cms` 编辑，然后 push 到仓库触发重新部署。

## 替换图片

图片统一放在 `public/images/`。当前使用的占位图路径：

- `/images/hero.jpg` — 首页右侧
- `/images/data-modeling.jpg` — 项目 01
- `/images/jd.jpg` — 项目 02
- `/images/bytedance.jpg` — 项目 03

把你的真实图片放到 `public/images/` 并保持文件名一致即可，或在 CMS 中修改 `cover` 字段指向新路径。

## 添加笔记文章

在 CMS 后台"笔记文章"集合中新增，或直接在 `content/notes.json` 追加：

```json
{
  "id": "note-1",
  "categoryId": "personal",
  "title": "文章标题",
  "date": "2026-10-20",
  "tags": ["成长"],
  "excerpt": "文章摘要……"
}
```

## 自定义

- **配色/字体**：修改 `src/index.css` 中 `@theme` 块的 CSS 变量
- **导航**：修改 `src/components/Header.tsx` 中的 `NAV` 数组
- **页面结构**：修改 `src/pages/` 下对应文件

## License

个人使用，保留所有权利。
