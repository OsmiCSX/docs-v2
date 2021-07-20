---
sidebar_position: 4
---

# Letter Spacing

## Letter Spacing
Utilities for controlling the tracking (letter spacing) of an element.

Namespace | Output
--------- | ------
**tracking-tighter** | `{ letterSpacing: -0.8 }`
**tracking-tight** | `{ letterSpacing: -0.4 }`
**tracking-normal** | `{ letterSpacing: 0 }`
**tracking-wide** | `{ letterSpacing: 0.4 }`
**tracking-wider** | `{ letterSpacing: 0.8 }`
**tracking-widest** | `{ letterSpacing: 1.6 }`

## Custom Letter Spacing
If you didn't get suitable letter spacing for your project app, you can define your letter spacing by adding in `CustomTheme.js` file:
```javascript
export default {
  // letter spacing
  letterSpacing: {
    "big": 14
  }
}
```
you can use it with syntax `tracking--big`