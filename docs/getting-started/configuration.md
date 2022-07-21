---
sidebar_position: 2
---

# Configuration

## Setup

### Custom Theme

Create custom file `osmi.config.js` (_optional_)

```jsx
export default {
  colors: {
    // custom colors
  },
  spacing: {
    // custom spacing
  },
  border: {
    width: {
      // border width
    },
    radius: {
      // border radius
    },
  },
  font: {
    family: {
      // font family
    },
    size: {
      // font size
    },
  },
  lineHeight: {
    // line height
  },
  letterSpacing: {
    // letter spacing
  },
  shadow: {
    // shadows
  },
};
```

### Provider

OsmiCSX includes a <OsmiProvider /> component, which makes the OsmiCSX available to the rest of your app:

```jsx
import { OsmiProvider } from "osmicsx";
import theme from "./osmi.config.js"; // your custom style file
import App from "App.js"; // your main app

return (
  <OsmiProvider theme={theme}>
    <App />
  </OsmiProvider>
);
```

## Usage

### Inline Style

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

### Separate Style File

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
