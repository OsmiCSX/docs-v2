---
sidebar_position: 1
---

# Shadow

## Shadow

Utilities for controlling the box shadow of an element.

| Namespace       | Preview                                       |
| --------------- | --------------------------------------------- |
| **shadow-none** | <div />                                       |
| **shadow-xs**   | <img src="https://i.imgur.com/Fya45zE.png" /> |
| **shadow-sm**   | <img src="https://i.imgur.com/glRFDqD.png" /> |
| **shadow**      | <img src="https://i.imgur.com/mIXJxUf.png" /> |
| **shadow-md**   | <img src="https://i.imgur.com/7KxCrtM.png" /> |
| **shadow-lg**   | <img src="https://i.imgur.com/19sQOeb.png" /> |
| **shadow-xl**   | <img src="https://i.imgur.com/MY3kW4f.png" /> |
| **shadow-2xl**  | <img src="https://i.imgur.com/HNYp7jr.png" /> |

## Custom Shadow

If you didn't get suitable shadow for your project app.

### Create Pre-defined

You can define your shadow by adding in `osmi.config.js` file:

```javascript
export default {
  // shadow
  shadow: {
    big: {
      shadowColor: string,
      shadowOffset: {
        width: number,
        height: number,
      },
      shadowOpacity: number,
      shadowRadius: number,
      elevation: number,
    },
  },
};
```

### Usage

```jsx harmony
apply("shadow-big");
```
