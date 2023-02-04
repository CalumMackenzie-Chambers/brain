<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="/static/img/logo.svg" alt="Cartoon brain"></a>
</p>

<h3 align="center">Brain</h3>

<div align="center">

![Netlify](https://img.shields.io/netlify/006dff1d-6598-4468-92a1-c6404cbefd3b?style=plastic) ![GitHub issues](https://img.shields.io/github/issues/CalumMackenzie-Chambers/brain?style=plastic) ![GitHub pull requests](https://img.shields.io/github/issues-pr/CalumMackenzie-Chambers/brain?style=plastic) ![GitHub](https://img.shields.io/github/license/CalumMackenzie-Chambers/brain?style=plastic) ![Website](https://img.shields.io/website?down_color=red&down_message=down&style=plastic&up_color=green&up_message=up&url=https%3A%2F%2Fbrain.mackenzie-chambers.co.uk%2F)

</div>

---

<p align="center">
  <img width="600" alt="Screenshot 2023-02-04 at 19 55 58" src="https://user-images.githubusercontent.com/87911622/216787316-bbe9b26e-28d6-40de-a619-026f3db9fe0e.png">
</p>

<p align="center">
<a href="https://brain.mackenzie-chambers.co.uk/">Brain</a> is a personal knowledge base for me to store all the things I learn. It is build using <a href="https://v2.docusaurus.io/">Docusaurus 2</a>, a modern static website generator.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project is a personal knowledge hub that I use to collect and organize information, experiences, and insights. It's a combination of a blog, note-taking app, and wiki, and I update it almost daily with new information. Although it's primarily intended for my personal use, it's open source, so others can use it as a reference or a starting point for their own projects.

If you find any inaccuracies or mistakes, or have ideas for improving the project, you can contribute by fixing them or suggesting new features. I accept contributions that fix bugs, improve existing features, and add new ones (on a case-by-case basis). You can find more information about contributing in the [CONTRIBUTING](.github/docs/CONTRIBUTING.md) file.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will help you set up your own copy of the project on your local machine, either to use for yourself or to contribute to the project.

### Prerequisites

To run this project, you'll need to have [Node.js](https://nodejs.org/en/) installed on your computer. You can check if you have Node.js installed by running this command in your terminal:

#### Node

```bash
node -v
```

You can see the version of Node.js that has been used in this project in the .nvmrc file. Other versions of Node.js may work, but I can't guarantee that they will.

To install nodejs I would reccomend that you use nvm (Node Version Manager). You can find the installation in istructions for:

- [Unix systems](https://github.com/nvm-sh/nvm#Installing-and-updating)
- [Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

You can also find usage instructions on the same page.

#### Yarn

Once you have Node.js installed, you can install Yarn by running this command in your terminal:

```bash
npm install --global yarn
```

### Installing

A step by step series of examples that tell you how to get a development env running.

First you will need to fork the repository. You can do this by clicking the fork button in the top right of the page.

Then you will need to clone the repository to your local machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/<YOUR_USERNAME>/brain
```

Then you will need to install the dependancies and start the development server. You can do this by running the following commands in your terminal:

```bash
# Navigate to the project folder
cd brain

# Install dependancies with yarn
yarn install

# Start the development server
yarn dev
```

The development server will now be running on <http://localhost:3000> and you can view the site in your browser.

If you are wanting to contribute to the project please make sure you have first read the [CONTRIBUTING](.github/docs/CONTRIBUTING.md) file.

If you are wanting to use the project as a reference or starting point for your own project you can continue to the [Usage](#usage) section.

## 🎈 Usage <a name="usage"></a>

This section is desined to help you get a similar project up and running for yourself, based on this project.

Make sure that you have first followed all of the steps in the [Getting Started](#getting_started) section.

First you will want to clear out the content of the `docs` with everything that you don't need. From here you can read the docs for [Docusaurus 2](https://v2.docusaurus.io/docs/) to learn how to add your own content.

You can also edit the global css file in `src/css/custom.css` to change the styling of the site, and the docosaurus config file in `docusaurus.config.js` to change the site settings.

## 🚀 Deployment <a name = "deployment"></a>

The site is deployed using [netlify](https://www.netlify.com/), and is set up to automatically deploy when changes are pushed to the master branch.

## ⛏️ Built Using <a name = "built_using"></a>

- [Docusaurus 2](https://v2.docusaurus.io/) - Static Site Generator
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@CalumMackenzie-Chambers](https://github.com/CalumMackenzie-Chambers) - Idea & Initial work

See also the list of [contributors](https://github.com/CalumMackenzie-Chambers/brain/graphs/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- [The Document Compendium](https://github.com/kylelobo/The-Documentation-Compendium) - Template for the docs used in this project
- [nikitavoloboev - knowledge](https://github.com/nikitavoloboev/knowledge) - Another similar project that is much more mature
