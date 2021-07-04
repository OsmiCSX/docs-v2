---
sidebar_position: 2
---

# Configuration

## Setup

### Custom Theme
Create custom file `CustomTheme.js` (_optional_)
```javascript
export default {
}
```

### Provider
Create OsmiProvider config file `OsmiProvider.js`
```javascript
import { OsmiProvider } from "osmicsx"
import CustomTheme from "./CustomTheme" // your custom style file

const provider = new OsmiProvider(CustomTheme)

const { apply, connect } = provider

export {
  apply,
  connect
}
```

## Usage

### Inline Style
Use osmicsx as inline style via style attribute
```jsx harmony
import { View } from "react-native"
import { apply } from "../Themes/OsmiProvider"

const Rectangle = () => {
  return (
    <View style={apply("w-100 h-100 bg-blue-500 rounded")} />
  )
}

export default Rectangle
```

### Separate Style File
Create your styling file
```jsx harmony
import { connect } from "../Themes/OsmiProvider"

export default connect({
  container: "flex items-center justify-center",
  rectangle: "w-100 h-100 bg-blue-500 rounded"
})
```

Import style file in your screen/component file
```jsx harmony
import { View } from "react-native"

// styles
import styles from "./HomeScreenStyle.js"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
    </View>
  )
}

export default HomeScreen
```
