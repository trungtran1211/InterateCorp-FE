function contentSwitcher(settings) {
    var settings = {
      contentClass: '.content',
      navigationId: '#navigation'
    };
    $(settings.contentClass).not(':first').hide();
    $(settings.navigationId).find('li:first').addClass('active');
    $(settings.navigationId).find('a').click(function(e) {
  
      var contentToShow = $(this).attr('href');
      contentToShow = $(contentToShow);
      e.preventDefault();
      $(settings.navigationId).find('li').removeClass('active');
      $(this).parent('li').addClass('active');
      $(settings.contentClass).hide();
      contentToShow.show();
    });
  }
  contentSwitcher();


  function sv(elem) {
    var a = document.getElementsByTagName('li');
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active')
    }
    elem.classList.add('active');
}