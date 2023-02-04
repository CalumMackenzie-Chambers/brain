---
title: Semantic Versioning
---

# [Semantic Versioning](https://semver.org/)

Semantic Versioning 2.0.0 defines a standard for version numbers of software. This allows people to know when software has changed and to understand what kind of changes they are likely to see.

## [Summary](#summary)

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards compatible manner
3. PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

## [Why use Semantic Versioning?](#why-use-semantic-versioning)

Semantic Versioning is important because it allows you to communicate the nature of changes to your users and to the public. It also allows you to make informed decisions about what kinds of changes you want to make to your software.

## [How I Automated Semantic Versioning](#how-i-automated-semantic-versioning)

I use the [conventional commits](/git/conventional-commits) specification to automate semantic versioning. This specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

Using the conventional commits specification, releases, changelogs and versioning can be fully automated using [GitHub Actions](/git/github/actions). The github actions that I have experimented with are:

- [Commitsar](https://github.com/marketplace/actions/commitsar-action) - This action checks that commit messages follow the conventional commits specification.
- [semantic-release](https://github.com/semantic-release/semantic-release) - This action automatically determines the next semantic version number, generates a changelog and publishes the release.

## [References](#references)

- [Semantic Versioning 2.0.0](https://semver.org/)
- [Conventional Commits](/git/conventional-commits)
