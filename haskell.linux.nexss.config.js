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

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Arch Linux":
    languageConfig.compilers.haskell.install = replaceCommandByDist(
      "pacman -S --noconfirm ghc"
    );
    languageConfig.compilers.haskell.command = "ghc";
    languageConfig.compilers.haskell.args =
      "-dynamic <file> && ./<fileNoExt> && rm ./<fileNoExt>";
    break;
  case "Alpine Linux":
    languageConfig.compilers.haskell.install = replaceCommandByDist(
      "apk add ghc"
    );
    languageConfig.compilers.haskell.command = "ghc";
    languageConfig.compilers.haskell.args =
      "<file> && ./<fileNoExt> && rm ./<fileNoExt>";
    break;
  default:
    languageConfig.compilers.haskell.install = replaceCommandByDist(
      languageConfig.compilers.haskell.install
    );
    break;
}

module.exports = languageConfig;
