//  Sublyme Homepage
//    Michael Aboff - mwaboff@gmail.com - https://github.com/mwaboff

import {Widget} from "../widget.js";
import {Timer} from "./timer.js";

export class Welcomer extends Widget {
  constructor() {
    super();
    this.username = "Michael";
    this.message_random_choice = Math.round(Math.random() * 10);
    this.temporal_message_chance = 5;
    this.current_hour = parseInt(Timer.getHour());
    this.welcome_text = this.chooseMessage();
  }

  static createWelcomeWidget() {
    let welcome_widget = new Welcomer();
    return welcome_widget;
  }

  chooseMessage() {
    let message;
    if (this.message_random_choice < this.temporal_message_chance) {
      message = this.chooseTimeMessage();
    } else {
      message = this.chooseRegularMessage();
    }
    return message + ", " + this.username;
  }

  chooseTimeMessage() {
    var time_frame;
    if(this.current_hour >= 4 && this.current_hour < 12) {
      time_frame = "morning";
    }
    else if (this.current_hour >= 12 && this.current_hour < 17) {
      time_frame = "afternoon";
    }
    else if (this.current_hour >= 17 && this.current_hour < 22) {
      time_frame = "evening";
    } else {
      time_frame = "night";
    }
    return this.chooseTemporalMessage(time_frame);
  }

  chooseRegularMessage() {
    let regular_messages = ["Welcome", "Hello", "Hallo", "Wie Gehts"]
    let random_index = Math.floor(Math.random() * regular_messages.length);
    return regular_messages[random_index];
  }

  chooseTemporalMessage(time_frame) {
    let temporal_welcomes = {
      "morning": ["Good Morning", "Bonjour", "Guten Morgen"],
      "afternoon": ["Good Afternoon", "Guten Tag"],
      "evening": ["Good Evening", "Guten Abend"],
      "night": ["Good Night", "Guten Nacht"]
    }
    let random_index = Math.floor(Math.random() * temporal_welcomes[time_frame].length);
    return temporal_welcomes[time_frame][random_index];
  }

  startWidget() {
    Welcomer.updateUIByHtmlID("widget_welcome_text", this.welcome_text);
    Timer.startAutoUpdate();
  }
}