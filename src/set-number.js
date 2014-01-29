/*
 * SetNumber jQuery Plugin
 * Copyright (c) 2014 Yasuhiro Asaka (http://grauwoelfchen.net)
 *
 * License:: MIT License
 * Version:: 0.0.1
 * Author::  Yasuhiro Asaka (grauwoelfchen@gmail.com)
 */
(function($) {
  $.fn.setNumber = function(userOptions) {
    var lineNo  = 0
      , options = $.extend({}, $.fn.setNumber.options, userOptions);
    // numbering
    var numbering = function(numbers, textarea, lineNo) {
      var height = textarea.height()
        , diff   = numbers.find(".line-no").first().height() / 2;
      while ((numbers.height() + diff - height) < 0) {
        lineNo++;
        var klass = "line-no l-" + lineNo + ((lineNo === options.activeLine) ? " " + options.activeClass : "");
        numbers.append("<div class='" + klass + "'>" + lineNo + "</div>");
      }
      while ((numbers.height() - diff - height) > 0) {
        numbers.children("div.line-no.l-" + lineNo).remove();
        lineNo--;
      }
      return lineNo;
    };
    return this.each(function() {
      var textarea = $(this);
      // textarea
      textarea.attr("wrap", "off");
      textarea.css({ resize: "none" });
      // lines
      var wrapper = textarea.wrap("<div class='" + options.wrapperClass + "'></div>").parent();
      wrapper.prepend("<div class='lines'></div>");
      var lines = wrapper.find(".lines");
      lines.height(textarea.height());
      // numbers
      lines.append( "<div class='numbers'></div>" );
      var numbers = lines.find(".numbers");
      // event
      var callback = function() {
        var textarea = $(this);
        lineNo = numbering(numbers, textarea, lineNo);
      };
      textarea.scroll(callback);
      // render
      textarea.trigger("scroll");
    });
  };
  // default options
  $.fn.setNumber.options = {
    activeLine:   0
  , activeClass:  "active"
  , wrapperClass: "set-number"
  };
}(jQuery));
