import { Observable } from "../../classes/observable";
import { FireBaseService } from "../../services/fire-base.service";
import { UtilsService } from "../../services/utils.service";
import favStarTemplate from "./fav-star.component.html";
import favStarStyle from "./fav-star.component.scss";

export class FavStarComponent extends HTMLElement {
  #fireBaseService;
  constructor() {
    super();
    this.observable$ = new Observable();
    this.#fireBaseService = new FireBaseService();
  }
  connectedCallback() {
    const style = favStarStyle;
    this.innerHTML = favStarTemplate;
    this.$favContent = this.querySelector(".fav-content");
    this.$favStar = this.querySelector(".fav-star");
    this.$favStar.addEventListener("pointerenter", () => this.$favStar.classList.add("opacity"));
    this.$favStar.addEventListener("pointerleave", () => this.$favStar.classList.remove("opacity"));
    this.addEventListener("click", () => {
      const hasUser = this.#fireBaseService.getUser();
      if (hasUser) {
        this.toggleStar();
        return;
      }
      UtilsService.notificationAlert("error", "You must be logged");
    });
  }
  async toggleStar() {
    const boolean = this.$favContent.classList.toggle("active");
    this.observable$.publish(boolean);
  }
}
customElements.define("fav-star", FavStarComponent);
