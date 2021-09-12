---
sidebar_position: 1
---

# Translate
Control the Translate of an element using the syntax list below. It will automatically generate width based on amount.

Syntax | Output
--------- | ------
**translate-x-{amount}** | `{ transform: [{ translateX: {amount} }] }`
**translate-y-{amount}** | `{ transform: [{ translateY: {amount} }] }`
**-translate-x-{amount}** | `{ transform: [{ translateX: -{amount} }] }`
**-translate-y-{amount}** | `{ transform: [{ translateY: -{amount} }] }`

## Example
### Input
```jsx
apply("translate-x-50")
apply("translate-y-50")
apply("-translate-x-100")
apply("-translate-y-100")
```

### Output
```jsx
{
  transform: [{ translateX: 50 }]
}
{
  transform: [{ translateY: 50 }]
}
{
  transform: [{ translateX: -100 }]
}
{
  transform: [{ translateY: -100 }]
}
```