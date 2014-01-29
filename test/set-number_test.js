(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module("jQuery#setNumber", {
    setup: function() {
      this.elems = $("#qunit-fixture").children();
    }
  });

  test("is chainable", function() {
    expect(1);
    strictEqual(this.elems.setNumber(), this.elems, "should be chainable");
  });

  test("has dom structure", function() {
    expect(4);
    $("#editor").setNumber({ activeLine: 0});
    var wrapper = $("#editor").parent();
    strictEqual(wrapper.attr("class"), "set-number", "should have 'set-number' div");
    strictEqual(wrapper.find("div:first-child").attr("class"), "lines", "should have 'lines' div");
    strictEqual(wrapper.find(".lines > div:first-child").attr("class"), "numbers", "should have 'numbers' div");
    strictEqual(wrapper.find(".numbers > div:first-child").attr("class"), "line-no l-1", "should have 'line-no l-1' div");
  });

  test("has active line", function() {
    expect(1);
    $("#editor").setNumber({ activeLine: 3, activeClass: "active" });
    var wrapper = $("#editor").parent();
    strictEqual(wrapper.find(".l-3").attr("class"), "line-no l-3 active", "should have 'active' line");
  });

  test("apply default options", function() {
    expect(2);
    $("#editor").setNumber();
    var wrapper = $("#editor").parent();
    strictEqual(wrapper.find(".l-1").attr("class"), "line-no l-1", "should not have l-1 as 'active' line");
    strictEqual(wrapper.find(".active").length, 0, "should not have any 'active' line");
  });

}(jQuery));
