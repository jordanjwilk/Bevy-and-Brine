{ pkgs }: {
  deps = [
    pkgs.fetchutils
    pkgs.libwebp
    pkgs.libwebp
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}