# Lesson 11 - Node & NPM

## Topics

- What is a javascript engine?

- What is node? How do we use node from the terminal?

- What is a library / package?

- What is a package manager?

- How can we install packages with npm?

- What does the package.json control? 

- What is a .gitignore? What are best practices with the node_modules folder?

- What is json-server? How can we initialize it with npx?

## Installing Node

You can check whether `node` is installed in the terminal with:

```bash
node --version
```

If a version appears you will not need to install anything. Otherwise go to `https://nodejs.org/en/download/current` and follow instructions to install `node` for your current operating system.

## Installing And Running The json-server Package


```bash
# to check if you have node installed
node -v

# to check if you have npm (node package manager) installed:
npm -v

# to install a new package:
npm install json-server

# Create a database.json file

# to execute a package:
npx json-server database.json

# to run a specific file:
node my-file.js
```