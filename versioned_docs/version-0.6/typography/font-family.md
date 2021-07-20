---
sidebar_position: 1
---

# Font Family
For font family, you need to import your custom font family and register it using `react-native.config.js`. After that open your `CustomTheme.js` that used for OsmiProvider, make the pre-defined style like this:
```jsx harmony
export default {
  // font family
  font: {
    family: {
      "font-regular": "Roboto-Regular",
      "font-medium": "Roboto-Medium",
      "font-bold": "Roboto-Bold",
    }
  }
}
```
