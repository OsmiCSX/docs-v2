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
