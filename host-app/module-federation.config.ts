export const mfConfig = {
  name: "host_app",
  filename: "remoteEntry.js",
  remotes: {
    products: "products@http://localhost:3001/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};