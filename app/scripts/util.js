'use strict';


function UtilJs() {
  this.isMb = function() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.indexOf('iphone') !== -1 || (userAgent.indexOf('android') !== -1 && userAgent.indexOf('mobile') !== -1)){
        return true;
    } else {
        return false;
    }
  };
}
