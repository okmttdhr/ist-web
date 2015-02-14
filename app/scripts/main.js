'use strict';

var mainJs = {
  init: function() {
    var self = this;
    self.bind();
  },
  bind: function() {
    var self = this;

    $('body').on('click', '.ist__project__one', function() {
      self.changePotision($(this));
    });
  },
  changePotision: function(target) {
    var istProjectOneCenter = $('.center');
    if (target.hasClass('center')) {

    } else {

      target.addClass('center');
      istProjectOneCenter.removeClass('center');

      if (target.hasClass('left')) {
        target.removeClass('left');
        istProjectOneCenter.addClass('left');
      }

      if (target.hasClass('right')) {
        target.removeClass('right');
        istProjectOneCenter.addClass('right');
      }
    }
  }
};

mainJs.init();
