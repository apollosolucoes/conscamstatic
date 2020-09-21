jQuery(function ($) {
  $(".slider_home").responsiveSlides({
    auto: true,
    pager: true,
    nav: false,
    speed: 500,
    maxwidth: 1200
  });

  $('.campo_busca').focus(function () {
    if (this.value == this.defaultValue) {
      this.value = '';
    }
  });

  $('.campo_busca').blur(function () {
    if ($.trim(this.value) == '') {
      this.value = (this.defaultValue ? this.defaultValue : '');
    }
  });

  $('.go_busca').click(function () {
    var pesquisa = $('.campo_busca').val();
    var link = 'http://www.google.com.br/#hl=pt-BR&q=' + pesquisa + '+site%3Awww.conscam.com.br';
    location.href = link;
  });

  $(document).ready(function () {
    $(".group1").fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic'
    });
    $(".group2").fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic'
    });
    $(".group3").fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic'
    });
    $(".group_plantas").fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic'
    });
  });

  var nav = document.getElementById('site-navigation'), button, menu;
  if (!nav)
    return;
  button = nav.getElementsByTagName('h3')[0];
  menu = nav.getElementsByTagName('ul')[0];
  if (!button)
    return;

  // Hide button if menu is missing or empty.
  if (!menu || !menu.childNodes.length) {
    button.style.display = 'none';
    return;
  }

  button.onclick = function () {
    if (-1 == menu.className.indexOf('nav-menu'))
      menu.className = 'nav-menu';

    if (-1 != button.className.indexOf('toggled-on')) {
      button.className = button.className.replace(' toggled-on', '');
      menu.className = menu.className.replace(' toggled-on', '');
    } else {
      button.className += ' toggled-on';
      menu.className += ' toggled-on';
    }
  };
});