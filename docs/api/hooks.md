---
sidebar_position: 1
---

# Hooks

OsmiCSX provide custom hooks to make styling more easier inside functional component.

## useStyles

```jsx harmony
import { useStyles } from "osmicsx";

export const Button = () => {
  const { apply } = useStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={apply("py-2 px-5 rounded-lg bg-blue-500")}
    >
      <Text style={apply("text-sm font-semibold text-white")}>Click Me</Text>
    </TouchableOpacity>
  );
};
```

## Return Type

| Name        | Type                                   | Description                                                    |
| ----------- | -------------------------------------- | -------------------------------------------------------------- |
| apply       | (...args: string[]) => any             | return an object styles or string (if only apply `color-name`) |
| switchTheme | (mode: keyof typeof ThemeMode) => void | mode can be `dark`, `light`, or `system`                       |
| scaleWidth  | (width: number) => number              | return width in number depends on screen resolution            |
| scaleHeight | (height: number) => number             | return height in number depends on screen resolution           |
