define([
  'jquery'
], function($) {
  'use strict';
  return function (config, elem) {
    $(elem).on('click', function () {
      $(config.contentSelector).html(config.content);
    });
  };
});
