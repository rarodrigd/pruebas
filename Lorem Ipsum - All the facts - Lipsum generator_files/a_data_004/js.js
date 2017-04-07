(function(){
/**/

})();
(function(){
//used to sync advertiser without leaking referer to final destination
var frm = document.createElement('iframe');
frm.style.visibility = 'hidden';
frm.style.display = 'none';
frm.src = "http://pixel.mathtag.com/sync/iframe?sync=auto&mt_lim=5&mt_uuid=7d2d57b2-ed5a-4400-a2a0-408e8c21c3c3&no_iframe=1";
frm.setAttribute("id", "mm_sync_back_ground");
var trys = 0;
var interval = setInterval(function(){
    if (trys++ < 20 && interval && !document.getElementById("mm_sync_back_ground")) {
	if (document.body) {
	    if (interval) {
		clearInterval(interval);
		interval = 0;
	    }
	    document.body.appendChild(frm);
	}
    }
}, 100);

})();
