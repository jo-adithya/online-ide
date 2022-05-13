$(document).ready(function() {
  $('.pro-lang__selector').attachShadow({ mode: 'open' });
})

$('.pro-lang__selector').click(function () {
  const menu = $('.pro-lang__menu');
  const display = menu.css('display');
  if (display === 'block') {
    menu.css('display', 'none');
  } else {
    menu.css('display', 'block');
  }
});

$('.pro-lang__menu li').click(function () {
  const lang = $(this).text();
  $('.pro-lang__selector').text(validateLang(lang));
  $('.editor-header__filename').text(`main${getExtension(lang)}`);
  $(this).parent().css('display', 'none');
});

function validateLang(lang) {
  switch (lang) {
    case 'C':
      return 'C';
    case 'C++':
      return 'C++';
    case 'Java':
      return 'Java';
    case 'JavaScript':
      return 'JavaScript';
    default:
      return 'Python';
  }
}

function getExtension(lang) {
  switch (lang) {
    case 'C':
      return '.c';
    case 'C++':
      return '.cpp';
    case 'Java':
      return '.java';
    case 'JavaScript':
      return '.js';
    default:
      return '.py';
  }
}
