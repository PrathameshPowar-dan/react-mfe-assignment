export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  exposes: {
    "./CartList": "./src/CartList.tsx",
    "./store": "./src/store.ts",
  },
  shared: ["react", "react-dom", "zustand"],
};