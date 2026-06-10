# NOTHING-INSPIRED DESIGN SYSTEM

一套受 **Nothing**（nothing.tech）启发的开源设计语言，面向开发者工具 / AI Agent 类产品。本文件是**单一事实源**：包含完整的设计原则、token、组件规范与反模式；同目录 `index.html` 是其可视化实现（dark / light 双模 + 组件库 + 应用示例）。

> **如何使用本文档**
> - 给 AI（Claude / Gemini 等）生成或修改界面前，请**完整读本文件**；所有视觉数值取自下方 token，不要手写裸值；产出后用文末 Checklist 自检。
> - 本文件刻意写得自洽、可移植：可作为蓝本交给设计型模型（如 Gemini）去**重新设计/扩展规范**，再把结果交给实现型模型（如 Claude）落地为代码。改 token 即可全局改皮。
> - 参考来源：官网 `us.nothing.tech`、创意社区 `playground.nothing.tech`、社区 skill `dominikmartn/nothing-design`。Nothing 的专有字体（Ndot / NType82 / LatteraMono）无法商用加载，下文给出等价的开源替代。

---

## 0 · 世界观 / Philosophy

> **像一台精密仪器：黑白为底，信息为主，强调色只为最重要的一件事亮起。**

这是开发者工具 / Agent 系列的设计语言。界面应当**克制、工业、可信赖**——不是消费玩具。它的气质来自三处张力：Swiss/grotesque 排版的秩序、点阵（dot-matrix）的科技复古、以及大量负空间带来的从容。

调性关键词：**单色 monochrome · 圆点点阵 round-dot · 无衬线工业排版 grotesque · 工业极简 · 大量留白 · 机械式精确**。

当某个细节没被本规范覆盖时，按这句话裁决：**安静、精确、信息优先。**

---

## 1 · 核心原则 / Principles

1. **黑灰白为主，强调色极度稀缺。** 整站以黑 / 灰 / 白构成。强调色（本实例为 Nothing 标志红 `#D71921`）**只用于真正的"信号"**——正在发生、需要决策、超限、实时状态。一屏出现的强调色应屈指可数。Nothing 官网甚至几乎零 UI 强调色（其标志红只在硬件 / 包装 / Glyph 上）。
2. **控件激活态用黑白反色，而非强调色。** 主按钮、开关、选中态等遵循 Nothing 的"黑白反相"逻辑（暗模式：白底黑字 / 白轨黑钮；亮模式反之），把强调色省给信号。
3. **结构靠线与留白，不靠阴影。** 用 1px hairline 和慷慨的负空间分层。**禁止投影、渐变、模糊阴影**；深度只用 z-index 层级表达。（玻璃卡的 backdrop-blur 属材质，不属阴影，允许。）
4. **排版挑大梁。** 用尺寸跳变与字体角色造层级，而非颜色 / 图标 / 边框。单一字重为主（参见字体节）。
5. **点阵是母语。** 数字、图标、标点凡是"点阵语境"，都用统一的圆点单元表达（见 §4 点阵语言）。
6. **悬停 = 降不透明度，不是变色。** hover 用 `opacity .8 / .75`、卡片 `translateY(-2px)`；机械、利落、不回弹。
7. **数值只来自 token。** 不手写裸色值 / 裸像素。

---

## 2 · 颜色 / Color

**暗色优先；灰阶本身即层级，单屏 ≤4 级灰。** 软黑软白（非纯 #000/#FFF 文本），减少刺眼。

| token | Dark | Light | 角色 |
|---|---|---|---|
| `bg` | `#000000` | `#F2F2F2` | 画布（OLED 黑 / 暖灰纸）|
| `surface` | `#0E0E0E` | `#FFFFFF` | 面板 / 卡片底 |
| `raised` | `#171717` | `#EDEDED` | 次级抬升、活动行 |
| `line` | `#222222` | `#E5E7EB` | hairline 分隔线 |
| `line-2` | `#333333` | `#CFCFCF` | 可见边框 / 描边 |
| `muted` | `#5A5A5A` | `#9A9A9A` | 最弱文字、刻度 |
| `secondary` | `#8C8C8C` | `#585A5A` | 标签、次要文字 |
| `primary` | `#EDEDED` | `#1C1C1C` | 正文、图标默认色 |
| `display` | `#FFFFFF` | `#000000` | 标题、英雄数字、反色填充 |
| `accent` | `#D71921` | `#D71921` | **唯一强调色（信号）= Nothing 标志红**。填充用，红在明暗底都成立 |
| `accent-text` | `#FF4438` | `#C2141C` | accent 作**前景**（文字/边框/图标）时的变体：暗底提亮、亮底压暗保对比 |
| `accent-ink` | `#FFFFFF` | `#FFFFFF` | 压在 accent 红填充上的字色（白） |
| `success` | `#7BE38A` | `#3D8B4A` | 数据状态：良好 / 已连接（绿，仅上数值） |
| `warning` | `#F2C94C` | `#9C6B00` | 数据状态：注意 / 待定（琥珀，仅上数值） |
| `error` | `#FF5247` | `#D23B30` | 数据状态：错误。与 accent 同属红系——红即警示，本就是同一信号家族 |
| `focus` | `rgb(59 130 246 / .55)` | 同左 | 无障碍焦点环——唯一被允许的非单色装饰 |

**强调色使用规则（重要）**
- 强调色**只给信号**：需决策计数、`NEEDS INPUT`、超限值、实时（live）圆点、通知徽标点、accent 色板本身、以及语义 alert。
- 控件激活态（按钮 / 开关 / 选中 / 当前 tab / 今日 / 步进当前 / 普通进度·表盘·电量）**一律用黑白反色**（`display` ↔ `bg`），**不**用强调色。
- **前景/填充分两个 token**：`--accent`（标志红 `#D71921`）只做**填充**，其上字色用白 `accent-ink`；`--accent-text` 作**前景**（文字/边框/图标），暗底提亮到 `#FF4438`、亮底压暗到 `#C2141C` 以保对比（≥4.5:1）。success/warning/error 亮色同样整体压暗。
- 数据状态色只上在**数值本身**，不上在标签或整行底色。

---

## 3 · 字体 / Typography

四种角色，各司其职。**两条字体路线**：(A) **真字体**——最正统，本地/自用；(B) **开源 fallback**——公开发布用。CSS 用 `@font-face` 先声明真字体、再在 token 里把开源字体放进 fallback，于是 `fonts/` 里有真字体就用真字体、没有就自动降级到开源（同一套代码两用）。

| 角色 | (A) 真字体（专有·本地）| (B) 开源 fallback（公开发布）| 用途 |
|---|---|---|---|
| **点阵 Display** | **NDot57 / NDot55** | **Doto**（`ROND` 轴=100 → 圆点非方块）| 英雄数字、品牌字、glyph、计时器、独立数字 |
| **UI / 正文** | **NType82-Regular/Headline** | **Helvetica Neue / Arial**（中性 grotesque；勿用 Geist）| 正文、副文、UI 文案 |
| **Mono / Data** | **NType82 Mono / LetteraMonoLL** | **Geist Mono** | 标签（大写）、数据、代码、导航、时间戳 |
| **Headline 标题** | **NType82-Headline** | **Helvetica Neue / Arial**（600 字重）| 卡片标题、弹窗标题、营销/编辑标题 |

> **不要用衬线（重要）**：Nothing 的真实系统**没有任何衬线字体**——只有 NDot（点阵）＋ NType82（grotesque）＋ Lettera Mono。"编辑性衬线标题"是社区仿品最常见的破绽，已从本规范移除。标题统一走 NType82-Headline（fallback：Helvetica Neue 600）。`--f-head` 即此角色 token。

> **真字体与版权**：NDot、NType82 与 LetteraMonoLL 属于专有字体资产。公开版只使用开源 fallback；如需真字体，必须从权利方取得适当授权。不要从非官方镜像获取、提交或再分发这些字体。

**字体加载**
```css
/* (A) 真字体：本地放 fonts/，@font-face 声明 */
@font-face{font-family:'NDot';src:url('fonts/Ndot57-Regular.otf')}
@font-face{font-family:'NType82';src:url('fonts/NType82-Regular.otf')}
@font-face{font-family:'NType82 Mono';src:url('fonts/NType82Mono-Regular.otf')}
/* (B) 开源 fallback：Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Doto:ROND,wght@100,400;100,500;100,700;100,900&family=Geist+Mono:wght@400;500&display=swap');
/* token 把两者串成 fallback 链 */
--f-display:'NDot','Doto',monospace;
--f-ui:'NType82','Helvetica Neue',Arial,sans-serif;
--f-mono:'NType82 Mono','Geist Mono',ui-monospace,monospace;
--f-head:'NType82','Helvetica Neue',Arial,sans-serif; /* 标题：配 font-weight:600 取 NType82-Headline */
```
真 NDot 本身就是圆点，无需 ROND 轴；仅当降级到 Doto fallback 时需 `body{font-variation-settings:'ROND' 100}`（只设 ROND、不动字重，无副作用）。

**Doto 字重铁律**：点阵大字用 **~400–500 字重**，相邻圆点才会**分离且圆**；用 700/900 会把圆点糊成一团、在曲线顶端挤出尖角（"0" 变尖头）。要"很多小圆点"的点阵感就**别加粗**。

**字号阶梯**（官网值，标题行高 1.2 / 正文 1.5，原则上单一字重）：
`display 40 · heading-xl 32 · heading-lg 24 · heading-md 20 · body 16 · small 14 · caption/label 11`。
（仪表盘英雄数字可超 40 以制造戏剧层级；标签恒为 Geist Mono、大写、字距 .08–.1em。）

---

## 4 · 点阵语言 / Dot-Matrix Language

点阵是本系统的母语，三处统一使用同一种"圆点"质感：

- **数字**：**凡独立出现的数字都用像素 Doto**——日历日期、分页页码、步进序号、计数、百分比、表盘读数等。其**符号**（尤其 `%`）随数字一起用 Doto（如 `78%` `73%` 整体点阵），不要数字点阵、`%` 却用 mono。字母单位（GB / K / MB）保持小号 sans。数据表格 / 极小内联计数可例外用 mono。
- **图标**：展示用图标做成 **9×9 真·点阵 bitmap**——每个图标在 9×9 网格上手绘，每个填充格 = 一个**完整圆点**（CSS grid + `border-radius:50%`）。**不要用 mask 裁切**：那会把圆点切成半圆。**比例可缩放**：尺寸由 `--gs` 变量驱动（默认 30px），gap 按 `--gs/20` 比例缩放，设 `style="--gs:48px"` 即整体放大且圆点间距不失真。按钮 / 输入 / 导航里的**功能性小图标**仍可用 1.5px 线性 SVG 以保清晰。
- **Glyph Matrix 正典网格（25×25 圆形掩膜）**：对齐 Nothing Phone (3) 的真实规格——**25×25 可寻址网格、圆形掩膜（边角无 LED）、白色圆点单元、暗 LED 作底纹**（官方硬件 0–255 灰阶，本系统简化为 暗底纹/亮点/红信号 三档）。需要高保真"设备级"点阵（hero glyph、Glyph Toy 风格）时用 25×25；页内状态小图标用 9×9 即可。25×25 字形以几何函数生成（圆环、心形、三角、等高条…）而非手绘，保证圆点干净。**信号字形（如录制/live）用标志红，其余白色。**
- **标点**：`:` `.` `…` 等用与数字同源的**圆点单元**渲染（`.colon` 竖两点 / `.pdot` 单点 / `.ellip` 横三点），直径用变量 `--pxd` 控制，比相邻数字的点**略小**。不要用字体符号或方块。

---

## 5 · 背景系统 / Background（波点底）

Nothing 的标志性背景：一层**极稀疏的圆点网格**。它的层级模型是关键：

> **自下而上三层：背景 `Background` → 波点 `Dots` → 卡片 `Card`。**

- **局部反差取色（核心）**：波点不是"按主题切一个固定点色"，而是取**其当前所在表面**的反色——压在深色物体上偏亮、压在浅色物体上偏暗；**同一片波点横跨明暗，会各自反相**。
- **实现 = `mix-blend-mode:difference`**：波点层用半透明白点（`rgba(255,255,255,~.42)`）+ `mix-blend-mode:difference`，即自动对身后表面取反差，**明暗两模式无需各设点色**。
  - 关键层级：把波点层放在**卡片之下**（`z-index:-1`，或 region 内 `::before` + `z-index:-1`）。这样 difference 只对身后的**背景/区块表面**取反差，而**卡片始终在上、盖住波点**——这与"不要用 mix-blend 把点叠到前景内容上"的旧戒律不矛盾：差值混合作用于背景层，不作用于前景卡片。
- **波点只是背景**：卡片浮于波点之上并**遮蔽**它，卡面不显波点；波点只在卡片**之间的留白与边缘**可见。
- **细且非常稀疏**：圆点 ~1.3px、间距 **~120px**，细看才见、绝不抢戏。
- **连续对齐**：整层锚定视口（`background-attachment:fixed`），跨模块对齐成一张网。
- **分区域**：不同背景区块（如恒暗的 dashboard `.appwrap`）各自挂一层同样的 difference 波点 `::before`（`position:absolute;inset:0;z-index:-1`），在该区块内自动取反差。
- **卡片为磨砂玻璃**：`--glass` + `backdrop-filter:blur`，**无边框**，靠玻璃填充与间隙区分。

> 规范文档里应**专门留一节**讲背景：给出**局部反差示意图**（同一片波点横跨深/浅两块各自反相 + 卡片遮蔽）+ 文字说明。

---

## 6 · 间距 · 圆角 · 高度 · 动效

**间距**（4px 基准，只用这些档）：`0 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 64 · 80 · 96 · 128`。
关系语义：4–8 紧贴 / 16 同组 / 32–48 新组 / 64–128 新语境。**需要分割线时，往往是间距不够。**

**圆角**：控件/按钮 **6px**、卡片 **8px**、开关轨 / chip / 头像为 pill。无大胶囊化、无 >8px 卡片角。

**高度 / 层级**：无阴影；仅 z-index（base 10 / overlay 30 / modal 40 / header 50）。

**动效**：微交互 `200ms` / 转场 `400ms`，`ease-in-out`，**无弹簧回弹**。悬停降 opacity（.8 / .75）、卡片 `translateY(-2px)`。优先 opacity 过渡，少用位移。

---

## 7 · 组件 / Components

**统一状态机**（全系统共用，禁止新造名）：`idle`（灰静点）· `running`（白脉冲点）· `needs-input`（绿点，信号）· `done`（灰实点）· `error`（绿/红描边）。状态优先靠**形状 + 标签**表达，颜色其次。

- **按钮 Button**：6px 圆角（非胶囊）。Primary = `display` 填充 + `bg` 字（黑白反色，**非绿**）；Outline = `line-2` 描边；Text/Ghost = 纯文字。文案用 Geist Mono 大写、字距 .04–.06em；悬停降 opacity；CTA 右侧可放圆形箭头。
- **输入 Input**：下划线或 6px 描边；标签在上方（Geist Mono 大写、secondary）；聚焦 = `focus` 蓝环 + 边框透明；错误 = `error` 边框 + 下方红字；输入值用 Geist Mono。
- **Chips / Tags**：描边无填充、pill（tag 可 4px 技术角）；激活态 = **反色填充**（白底深字），不用绿。
- **开关 Switch**：pill 轨 + 圆钮；ON = `display` 白轨 + `bg` 黑钮（开关不是强调时刻，**不上绿**）。
- **滑块 Slider**：细轨 + 圆钮；填充与钮用 `display`（白），不用强调色。
- **分段进度条 Segmented Bar**（招牌）：离散方块 + 2px 间隙、方头无圆角；常态填充 `display`，**超限**用 `accent`（信号），空槽 `line`；永远配数字读数。
- **仪表盘 Gauge**：细描边圆 + 刻度环（tick）+ **居中** Doto 数字，`%` 紧跟其后（不换行）。常态弧用 `display`；仅当表达告警时用 accent。
- **卡片 Card**：磨砂玻璃、8px 圆角、24px 内边距、**无边框无阴影**，悬停 `translateY(-2px)`。标题用 NType82-Headline（`--f-head` + 600）。
- **数据表 Table**：Geist Mono；数字右对齐、文字左对齐；**无斑马纹**；活动行 `raised` 底 + 左侧 2px accent 指示条。
- **导航 / Tabs / 分页**：标签 Geist Mono 大写；当前态 = `display`（白）下划线 / 反色，不用强调色。
- **日历 Calendar**：日期为 Doto 点阵数字；今日 = 反色填充；选中 = `display` 描边。
- **步进器 Stepper**：序号 Doto；当前步 = 反色填充。
- **Alerts / 状态**：success / warning / error 用各自语义色（图标 + 左 3px 边 + 极淡底 tint）；标题用 `display`，描述用 secondary。**不要 toast**，用内联状态 `[SAVED]` / `[ERROR: …]`。
- **内容卡片（画廊型）**：头部 `mono 标签 + [计数] + ♡` → 预览缩略 → 脚部 `头像 + 用户名`；区块由 `Primary CTA + See all` 按钮对引导。
- **产品 UI / 仪表盘恒为深色**：像 Nothing 官方 console，不随页面明暗切换；这样其内强调红统一为 `#D71921`（含计时器冒号信号），不出现"前景红 vs 填充红"的明暗不统一。
- **图标默认色** = `primary`（暗≈白 / 亮≈黑），hover 才转 `accent-text`；不要默认灰。

---

## 8 · 反模式 / Don'ts（绝不）

**衬线字体（Nothing 无衬线，是仿品最大破绽）** · 渐变 · 阴影 / 模糊投影 · 骨架屏（用 `[LOADING…]` 或分段 spinner）· toast 弹窗（用内联状态）· 吉祥物 / 哭脸插画 / 多段空状态文案 · 表格斑马纹 · 填充图标 / 多色图标 / emoji 当 UI · 视差 / 滚动劫持 · 弹簧回弹缓动 · 多种字重堆层级 · 把强调色当装饰、或用强调色铺满控件 · 把波点叠到前景内容上 · 卡片描边 + 圆角 >8px · 在浅底上用高明度色作文字/边框。

---

## 9 · 平台映射 / Platform

- **Web**：Google Fonts + CSS 变量；type 用 `rem`、间距/边框用 `px`；`prefers-color-scheme` 或 class 切换明暗。
- **原生桌面（SwiftUI）**：bundle 字体；`Color` 扩展按 token；`@Environment(\.colorScheme)` 切模式。
- **Markdown 产物**：无 CSS——克制标题层级、用表格 + 水平线分隔、emoji 极度克制、等宽呈现数据。

---

## 10 · 应用 Checklist（产出前后逐条自检）

- [ ] 颜色 / 间距 / 字号 / 圆角 / 缓动全部取自 token，无裸值
- [ ] 黑灰白为主；强调色一屏屈指可数，只在"信号"处
- [ ] 控件激活态用黑白反色，不用强调色（开关 ON = 白轨）
- [ ] 结构用 hairline + 留白，零阴影 / 零渐变
- [ ] 独立数字 + 其 `%` 用像素 Doto；英雄字 Doto/NDot、标题 NType82-Headline（无衬线，**禁衬线**）、正文 Helvetica、标签数据 Geist Mono
- [ ] Doto 字重 ≤500、`ROND=100`（圆点分离且圆，"0" 不尖头）
- [ ] 图标为 9×9 完整圆点（非 mask 裁切）、比例可缩放（`--gs`）；标点为圆点单元
- [ ] 背景波点：稀疏 ~120px、**局部反差取色**（`mix-blend-mode:difference`、`z-index:-1` 在卡片之下）、卡片遮蔽（不叠前景）
- [ ] 卡片为磨砂玻璃、无边框
- [ ] 状态命名都在统一状态机内
- [ ] 界面默认安静，只在该吸引注意时才吸引
