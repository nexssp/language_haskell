let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Haskell";
languageConfig.description =
  "An advanced, purely functional programming language";
languageConfig.url = "https://www.haskell.org/";
languageConfig.extensions = [".hs"];
languageConfig.builders = {};
languageConfig.compilers = {
  haskell: {
    install: "scoop install haskell",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "stack",
    // command: "stack",
    args: "exec -- runghc <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.haskell.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "",
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "cabal installed",
    search: "cabal search",
    install: "cabal v2-update && cabal v2-install --lib",
    uninstall: "cabal remove",
    help: "cabal help",
    version: "cabal version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer"
  }
};

module.exports = languageConfig;
