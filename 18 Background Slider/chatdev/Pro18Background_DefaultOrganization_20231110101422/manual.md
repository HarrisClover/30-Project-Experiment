# Interactive Photo Gallery User Manual

## Introduction

The Interactive Photo Gallery is a feature for a website that allows users to navigate through a collection of images by clicking on arrows. This user manual provides instructions on how to install the necessary dependencies and how to use the software.

## Installation

To use the Interactive Photo Gallery feature, you need to install the following dependencies:

- Python (version 3.6 or higher)
- Tkinter library

You can install the dependencies by following these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where the software files are located.
3. Run the following command to install the dependencies:

   ```
   pip install -r requirements.txt
   ```

   This command will install the Tkinter library.

## Usage

To use the Interactive Photo Gallery feature, follow these steps:

1. Open the `main.py` file in a Python editor or IDE.
2. Run the `main.py` file to start the application.
3. A window will open displaying the photo gallery.
4. The first image in the collection will be displayed.
5. Click on the "Next" button to navigate to the next image.
6. Click on the "Previous" button to navigate to the previous image.
7. The image will be displayed in the window.

You can add images to the photo gallery by calling the `add_image` method in the `photo_gallery.py` file. Pass the path of the image file as an argument to the method. For example:

```python
gallery.add_image("path/to/image.jpg")
```

## Customization

You can customize the Interactive Photo Gallery by modifying the code in the `photo_gallery.py` file. Here are some possible customizations:

- Change the appearance of the buttons by modifying the button text or styling.
- Add additional buttons or functionality to the photo gallery.
- Modify the layout or design of the photo gallery window.

## Conclusion

The Interactive Photo Gallery feature allows users to navigate through a collection of images on a website. By following the installation instructions and using the provided code, you can easily integrate this feature into your website and provide an interactive photo browsing experience for your users.