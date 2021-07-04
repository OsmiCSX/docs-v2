---
sidebar_position: 1
---

# Introduction

## What is OsmiCSX ?
OsmiCSX is a utility React Native style framework for rapidly building custom user interfaces. We adopted the Tailwind concept and implement it for styling in React Native. OsmiCSX designed for customizing UI in React Native and makes a reusable component with the style as you want with very simple code.

## Why OsmiCSX ?
Most Style/UI framework in React Native only focused on the UI Component and not really customizable. They come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design.

OsmiCSX is different.

Instead of opinionated predesigned components, OsmiCSX provides low-level utility style that let you build completely custom designs.

```jsx harmony
import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { apply } from 'osmicsx'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <View style={apply("flex items-center justify-center")}>
        <Text style={apply("text-white text-center text-2xl")}>Hello World!</Text>
      </View>
    )
  }
}
```

## Features
- **Pre-defined Styles**: There are many pre-defined styles like _colors_, _layout_, _typography_
- **Templating Styles**: You can separate styles code with render logic
- **Dark/Light Theme**: By only adding prefix `dark:` on when calling syntax color, it will automatically change when the device is using Dark Theme
- **Typescript Support**: We already finish to migrate the framework with Typescript support
- **Light & Fast**: Since we only pre-defined styles and didn't come with pre-defined UI, it will make our framework faster to load
- **Simple Inline Style**: With `apply()` method, your project code will be more clean and readable

## Updates
We always keep up-to-date with TailwindCSS. Because our goal is to make utility style like TailwindCSS for React Native