# pi-rust · Logo 设计稿画廊

为 [bigfish1913/pi-rust](https://github.com/bigfish1913/pi-rust)（pi 的 Rust 重构版）设计的 logo 方案静态画廊，共 **62** 个方案，四轮迭代：

| 轮次 | 内容 | 数量 |
|------|------|------|
| 第一轮 | 思路发散（柱状图、终端、螃蟹、蒙德里安等） | 20 |
| 第二轮 A | 齿轮 π（官方 Rust 齿轮 + 原版三色 π） | 10 |
| 第二轮 B | 蟹钳 π（可辨认 Ferris） | 10 |
| 第三轮 | 经典 Rust 排布（齿轮 + 官方 R 字形 + 45° 开口嵌 π） | 10 |
| 第四轮 A/B | rpi 现行配色排列组合（绿红灰 / 绿灰白） | 12 |

## 页面

- **画廊** `index.html` — 按轮次浏览全部方案，每张卡片可跳转 SVG / 2x PNG，或加入对比
- **对比器** `compare.html` — 最多并排 4 个方案（选择保存在浏览器 localStorage）

## 结构

```
site/
├── index.html / compare.html   # 页面
├── style.css / data.js / app.js # 样式与渲染（无构建步骤）
└── assets/
    ├── svg/   # 全部方案矢量源文件
    └── png/   # 2x 渲染位图（512 或 1920 宽）
```

设计笔记（原版 pi 品牌调研）见主仓库 `logo-concepts/pi-brand-research.md`。
