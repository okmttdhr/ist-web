'use strict';

var rotateDegY = 0;
var rotateDegX = 0;
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
      setInterval( function() { self.rotateLoop(); }, 1000/60 );

      // #todo showを実行しないときの仮置き。消す。
      $('#ist__member__carousel--js').velocity({
        translateZ: '-300px',
        rotateX: '0deg',
        rotateY: '0deg',
      });

    },
    bind: function() {
      var self = this;
      $('body, html').on('mousemove', function(e) {
        self.rotateMouseover(e);
      });
    },
    show: function() {
      // velocityを最初に適応する一瞬translateZが無効化しぶれるので、ロード時にstyleを追加しておく
      $('#ist__member__carousel--js').velocity({
        translateZ: '-300px',
        rotateX: '0deg',
        rotateY: '0deg'
      });

      // 瞬間間を置いて出現
      setTimeout(function() {
        $('.ist__member').velocity('fadeIn', { duration: 250, easing: 'ease' });
      }, 800);
    },
    rotateLoop: function() {
      $('#ist__member__carousel--js').velocity({
        translateZ: '-300px',
        rotateX: rotateDegX + 'deg',
        rotateY: '+=' + rotateDegY + 'deg'
      }, {
        duration: 0,
        easing: 'ease'
      });
    },
    rotateMouseover: function(e) {
      var win = $(window);
      var windowWidth = win.width();
      var windowHeight = win.height();
      var speedRateY = 0.002;
      var speedRateX = 0.05;
      rotateDegY = -(e.clientX - (windowWidth*0.5)) * speedRateY;
      rotateDegX = -(e.clientY - (windowHeight*0.5)) * speedRateX;
    }
  }
};

mainJs.init();
