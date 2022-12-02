[![GitHub release](https://img.shields.io/github/release/three11/accordion.svg)](https://github.com/three11/accordion/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/accordion.svg)](https://github.com/three11/accordion/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/accordion.svg)](https://github.com/three11/accordion/commits/master)
[![Build Status](https://travis-ci.org/three11/accordion.svg?branch=master)](https://travis-ci.org/three11/accordion)
[![npm](https://img.shields.io/npm/dt/@three11/accordion.svg)](https://www.npmjs.com/package/@three11/accordion)
[![npm](https://img.shields.io/npm/v/@three11/accordion.svg)](https://www.npmjs.com/package/@three11/accordion)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/accordion/README.md)](https://github.com/three11/accordion/)

# Accordion

> Accordion widget using max-height and CSS transitions

## Install

```sh
npm i @three11/accordion
```

or

```sh
yarn add @three11/accordion
```

## Usage

First, `import` the module:

```javascript
import Accordion from '@three11/accordion';
```

Then initialize a new instance of the module:

```javascript
const el = doc.querySelector('[data-accordion]');
const accordion = new Accordion(el, (settings = {}));
```

## Settings

The default settings are:

```javascript
{
	headSelector: '[data-title]',   // Selector for the head element
	bodySelector: '[data-content]', // Selector for the body element
	hiddenClass:  'is--hidden',     // Hidden class name
	activeClass:  'is--active'      // Active class name
}
```

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
