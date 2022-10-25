---
sidebar_position: 3
---

# Rotate
Control the Rotate of an element using the syntax list below. It will automatically generate width based on amount.

Syntax | Output
--------- | ------
**rotate-{amount}** | `{ transform: [{ rotate: {amount}deg }] }`
**-rotate-{amount}** | `{ transform: [{ rotate: -{amount}deg }] }`
**rotate-x-{amount}** | `{ transform: [{ rotateX: {amount}deg }] }`
**rotate-y-{amount}** | `{ transform: [{ rotateY: {amount}deg }] }`
**rotate-z-{amount}** | `{ transform: [{ rotateZ: {amount}deg }] }`
**-rotate-x-{amount}** | `{ transform: [{ rotateX: -{amount}deg }] }`
**-rotate-y-{amount}** | `{ transform: [{ rotateY: -{amount}deg }] }`
**-rotate-z-{amount}** | `{ transform: [{ rotateZ: -{amount}deg }] }`

## Example
### Input
```jsx
apply("rotate-25")
apply("-rotate-25")
apply("rotate-x-50")
apply("rotate-y-50")
apply("rotate-z-50")
apply("-rotate-x-100")
apply("-rotate-y-100")
apply("-rotate-z-100")
```

### Output
```jsx
{
  transform: [{ rotate: "25deg" }]
}
{
  transform: [{ rotate: "-25deg" }]
}
{
  transform: [{ rotateX: "50deg" }]
}
{
  transform: [{ rotateY: "50deg" }]
}
{
  transform: [{ rotateZ: "50deg" }]
}
{
  transform: [{ rotateX: "-100deg" }]
}
{
  transform: [{ rotateY: "-100deg" }]
}
{
  transform: [{ rotateZ: "-100deg" }]
}
```