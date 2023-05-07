let languageConfig = Object.assign({}, require("./haskell.win32.nexss.config"));
languageConfig.compilers = {
  haskell: {
    install:
      "pkg install -y ghc",
    command: "runhaskell",
    args: "<file>",
    help: ``,
  },
  stack: {
    install:
      "pkg install -y ghc",
    command: "stack",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
