---
sidebar_position: 3
---

# Custom Spacing
## Config
In `CustomTheme.js`, you can define custom spacing and it will automatically generate pre-defined padding & margin for you

Example:
```javascript
export default {
  spacing: {
    "30": 120,
    "77": 154
  }
}
```

## Usage
```jsx harmony
apply("m-30 p-77")
```