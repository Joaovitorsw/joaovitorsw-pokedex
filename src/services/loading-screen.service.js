import { $main } from "../app.component.js";
import { UtilsService } from "./utils.service.js";

export class LoadingScreenService {
  createContent() {
    const $loadingScreen = UtilsService.createElementWithClass("div", "loader");
    $loadingScreen.innerHTML = ` 
    <div class="pokeball">
    <div class="pokeball-button"></div>
    </div>
  `;
    return $loadingScreen;
  }

  LoadingPage() {
    const $loadingScreen = this.createContent();
    $main.appendChild($loadingScreen);
    window.scrollTo(0, 0);
    document.documentElement.classList.add("loading");
  }

  removeLoadingScreen() {
    const $loadingScreen = document.querySelector(".loader");
    setTimeout(() => $loadingScreen.classList.add("fade-out"), 500);
    setTimeout(() => {
      $main.removeChild($loadingScreen);
      document.documentElement.classList.remove("loading");
    }, 1500);
  }
}