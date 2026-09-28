export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  exposes: {
    "./CartList": "./src/CartList.tsx",
  },
  shared: ["react", "react-dom"],
};