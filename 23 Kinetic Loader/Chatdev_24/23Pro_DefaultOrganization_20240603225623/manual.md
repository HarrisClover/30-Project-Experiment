# Dynamic Loading Symbol Web Page

To create a web page with a dynamic loading symbol in the middle, we can use HTML, CSS, and JavaScript. Here's how you can achieve this:

## HTML (index.html)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Loading Symbol</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="loader">
        <div class="triangle"></div>
        <div class="triangle inverted"></div>
    </div>
</body>
</html>
```

## CSS (style.css)

```css
.loader {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #3498db;
    position: absolute;
    top: 0;
    left: 0;
    animation: move 2s linear infinite;
}
.triangle.inverted {
    border-bottom: 100px solid #f3f3f3;
    animation-direction: reverse;
}
@keyframes move {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

## JavaScript (script.js)

```js
// No dynamic behavior required for this task
```

To use this code, follow these steps:

1. Create a new directory for your project.
2. Create three files: `index.html`, `style.css`, and `script.js`.
3. Copy the respective code into each file.
4. Open the `index.html` file in a web browser.

The web page will display a dynamic loading symbol in the middle, which consists of two triangles constantly inverting. The triangles are styled using CSS, and the animation is achieved using CSS keyframes.

Feel free to customize the CSS styles and animation duration to fit your needs.