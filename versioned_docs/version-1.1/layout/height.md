---
sidebar_position: 2
---

# Height

Control the height of an element. It will automatically generate height based on amount.

## Fixed Height

Generate fixed with based on sytax used.

Example:

```jsx harmony
apply("h-125");
```

Output:

```jsx harmony
{
  height: 125;
}
```

## Responsive Height

Generate responsive height based on screen height resolution.

Example:

```jsx harmony
apply("h/50"); // 50% of screen height resolution
```

Output:

```jsx harmony
{
  height: 157; // Output will depends on screen height resoultion
}
```

## Percentage Height

Generate height based on parent height.

Example:

```jsx harmony
apply("h%50"); // 50% of parent height component
```

Output:

```jsx harmony
{
  height: 157; // Output will depends on parent height component
}
```
