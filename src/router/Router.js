export default class Router {
  constructor() {
    this.routes = [];

    window.addEventListener("popstate", () => this.loadInitialRoute());
  }

  _getCurrentPath() {
    return window.location.pathname;
  }

  addRoute(path, renderTemplate) {
    this.routes.push({ path, renderTemplate });
  }

  loadInitialRoute() {
    const findRoute = this.routes.find(
      (route) => route.path === location.pathname
    );
    // a 태그 클릭 후 바뀐 route를 찾을 수 없음
    console.log("findRoute", findRoute);

    findRoute.renderTemplate();
  }

  navigateTo(path) {
    const currentPath = this._getCurrentPath();
    if (path !== currentPath) {
      window.history.pushState(null, "", path);
      const popStateEvent = new PopStateEvent("popstate", { state: null });
      dispatchEvent(popStateEvent);
    } else {
      console.log("no render");
    }
  }
}
