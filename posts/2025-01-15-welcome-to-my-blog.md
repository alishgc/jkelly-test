---
layout: post
title: "Welcome to My Blog"
date: 2025-01-15 10:00:00 +0545
tags: [meta, writing]
description: "A short note on why I'm starting a blog, what I plan to write about, and how this site is built."
image: /assets/thumbnail.svg
---

This is my first post. I've been meaning to start a blog for a while, and I finally sat down and built one.

## Why blog?

Writing forces clarity. When you try to explain an idea in words, you quickly discover whether you actually understand it. I want a place to:

- Think through problems I'm working on
- Share things I've learned
- Keep a record of what I'm building

## What I'll write about

Mostly things related to software, learning, and student life. Some posts will be technical, some won't. I'll try to keep them short and useful.

> The best way to learn something is to write about it.

## How this site works

The landing page is plain HTML, CSS, and a bit of vanilla JS. The blog runs on Jekyll, which GitHub Pages builds automatically. Posts are just Markdown files in `_posts/`.

```js
const hello = (name) => `Hello, ${name}!`;
console.log(hello('world'));