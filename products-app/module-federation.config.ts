export const mfConfig = {
  name: "products",
  filename: "remoteEntry.js",
  remotes: {
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./ProductsList": "./src/ProductsList.tsx",
  },
  shared: ["react", "react-dom", "zustand"],
};