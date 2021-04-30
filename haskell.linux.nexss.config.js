let languageConfig = Object.assign({}, require("./haskell.win32.nexss.config"));

const sudo = process.sudo;

languageConfig.compilers = {
  haskell: {
    install: `${sudo}apt update -y && apt install -y haskell-platform`,
    command: "runhaskell",
    args: "<file>",
    help: ``,
  },
  stack: {
    install: `${sudo}apt update -y && apt install -y haskell-stack`,
    command: "stack",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ARCH:
    languageConfig.compilers.haskell.install = process.replacePMByDistro(
      "pacman -S --noconfirm ghc"
    );
    languageConfig.compilers.haskell.command = "ghc";
    languageConfig.compilers.haskell.args =
      "-dynamic <file> && ./<fileNoExt> && rm ./<fileNoExt> && :"; // : Empty command to end rm
    break;
  case process.distros.ALPINE:
    languageConfig.compilers.haskell.install = process.replacePMByDistro(
      "apk add ghc"
    );
    languageConfig.compilers.haskell.command = "ghc";
    languageConfig.compilers.haskell.args =
      "<file> && ./<fileNoExt> && rm ./<fileNoExt> && :";
    break;
  default:
    languageConfig.compilers.haskell.install = process.replacePMByDistro(
      languageConfig.compilers.haskell.install
    );
    break;
}

module.exports = languageConfig;
