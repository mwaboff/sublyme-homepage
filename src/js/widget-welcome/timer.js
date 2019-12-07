//  Sublyme Homepage
//    Michael Aboff - mwaboff@gmail.com - https://github.com/mwaboff

import {Widget} from "../widget.js"

export class Timer extends Widget {
  static startAutoUpdate() {
    Timer.autoUpdate();
    setInterval(Timer.autoUpdate, 1000)
  }

  static autoUpdate() {
    let current_time = Timer.getTime();
    Timer.updateUIByHtmlID("widget_welcome_timer", current_time);
  }

  static getTime() {
    return Timer.getHour() + ":" + Timer.getMinutes();
  }

  static getHour() {
    let current_time = new Date();
    let current_hour = current_time.getHours()
    return Timer.convertToDoubleDigits(current_hour);
  }

  static getMinutes() {
    let current_time = new Date();
    let current_min = current_time.getMinutes();
    return Timer.convertToDoubleDigits(current_min);
  }

  static convertToDoubleDigits(minutes) {
    let minute_string = minutes.toString();
    if(minute_string.length < 2) {
      minute_string = "0" + minute_string;
    }
    return minute_string;
  }
}