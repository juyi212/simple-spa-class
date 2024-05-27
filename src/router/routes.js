import Router from "./Router.js";
import Main from "../pages/Main.js";
import Post from "../pages/Post.js";
import Shop from "../pages/Shop.js";

const routes = ($container) => {
  const router = new Router();
  router.addRoute("", () => new Main({ $container, router }));
  router.addRoute("/", () => new Main({ $container, router }));
  router.addRoute("/post/:id", () => new Post({ $container, router }));
  router.addRoute("/shop", () => new Shop({ $container, router }));

  router.loadInitialRoute();

  return router;
};

export default routes;
