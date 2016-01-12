// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21976 = arguments.length;
var i__17885__auto___21977 = (0);
while(true){
if((i__17885__auto___21977 < len__17884__auto___21976)){
args__17891__auto__.push((arguments[i__17885__auto___21977]));

var G__21978 = (i__17885__auto___21977 + (1));
i__17885__auto___21977 = G__21978;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21968_21979 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21969_21980 = null;
var count__21970_21981 = (0);
var i__21971_21982 = (0);
while(true){
if((i__21971_21982 < count__21970_21981)){
var k_21983 = cljs.core._nth.call(null,chunk__21969_21980,i__21971_21982);
e.setAttribute(cljs.core.name.call(null,k_21983),cljs.core.get.call(null,attrs,k_21983));

var G__21984 = seq__21968_21979;
var G__21985 = chunk__21969_21980;
var G__21986 = count__21970_21981;
var G__21987 = (i__21971_21982 + (1));
seq__21968_21979 = G__21984;
chunk__21969_21980 = G__21985;
count__21970_21981 = G__21986;
i__21971_21982 = G__21987;
continue;
} else {
var temp__4425__auto___21988 = cljs.core.seq.call(null,seq__21968_21979);
if(temp__4425__auto___21988){
var seq__21968_21989__$1 = temp__4425__auto___21988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21968_21989__$1)){
var c__17629__auto___21990 = cljs.core.chunk_first.call(null,seq__21968_21989__$1);
var G__21991 = cljs.core.chunk_rest.call(null,seq__21968_21989__$1);
var G__21992 = c__17629__auto___21990;
var G__21993 = cljs.core.count.call(null,c__17629__auto___21990);
var G__21994 = (0);
seq__21968_21979 = G__21991;
chunk__21969_21980 = G__21992;
count__21970_21981 = G__21993;
i__21971_21982 = G__21994;
continue;
} else {
var k_21995 = cljs.core.first.call(null,seq__21968_21989__$1);
e.setAttribute(cljs.core.name.call(null,k_21995),cljs.core.get.call(null,attrs,k_21995));

var G__21996 = cljs.core.next.call(null,seq__21968_21989__$1);
var G__21997 = null;
var G__21998 = (0);
var G__21999 = (0);
seq__21968_21979 = G__21996;
chunk__21969_21980 = G__21997;
count__21970_21981 = G__21998;
i__21971_21982 = G__21999;
continue;
}
} else {
}
}
break;
}

var seq__21972_22000 = cljs.core.seq.call(null,children);
var chunk__21973_22001 = null;
var count__21974_22002 = (0);
var i__21975_22003 = (0);
while(true){
if((i__21975_22003 < count__21974_22002)){
var ch_22004 = cljs.core._nth.call(null,chunk__21973_22001,i__21975_22003);
e.appendChild(ch_22004);

var G__22005 = seq__21972_22000;
var G__22006 = chunk__21973_22001;
var G__22007 = count__21974_22002;
var G__22008 = (i__21975_22003 + (1));
seq__21972_22000 = G__22005;
chunk__21973_22001 = G__22006;
count__21974_22002 = G__22007;
i__21975_22003 = G__22008;
continue;
} else {
var temp__4425__auto___22009 = cljs.core.seq.call(null,seq__21972_22000);
if(temp__4425__auto___22009){
var seq__21972_22010__$1 = temp__4425__auto___22009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21972_22010__$1)){
var c__17629__auto___22011 = cljs.core.chunk_first.call(null,seq__21972_22010__$1);
var G__22012 = cljs.core.chunk_rest.call(null,seq__21972_22010__$1);
var G__22013 = c__17629__auto___22011;
var G__22014 = cljs.core.count.call(null,c__17629__auto___22011);
var G__22015 = (0);
seq__21972_22000 = G__22012;
chunk__21973_22001 = G__22013;
count__21974_22002 = G__22014;
i__21975_22003 = G__22015;
continue;
} else {
var ch_22016 = cljs.core.first.call(null,seq__21972_22010__$1);
e.appendChild(ch_22016);

var G__22017 = cljs.core.next.call(null,seq__21972_22010__$1);
var G__22018 = null;
var G__22019 = (0);
var G__22020 = (0);
seq__21972_22000 = G__22017;
chunk__21973_22001 = G__22018;
count__21974_22002 = G__22019;
i__21975_22003 = G__22020;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21965){
var G__21966 = cljs.core.first.call(null,seq21965);
var seq21965__$1 = cljs.core.next.call(null,seq21965);
var G__21967 = cljs.core.first.call(null,seq21965__$1);
var seq21965__$2 = cljs.core.next.call(null,seq21965__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21966,G__21967,seq21965__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_22021 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_22021.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_22021.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_22021.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_22021);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__22022,st_map){
var map__22027 = p__22022;
var map__22027__$1 = ((((!((map__22027 == null)))?((((map__22027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22027):map__22027);
var container_el = cljs.core.get.call(null,map__22027__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__22027,map__22027__$1,container_el){
return (function (p__22029){
var vec__22030 = p__22029;
var k = cljs.core.nth.call(null,vec__22030,(0),null);
var v = cljs.core.nth.call(null,vec__22030,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__22027,map__22027__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__22031,dom_str){
var map__22034 = p__22031;
var map__22034__$1 = ((((!((map__22034 == null)))?((((map__22034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22034):map__22034);
var c = map__22034__$1;
var content_area_el = cljs.core.get.call(null,map__22034__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__22036){
var map__22039 = p__22036;
var map__22039__$1 = ((((!((map__22039 == null)))?((((map__22039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22039):map__22039);
var content_area_el = cljs.core.get.call(null,map__22039__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_22082){
var state_val_22083 = (state_22082[(1)]);
if((state_val_22083 === (1))){
var inst_22067 = (state_22082[(7)]);
var inst_22067__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22068 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22069 = ["10px","10px","100%","68px","1.0"];
var inst_22070 = cljs.core.PersistentHashMap.fromArrays(inst_22068,inst_22069);
var inst_22071 = cljs.core.merge.call(null,inst_22070,style);
var inst_22072 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22067__$1,inst_22071);
var inst_22073 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22067__$1,msg);
var inst_22074 = cljs.core.async.timeout.call(null,(300));
var state_22082__$1 = (function (){var statearr_22084 = state_22082;
(statearr_22084[(8)] = inst_22072);

(statearr_22084[(9)] = inst_22073);

(statearr_22084[(7)] = inst_22067__$1);

return statearr_22084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22082__$1,(2),inst_22074);
} else {
if((state_val_22083 === (2))){
var inst_22067 = (state_22082[(7)]);
var inst_22076 = (state_22082[(2)]);
var inst_22077 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_22078 = ["auto"];
var inst_22079 = cljs.core.PersistentHashMap.fromArrays(inst_22077,inst_22078);
var inst_22080 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22067,inst_22079);
var state_22082__$1 = (function (){var statearr_22085 = state_22082;
(statearr_22085[(10)] = inst_22076);

return statearr_22085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22082__$1,inst_22080);
} else {
return null;
}
}
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto____0 = (function (){
var statearr_22089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22089[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto__);

(statearr_22089[(1)] = (1));

return statearr_22089;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto____1 = (function (state_22082){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22090){if((e22090 instanceof Object)){
var ex__18885__auto__ = e22090;
var statearr_22091_22093 = state_22082;
(statearr_22091_22093[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22094 = state_22082;
state_22082 = G__22094;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto__ = function(state_22082){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto____1.call(this,state_22082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_22092 = f__18994__auto__.call(null);
(statearr_22092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_22092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__22096 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__22096,(0),null);
var ln = cljs.core.nth.call(null,vec__22096,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__22099 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__22099,(0),null);
var file_line = cljs.core.nth.call(null,vec__22099,(1),null);
var file_column = cljs.core.nth.call(null,vec__22099,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__22099,file_name,file_line,file_column){
return (function (p1__22097_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__22097_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__22099,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__22102 = figwheel.client.heads_up.ensure_container.call(null);
var map__22102__$1 = ((((!((map__22102 == null)))?((((map__22102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22102):map__22102);
var content_area_el = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_22150){
var state_val_22151 = (state_22150[(1)]);
if((state_val_22151 === (1))){
var inst_22133 = (state_22150[(7)]);
var inst_22133__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_22134 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_22135 = ["0.0"];
var inst_22136 = cljs.core.PersistentHashMap.fromArrays(inst_22134,inst_22135);
var inst_22137 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22133__$1,inst_22136);
var inst_22138 = cljs.core.async.timeout.call(null,(300));
var state_22150__$1 = (function (){var statearr_22152 = state_22150;
(statearr_22152[(8)] = inst_22137);

(statearr_22152[(7)] = inst_22133__$1);

return statearr_22152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22150__$1,(2),inst_22138);
} else {
if((state_val_22151 === (2))){
var inst_22133 = (state_22150[(7)]);
var inst_22140 = (state_22150[(2)]);
var inst_22141 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_22142 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_22143 = cljs.core.PersistentHashMap.fromArrays(inst_22141,inst_22142);
var inst_22144 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_22133,inst_22143);
var inst_22145 = cljs.core.async.timeout.call(null,(200));
var state_22150__$1 = (function (){var statearr_22153 = state_22150;
(statearr_22153[(9)] = inst_22140);

(statearr_22153[(10)] = inst_22144);

return statearr_22153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22150__$1,(3),inst_22145);
} else {
if((state_val_22151 === (3))){
var inst_22133 = (state_22150[(7)]);
var inst_22147 = (state_22150[(2)]);
var inst_22148 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_22133,"");
var state_22150__$1 = (function (){var statearr_22154 = state_22150;
(statearr_22154[(11)] = inst_22147);

return statearr_22154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22150__$1,inst_22148);
} else {
return null;
}
}
}
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18882__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18882__auto____0 = (function (){
var statearr_22158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22158[(0)] = figwheel$client$heads_up$clear_$_state_machine__18882__auto__);

(statearr_22158[(1)] = (1));

return statearr_22158;
});
var figwheel$client$heads_up$clear_$_state_machine__18882__auto____1 = (function (state_22150){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22159){if((e22159 instanceof Object)){
var ex__18885__auto__ = e22159;
var statearr_22160_22162 = state_22150;
(statearr_22160_22162[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22163 = state_22150;
state_22150 = G__22163;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18882__auto__ = function(state_22150){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18882__auto____1.call(this,state_22150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18882__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18882__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_22161 = f__18994__auto__.call(null);
(statearr_22161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_22161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_22195){
var state_val_22196 = (state_22195[(1)]);
if((state_val_22196 === (1))){
var inst_22185 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22195__$1,(2),inst_22185);
} else {
if((state_val_22196 === (2))){
var inst_22187 = (state_22195[(2)]);
var inst_22188 = cljs.core.async.timeout.call(null,(400));
var state_22195__$1 = (function (){var statearr_22197 = state_22195;
(statearr_22197[(7)] = inst_22187);

return statearr_22197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22195__$1,(3),inst_22188);
} else {
if((state_val_22196 === (3))){
var inst_22190 = (state_22195[(2)]);
var inst_22191 = figwheel.client.heads_up.clear.call(null);
var state_22195__$1 = (function (){var statearr_22198 = state_22195;
(statearr_22198[(8)] = inst_22190);

return statearr_22198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22195__$1,(4),inst_22191);
} else {
if((state_val_22196 === (4))){
var inst_22193 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22195__$1,inst_22193);
} else {
return null;
}
}
}
}
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto____0 = (function (){
var statearr_22202 = [null,null,null,null,null,null,null,null,null];
(statearr_22202[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto__);

(statearr_22202[(1)] = (1));

return statearr_22202;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto____1 = (function (state_22195){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22203){if((e22203 instanceof Object)){
var ex__18885__auto__ = e22203;
var statearr_22204_22206 = state_22195;
(statearr_22204_22206[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22207 = state_22195;
state_22195 = G__22207;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto__ = function(state_22195){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto____1.call(this,state_22195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_22205 = f__18994__auto__.call(null);
(statearr_22205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_22205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1450440273930