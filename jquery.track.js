/*
* The following is Runtime Code and is subject to all restrictions on
* such code as contained in the End User License Agreement accompanying
* this product.
*
* @author "Ronald Guillen"
* @copyright "Copyright (C) 2015 Spark. All Rights Reserved."
* @license "Apache License"
* @version "1.0"
*/

$.fn.track = function(options){
  // default settings for auto tracking.
  var defaults = {
    engine: 'analytics'
  };

  var settings = (options != undefined) ? options : defaults;
  var type = this.attr("data-track-type");

  // Attach click event handle for current element.
  this.click(function(){
    switch(type){
      case "page":
        trackPage($(this).attr("data-page-url"));
        break;
      case "event":
        trackEvent($(this).attr("data-event-category"), $(this).attr("data-event-action"), $(this).attr("data-event-label"));
        break;
    }
  });

  function trackPage(path){
    if(settings.engine == 'analytics'){
      ga('send', 'pageview', path);
    }
    else if(settings.engine = 'tagmanager'){
      dataLayer.push({'event':'pageView', 'pagePath':path});
    }
  }

  function trackEvent(category, action, label){
    if(settings.engine == 'analytics')
    {
      ga('send', 'event', category, action, label);
    }
    else if(settings.engine = 'tagmanager'){
      dataLayer.push({'event':'pageEvent', 'eventCategory':category, 'eventAction':action, 'eventLabel': label});
    }
  }
}
