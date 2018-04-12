# Accordion

Front-end accordion widget using max-height written in vanilla ES2017

## Install

```
npm i @three11/accordion
```

or

```
yarn add @three11/accordion
```

## Usage

First, `import` the module:

```
import Accordion from '@three11/accordion';
```

Then initialize a new instance of the module:

```
const el = doc.querySelector('[data-accordion]');
const accordion = new Accordion(el, settings = {});
```

## Settings

The default settings are:

```
headSelector: '[data-title]',   // Selector for the head element
bodySelector: '[data-content]', // Selector for the body element
hiddenClass:  'is--hidden',     // Hidden class name
activeClass:  'is--active',     // Active class name
```

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
