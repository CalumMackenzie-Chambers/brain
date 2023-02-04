---
title: Conventional Commits
---

# [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

This document describes the conventional commits specification for the Git
version control system.

## [Summary](#summary)

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This specification aims to answer the following questions:

- Commit message format
- Commit message body
- Commit message footer
- Breaking changes
- Reverting changes
- Examples

## [Why conventional commits?](#why-conventional-commits)

- An easier to understand commit history.
- Easier git bisect and revert when a bug is introduced.
- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of commits landed).
- Communicating the nature of changes to teammates, the public, and other stakeholders.

## [Commit message format](#commit-message-format)

The commit message format is as follows:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to
the consumers of your library:

### _[Type](#type)_

:::tip
You can use an exclamation mark (!) immediately after the type/scope prefix to indicate a breaking change. This allows the user to identify breaking changes at a glance of the commit history.

For example:

```text
feat!: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

Note that the reason for the breaking change is included in the footer of the commit message.
:::

1. **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
2. **chore:** Changes to the build process or auxiliary tools and libraries such as documentation generation
3. **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
4. **docs:** Documentation only changes
5. **feat:** A new feature
6. **fix:** A bug fix
7. **perf:** A code change that improves performance
8. **refactor:** A code change that neither fixes a bug nor adds a feature
9. **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
10. **test:** Adding missing tests or correcting existing tests

### _[Scope](#scope)_

A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.

### _[Description](#description)_

A short description of the commit: _lowercase_ and no _period_ at the end. The description must be in the imperative, present tense: "change" not "changed" nor "changes". The description should be no longer than 50 characters.

### _[Body](#body)_

Just as in the **description**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior. The body is not required and with a good commit description and appropriately sized commits, it should not be necessary in most cases.

### _[Footer](#footer)_

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**. The footer is optional and should be omitted if it is not required.

## [Examples](#examples)

### _[Commit message with description and breaking change footer](#commit-message-with-description-and-breaking-change-footer)_

```text
feat!: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```
