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
    command: "stack exec -- runghc",
    // command: "stack",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.haskell.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "PowerShell.exe -File installComposer.ps1",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "composer installed",
    search: "composer search",
    install: "composer require",
    uninstall: "composer remove",
    help: "composer",
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer"
  }
};

module.exports = languageConfig;
