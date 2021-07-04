---
sidebar_position: 2
---

# Font Size

## Font Size
Utilities for controlling the font size of an element.

Namespace | Output
--------- | ------
**text-xs** | `{ fontSize: 12 }`
**text-sm** | `{ fontSize: 14 }`
**text-base** | `{ fontSize: 16 }`
**text-lg** | `{ fontSize: 18 }`
**text-xl** | `{ fontSize: 20 }`
**text-2xl** | `{ fontSize: 22 }`
**text-3xl** | `{ fontSize: 24}`
**text-4xl** | `{ fontSize: 26}`
**text-5xl** | `{ fontSize: 28}`
**text-6xl** | `{ fontSize: 30}`

## Custom Font Size
If you didn't get suitable font size for your project app, you can define your font size by adding in `CustomTheme.js` file:
```javascript
export default {
  // font family
  font: {
    size: {
      "super-big": { fontSize: 50 },
      "super-large": { fontSize: 60 },
      "crazy-large": { fontSize: 80 },
    }
  }
}
```

## Responsive Font Size
Utilities for controlling the font size of an element with automatically resize depends on device resolution.

Namespace | Description
--------- | -----------
**text-r-xs** | Responsive version for `text-xs`
**text-r-sm** | Responsive version for `text-sm`
**text-r-base** | Responsive version for `text-base`
**text-r-lg** | Responsive version for `text-lg`
**text-r-xl** | Responsive version for `text-xl`
**text-r-2xl** | Responsive version for `text-2xl`
**text-r-3xl** | Responsive version for `text-3xl`
**text-r-4xl** | Responsive version for `text-4xl`
**text-r-5xl** | Responsive version for `text-5xl`
**text-r-6xl** | Responsive version for `text-6xl`
