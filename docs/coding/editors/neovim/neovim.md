---
title: Neovim
---

# [Neovim](https://neovim.io/)

## [Introduction](#introduction)

In the world of code editors, where sleek and feature-rich integrated development environments (IDEs) often steal the limelight, Neovim emerges as a refreshing alternative. Neovim is a modern implementation of the Vim text editor, renowned for its efficiency and extensibility. While IDEs like Visual Studio and JetBrains' IntelliJ offer powerful features and a (not so) user-friendly interface, Neovim strikes a balance between simplicity and functionality, making it a compelling choice for developers seeking a streamlined coding experience.

I would also talk about VS Code here, however if I would like a program to use up all the available ram on my system and have an annoying amount of input lag, I would rather have a full IDE experience. Yes I know that you can install plugins and have an IDE like experience, but I can do the same thing in neovim without my system becoming crippled!

In the following paragraphs, I will delve into the reasons why I decided to transition from using more robust IDEs to embracing Neovim. Despite my prior experience with heavyweight IDEs, Neovim captivated me with its unique approach to text editing, its lightweight nature, and its vibrant ecosystem of plugins and extensions. Join me as I explore the journey of adopting Neovim and discover the benefits it offers to developers like myself.

## [Modal editing](#modalediting)

One of the key aspects that sets Vim and Neovim apart is their incorporation of modal editing. Modal editing allows you to edit code without having to reach for your mouse to select code and move around the file. While the concept did take a while to get used to (It took me about 2 weeks before I started to feel comfortable) I have found that fully embracing modal editing brings an unparalleled reduction in mental overhead. After using vim motions for two years now I don't see a world where I could go without it. It's not just about speed; it's about the ability to think less while coding. The power of modal editing extends beyond Neovim. You will be able to find a vim plugin for almost any editor that you are using I would recommend to everyone to give the plugin a go and persevere with it. I am confident that anyone will see the increase in productivity and lack of mental overhead after just a few weeks!

Vim and Neovim aren't the only editors to use the modal approach. An exciting new terminal based editor [helix](https://helix-editor.com/) is something that I am very eager to give a go, and you may see a document outlining my experience with it in the near future. If anyone has positive experiences trying helix from neovim I would love to hear your thoughts!

## [Configuration](configuration/plugins)

If you want to skip on the explanation as to why this is a plus and just see my configuration, you can look [here](https://github.com/CalumMackenzie-Chambers/nvim) at my configuration files, or go to the [configuration](configuration/plugins) section of this site if you would like an explanation of how I configured everything and why I made the choices that I did.

You will find that IDE's will include everything that you could ever want, pre-configured. For some people this is ideal. They don't have to think about setting anything up for themselves and will have all of their tools. But it does come with some drawbacks.

### [I know more about the tools when i have configured them myself](#list1)

One of the advantages of using Neovim is the ability to customize every aspect, including setting up personalized keymaps. While many other editors may offer similar functionalities, the process of setting up keymaps in Neovim allows you to truly internalize them. Personally, one area where this customization truly shines is file navigation. With the help of plugins like Telescope, I've defined a set of keymaps that have become ingrained in my coding workflow:

```bash
# My leader key is set to the space bar

<leader>ff  # Find files
<leader>fg  # Find grep (string)
<leader>fp  # Find Project
<leader>fh  # Find Help
```

While it's true that most editors provide similar file search capabilities, having personally set up these keymaps in Neovim has resulted in their frequent usage. For instance, the Ctrl+p command in VS Code serves the same purpose as my "Find files" keybind. However, because I've taken the time to configure this functionality myself in Neovim, I find myself relying on it more frequently rather than defaulting to the file explorer tree.

### [Harpoon](https://github.com/ThePrimeagen/harpoon)

This plugin alone is enough to make me want to switch to neovim, and as far as I am aware there is not an alternative in other editors. (Please let me know if I am wrong here)

Harpoon allows me to very quickly switch between just a few files that I am working on. I often find myself working on just 2 or 3 core files in a repository. I can set up 'marks' to quickly jump back and forth between these files using very simple keybinds, and fall back to Telescope described above for all other files.

### [I only have the tools that I actually want](#list4)

## [Responsiveness](#list3)

Despite building a lot of functionality into my neovim configuration, both due to being a TUI application and the fact that pretty much everything is lazy loaded, I can open a project and start editing the code in just a few milliseconds.

In addition to this, when I do start editing the code I don't experience any input lag. This probably isn't a deal breaker for most people but I find it very frustrating! In general I find all operations are just 'snappier' and I find myself staying in my 'flow state' for much longer because of this.

## [I can stay in the context of the Terminal](#list5)

## [Language agnostic](#List6)
