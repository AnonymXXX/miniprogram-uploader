#!/usr/bin/env node

import { Separator, input, select } from "@inquirer/prompts";

select({
  message: "Select a package manager",
  choices: [
    {
      name: "npm",
      value: "npm",
      description: "npm is the most popular package manager",
    },
    {
      name: "yarn",
      value: "yarn",
      description: "yarn is an awesome package manager",
    },
    new Separator(),
    {
      name: "jspm",
      value: "jspm",
      disabled: true,
    },
    {
      name: "pnpm",
      value: "pnpm",
      disabled: "(pnpm is not available)",
    },
  ],
});
