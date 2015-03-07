'use strict';

function MemberJs() {
  var rotateDegY = 0;
  var rotateDegX = 0;

  this.init = function() {
    var self = this;
    self.bind();
    setInterval( function() { self.rotateLoop(); }, 1000/60 );

    // #todo showを実行しないときの仮置き。消す。
    $('#ist__member__carousel--js').velocity({
      translateZ: '-300px',
      rotateX: '0deg',
      rotateY: '0deg',
    });
  };

  this.bind = function() {
    var self = this;

    if (!utilJs.isMb()) {
      $('body, html').on('mousemove', function(e) {
        self.rotateMouseover(e);
      });
    }

    if (utilJs.isMb()) {
      window.addEventListener('deviceorientation', self.rotateDeviceOrientation);
    }
  };

  this.show = function() {
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
  };

  this.rotateLoop = function() {
    $('#ist__member__carousel--js').velocity({
      translateZ: '-300px',
      rotateX: rotateDegX + 'deg',
      rotateY: '+=' + rotateDegY + 'deg'
    }, {
      duration: 0,
      easing: 'ease'
    });
  };

  this.rotateMouseover = function(e) {
    var win = $(window);
    var windowWidth = win.width();
    var windowHeight = win.height();
    var speedRateY = 0.002;
    var speedRateX = 0.05;
    rotateDegY = -(e.clientX - (windowWidth*0.5)) * speedRateY;
    rotateDegX = -(e.clientY - (windowHeight*0.5)) * speedRateX;
  };

  this.rotateDeviceOrientation = function(e) {
    console.log(e.beta);
    console.log(e.gamma);
    var speedRateY = 0.1;
    var speedRateX = 2;

    rotateDegY = -(e.gamma) * speedRateY;
    rotateDegX = -(e.beta) * speedRateX;
  };
}
