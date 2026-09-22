
## 8. `_posts/2025-01-22-the-art-of-shipping-small.md`

```markdown
---
layout: post
title: "The Art of Shipping Small"
date: 2025-01-22 14:30:00 +0545
tags: [engineering, process]
description: "Why small, frequent releases beat big, scary launches — and how to make them a habit."
image: /assets/thumbnail.svg
---

There's a particular kind of paralysis that comes from trying to ship something big. The longer a change sits unshipped, the scarier it becomes. Merge conflicts pile up, feedback arrives late, and the gap between "done" and "live" grows into a chasm.

## The case for small

Shipping small is not about shipping less. It's about shipping *sooner*. A small change:

1. Is easier to review
2. Is easier to revert
3. Gets feedback faster
4. Keeps momentum alive

## A simple rule

If a change takes more than a day to write, split it. Not because the whole thing isn't valuable, but because the whole thing doesn't need to land at once.

> Ship the smallest thing that moves the needle, then ship the next smallest thing.

## Making it a habit

- Keep a "next" list, not a "someday" list
- Break features into vertical slices
- Deploy on the first day of a new feature, even if it's behind a flag

Small is not a compromise. It's a strategy.