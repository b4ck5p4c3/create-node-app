#!/usr/bin/env node

const { resolve } = require("path");
const { create } = require("create-create-app");

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
This is a caveat!
You can change this in \`src/cli.js\`.
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-node-ts-app", {
  templateRoot,
  defaultTemplate: "typescript",
  promptForTemplate: true,
  defaultAuthor: "B4CKSP4CE Team & Contributors",
  defaultEmail: "info@0x08.in",
  defaultPackageManager: "yarn",
  defaultLicense: "MIT",
  skipNpmInstall: true,
  caveat,
});
