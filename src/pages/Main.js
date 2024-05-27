export default class Main {
  constructor({ $container, router }) {
    console.log("? main", $container);
    this.$container = $container;
    this.render();
  }

  template() {
    return `<div>main 페이지 입니다.</div>`;
  }
  render() {
    this.$container.innerHTML = this.template();
  }
}
