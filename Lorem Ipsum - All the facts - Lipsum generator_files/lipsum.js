
var crtg_nid='4905';var crtg_cookiename='crtg_rta';var crtg_varname='crtg_content';function crtg_getCookie(c_name){var i,x,y,ARRCookies=document.cookie.split(";");for(i=0;i<ARRCookies.length;i++){x=ARRCookies[i].substr(0,ARRCookies[i].indexOf("="));y=ARRCookies[i].substr(ARRCookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){return unescape(y);}}return'';}
var crtg_content=crtg_getCookie(crtg_cookiename);var crtg_rnd=Math.floor(Math.random()*99999999999);(function(){var crtg_url=location.protocol+'//rtax.criteo.com/delivery/rta/rta.js?netId='+escape(crtg_nid);crtg_url+='&cookieName='+escape(crtg_cookiename);crtg_url+='&rnd='+crtg_rnd;crtg_url+='&varName='+escape(crtg_varname);var crtg_script=document.createElement('script');crtg_script.type='text/javascript';crtg_script.src=crtg_url;crtg_script.async=true;if(document.getElementsByTagName("head").length>0)document.getElementsByTagName("head")[0].appendChild(crtg_script);else if(document.getElementsByTagName("body").length>0)document.getElementsByTagName("body")[0].appendChild(crtg_script);})();var grp,rand;rand=Math.random();grp=(function(){switch(false){case!(rand<0.09):return"ad_ex"+(Math.floor(100*rand));case!(rand<0.10):return"ad_bc";default:return"ad_opt";}})();var PREBID_TIMEOUT=1000;var googletag=googletag||{};googletag.cmd=googletag.cmd||[];function initAdserver(){if(pbjs.initAdserverSet)return;(function(){var gads=document.createElement('script');gads.async=true;gads.type='text/javascript';var useSSL='https:'==document.location.protocol;gads.src=(useSSL?'https:':'http:')+'//www.googletagservices.com/tag/js/gpt.js';var node=document.getElementsByTagName('script')[0];node.parentNode.insertBefore(gads,node);})();pbjs.initAdserverSet=true;};setTimeout(initAdserver,PREBID_TIMEOUT);var pbjs=pbjs||{};pbjs.que=pbjs.que||[];(function(){var pbjsEl=document.createElement("script");pbjsEl.type="text/javascript";pbjsEl.async=true;pbjsEl.src="//preamp-clients.header.tech/bidders.js";var pbjsTargetEl=document.getElementsByTagName("head")[0];pbjsTargetEl.insertBefore(pbjsEl,pbjsTargetEl.firstChild);})();pbjs.que.push(function(){pbjs.setPriceGranularity("high");var adUnits=[{code:'div-gpt-ad-1456148316198-0',sizes:[[970,90],[728,90],[468,60],[320,50]],bids:[{bidder:'rubicon',params:{accountId:"14418",siteId:"85504",zoneId:"405574",sizes:[55,2,1,43]}},{bidder:'appnexus',params:{placementId:'6445401',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'brealtime',params:{placementId:'6603161',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042743',server:'adserver.adtech.de',alias:'lip_unit1_970x90'}},{bidder:'pulsepoint',params:{cf:'970x90',cp:558595,ct:425611}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit1/970x90@970x90'}},{bidder:'sovrn',params:{tagid:'366332'}},{bidder:'indexExchange',params:{id:"1",siteID:182286}},{bidder:'appnexus',params:{placementId:'6439954',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042418',server:'adserver.adtech.de',alias:'lip_unit1_728x90'}},{bidder:'brealtime',params:{placementId:'6603160',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'pulsepoint',params:{cf:'728x90',cp:558595,ct:425610}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit1/728x90@728x90'}},{bidder:'sovrn',params:{tagid:'366331'}},{bidder:'indexExchange',params:{id:"1",siteID:179847}},{bidder:'appnexus',params:{placementId:'6445421',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'brealtime',params:{placementId:'6603162',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042741',server:'adserver.adtech.de',alias:'lip_unit1_468x90'}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit1/468x60@468x60'}},{bidder:'sovrn',params:{tagid:'366333'}},{bidder:'indexExchange',params:{id:"1",siteID:182287}},{bidder:'appnexus',params:{placementId:'6445409',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'brealtime',params:{placementId:'6603165',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042738',server:'adserver.adtech.de',alias:'lip_unit1_320x50'}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit1/320x50@320x50'}},{bidder:'sovrn',params:{tagid:'366334'}},{bidder:'indexExchange',params:{id:"1",siteID:182288}}]},{code:'div-gpt-ad-1456148316198-1',sizes:[[970,90],[728,90],[468,60],[320,50]],bids:[{bidder:'rubicon',params:{accountId:"14418",siteId:"85504",zoneId:"405584",sizes:[55,2,1]}},{bidder:'appnexus',params:{placementId:'6445423',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042737',server:'adserver.adtech.de',alias:'lip_unit2_970x90'}},{bidder:'brealtime',params:{placementId:'6603167',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'pulsepoint',params:{cf:'970x90',cp:558595,ct:425614}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit2/970x90@970x90'}},{bidder:'sovrn',params:{tagid:'366336'}},{bidder:'indexExchange',params:{id:"2",siteID:182290}},{bidder:'appnexus',params:{placementId:'6445422',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042742',server:'adserver.adtech.de',alias:'lip_unit2_728x90'}},{bidder:'brealtime',params:{placementId:'6603166',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'pulsepoint',params:{cf:'728x90',cp:558595,ct:425613}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit2/728x90@728x90'}},{bidder:'sovrn',params:{tagid:'366335'}},{bidder:'indexExchange',params:{id:"2",siteID:182289}},{bidder:'appnexus',params:{placementId:'6445425',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'brealtime',params:{placementId:'6603168',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042740',server:'adserver.adtech.de',alias:'lip_unit2_468x90'}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit2/468x60@468x60'}},{bidder:'sovrn',params:{tagid:'366337'}},{bidder:'indexExchange',params:{id:"2",siteID:182291}},{bidder:'appnexus',params:{placementId:'6445424',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'brealtime',params:{placementId:'6445424',referrer:'lipsum.com',alt_referrer:'lipsum.com'}},{bidder:'aol',params:{network:'4482.1',placement:'6042739',server:'adserver.adtech.de',alias:'lip_unit2_320x50'}},{bidder:'pubmatic',params:{publisherId:'127864',adSlot:'Lipsum/Unit2/320x50@320x50'}},{bidder:'sovrn',params:{tagid:'366338'}},{bidder:'indexExchange',params:{id:"2",siteID:182292}}]}];pbjs.addAdUnits(adUnits);pbjs.requestBids({bidsBackHandler:function(bidResponses){initAdserver();}})});googletag.cmd.push(function(){googletag.defineSlot('/15188745/Lipsum-Unit1',[[970,90],[728,90],[468,60],[320,50]],'div-gpt-ad-1456148316198-0').setTargeting('ad_group',grp).addService(googletag.pubads());googletag.defineSlot('/15188745/Lipsum-unit2',[[970,90],[728,90],[468,60],[320,50]],'div-gpt-ad-1456148316198-1').setTargeting('ad_group',grp).addService(googletag.pubads());pbjs.que.push(function(){pbjs.setTargetingForGPTAsync();});googletag.pubads().enableSingleRequest();if(typeof crtg_content=='undefined')crtg_content='';var s=crtg_content.split(';');s.pop();if(s.length>0)googletag.pubads().setTargeting('crtRTA',s);googletag.pubads().enableSingleRequest();googletag.pubads().collapseEmptyDivs(true,true);googletag.enableServices();});