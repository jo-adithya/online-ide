$('.pro-lang__selector').click(function () {
  const menu = $('.pro-lang__menu');
  const display = menu.css('display');
  if (display === 'block') {
    menu.css('display', 'none');
  } else {
    menu.css('display', 'block');
  }
});
let lang = "Python";
$('.editor-run').click(function () {
  $.ajax({
    type : 'POST',
    url : "/",
    data : {
      'data': cleanProgramFile(), 'extension': getExtension(lang)}
  })
  .done(function(data){
    $('.editor-shell').html(data.output);
  });
});

$('.pro-lang__menu li').click(function () {
  lang = $(this).text();
  $('.pro-lang__selector').text(validateLang(lang));
  $('.editor-header__filename').text(`main${getExtension(lang)}`);
  $(this).parent().css('display', 'none');
});

function cleanProgramFile(){
  let programFile = $('.editor-text')[0].innerHTML.replaceAll('</div><div>', "<div>").replaceAll('<br>', '');
  programFile = programFile.replaceAll("&nbsp;", " ").replaceAll("&lt;", '<').replaceAll("&gt;", '>').replaceAll('</div>', '').split("<div>");
  programFile = programFile.filter(e => e);
  return programFile;
}

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