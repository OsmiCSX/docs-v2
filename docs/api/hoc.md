---
sidebar_position: 2
---

# HoC

HoC or Higher-Order Components can be used if you are still using Class Components. This function will add props called `apply` that can be used for styling.

## withStyles

```jsx harmony
import { withStyles } from "osmicsx";

export default class Button extends React.Component {
  render() {
    const { apply } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={apply("py-2 px-5 rounded-lg bg-blue-500")}
      >
        <Text style={apply("text-sm font-semibold text-white")}>Click Me</Text>
      </TouchableOpacity>
    );
  }
}
```

## Return Type

| Name        | Type                                   | Description                                                    |
| ----------- | -------------------------------------- | -------------------------------------------------------------- |
| apply       | (...args: string[]) => any             | return an object styles or string (if only apply `color-name`) |
| switchTheme | (mode: keyof typeof ThemeMode) => void | mode can be `dark`, `light`, or `system`                       |
| scaleWidth  | (width: number) => number              | return width in number depends on screen resolution            |
| scaleHeight | (height: number) => number             | return height in number depends on screen resolution           |
