export const mfConfig = {
  name: "products",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductsList": "./src/ProductsList.tsx",
  },
  shared: ["react", "react-dom"],
};