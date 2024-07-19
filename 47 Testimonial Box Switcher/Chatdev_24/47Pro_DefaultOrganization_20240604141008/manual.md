# Testimonial Box Switcher User Manual

## Introduction

The Testimonial Box Switcher is a web application that allows you to display customer testimonials and skill recognition on your website. It provides a simple and interactive way for visitors to view different testimonials and authors.

## Features

- Display customer testimonials and skill recognition
- Switch between testimonials with previous and next buttons
- Automatically cycle through testimonials
- Easy to integrate into any website

## Installation

To use the Testimonial Box Switcher, you need to follow these steps:

1. Download the provided files: `index.html`, `style.css`, and `script.js`.
2. Create a new directory on your web server to host the Testimonial Box Switcher.
3. Copy the downloaded files into the directory.
4. Make sure you have a web server installed and running.

## Usage

To use the Testimonial Box Switcher on your website, you need to include the following code in your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Testimonial Box Switcher</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div id="testimonial-box">
    <div id="testimonial-content">
      <h2>Customer Testimonial</h2>
      <p id="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p id="testimonial-author">- John Doe</p>
    </div>
    <div id="testimonial-buttons">
      <button onclick="showPreviousTestimonial()">Previous</button>
      <button onclick="showNextTestimonial()">Next</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Make sure to update the paths to the CSS and JavaScript files if necessary.

## Customization

You can customize the appearance of the Testimonial Box Switcher by modifying the `style.css` file. The provided CSS styles are a basic starting point, but you can change colors, fonts, and layout to match your website's design.

To add or modify testimonials, open the `script.js` file and update the `testimonials` array with your own testimonials. Each testimonial should have a `text` and `author` property.

## Conclusion

The Testimonial Box Switcher is a simple and effective way to showcase customer satisfaction and skill recognition on your website. It provides an interactive experience for visitors and can be easily customized to match your website's design. Enjoy using the Testimonial Box Switcher!