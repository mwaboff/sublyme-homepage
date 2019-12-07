//  Sublyme Homepage
//    Michael Aboff - mwaboff@gmail.com - https://github.com/mwaboff

import {WelcomeWidget} from './widget-welcome/main.js';

(function() {
  var Homepage = window.Homepage = (window.Homepage || {}); // Set namespace.

  var initialize = Homepage.initialize = function() {
    let welcome_widget = WelcomeWidget.createWelcomeWidget();
    welcome_widget.startWidget();
  }


  var findWidgets = function() {
  }




  initialize();
})();