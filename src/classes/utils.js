export class Utils {
  static createElementWithClass(selector, ...className) {
    const $element = document.createElement(selector);
    $element.classList.add(...className);
    return $element;
  }

  static appendPokemonType(pokeType, $element) {
    const $type = Utils.createElementWithClass("span", pokeType);
    $type.innerText = pokeType.capitalize();
    $element.append($type);
  }
}
