---
title: 'Markdown 样式指南'
pubDate: '2025-06-28'
tags: ['markdown', 'guide', 'syntax']
---

此主题未定义更多级别的标题。如果需要，您可以在 `src/styles/post.css` 中定义。

---

## 段落

这是一个 Markdown 段落的实际示例。这段文字演示了内容在博客文章中的自然流动。

您可以在段落中使用各种格式选项，如 **粗体**、_斜体_、~~删除线~~ 和 `代码`。

## 引用

> 不要通过共享内存来通信，而要通过通信来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上述引言摘自 Rob Pike 在 2015 年 11 月 18 日 Gopherfest 期间的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

### 有序列表

1. 第一项
2. 第二项
3. 第三项

### 无序列表

- 项目
  - 子项目
  - 子项目

## 任务列表

- [ ] 第一项
- [ ] 第二项
- [x] 第三项

## 图片

要隐藏标题，请以下划线 `_` 开头或留空 alt 文本。

![HIKARI](./_assets/hikari.jpg)

## 表格

| 样式     | 粗细   | 其他   |
| -------- | ------ | ------ |
| Normal   | Regular| 文本   |
| _Italic_ | **Bold**| `Code` |

## 代码块

```jsx
// Button.jsx

const Button = ({ text, onClick }) => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    onClick?.()
  }

  return (
    <button className="btn" onClick={handleClick}>
      {text} ({count})
    </button>
  )
}
```

## 其他元素 — sub, sup, abbr, kbd, mark

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

按 <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> 结束会话。

大多数 <mark>蝾螈</mark> 都是夜行性的，以昆虫、蠕虫和其他小生物为食。

---
