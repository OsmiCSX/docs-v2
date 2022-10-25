---
sidebar_position: 2
---

# Scale
Control the Scale of an element using the syntax list below. It will automatically generate width based on amount.

Syntax | Output
--------- | ------
**scale-{amount}** | `{ transform: [{ scale: {amount} }] }`
**-scale-{amount}** | `{ transform: [{ scale: -{amount} }] }`
**scale-x-{amount}** | `{ transform: [{ scaleX: {amount} }] }`
**scale-y-{amount}** | `{ transform: [{ scaleY: {amount} }] }`
**-scale-x-{amount}** | `{ transform: [{ scaleX: -{amount} }] }`
**-scale-y-{amount}** | `{ transform: [{ scaleY: -{amount} }] }`

## Example
### Input
```jsx
apply("scale-25")
apply("-scale-25")
apply("scale-x-50")
apply("scale-y-50")
apply("-scale-x-100")
apply("-scale-y-100")
```

### Output
```jsx
{
  transform: [{ scale: 25 }]
}
{
  transform: [{ scale: -25 }]
}
{
  transform: [{ scaleX: 50 }]
}
{
  transform: [{ scaleY: 50 }]
}
{
  transform: [{ scaleX: -100 }]
}
{
  transform: [{ scaleY: -100 }]
}
```