# rendgen-css

[![Build Status][ci-img]][ci] [![BrowserStack Status][browserstack-img]][browserstack]

Diagnostics stylesheet for invalid markup.

## Install

```sh
npm install rendgen.css --save
```

## Usage

```css
@import url('rendgen.css');
```

## Similar projects

* [Revenge.css](https://github.com/Heydon/REVENGE.CSS) - Uses selectors to find bad markup, displaying ugly pink error messages in Comic Sans wherever you write bad HTML.
* [a11y.css](https://github.com/ffoodd/a11y.css/) - warns developers about possible risks and mistakes that exist in HTML code.

## Test

For local integration tests, run `npm run test:integration:local`.

For manual tests, run `npm run test:manual:local` and open <http://localhost:9000/> in your browser.

## Browser support

Tested in IE9+ and all modern browsers.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/rendgen-css
[ci-img]: https://travis-ci.org/niksy/rendgen-css.svg?branch=master
[browserstack]: https://www.browserstack.com/
[browserstack-img]: https://www.browserstack.com/automate/badge.svg?badge_key=bkpVVVMrOHdDQjJJNC8vZzU0dXBzSk51YzRiMjlNeEhTRTBiVUJ2OW1HTT0tLXEvSFVJWno1dFdOanF3UXBtcTFFdnc9PQ==--85c631800300233f8613e9e5bab8641ba583923e
