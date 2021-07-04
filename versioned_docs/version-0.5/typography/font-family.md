---
sidebar_position: 1
---

# Font Family
For font family, you need to import your custom font family and register it using `react-native.config.js`. After that open your `CustomTheme.js` that used for OsmiProvider, make the pre-defined style like this:
```jsx harmony
export default {
  ...yourRestCode,

// font family
  "font-regular": { fontFamily: "Roboto-Regular" },
  "font-medium": { fontFamily: "Roboto-Medium" },
  "font-bold": { fontFamily: "Roboto-Bold" },
}
```
