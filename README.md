# Pluralize

Using **pluralize** in Google Apps Script.

Pluralize homepage: [https://github.com/blakeembrey/pluralize](https://github.com/blakeembrey/pluralize)

## Install

Library ID: ``13U-fcaWqa6zFHJzfr7X1AZmRi02sjoKbi-YqesHlGQAhqJoowsFEetcd``

Select latest version, set Indentifier to ``Pluralize``.

## Usage

```js
Logger.log(Pluralize.plural('test'));
Logger.log(Pluralize.singular('tests'));

Logger.log(Pluralize.pluralize('test'));

Logger.log(Pluralize.pluralize.plural('test'));
Logger.log(Pluralize.pluralize.singular('tests'));
```