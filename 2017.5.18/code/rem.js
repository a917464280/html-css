'use strict';



(function(doc, win) {

    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;

            var screenwidth = doc.querySelector('[data-screenwidth]') ? doc.querySelector('[data-screenwidth]').dataset.screenwidth : 0;

            if(screenwidth && clientWidth > screenwidth) {
                clientWidth = screenwidth;
            }
            // if(utils.device() !== 'pc') {
            //     var fontSize = ((clientWidth));
            //     docEl.style.fontSize = fontSize+"px" ;
            //     docEl.style.fontSize = fontSize * (clientWidth / Math.round(document.body.getBoundingClientRect().width)) + 'px';
            // }


            var fontSize = ((docEl.clientWidth/10));
            docEl.style.fontSize = fontSize+"px" ;
        };

    if(!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);

    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);