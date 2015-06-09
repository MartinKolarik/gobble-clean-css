# gobble-clean-css

Minify CSS files with gobble and clean-css.

## Installation

```bash
npm install gobble-clean-css
```

## Usage

```js
gobble('css').transform('clean-css', options);
```

If you want the output to have a `.min.css` extension, add `ext: '.min.css'` to the options.
Visit [clean css documentation](https://github.com/jakubpawlowicz/clean-css/#how-to-use-clean-css-programmatically) for a list of all supported 
options.

## License

MIT. Copyright (c) 2015 Martin Kolárik.
