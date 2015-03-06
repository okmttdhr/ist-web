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
      self.member.show();
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
    show: function() {
      // velocityを最初に適応する一瞬translateZが無効化しぶれるので、ロード時にstyleを追加しておく
      $('#ist__member__carousel--js').velocity({
        translateZ: '-300px',
        rotateY: '0deg'
      });

      // 瞬間間を置いて出現
      setTimeout(function() {
        $('.ist__member').velocity('fadeIn', { duration: 250, easing: 'ease' });
      }, 800);
    },
    rotate: function() {
      $('#ist__member__carousel--js').velocity({
        translateZ: '-300px',
        rotateY: '-=40deg'
      }, {
        duration: 1000,
        easing: 'ease'
      });
    }
  }
};

mainJs.init();
