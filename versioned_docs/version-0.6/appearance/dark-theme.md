---
sidebar_position: 1
---

# Dark Theme

## Usage
To use dark theme, you just need to add prefix syntax `dark:` to your styling color. For example:
```javascript
apply("bg-white dark:bg-gray-900")
```

when the appearance in light mode, it will use `bg-white`. Otherwise, use `bg-gray-900` in dark mode.

## Switch Theme
To switch theme between dark, light, and the system appearance. You can use `switch()` method in `appearanceHook`.
Example:
```jsx harmony
import React, { useState } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import { appearanceHook } from "osmicsx"

const Settings = props => {
  const [currentTheme, setCurrentTheme] = useState(appearanceHook.theme)

  const switchTheme = (value) => {
    appearanceHook.switch(value)
    setCurrentTheme(value)
  }

  return (
    <View style={apply("flex bg-white dark:bg-gray-900 items-center justify-center")}>
      <Text style={apply("text-gray-900 dark:text-white text-center text-2xl font-bold")} onPress={() => switchTheme("light")}>Switch to Light</Text>
      <Text style={apply("text-gray-900 dark:text-white text-center text-2xl font-bold")} onPress={() => switchTheme("dark")}>Switch to Dark</Text>
    </View>
  )
}
```

### switch(value: string)

Value | Description
----- | -----------
**`light`** | Switch theme to light
**`dark`** | Switch theme to dark
**`system`** | Switch theme to system appearance