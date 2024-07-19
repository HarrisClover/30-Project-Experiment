# Split Landing Page for PlayStation 5 and Xbox Series X

To implement a split landing page that showcases the PlayStation 5 and Xbox Series X gaming consoles with buy buttons, you can use the provided HTML, CSS, and JavaScript code. Here's how you can set it up:

## Step 1: Set up the HTML structure

Create an `index.html` file and copy the following code:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="container">
        <div class="console playstation">
            <h2>PlayStation 5</h2>
            <button class="buy-button">Buy Now</button>
        </div>
        <div class="console xbox">
            <h2>Xbox Series X</h2>
            <button class="buy-button">Buy Now</button>
        </div>
    </div>
</body>
</html>
```

## Step 2: Style the landing page

Create a `style.css` file and copy the following code:

```css
.container {
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto;
}

.console {
    width: 400px;
    padding: 20px;
    background-color: #f2f2f2;
    transition: width 0.3s;
}

.console:hover {
    width: 500px;
}

.console:hover ~ .console {
    width: 300px;
}

h2 {
    margin-top: 0;
}

.buy-button {
    margin-top: 20px;
}
```

## Step 3: Add interactivity (optional)

If you want to add interactivity to the landing page, you can use JavaScript. In this case, no JavaScript functionality is required, so you can leave the `script.js` file empty.

```js
// No JavaScript functionality is required for this task.
```

## Step 4: Test the landing page

Open the `index.html` file in a web browser, and you should see the split landing page showcasing the PlayStation 5 and Xbox Series X gaming consoles with buy buttons. When you hover over one of the consoles, its width will expand while the width of the other console shrinks.

Feel free to customize the styling and content of the landing page to fit your needs.