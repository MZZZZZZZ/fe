function showTip(text,timeout){
  if ($("div#zzztip").length==0)
  {  
    tipdiv=$("<div>");
    tipdiv.addClass("alert alert-success alert-dismissible");
    tipdiv.attr("role","alert");
    tipdiv.attr("id","zzztip");
    tipdiv.css({"display":"none","position":"fixed","z-index":"9999999","left":"20%","width":"50%","height":"auto","top":"40%","text-align":"center"});
    btn=$("<button>");
    btn.addClass("close");
    btn.attr("type","button");
    btn.attr("data-dismiss","alert");
    span=$("<span>&times;</span>");
    btn.append(span);
    tipdiv.append(btn);
    tipdiv.append("<p id='zzztip' style='word-break:break-all;text-align:left;'>"+text+"</p>");
    $("body").append(tipdiv);
    $("div#zzztip").slideDown("slow",function(){
      if(timeout>0){
        var t=setTimeout(function(){
              $('div#zzztip').fadeOut('slow',function(){$("div#zzztip").remove();});},
              timeout);
        btn.click(function(){clearTimeout(t);});
      }
    });//end slidedown function
  }
  else
  {
    $("p#zzztip").text(text);
    if(timeout>0){
        var t=setTimeout(function(){
              $('div#zzztip').fadeOut('slow',function(){$("div#zzztip").remove();});},
              timeout);
        btn.click(function(){clearTimeout(t);});
    }
  }
  

}

function closeTip(){
  $('div#zzztip').fadeOut('slow',function(){$("div#zzztip").remove();});
}