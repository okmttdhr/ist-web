'use strict';

function MainJs() {
  this.init = function() {
    var self = this;
    self.bind();
  };

  this.bind = function() {
    var self = this;

    $('body').on('click', '.ist__project__one--js', function() {
      self.changePotision($(this));
    });

    $('body').on('click', '#ist__project__one--member--js', function() {
      memberJs.show();
    });
  };

  this.changePotision = function(target) {
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
  };
}
