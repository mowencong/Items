$(document).ready(function() {		
var times = 60*300;		
countTime = setInterval(function() {			
times = --times < 0 ? 0 : times;	
var hs=Math.floor(times/6000).toString();
if(hs.length <= 1) {				
hs= "0" + hs;			
}	
var ms = Math.floor(times/300).toString();			
if(ms.length <= 1) {				
ms = "0" + ms;			
}			
var hm = Math.floor(times%100).toString();			
if(hm.length <= 1) {				
hm = "0" + hm;			
}			
if(times == 0) {								
clearInterval(countTime);		
}		// 获取分钟、毫秒数
$(".min").html(hs)
$(".sec").html(ms);
$(".msec").html(hm);	
}, 1);
});

