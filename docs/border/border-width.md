---
sidebar_position: 3
---

# Border Width

## Border Width

Utilities for controlling the width of an element's borders.

| Namespace      | Output                     |
| -------------- | -------------------------- |
| **border**     | `{ borderWidth: 1 }`       |
| **border-0**   | `{ borderWidth: 0 }`       |
| **border-2**   | `{ borderWidth: 2 }`       |
| **border-4**   | `{ borderWidth: 4 }`       |
| **border-8**   | `{ borderWidth: 8 }`       |
| **border-t**   | `{ borderTopWidth: 1 }`    |
| **border-r**   | `{ borderRightWidth: 1 }`  |
| **border-b**   | `{ borderBottomWidth: 1 }` |
| **border-l**   | `{ borderLeftWidth: 1 }`   |
| **border-t-0** | `{borderTopWidth: 0}`      |
| **border-r-0** | `{borderRightWidth: 0}`    |
| **border-b-0** | `{borderBottomWidth: 0}`   |
| **border-l-0** | `{borderLeftWidth: 0}`     |
| **border-t-2** | `{borderTopWidth: 2}`      |
| **border-r-2** | `{borderRightWidth: 2}`    |
| **border-b-2** | `{borderBottomWidth: 2}`   |
| **border-l-2** | `{borderLeftWidth: 2}`     |
| **border-t-4** | `{borderTopWidth: 4}`      |
| **border-r-4** | `{borderRightWidth: 4}`    |
| **border-b-4** | `{borderBottomWidth: 4}`   |
| **border-l-4** | `{borderLeftWidth: 4}`     |
| **border-t-8** | `{borderTopWidth: 8}`      |
| **border-r-8** | `{borderRightWidth: 8}`    |
| **border-b-8** | `{borderBottomWidth: 8}`   |
| **border-l-8** | `{borderLeftWidth: 8}`     |

## Custom Border Width

If you didn't get suitable border width for your project app.

### Create Pre-defined

You can define your font size by adding in `CustomTheme.js` file:

```javascript
export default {
  border: {
    width: {
      "super-big": 120,
    },
  },
};
```

### Usage

```jsx harmony
apply("border-super-big");
apply("border-t-super-big");
apply("border-r-super-big");
apply("border-b-super-big");
apply("border-l-super-big");
```

### Example Output

```jsx harmony
{
  borderWidth: 120;
}
```

```jsx harmony
{
  borderTopWidth: 120;
}
```

```jsx harmony
{
  borderRightWidth: 120;
}
```

```jsx harmony
{
  borderBottomWidth: 120;
}
```

```jsx harmony
{
  borderLeftWidth: 120;
}
```
