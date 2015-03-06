'use strict';

var mainJs = {
  init: function() {
    var self = this;
    self.bind();
    self.member.init();
  },
  bind: function() {
    var self = this;

    $('body').on('click', '.ist__project__one--js', function() {
      self.changePotision($(this));
    });

    $('body').on('click', '#ist__project__one--member--js', function() {
      self.showMember();
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
  },
  showMember: function() {
    setTimeout(function() {
      $('.ist__member').velocity('fadeIn', { duration: 250, easing: 'ease' });

      setTimeout(function() {
        $.each($('.ist__project__one--member_each'), function(i) {
          $(this)
            .velocity({ scale: 0.7 }, 0)
            .delay( 50 * i ).velocity({ scale: 1, opacity: 1 }, {
              duration: 800,
              easing: [0.175, 0.885, 0.32, 1.275]
            });
        });
      }, 250);

    }, 800);
  },
  member: {
    init: function() {
      var self = this;
      self.bind();
    },
    bind: function() {
      var self = this;
      $('body').on('click', '#next_test', function() {
        self.rotate();
      });
    },
    rotate: function() {
      $('#ist__member__carousel--js').velocity({
        translateZ: '-300px',
        rotateY: '-=40deg'
      });
    }
  }
};

mainJs.init();
