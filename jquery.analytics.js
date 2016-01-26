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

$.fn.track = function(settings){
  var type = this.attr("data-track-type");
  this.click(function(){
    switch(type){
      case  "page":
        ga('send', 'pageview', this.attr("data-page-url"));
        break;
      case "event":
        ga('send', 'event', this.attr("data-event-category"), this.attr("data-event-action"), this.attr("data-event-label"));
        break;
    }
  });
}
