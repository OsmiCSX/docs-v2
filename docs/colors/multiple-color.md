---
sidebar_position: 2
---

# Multiple Color

Utilities to use multiple color only

## Usage

You can use either Hooks or HoC. And then calling the `colors` method with color name as argument

### Example

```jsx
const { colors } = useStyles();

console.log(colors("blue-500", "red-500")); // output: ["rgba(59, 130, 246, 1)", "rgba(239, 68, 68, 1)"]
```

## Adjust Color Opacity

You also can control color opacity by adding subfix `/<opacity-number>`

### Example

```jsx
const { colors } = useStyles();

console.log(colors("blue-500/50", "red-500/50")); // output: ["rgba(59, 130, 246, 0.5)", "rgba(239, 68, 68, 0.5)"]
```

## Dark Mode

You can use different color for light & dark theme by adding prefix `dark:`

### Example

```jsx
const { colors } = useStyles();

console.log(
  colors("blue-500/50 dark:gray-500/50", "red-500/50 dark:gray-500/50")
); // output: ["rgba(59, 130, 246, 0.5)", "rgba(239, 68, 68, 0.5
```
