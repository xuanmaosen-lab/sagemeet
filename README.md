# SageMeet 智遇

一个以人生经历建立连接的浏览器交互演示。此版本根据提供的植物花园视觉参考和 Ahead 的页面层级，使用 Impeccable 润色。

## 本地运行

无需构建或安装依赖。在项目目录运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

访问 http://127.0.0.1:4173/ 。也可将全部文件部署到静态托管（包括 GitHub Pages）；所有本地资源使用相对路径。

## 验证

```sh
node --check app.js
node tests/smoke.cjs
```

覆盖路由异常参数、动态文字转义、语音消息和按好友解锁的基础回归。

## 预览页面

- `/`：新客开屏
- `/?page=1`：基础信息
- `/?page=2`：小知陪聊
- `/?page=3`：我的标签
- `/?page=4`：个人画像
- `/?page=5`：遇见
- `/?mode=returning`：树洞
- `/?mode=returning&tab=chat`：好友聊天
- `/?mode=returning&tab=jingli`：经历

## 视觉设计

奶油白底色、鼠尾草绿主行动、淡紫陪聊区、杏色与浅黄内容面。保留小知玩偶、人物插画和全部主要流程；开屏增加显式操作入口，移动端保留可滚动步骤导航与底部主导航。

- `design-tokens.css`：全站语义色彩、字体、间距和圆角。
- `style.css`：应用界面及响应式布局。
- `garden.css`：开屏和树洞植物视觉。
- `motion.css`：动效与减少动态效果设置。
- `app.js`：原有交互及输入转义、焦点和模态改进。
- `assets/garden/botanical-garden.png`：内置 image_gen 生成的透明植物插画；其余资产沿用原仓库。

## 演示边界

现有 AI 回复、匹配度、语音和通话均为演示逻辑，没有新增后端。内容仅保存在当前页面内存，刷新会重置。素材中的真实头像依赖 Unsplash，字体依赖 Google Fonts。请勿将演示中的隐私描述理解为已实现的服务器安全保证。
