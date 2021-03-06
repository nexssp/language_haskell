let languageConfig = Object.assign({}, require("./haskell.win32.nexss.config"));
languageConfig.compilers = {
  haskell: {
    install:
      "apt install curl && curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh",
    command: "runhaskell",
    args: "<file>",
    help: ``,
  },
  stack: {
    install:
      "apt update && apt install curl && curl -sSL https://get.haskellstack.org/ | sh",
    command: "stack",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
