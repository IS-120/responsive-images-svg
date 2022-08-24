# Semantic HTML and basic navigation

Create an HTML page using semantic markup. Include a navigation menu that links to two subpages.

## Update your `index.html` file

### :pencil: Configure the index.html `<head>` section

Open the `index.html` file in the root folder in VS Code. In the `<head>`, add your favicon info. You are welcome to copy the `<head>` from the First Webpage assignment. Make sure you have an accurate `<title>` and a `<meta>` description tag. Remember to include the favicon files.

### :keyboard: Add block-level semantic elements inside `<body>`

| :bulb: For review of semantic elements                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <ul><li>See w3school's [HTML semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp) for a helpful summary and list of tags.</li><li>Read the individual element's pages on MDN in the list in their [Semantics in HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html) section.</li></ul> |

Use your site topic to generate content (text) inside the elements. The content is not as important as the structure of the page, so don't worry about spending a lot of time on writing "perfect" content. Add the following elements:

- `<header>`
  - Inside `<header>` add a `<nav>`
    - Inside the `<nav>`, use a `<ul>` for the navigation menu and include "Home" "About" and "Contact" list items. We'll add links to these later in the assignment.
- `<main>` with a descriptive `<h1>`
  - Inside `<main>` add two `<article>` elements
    - Inside each `<article>` include a descriptive `<h2>` and at least one `<p>` element
  - Inside one of the `<article>` elements include an image wrapped with `<figure>` tags with a figure caption. See [image requirement for more info](#image).
- `<aside>` - you can simply include a pull quote from one of your articles. Wrap any text in `<p>` tags.
- `<footer>` - wrap any text in `<p>` tags.

| :bulb: Using Emmet abbreviations                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You can use Emmet abbreviations to quickly add HTML tags. Reference the [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/) for a list of abbreviations. See if you can come up with a one-line Emmet abbreviation that can generate all the tags listed in the requirements above. |

<table>
  <tr><th colspan="2">Emmet example</th></tr>
  <tr>
    <td>type<br><code>header>nav>ul>li*3>a</code><br>and press <code>TAB</code> to generate this HTML</td>
  <td><pre><code>&lt;header&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href=""&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=""&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=""&gt;&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;</code></pre></td>
  </tr>
</table>

### :camera: [Add an image inside a `<figure>` element](#image)

Add an image inside your `<figure>` element. You can use [Unsplash](https://unsplash.com/) to find images, but you must resize any image to 900px wide or less. [befunky](https://www.befunky.com/create/) is a free online site where you can easily crop and resize images. NOTE: *save the original picture in a different folder. We will need larger sizes in later assignments.*

Add a `<figcaption>` element with a caption for the image.

The image must be

- placed in the `images` folder
- appropriately sized (900px wide or less)

The image element must

- include a *relative* path to the image file in the `images` folder
- include an `alt` attribute
- use both `height` and `width` attributes appropriately

| :bulb: Writing `alt` text                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read a11y collective's [How to write great alt text](https://www.a11y-collective.com/how-to-write-great-alt-text/) for tips on writing good alt text. Remember to never include "image of..." in alt text as it is redundant. |

| :warning: The HTML size attribute should be set to an image's actual (intrinsic) dimensions.                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Do not use these attributes to resize an image. You should use CSS to resize images. For more info, reference Smashing Magazine's [Setting Height And Width On Images Is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/) |

| :warning: Image and folder names                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Never use spaces in an image or folder name that will be hosted on the web. Best practices are to always use lowercase letters and to use hyphens `-` (not underlines `_`) to separate words. <br><br>Since search engines look at image file names, give your image files descriptive names. For example, if you have a PNG image of a hedgehog, name the file `hedgehog.png` instead of something vague list `DCIMG-3033-54.png` |

### :pencil: Text-level semantic elements

Somewhere on your page, include the following text-level semantic elements with content in each:

- `<strong>`
- `<em>`

## Add links in the navigation menu to the About and Contact subpages

In the file explorer, notice that there are two folders (about, contact) that each contain an index.html file. These are the sub pages for your site.

- Add relative links to the About and Contact pages in the main `index.html` navigation menu.
- Open both `index.html` subpages and update their navigation links.

| :bulb: Relative links                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Review MDN's [A quick primer on URLs and paths](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#a_quick_primer_on_urls_and_paths) for a review of relative links. Since the target files in the subfolders and named `index.html`, you don't need to include `index.html` in the paths. This generates a "cleaner" URL. |

| :bulb: Placeholder links                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You may notice on the About subpage that the `<a>` element for the About link is missing an `href` (the contact page is the same). An `href` attribute is not required, and you don't need to link a page to itself. The lack of an `href` attribute will make it easier to style the menu when we get to CSS. |

😎 Add your favicon info to the `<head>` of each subpage. Adjust the paths (use relative paths) so that they refer to the images correctly. 

Feel free to modify the your About and Contact pages to include more content. We will eventually add a form to the Contact page, but for now, just add some text.

## :computer: Use Live Server to preview your webpage

Before you open your webpage in Live Server, check the bottom left info bar on VS Code. You want to make sure you don't have any errors or warnings which should look like this:<br><br>
![no errors or warnings](https://raw.githubusercontent.com/lsburtonBYU/codepen-images/main/errors.png)<br><br>
If you have errors or warnings, click on the icons to see what they are and fix them.

Once any problems are fixed, either choose "Go Live" in the VS Code bottom info panel, or find and select "Go Live" in `View -> Command Palette...` to view your webpage in a browser.

If everything looks good then.....

## :arrow_up: Use VS Code's Source Control (in the sidebar) to commit your changes and sync these changes to Github

## :rocket: Publish your site on Github pages

After you publish your site, wait a few minutes for it to generate. After it's generated, paste the link into your repo's about section. Also, feel free to delete the contents of `README.md` file from your repo. Change the `README.md` to add a description of your site.

## :no_entry_sign: Check that your site validates with no errors

Navigate to [Validator.nu](https://validator.nu/) and paste your Github Pages URL into the text field. Select "Show outline" and "Show image report." Click the "Check" button. If you have no errors or warnings, you're good to go!

## :speech_balloon: Leave a comment on the Feedback Pull-Request

On your Github repo, navigate to the Feedback pull requests. At the bottom of the page you will find a comment field. Leave a comment asking us to review your previous commit.
