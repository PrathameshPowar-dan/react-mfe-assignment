export const mfConfig = {
  name: "products_app",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductsList": "./src/ProductsList.tsx",
  },
  shared: ["react", "react-dom"],
};