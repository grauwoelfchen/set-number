# SetNumber jQuery Plugin

`:set number` for textarea

* Scroll Event support
* Active line highlight

![set-number](https://raw.github.com/grauwoelfchen/set-number/master/img/set-number-js.png)


## Requirements

* [jQuery](https://github.com/jquery/jquery)
* [jQuery Autosize](https://github.com/jackmoore/autosize) (optional)


## Usage

```
$("#id").setNumber({
  activeLine:   1
, activeClass:  "active"
, wrapperClass: "set-number"
});
```

```
// with jquery-autosize
$("#id").autosize({
  callback: function(textarea) {
    $(textarea).scroll();
  }
});
```

see `src/set-number.css.styl` about css style.


## Development

```
% npm install grunt

# uglify
% grunt uglify #=> dist/set-number.min.js will be generated

# stylus
% grunt stylus #=> dist/set-number.css will be generated

# test
% grunt qunit # or see `test/set-number.html` via browser
```

## Histroy

* 20140131 Add stylus compile task (for `dist/set-number.css`) and [sample.html](https://github.com/grauwoelfchen/set-number/blob/master/example/set-number.html)
* 20140130 Initial Release (0.0.1)


## Lincense

MIT License (see `LICENSE`)
