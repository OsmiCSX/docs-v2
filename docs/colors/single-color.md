---
sidebar_position: 1
---

# Single Color

Utilities to use color only

## Usage

You can use either Hooks or HoC. And then calling the `colors` method with color name as argument

### Example

```jsx
const { colors } = useStyles()

<StatusBar backgroundColor={colors("blue-500")} barStyle="light-content" />
```

## Adjust Color Opacity

You also can control color opacity by adding subfix `/<opacity-number>`

### Example

```jsx
const { colors } = useStyles()

<StatusBar backgroundColor={colors("blue-500/50")} barStyle="light-content" />
```

## Dark Mode

You can use different color for light & dark theme by adding prefix `dark:`

### Example

```jsx
const { colors } = useStyles()

<StatusBar backgroundColor={colors("blue-500/50 dark:gray-500/50")} barStyle="light-content" />
```
