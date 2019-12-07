//  Sublyme Homepage
//    Michael Aboff - mwaboff@gmail.com - https://github.com/mwaboff

import {Widget} from "../widget.js";
import {Welcomer} from "./welcomer.js";
import {Timer} from "./timer.js";

export class WelcomeWidget extends Widget {
  constructor() {
    super();
    this.username = "Michael";
    this.welcomer = Welcomer.createWelcomeWidget();
  }

  static createWelcomeWidget() {
    let welcome_widget = new WelcomeWidget();
    return welcome_widget;
  }

  startWidget() {
    this.welcomer.startWidget();
    Timer.startAutoUpdate();
  }
}