export default class Shop {
  constructor({ $container, router }) {
    this.$container = $container;
    this.render();
  }

  render() {
    this.$container.innerHTML = this.template();
  }
  template() {
    return `<div>shop 페이지 입니다.</div>`;
  }
}
