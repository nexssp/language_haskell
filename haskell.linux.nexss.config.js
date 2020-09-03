let languageConfig = Object.assign({}, require("./haskell.win32.nexss.config"));
languageConfig.compilers = {
  haskell: {
    install: "apt update && apt install -y haskell-platform",
    command: "runhaskell",
    args: "<file>",
    help: ``,
  },
  stack: {
    install: "apt update && apt install -y haskell-stack",
    command: "stack",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
