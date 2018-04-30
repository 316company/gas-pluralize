function plural(str) {
  return pluralize.plural(str||'');
}
function singular(str) {
  return pluralize.singular(str||'');
}
    
function myFunction_() {
  Logger.log(plural('test'));
  Logger.log(singular('tests'));
}
