![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/KAHLYM/personal-website/Node.js/main?label=Node.js%20Build&logo=Node.js&style=for-the-badge)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/KAHLYM/personal-website/Node.js/main?label=Lint%20Check&logo=Sass&style=for-the-badge)

# Personal Website

## Languages, Libraries & Frameworks

The frontend is built with [React](https://reactjs.org/) and makes use of [Sass](https://sass-lang.com/).

The backend is built with [Firebase](https://firebase.google.com/). Although, Firebase is currently only used to host the website.

## Automation

### Main

When a pull request is raised against `main` the following automation executes:
* Node.js build
* Node.js tests
* Linting with [ESLint](https://eslint.org/) following airbnb style and [stylelint](https://stylelint.io/) are auto-fixed
  
This is true for pushes to pull requests against `main` too.

### Release

When a pull request is raised against `release` the "last-updated" string will be auto-updated. On a push to `release` the changes will be auto-published to Firebase.