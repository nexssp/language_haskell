let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Haskell";
languageConfig.description =
  "An advanced, purely functional programming language";
languageConfig.url = "https://www.haskell.org";
languageConfig.founders = [""];
languageConfig.developers = [""];
languageConfig.years = ["1990"];
languageConfig.extensions = [".hs"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "ghc -fno-code"; // OR ghc test.hs -e 'return 0'
languageConfig.interactiveShell = "ghci"; // exit from shell -> :quit
languageConfig.builders = {};
languageConfig.compilers = {
  haskell: {
    install: "scoop install haskell",
    command: "runhaskell",
    // command: "stack",
    args: "<file>",
    help: ``,
  },
  stack: {
    install: "scoop install stack",
    command: "stack",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.haskell.errors");
languageConfig.replacer = __dirname + "/nexss.haskell.replacer.js"; // replace strings in errors solutions
languageConfig.languagePackageManagers = {
  cabal: {
    installation: "",
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "ghc-pkg list", // or :show modules
    search: "cabal search",
    install: "cabal v2-update && cabal v2-install --lib",
    uninstall: "cabal remove",
    help: "cabal help",
    version: "cabal --version",
    check: "ghc-pkg check",
    upgrade: "cabal install Cabal cabal-install",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "package.cabal")
        )
      ) {
        require("child_process").execSync(
          "cabal init -n --is-executable &&  cabal sandbox init",
          {
            stdio: "inherit",
          }
        );
        console.log("initialized cabal project.");
      } else {
        console.log("cabal already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "cabal",
  },
};

module.exports = languageConfig;
