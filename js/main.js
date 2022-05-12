(function(global, $) {
  'use strict';
  
  $(function() {
    var $tabToggler, initComments, initialized;
    
    initialized = {
      '#vk-comments': false,
      '#disqus_thread': false
    };
    
    initComments = function(type) {
      var discussUserName, disqus_config, pageUrl;
      
      if (initialized[type]) {
        return;
      }
      
      pageUrl = 'page_url';
      
      switch (type) {
        case '#disqus_thread':
          // You need to set this params using your platform's appropriate way
          discussUserName = 'discussUserName';
          disqus_config = function() {
            this.page.url = pageUrl;
            return this.page.identifier = 'page_identifier';
          };
          
          (function() {
            var d, s;
            d = document;
            s = d.createElement('script');
            s.src = "//" + discussUserName + ".disqus.com/embed.js";
            s.setAttribute('data-timestamp', +new Date());
            return (d.head || d.body).appendChild(s);
          })();
          
          break;
        case '#vk-comments':
          VK.Widgets.Comments("vk-comments", {
            limit: 5,
            attach: "*",
            pageUrl: pageUrl
          });
          
          break;
        default:
          return;
      }
      
      initialized[type] = true;
    };
    
    $tabToggler = $('.comments-wrapper a[data-toggle="tab"]');
    $tabToggler.on('shown.bs.tab', function(e) {
      initComments($(e.target).attr("href"));
    });
    
    initComments($tabToggler.closest('.active').find('a[data-toggle="tab"]').attr('href'));
  });
})(window, jQuery);