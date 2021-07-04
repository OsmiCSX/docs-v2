--- 
slug: 2021/07/04/official-release-v0-6
title: Official Release v0.6
author: Rully Ardiansyah
author_title: Core Engineer @ OsmiCSX
author_url: https://github.com/devoresyah
author_image_url: https://avatars.githubusercontent.com/u/8052370?v=4
tags: [announcement]
---

It has been 8 months since last update **v0.5.1**. After preparing carefully, we finally develop a new version of OsmiCSX and complete on July 2021. So, what's new inside OsmiCSX v0.6 ?

## Typescript Migration
We finally migrate to typescript, we hope by this migration more people can contribute to this project. And also if you found something that not best practice in our typescript migration, don't hesitate to contribute 🥂

## Colors Improvement
### Extend Color Palettes
Like TailwindCSS, we added more color palettes. Now every color has a 50 value.
Example:
```javascript
apply("bg-red-50")
```

### Colors Opacity
We also add new features like TailwindCSS, colors opacity. Now you can add color opacity for Background Color, Border Color, and Text Color
Example:
```javascript
apply("bg-red-500 bg-opacity-50")
apply("text-blue-500 text-opacity-25")
```

## Custom Theme Enhancement
We created a new algorithm for Custom Theme. With this algorithm, you just need to define small pre-defined styles on your custom theme. Take a look at our new custom theme rules :
```javascript
{
  colors: {
    // custom colors
  },
  spacing: {
    // custom spacing
  },
  border: {
    width: {
	// border width
    },
    radius: {
	// border radius
    }
  },
  font: {
    family: {
	// font family
    },
    size: {
	// font size
    }
  }
}
```

And here's a usage example:
```javascript
{
  // this will automatically generate background color, border color, and text color
  colors: {
    primary: "#f56565",
    secondary: "rgba(107, 114, 128, --osmi-opacity)"
  },
  // this will automatically generate margin, padding, top, right, left, bottom
  spacing: {
    "30": 120
  },
  // generate border width and radius
  border: {
    width: {
      "30": 120
    },
    radius: {
      "super-xl": 120
    }
  },
  // generate font family & font size
  font: {
    family: {
      "font-regular": "OpenSans-Regular"
    },
    size: {
      "xxl": 40
    }
  }
}
```

## Dark & Light Theme
Finally, we can support the dark theme, you don't need to manually check if the mobile device is using a dark theme or not. We do it for you. You just need to tell us which color you want to use if the device is using a dark theme.

By using prefix dark: and then following with the type of color (background/border/text)
Example:
```javascript
apply("bg-white dark:gray-900")
```

It means that the default/light background will use `white` and for the dark them it will use `gray-900`
