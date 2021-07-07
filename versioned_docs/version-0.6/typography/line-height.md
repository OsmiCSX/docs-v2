---
sidebar_position: 5
---

# Line Height

## Line Height
Utilities for controlling the leading (line height) of an element.

Namespace | Output
--------- | ------
**leading-none** | `{ lineHeight: 1 }`
**leading-tight** | `{ lineHeight: 1.25 }`
**leading-snug** | `{ lineHeight: 1.375 }`
**leading-normal** | `{ lineHeight: 1.5 }`
**leading-relaxed** | `{ lineHeight: 1.625 }`
**leading-loose** | `{ lineHeight: 2 }`
**leading-3** | `{ lineHeight: 12 }`
**leading-4** | `{ lineHeight: 16 }`
**leading-5** | `{ lineHeight: 20 }`
**leading-6** | `{ lineHeight: 24 }`
**leading-7** | `{ lineHeight: 28 }`
**leading-8** | `{ lineHeight: 32 }`
**leading-9** | `{ lineHeight: 36 }`
**leading-10** | `{ lineHeight: 40 }`

## Custom Line Height
If you didn't get suitable line height for your project app, you can define your line height by adding in `CustomTheme.js` file:
```javascript
export default {
  // line height
  lineHeight: {
    "leading-big": { lineHeight: 14 }
  }
}
```