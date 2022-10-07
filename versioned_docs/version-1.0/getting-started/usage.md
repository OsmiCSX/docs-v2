---
sidebar_position: 3
---

# Usage

## Inline Style

Use osmicsx as inline style via style attribute

```jsx harmony
import { View } from "react-native";
import { useStyles } from "osmicsx";

const Rectangle = () => {
  const { apply } = useStyles();

  return <View style={apply("w-100 h-100 bg-blue-500 rounded")} />;
};

export default Rectangle;
```

## Separate Style File

Create your styling file

```jsx harmony
export default {
  container: "flex items-center justify-center",
  rectangle: "w-100 h-100 bg-blue-500 rounded",
};
```

Import style file in your screen/component file

```jsx harmony
import { View } from "react-native";

// styles
import { useStyles } from "osmicsx";
import styles from "./HomeScreenStyle.js";

const HomeScreen = () => {
  const { apply } = useStyles();

  return (
    <View style={apply(styles.container)}>
      <View style={apply(styles.rectangle)} />
    </View>
  );
};

export default HomeScreen;
```

## Multiple Style

### Example

```jsx harmony
import { Pressable, View } from "react-native";

// styles
import { useStyles } from "osmicsx";
import styles from "./HomeScreenStyle.js";

const HomeScreen = () => {
  const { apply } = useStyles();

  return (
    <View style={apply(styles.container)}>
      <Pressable
        style={apply(
          styles.button,
          "bg-primary-500",
          disabled && "bg-opacity-50"
        )}
      />
    </View>
  );
};

export default HomeScreen;
```
