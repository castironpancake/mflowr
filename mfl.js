function menuFlow(){$('.barr')['toggleClass']('change'),$('#nav-expand')['toggleClass']('hidden');}$('.nav-button-h')['on']('click',function(){menuFlow();});var newscroll,mywindow=$(window),mypos=mywindow['scrollTop'](),up=!0x1;mywindow['scroll'](function(){newscroll=mywindow['scrollTop'](),mypos<newscroll&&!up?($('#fixed-navigation')['stop']()['slideToggle'](),up=!up,console['log'](up)):newscroll<mypos&&up&&($('#fixed-navigation')['stop']()['slideToggle'](),up=!up),mypos=newscroll;});var headerHeight=$('#fixed-navigation')['height']();function scrollMain(_0x23b2a0){var _0x22315d=$(_0x23b2a0)['offset']()['top']-headerHeight;$('html')['animate']({'scrollTop':_0x22315d},0x1f4);}function expAndGo(_0x5ce277,_0x3e545e,_0x28b65f){if($(_0x3e545e)['is'](':hidden')){var _0x28a6f1=$(_0x28b65f+'\x20.expand-Container\x20.show-more-button.list-expanding-button');$(_0x28a6f1)['trigger']('click'),$('#loadingIMG')['show']();var _0x4e6336=setInterval(function(){$(_0x28b65f+'\x20.ui-progressbar')['length']&&(scrollMain(_0x5ce277),clearInterval(_0x4e6336),$('#loadingIMG')['hide']());},0x1f4);}else $(_0x3e545e)['is'](':visible')&&scrollMain(_0x5ce277);}$('.nav-button,\x20.sub-nav-button')['on']('click',function(){if('jobs-table-holder'==$(this)['attr']('gotoo')){scrollMain('#jobs-table-holder');}if('phone-business-table-holder'==$(this)['attr']('gotoo')){scrollMain('#phone-business-table-holder');}var _0xd52300='#eCommerce-table-holder',_0x40dcea=$(_0xd52300+'\x20.expand-Container\x20.expandable');('ecommercee'==$(this)['attr']('gotoo')&&scrollMain(_0xd52300),'forsellerss'==$(this)['attr']('gotoo'))&&expAndGo($(_0xd52300+'\x20.tdivider')['eq'](0x0),_0x40dcea,_0xd52300);'foraffiliatess'==$(this)['attr']('gotoo')&&expAndGo($(_0xd52300+'\x20.tdivider')['eq'](0x1),_0x40dcea,_0xd52300);'formarketingg'==$(this)['attr']('gotoo')&&expAndGo($(_0xd52300+'\x20.tdivider')['eq'](0x2),_0x40dcea,_0xd52300);'forfastmoneyy'==$(this)['attr']('gotoo')&&expAndGo($(_0xd52300+'\x20.tdivider')['eq'](0x3),_0x40dcea,_0xd52300);var _0x48ae5d='#investing-table-holder',_0x5ea709=$(_0x48ae5d+'\x20.expand-Container\x20.expandable');('investingg'==$(this)['attr']('gotoo')&&scrollMain(_0x48ae5d),'signalss'==$(this)['attr']('gotoo'))&&expAndGo($(_0x48ae5d+'\x20.tdivider')['eq'](0x0),_0x5ea709,_0x48ae5d);'botss'==$(this)['attr']('gotoo')&&expAndGo($(_0x48ae5d+'\x20.tdivider')['eq'](0x1),_0x5ea709,_0x48ae5d);'brokerss'==$(this)['attr']('gotoo')&&expAndGo($(_0x48ae5d+'\x20.tdivider')['eq'](0x2),_0x5ea709,_0x48ae5d);'realestatee'==$(this)['attr']('gotoo')&&expAndGo($(_0x48ae5d+'\x20.tdivider')['eq'](0x3),_0x5ea709,_0x48ae5d);var _0x37d3f9='#supplies-table-holder',_0x2b4e43=$(_0x37d3f9+'\x20.expand-Container\x20.expandable');('servicess'==$(this)['attr']('gotoo')&&scrollMain(_0x37d3f9),'videoo'==$(this)['attr']('gotoo'))&&expAndGo($(_0x37d3f9+'\x20.tdivider')['eq'](0x0),_0x2b4e43,_0x37d3f9);'photoo'==$(this)['attr']('gotoo')&&expAndGo($(_0x37d3f9+'\x20.tdivider')['eq'](0x1),_0x2b4e43,_0x37d3f9);'webbuildd'==$(this)['attr']('gotoo')&&expAndGo($(_0x37d3f9+'\x20.tdivider')['eq'](0x2),_0x2b4e43,_0x37d3f9);'seotoolss'==$(this)['attr']('gotoo')&&expAndGo($(_0x37d3f9+'\x20.tdivider')['eq'](0x3),_0x2b4e43,_0x37d3f9);'marketingg'==$(this)['attr']('gotoo')&&expAndGo($(_0x37d3f9+'\x20.tdivider')['eq'](0x4),_0x2b4e43,_0x37d3f9);'educationn'==$(this)['attr']('gotoo')&&expAndGo($(_0x37d3f9+'\x20.tdivider')['eq'](0x5),_0x2b4e43,_0x37d3f9);'dealssearchh'==$(this)['attr']('gotoo')&&expAndGo($(_0x37d3f9+'\x20.tdivider')['eq'](0x6),_0x2b4e43,_0x37d3f9);}),$(document)['ready'](function(){scrollMain('body');}),window['onbeforeunload']=function(){return'Are\x20you\x20sure\x20you\x20want\x20to\x20leave?';};
