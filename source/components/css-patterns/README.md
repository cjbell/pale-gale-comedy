# A CSS pattern library for Sass

At Made by Many we love Sass and we love Bourbon. We use these technologies in almost every project we build and they give us a great base onto which we can build our CSS.

In addition we've been compiling a library of common CSS patterns for some time now. We noticed that we were reusing different patterns to produce effects and layouts in all our projects and decided to break them out into reusable chunks.

The way we write CSS tends to follow BEM syntax and closely resembles some OOCSS practices. However, we tend to favour using the Sass ``@extend`` method to add patterns to CSS rules, rather than littering our elements with multiple styles.

For instance, we tend to favour this approach with placeholders:

```scss
.my-list-element {
  @extend %inline-list;
  background:blue;
}
```

```html
<ul class="my-list-element">
</ul>
```

Rather than this one with additional classes:

```scss
.my-list-element {
  background:blue;
}
```

```html
<ul class="my-list-element inline-list">
</ul>
```

Most of these patterns were developed by much smarter people than us and this library has been compiled with patterns from all over the internet. We will try and credit those smart people where we can, but if we've overlooked anyone please let us know or submit a PR to rectify our mistake.

## How it works

```scss
.my-class {
  @extend %expand-click-area;
}
```
These patterns are a collection on Sass placeholders and mixins. Much like Bourbon, nothing will be added to your compiled CSS that you did not explicitly ``@include`` or ``@extend``.

## Installing with Bower

```
$ bower install css-patterns --save
```

In your root Sass file:

```scss
@include "bower_components/css-patterns/stylesheets/patterns"
```

Replace ``bower_components/`` here with the name of your bower component directory if necessary.

## Installing with NPM

```
$ npm install css-patterns --save
```

The following was adapted directly from the excellent [node-bourbon](https://github.com/lacroixdesign/node-bourbon) project.

To use `css-patterns` with tools like Gulp, Grunt, or directly with node-sass, provide the path to `css-patterns` in your Sass config.

The ``includePaths`` property returns an array of pattern paths to use in your config.

```js
var patterns = require('css-patterns');
bourbon.includePaths // Array of pattern paths
```

Now pass that array as a property to your Sass compilation function

```js
var generatedCss = sass.renderSync({
  file: __dirname + '/my_sass_file.scss',
  includePaths: patterns.includePaths
});
```

In your root stylesheet include the following:

```scss
@import "patterns";
```

## Contributing

1. Add a new pattern with documentation
2. Test docs locally with `gulp docs`
3. Commit and push
4. `gulp publish-docs`
5. View at http://madebymany.github.io/css-patterns/

## Contributors

* [Andy Walker](https://github.com/ninjabiscuit)
* [Callum Jefferies](https://github.com/callum)
* [Chris Bell](https://github.com/cjbell88)
* [Nick Goward](https://github.com/NickGoward)
