'use strict';

var mainJs;
var memberJs;
var utilJs;

function initIstWeb() {
  mainJs = new MainJs();
  memberJs = new MemberJs();
  utilJs = new UtilJs();

  mainJs.init();
  memberJs.init();
}

initIstWeb();
