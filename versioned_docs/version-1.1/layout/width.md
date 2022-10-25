---
sidebar_position: 1
---

# Width

Control the width of an element. It will automatically generate width based on amount.

## Fixed Width

Generate fixed with based on sytax used.

Example:

```jsx harmony
apply("w-125");
```

Output:

```jsx harmony
{
  width: 125;
}
```

## Responsive Width

Generate responsive width based on screen width resolution.

Example:

```jsx harmony
apply("w/50"); // 50% of screen width resolution
```

Output:

```jsx harmony
{
  width: 157; // Output will depends on screen width resoultion
}
```

## Percentage Width

Generate width based on parent width.

Example:

```jsx harmony
apply("w%50"); // 50% of parent width component
```

Output:

```jsx harmony
{
  width: 157; // Output will depends on parent width component
}
```
