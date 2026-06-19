# Agnes AI 多模态生成 Skill

## 概述

本 Skill 提供与 Agnes AI API 集成的完整指南，支持使用 **Agnes Image 2.0 Flash** 模型进行图像生成/编辑，以及使用 **Agnes Video V2.0** 模型进行视频生成。

Agnes AI API 兼容 OpenAI 风格接口，只需修改 Base URL、API Key 和模型名称即可快速接入。

---

## 基础配置

### Base URL

```
https://apihub.agnes-ai.com/v1
```

### 身份认证

所有请求需在 Header 中携带：

```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### 安全提醒

- API Key 属于敏感信息，请勿暴露在公开代码仓库、前端客户端代码或公开文档中
- 如发现 API Key 泄露，请立即在 [API 平台](https://platform.agnes-ai.com/) 删除或重置

---

## 1. Agnes Image 2.0 Flash — 图像生成与编辑

### 模型信息

- **模型名称**: `agnes-image-2.0-flash`
- **Endpoint**: `POST https://apihub.agnes-ai.com/v1/images/generations`
- **能力**: 文生图、图生图、多图合成、图像编辑

### 请求参数

| 参数                         | 类型     | 是否必填   | 说明                                                 |
| ---------------------------- | -------- | ---------- | ---------------------------------------------------- |
| `model`                      | string   | 是         | 固定为 `agnes-image-2.0-flash`                       |
| `prompt`                     | string   | 是         | 描述目标图像或编辑需求的文本提示词                   |
| `size`                       | string   | 是         | 输出图像尺寸，如 `1024x768`、`1024x1024`、`768x1024` |
| `image`                      | string[] | 图生图必填 | 输入图片数组，支持公网 URL 或 Data URI Base64        |
| `return_base64`              | boolean  | 否         | 文生图返回 Base64 时使用                             |
| `extra_body.response_format` | string   | 否         | 输出格式，常用 `url` 或 `b64_json`                   |

### 重要说明

1. **文生图**不需要传 `image` 参数
2. **图生图**需要传 `image` 数组
3. **图生图**不需要传 `tags` 参数
4. `response_format` 必须放在 `extra_body` 中，不要放在顶层

### 调用示例

#### 文生图：URL 输出

```bash
curl https://apihub.agnes-ai.com/v1/images/generations \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-image-2.0-flash",
    "prompt": "A clean product photo of a glass cube on a white studio background, soft shadows, high detail",
    "size": "1024x768",
    "extra_body": {
      "response_format": "url"
    }
  }'
```

生成图片 URL 位于：`data[0].url`

#### 文生图：Base64 输出

```bash
curl https://apihub.agnes-ai.com/v1/images/generations \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-image-2.0-flash",
    "prompt": "A clean product photo of a glass cube on a white studio background, soft shadows, high detail",
    "size": "1024x768",
    "return_base64": true
  }'
```

生成图片 Base64 位于：`data[0].b64_json`

#### 图生图：URL 输入，URL 输出

```bash
curl https://apihub.agnes-ai.com/v1/images/generations \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-image-2.0-flash",
    "prompt": "Transform this image into a cinematic cyberpunk style while preserving the main subject and composition",
    "size": "1024x768",
    "extra_body": {
      "image": [
        "https://example.com/input-image.png"
      ],
      "response_format": "url"
    }
  }'
```

#### 多图合成请求

```bash
curl https://apihub.agnes-ai.com/v1/images/generations \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-image-2.0-flash",
    "prompt": "Combine the two characters into an intense fantasy battle scene, dynamic lighting, detailed background, cinematic composition",
    "size": "1024x768",
    "extra_body": {
      "image": [
        "https://example.com/character-1.png",
        "https://example.com/character-2.png"
      ],
      "response_format": "url"
    }
  }'
```

### 响应格式

#### URL 输出

```json
{
  "created": 1780000000,
  "data": [
    {
      "url": "https://storage.googleapis.com/agnes-aigc/xxx.png",
      "b64_json": null,
      "revised_prompt": null
    }
  ]
}
```

#### Base64 输出

```json
{
  "created": 1780000000,
  "data": [
    {
      "url": null,
      "b64_json": "iVBORw0KGgoAAAANSUhEUgAA...",
      "revised_prompt": null
    }
  ]
}
```

### 响应字段说明

| 字段                    | 类型          | 说明                                   |
| ----------------------- | ------------- | -------------------------------------- |
| `created`               | integer       | 请求创建时间戳                         |
| `data`                  | array         | 生成图片结果列表                       |
| `data[].url`            | string / null | 生成图片 URL，Base64 输出时通常为 null |
| `data[].b64_json`       | string / null | Base64 图片数据，URL 输出时通常为 null |
| `data[].revised_prompt` | string / null | 修订后的 Prompt，如无则为 null         |

### Prompt 最佳实践

#### 文生图 Prompt 结构

```
[Main subject] + [Scene / background] + [Style] + [Lighting] + [Composition] + [Quality requirements]
```

**示例**:

```
A young explorer standing in an ancient temple, cinematic fantasy style, warm dramatic lighting, wide-angle composition, ultra detailed, high quality
```

#### 图像编辑 Prompt 结构

```
[Editing instruction] + [Elements to preserve] + [Target style / scene] + [Lighting] + [Composition] + [Quality requirements]
```

**示例**:

```
Change the background to a futuristic city at night while keeping the person's face, outfit, and pose unchanged
```

### 常见问题

- **请求超时**: 图片生成可能需要数秒到几十秒，建议设置超时时间为 60s - 360s
- **输入图片 URL 不可访问**: 建议使用公网可访问的 HTTPS 图片地址，或使用 Data URI Base64 输入

### 价格

- **当前价格**: $0 / image（免费）

---

## 2. Agnes Video V2.0 — 视频生成

### 模型信息

- **模型名称**: `agnes-video-v2.0`
- **Endpoint**: `POST https://apihub.agnes-ai.com/v1/videos`
- **能力**: 文生视频、图生视频、多图视频生成、关键帧动画
- **注意**: 视频生成采用**异步任务**方式，需先创建任务，再查询结果

### API Endpoints

| 操作                       | Endpoint                                                   | Method |
| -------------------------- | ---------------------------------------------------------- | ------ |
| 创建视频任务               | `https://apihub.agnes-ai.com/v1/videos`                    | POST   |
| 查询视频结果（推荐）       | `https://apihub.agnes-ai.com/agnesapi?video_id=<VIDEO_ID>` | GET    |
| 查询视频结果（兼容旧方式） | `https://apihub.agnes-ai.com/v1/videos/<TASK_ID>`          | GET    |

### 创建视频任务参数

| 参数                  | 类型           | 是否必填 | 说明                                 |
| --------------------- | -------------- | -------- | ------------------------------------ |
| `model`               | string         | 是       | 固定为 `agnes-video-v2.0`            |
| `prompt`              | string         | 是       | 视频内容的文本描述                   |
| `image`               | string / array | 否       | 图片 URL 或图片 URL 数组             |
| `mode`                | string         | 否       | 生成模式，如 `ti2vid` 或 `keyframes` |
| `height`              | integer        | 否       | 视频高度，默认 768                   |
| `width`               | integer        | 否       | 视频宽度，默认 1152                  |
| `num_frames`          | integer        | 否       | 视频帧数，必须 ≤ 441，且满足 8n + 1  |
| `frame_rate`          | number         | 否       | 视频 FPS，支持范围 1–60              |
| `num_inference_steps` | integer        | 否       | 推理步数                             |
| `seed`                | integer        | 否       | 随机种子，用于保证结果可复现         |
| `negative_prompt`     | string         | 否       | 负向提示词，用于描述需要避免的内容   |
| `extra_body.image`    | array          | 否       | 多图视频或关键帧模式中的输入图片 URL |
| `extra_body.mode`     | string         | 否       | 额外模式设置，如 `keyframes`         |

### 视频时长控制

计算公式：`seconds = num_frames / frame_rate`

| 目标时长 | 推荐参数                            |
| -------- | ----------------------------------- |
| 约 3 秒  | `num_frames: 81`, `frame_rate: 24`  |
| 约 5 秒  | `num_frames: 121`, `frame_rate: 24` |
| 约 10 秒 | `num_frames: 241`, `frame_rate: 24` |
| 约 18 秒 | `num_frames: 441`, `frame_rate: 24` |

**注意**:

- `num_frames` 必须小于或等于 441
- `num_frames` 必须满足 `8n + 1`，例如 81、121、161、241 或 441
- `frame_rate` 支持范围为 1–60

### 推荐参数

| 使用场景         | 推荐设置                                                          |
| ---------------- | ----------------------------------------------------------------- |
| 标准视频生成     | `width: 1152`, `height: 768`, `num_frames: 121`, `frame_rate: 24` |
| 短视频社交内容   | `num_frames: 81` 或 `121`, `frame_rate: 24`                       |
| 更长视频         | 增加 `num_frames` 或降低 `frame_rate`                             |
| 更平滑运动       | 使用 `frame_rate: 24` 或 `30`                                     |
| 可复现结果       | 设置固定 `seed`                                                   |
| 关键帧过渡       | 使用 `extra_body.mode: "keyframes"`                               |
| 避免不需要的内容 | 使用 `negative_prompt`                                            |

### 调用示例

#### 文生视频

```bash
curl -X POST https://apihub.agnes-ai.com/v1/videos \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-video-v2.0",
    "prompt": "A cinematic shot of a cat walking on the beach at sunset, soft ocean waves, warm golden lighting, realistic motion",
    "height": 768,
    "width": 1152,
    "num_frames": 121,
    "frame_rate": 24
  }'
```

#### 图生视频

```bash
curl -X POST https://apihub.agnes-ai.com/v1/videos \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-video-v2.0",
    "prompt": "The woman slowly turns around and looks back at the camera, natural facial expression, cinematic camera movement",
    "image": "https://example.com/image.png",
    "num_frames": 121,
    "frame_rate": 24
  }'
```

#### 多图视频生成

```bash
curl -X POST https://apihub.agnes-ai.com/v1/videos \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-video-v2.0",
    "prompt": "Create a smooth transformation scene between the two reference images, cinematic lighting, consistent character identity, natural motion",
    "extra_body": {
      "image": [
        "https://example.com/image1.png",
        "https://example.com/image2.png"
      ]
    },
    "num_frames": 121,
    "frame_rate": 24
  }'
```

#### 关键帧动画

```bash
curl -X POST https://apihub.agnes-ai.com/v1/videos \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-video-v2.0",
    "prompt": "Generate a smooth cinematic transition between the keyframes, maintaining visual consistency and natural camera movement",
    "extra_body": {
      "image": [
        "https://example.com/keyframe1.png",
        "https://example.com/keyframe2.png"
      ],
      "mode": "keyframes"
    },
    "num_frames": 121,
    "frame_rate": 24
  }'
```

### 创建任务响应

```json
{
  "id": "task_YOUR_TASK_ID",
  "task_id": "task_YOUR_TASK_ID",
  "video_id": "video_YOUR_VIDEO_ID",
  "object": "video",
  "model": "agnes-video-v2.0",
  "status": "queued",
  "progress": 0,
  "created_at": 1780457477,
  "seconds": "10.0",
  "size": "1280x768"
}
```

### 查询视频结果

#### 推荐方式：使用 `video_id` 查询

```bash
curl --location --request GET 'https://apihub.agnes-ai.com/agnesapi?video_id=<VIDEO_ID>' \
  --header 'Authorization: Bearer <API_KEY>'
```

建议轮询间隔 5 秒。

#### 兼容方式：使用 `task_id` 查询

```bash
curl --location --request GET 'https://apihub.agnes-ai.com/v1/videos/<TASK_ID>' \
  --header 'Authorization: Bearer <API_KEY>'
```

### 查询结果响应

```json
{
  "id": "task_YOUR_TASK_ID",
  "video_id": "video_YOUR_VIDEO_ID",
  "model": "agnes-video-v2.0",
  "object": "video",
  "status": "completed",
  "progress": 100,
  "seconds": "10.0",
  "size": "1280x768",
  "remixed_from_video_id": "https://storage.googleapis.com/agnes-aigc/aigc/videos/2026/06/03/video_xxxxxx.mp4",
  "error": null
}
```

**注意**: `remixed_from_video_id` 字段为最终生成的视频 URL，仅在 `status` 为 `completed` 时可用。

### 任务状态说明

| 状态          | 说明               |
| ------------- | ------------------ |
| `queued`      | 任务正在队列中等待 |
| `in_progress` | 视频正在生成中     |
| `completed`   | 视频已生成完成     |
| `failed`      | 视频生成失败       |

### Prompt 最佳实践

#### 文生视频 Prompt 结构

```
[主体] + [动作] + [场景] + [镜头运动] + [光照] + [风格]
```

**示例**:

```
A young astronaut walking across a red desert planet, dust blowing in the wind, slow cinematic tracking shot, dramatic sunset lighting, realistic sci-fi style
```

#### 图生视频 Prompt

**示例**:

```
Animate the character with subtle breathing motion, hair moving gently in the wind, background lights flickering softly, while keeping the face and outfit consistent
```

#### 多图视频 Prompt

**示例**:

```
Use the first image as the starting scene and the second image as the target scene. Create a smooth transformation with consistent lighting, natural motion, and cinematic pacing
```

#### 关键帧动画 Prompt

**示例**:

```
Create a smooth transition from the first keyframe to the second keyframe, maintaining character identity, consistent camera angle, and natural motion between scenes
```

### 错误码

| 状态码 | 说明                     |
| ------ | ------------------------ |
| 400    | 请求无效，请检查请求参数 |
| 401    | 未授权，请检查 API Key   |
| 404    | 任务或视频不存在         |
| 500    | 服务器错误               |
| 503    | 服务繁忙，请稍后重试     |

### 价格

- **当前价格**: $0 / second（免费）

---

## 快速开始 Checklist

### 图像生成

- [ ] 已获得有效 API Key
- [ ] 请求地址为 `https://apihub.agnes-ai.com/v1/images/generations`
- [ ] Header 中已添加 `Authorization: Bearer YOUR_API_KEY`
- [ ] Header 中已添加 `Content-Type: application/json`
- [ ] 模型名称为 `agnes-image-2.0-flash`
- [ ] `response_format` 放在 `extra_body` 中

### 视频生成

- [ ] 已获得有效 API Key
- [ ] 请求地址为 `https://apihub.agnes-ai.com/v1/videos`
- [ ] Header 中已添加 `Authorization: Bearer YOUR_API_KEY`
- [ ] 模型名称为 `agnes-video-v2.0`
- [ ] 视频生成是异步任务，需先创建任务再查询结果
- [ ] 推荐使用 `video_id` 查询视频结果
- [ ] `num_frames` 必须满足 `8n + 1` 且 ≤ 441

---

## 参考链接

- [API 平台](https://platform.agnes-ai.com/)
- [开发者文档](https://agnes-ai.com/doc/overview)
- [Agnes Image 2.0 Flash 文档](https://agnes-ai.com/doc/agnes-image-20-flash)
- [Agnes Video V2.0 文档](https://agnes-ai.com/doc/agnes-video-v20)