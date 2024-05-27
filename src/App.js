import routes from "./router/routes.js";

export default class App {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  render() {
    this.setTemplate();
    this.setEvent();
  }

  setTemplate() {
    this.router = routes(this.$container);
  }

  setEvent() {
    document.querySelector("#navbar").addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!target instanceof HTMLAnchorElement) return null;

      e.preventDefault();

      const targetUrl = e.target.href.replace("http://127.0.0.1:8081", "");
      this.router.navigateTo(targetUrl);
    });
  }
}
