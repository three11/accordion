[![GitHub stars](https://img.shields.io/github/stars/three11/accordion.svg?style=social&label=Stars)](https://github.com/three11/accordion)
[![GitHub forks](https://img.shields.io/github/forks/three11/accordion.svg?style=social&label=Fork)](https://github.com/three11/accordion/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/three11/accordion.svg)](https://github.com/three11/accordion/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/accordion.svg)](https://github.com/three11/accordion/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/accordion.svg)](https://github.com/three11/accordion/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/accordion/dist/index.min.js.svg)](https://github.com/three11/accordion/)
[![Build Status](https://travis-ci.org/three11/accordion.svg?branch=master)](https://travis-ci.org/three11/accordion)
[![npm](https://img.shields.io/npm/dt/@three11/accordion.svg)](https://www.npmjs.com/package/@three11/accordion)
[![npm](https://img.shields.io/npm/v/@three11/accordion.svg)](https://www.npmjs.com/package/@three11/accordion)
[![license](https://img.shields.io/github/license/three11/accordion.svg)](https://github.com/three11/accordion)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/accordion/README.md)](https://github.com/three11/accordion/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/three11/accordion/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/three11/accordion/graphs/commit-activity)
[![Greenkeeper badge](https://badges.greenkeeper.io/three11/accordion.svg)](https://greenkeeper.io/)

[![ForTheBadge built-with-love](https://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/three11/)

# Accordion

Front-end accordion widget using max-height written in vanilla ES2017

## Install

```console
npm i @three11/accordion
```

or

```console
yarn add @three11/accordion
```

or

Just download this repository and link the files located in dist folder:

```html
<link rel="stylesheet" href="path-to-accordion/dist/index.css" type="text/css" media="all" />

<script src="path-to-accordion/dist/index.min.js"></script>
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
headSelector: '[data-title]',   // Selector for the head element
bodySelector: '[data-content]', // Selector for the body element
hiddenClass:  'is--hidden',     // Hidden class name
activeClass:  'is--active',     // Active class name
```

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
