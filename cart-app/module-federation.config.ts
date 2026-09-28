export const mfConfig = {
  name: "cart_app",
  filename: "remoteEntry.js",
  exposes: {
    "./CartList": "./src/CartList.tsx",
  },
  shared: ["react", "react-dom"],
};