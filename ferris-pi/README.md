# Ferris π · 配色方案画廊

数学符号 π 的 10 种 Ferris 橙配色造型,静态站可直接部署到 GitHub Pages。

## 本地预览

```bash
python -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 GitHub Pages

本目录为纯静态站(相对路径,含 `.nojekyll`),两种方式任选:

**方式 A:作为仓库子目录启用**(最简单)

1. 把本目录推到任意 GitHub 仓库(如 `bigfish1913/pi-rust` 的 `site/ferris-pi`)
2. 仓库 Settings → Pages → Source 选 `main` 分支,目录选 `/` 或留空并用 `index.html` 所在路径
3. 访问 `https://bigfish1913.github.io/pi-rust/ferris-pi/`

**方式 B:独立仓库名为 `<user>.github.io`**

1. 新建仓库 `bigfish1913.github.io`,把本目录内容推到其根目录
2. 访问 `https://bigfish1913.github.io/`

> 若部署到其他用户名/仓库名,把 `index.html` 里的 GitHub 链接替换即可;页面资源全部为相对路径,无需改动。

## 内容

- `assets/01..10-*.png|svg` — 10 种 π 造型(480×480 PNG,3× 超采样抗锯齿;同名 SVG 矢量)
- `assets/bonus-logo-*` — 原 reference-pi-logo 三块框架的 Ferris 重涂(两版)
- `assets/overview.png` — 10 造型总览拼图

## 配色

| 名称 | 色值 | 用途 |
|---|---|---|
| Ferris 主橙 | `#F74C00` | crab 系列(c01–c10)统一身体色 |
| Ferris 深橙 | `#C63D00` | 阴影侧笔画 |
| Ferris 浅橙 | `#FF8A50` | 高光侧笔画 |
| 画布底色 | `#0d1117` | 仅预览底,方案本身透明背景 |
