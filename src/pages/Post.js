export default class Post {
  constructor({ $container, router }) {
    console.log("? post", $container);
    this.$container = $container;
    this.render();
  }

  render() {
    this.$container.innerHTML = this.template();
  }
  template() {
    return `<div>post 페이지 입니다.</div>`;
  }
}
