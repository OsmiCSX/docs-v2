---
sidebar_position: 3
---

# Custom Color

Using custom color by adding color configration in `osmi.config.js`

```js
export default {
  colors: {
    "primary-500": "#A8B3D6",
  },
};
```

This will generate all colors needed (background, border, text, etc.)
Then you can use for color-only with `colors("primary-500")`
