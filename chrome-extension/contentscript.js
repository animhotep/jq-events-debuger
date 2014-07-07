var js = 'var disabledEvents=["mousedown","mouseup","mouseout","mouseover"];$("body").find("*").each(function(){var a=$(this),b=$._data(a[0],"events");b&&($("<div/>",{"class":"jq-events"}).appendTo(a),$(b).each(function(){$.each(this,function(c,b){0>$.inArray(c,disabledEvents)&&($("<div/>",{title:b[0].handler.toString(),text:c}).appendTo(a.find(".jq-events")),$(a).bind(c,function(){console.log(a[0]);console.log(b[0].handler)}))})}))});',
    script = document.createElement('script'),
    css = '.jq-events{position:absolute;z-index:9999}.jq-events>div{opacity:.5;background:red;color:#fff;border:1px solid #fff;padding:5px;margin:5px;outline:1px solid red;font:normal 12px Arial;text-transform:lowercase;text-shadow: none}.jq-events>div:hover{opacity:1;outline:2px solid red}',
    style = document.createElement('style');

script.appendChild(document.createTextNode(js));
document.body.appendChild(script);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
