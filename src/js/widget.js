//  Sublyme Homepage
//    Michael Aboff - mwaboff@gmail.com - https://github.com/mwaboff

export class Widget {
  constructor() {}

  startWidget() {}

  static updateUIByHtmlID(html_element_id, replacement_text) {
    let html_element = document.getElementById(html_element_id);
    html_element.innerText = replacement_text;

  }
}