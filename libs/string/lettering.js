
function injector(text, splitter, klass, after) {
  var a = text.split(splitter)
    , inject = '';
  if (a.length) {
    a.forEach(function (item, i) {
      inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
    })
    return inject;
  }
}


export let lettering =  {
  char:function (str) {
    return injector(str, '', 'char', '');
  },
  words: function (str) {
    return injector(str, ' ', 'word', ' ');
  }
}
