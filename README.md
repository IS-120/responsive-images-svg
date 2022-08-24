# Responsive images and SVG images

Learn about using `<picture>` for art direction, `<img>` with `srcset` and `sizes` for responsive images, and how to use `<symbol>` to easily reuse inline SVG images.

- Use the `<picture>` element to add a responsive hero image to your main page.
- On your about page, add an `<img>` with `srcset` and `size` attributes to serve different image sizes for different screen widths.
- On your contact page, load an SVG image with `<img>`.
- On your main page, create a `<symbol>` for a simple inline SVG. Display that symbol inside your second `<article>`.

## Continuity

Before starting this assignment, copy the HTML from your previous assignment into the main `index.html`, the `contact/index.html`, and the `about/index.html`. Also copy your favicons over.

## A hero image using `<picture>`

A hero image is a large banner image that is displayed at the top of a webpage and is the first image visitors see. For examples, view Justinmind's' [post of 20 inspiring hero image websites](https://www.justinmind.com/blog/inspiring-hero-image-websites/) or search for examples on your own. Hero images should not include text. We will add text on top of tour hero image in a later assignment after we learn CSS.

| :bulb: Hero videos                                                                                      |
| ------------------------------------------------------------------------------------------------------- |
| _Hero videos are becoming popular, and we will learn how to create a hero video later in the semester_. |

A `<picture>` element allows for _art direction_, or different versions of images cropped to display best on different screen sizes. Below is an example of images cropped to display on (from left to right) a laptop, a tablet, and a mobile phone.
![art-direction](/images/art-direction.jpg)

For this assignment we will create three versions of images for laptops, tablets, and mobile devices. There are no "set" widths and heights to use, but for this assignment, assume

| Device | Max width | Suggested ratio |
| ------ | --------- | --------------- |
| laptop | `1920px`  | 16:9            |
| tablet | `768px`   | 4:3             |
| mobile | `380px`   | 1:1             |

The ratios are guides. You are welcome to use different ratios based on your own preferences. If you'd like a full screen hero image, don't try to force the sizing with HTML. After we learn CSS, you use CSS to make the image fill the entire screen.

### Steps to create your hero `<picture>` element

1. Find a free high-resolution image for your hero image. You can search [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/). If you use your own image, make sure the image is at least `1920px` wide.
2. Use a photo editor, such as [befunky](https://www.befunky.com/create/), to crop and resize your image to display on all three screen sizes. Make sure the cropping is obvious; don't just resize the image.
3. Save your images in the `images` folder. To make it easy for you to identify which image is which, append the width to the image file name. For example, in the images above, I used the file names
   - `hero-squirrel-1920w.jpg`
   - `hero-squirrel-768w.jpg`
   - `hero-squirrel-380w.jpg`
4. In your main `index.html` file, change the HTML to load your images (also delete the squirrel example images included in the repo). Here is the code included in the sample index.html:

   ````<picture>
    <source media="(min-width: 769px)" srcset="images/hero-squirrel-1920w.jpg">
    <source media="(min-width: 381px)" srcset="images/hero-squirrel-768w.jpg">
    <source media="(max-width: 380px)" srcset="images/hero-squirrel-380w.jpg">
    <img src="images/hero-squirrel-380w.jpg" alt="brown squirrel on green grass lawn">
   </picture>```

   Make sure to include a fallback <img> with descriptive alt text.

   ````

5. In order for the image to display properly, we need a little CSS. Add this line to your document `<head>` to load a simple CSS file included in the repo's style folder:

   `<link rel="stylesheet" href="styles/main.css">`

### Use Live Server and Dev Tools to make sure your images are loading properly

Before you open your webpage in Live Server, check the bottom left info bar on VS Code. You want to make sure you don't have any errors or warnings which should look like this:<br><br>
![no errors or warnings](https://raw.githubusercontent.com/lsburtonBYU/codepen-images/main/errors.png)<br><br>
If you have errors or warnings, click on the icons to see what they are and fix them.

Once any problems are fixed, open Live Server.

## :arrow_up: Use VS Code's Source Control (in the sidebar) to commit your changes and sync these changes to Github

## :rocket: Publish your site on Github pages

After you publish your site, wait a few minutes for it to generate. After it's generated, paste the link into your repo's about section. Also, feel free to delete the contents of `README.md` file from your repo. Change the `README.md` to add a description of your site.

## :no_entry_sign: Check that your site validates with no errors

Navigate to [Validator.nu](https://validator.nu/) and paste your Github Pages URL into the text field. Select "Show outline" and "Show image report." Click the "Check" button. If you have no errors or warnings, you're good to go!

## :speech_balloon: Leave a comment on the Feedback Pull-Request

On your Github repo, navigate to the Feedback pull requests. At the bottom of the page you will find a comment field. Leave a comment asking us to review your previous commit.
