---
sidebar_position: 1
---

# Font Family

For font family, you need to import your custom font family and register it using `react-native.config.js`.

## Create Pre-defined

open your `osmi.config.js` that used for OsmiProvider, make the pre-defined style like this:

```jsx harmony
export default {
  // font family
  font: {
    family: {
      regular: "Roboto-Regular",
      medium: "Roboto-Medium",
      bold: "Roboto-Bold",
    },
  },
};
```

## Usage

```jsx harmony
apply("font-regular");
apply("font-medium");
apply("font-bold");
```
