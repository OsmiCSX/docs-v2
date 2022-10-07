---
sidebar_position: 4
---

# Skew
Control the Skew of an element using the syntax list below. It will automatically generate width based on amount.

Syntax | Output
--------- | ------
**skew-x-{amount}** | `{ transformX: [{ skew: {amount}deg }] }`
**skew-y-{amount}** | `{ transformY: [{ skew: {amount} }] }`
**-skew-x-{amount}** | `{ transformX: [{ skew: -{amount}deg }] }`
**-skew-y-{amount}** | `{ transformY: [{ skew: -{amount}deg }] }`

## Example
### Input
```jsx
apply("skew-x-50")
apply("skew-y-50")
apply("-skew-x-100")
apply("-skew-y-100")
```

### Output
```jsx
{
  transform: [{ skewX: "50deg" }]
}
{
  transform: [{ skewY: "50deg" }]
}
{
  transform: [{ skewX: "-100deg" }]
}
{
  transform: [{ skewY: "-100deg" }]
}
```