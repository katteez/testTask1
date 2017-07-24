"use strict";

var pageHeaderElem = document.querySelector(".page-header--bottom");
var pageHeaderElemSourceTop = pageHeaderElem.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function() {
  if (pageHeaderElem.classList.contains('fixed') && window.pageYOffset < pageHeaderElemSourceTop) {
    pageHeaderElem.classList.remove('fixed');
  } else if (window.pageYOffset > pageHeaderElemSourceTop) {
    pageHeaderElem.classList.add('fixed');
  }
};
