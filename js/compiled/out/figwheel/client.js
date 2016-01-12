// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23379 = cljs.core._EQ_;
var expr__23380 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23379.call(null,"true",expr__23380))){
return true;
} else {
if(cljs.core.truth_(pred__23379.call(null,"false",expr__23380))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23380)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23382__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23383__i = 0, G__23383__a = new Array(arguments.length -  0);
while (G__23383__i < G__23383__a.length) {G__23383__a[G__23383__i] = arguments[G__23383__i + 0]; ++G__23383__i;}
  args = new cljs.core.IndexedSeq(G__23383__a,0);
} 
return G__23382__delegate.call(this,args);};
G__23382.cljs$lang$maxFixedArity = 0;
G__23382.cljs$lang$applyTo = (function (arglist__23384){
var args = cljs.core.seq(arglist__23384);
return G__23382__delegate(args);
});
G__23382.cljs$core$IFn$_invoke$arity$variadic = G__23382__delegate;
return G__23382;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23385){
var map__23388 = p__23385;
var map__23388__$1 = ((((!((map__23388 == null)))?((((map__23388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23388):map__23388);
var message = cljs.core.get.call(null,map__23388__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23388__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18993__auto___23550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___23550,ch){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___23550,ch){
return (function (state_23519){
var state_val_23520 = (state_23519[(1)]);
if((state_val_23520 === (7))){
var inst_23515 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23521_23551 = state_23519__$1;
(statearr_23521_23551[(2)] = inst_23515);

(statearr_23521_23551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (1))){
var state_23519__$1 = state_23519;
var statearr_23522_23552 = state_23519__$1;
(statearr_23522_23552[(2)] = null);

(statearr_23522_23552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (4))){
var inst_23472 = (state_23519[(7)]);
var inst_23472__$1 = (state_23519[(2)]);
var state_23519__$1 = (function (){var statearr_23523 = state_23519;
(statearr_23523[(7)] = inst_23472__$1);

return statearr_23523;
})();
if(cljs.core.truth_(inst_23472__$1)){
var statearr_23524_23553 = state_23519__$1;
(statearr_23524_23553[(1)] = (5));

} else {
var statearr_23525_23554 = state_23519__$1;
(statearr_23525_23554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (15))){
var inst_23479 = (state_23519[(8)]);
var inst_23494 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23479);
var inst_23495 = cljs.core.first.call(null,inst_23494);
var inst_23496 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23495);
var inst_23497 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23496)].join('');
var inst_23498 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23497);
var state_23519__$1 = state_23519;
var statearr_23526_23555 = state_23519__$1;
(statearr_23526_23555[(2)] = inst_23498);

(statearr_23526_23555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (13))){
var inst_23503 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23527_23556 = state_23519__$1;
(statearr_23527_23556[(2)] = inst_23503);

(statearr_23527_23556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (6))){
var state_23519__$1 = state_23519;
var statearr_23528_23557 = state_23519__$1;
(statearr_23528_23557[(2)] = null);

(statearr_23528_23557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (17))){
var inst_23501 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23529_23558 = state_23519__$1;
(statearr_23529_23558[(2)] = inst_23501);

(statearr_23529_23558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (3))){
var inst_23517 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23519__$1,inst_23517);
} else {
if((state_val_23520 === (12))){
var inst_23478 = (state_23519[(9)]);
var inst_23492 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23478,opts);
var state_23519__$1 = state_23519;
if(cljs.core.truth_(inst_23492)){
var statearr_23530_23559 = state_23519__$1;
(statearr_23530_23559[(1)] = (15));

} else {
var statearr_23531_23560 = state_23519__$1;
(statearr_23531_23560[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (2))){
var state_23519__$1 = state_23519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23519__$1,(4),ch);
} else {
if((state_val_23520 === (11))){
var inst_23479 = (state_23519[(8)]);
var inst_23484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23485 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23479);
var inst_23486 = cljs.core.async.timeout.call(null,(1000));
var inst_23487 = [inst_23485,inst_23486];
var inst_23488 = (new cljs.core.PersistentVector(null,2,(5),inst_23484,inst_23487,null));
var state_23519__$1 = state_23519;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23519__$1,(14),inst_23488);
} else {
if((state_val_23520 === (9))){
var inst_23479 = (state_23519[(8)]);
var inst_23505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23506 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23479);
var inst_23507 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23506);
var inst_23508 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23507)].join('');
var inst_23509 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23508);
var state_23519__$1 = (function (){var statearr_23532 = state_23519;
(statearr_23532[(10)] = inst_23505);

return statearr_23532;
})();
var statearr_23533_23561 = state_23519__$1;
(statearr_23533_23561[(2)] = inst_23509);

(statearr_23533_23561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (5))){
var inst_23472 = (state_23519[(7)]);
var inst_23474 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23475 = (new cljs.core.PersistentArrayMap(null,2,inst_23474,null));
var inst_23476 = (new cljs.core.PersistentHashSet(null,inst_23475,null));
var inst_23477 = figwheel.client.focus_msgs.call(null,inst_23476,inst_23472);
var inst_23478 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23477);
var inst_23479 = cljs.core.first.call(null,inst_23477);
var inst_23480 = figwheel.client.autoload_QMARK_.call(null);
var state_23519__$1 = (function (){var statearr_23534 = state_23519;
(statearr_23534[(8)] = inst_23479);

(statearr_23534[(9)] = inst_23478);

return statearr_23534;
})();
if(cljs.core.truth_(inst_23480)){
var statearr_23535_23562 = state_23519__$1;
(statearr_23535_23562[(1)] = (8));

} else {
var statearr_23536_23563 = state_23519__$1;
(statearr_23536_23563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (14))){
var inst_23490 = (state_23519[(2)]);
var state_23519__$1 = state_23519;
var statearr_23537_23564 = state_23519__$1;
(statearr_23537_23564[(2)] = inst_23490);

(statearr_23537_23564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (16))){
var state_23519__$1 = state_23519;
var statearr_23538_23565 = state_23519__$1;
(statearr_23538_23565[(2)] = null);

(statearr_23538_23565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (10))){
var inst_23511 = (state_23519[(2)]);
var state_23519__$1 = (function (){var statearr_23539 = state_23519;
(statearr_23539[(11)] = inst_23511);

return statearr_23539;
})();
var statearr_23540_23566 = state_23519__$1;
(statearr_23540_23566[(2)] = null);

(statearr_23540_23566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23520 === (8))){
var inst_23478 = (state_23519[(9)]);
var inst_23482 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23478,opts);
var state_23519__$1 = state_23519;
if(cljs.core.truth_(inst_23482)){
var statearr_23541_23567 = state_23519__$1;
(statearr_23541_23567[(1)] = (11));

} else {
var statearr_23542_23568 = state_23519__$1;
(statearr_23542_23568[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18993__auto___23550,ch))
;
return ((function (switch__18881__auto__,c__18993__auto___23550,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18882__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18882__auto____0 = (function (){
var statearr_23546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23546[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18882__auto__);

(statearr_23546[(1)] = (1));

return statearr_23546;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18882__auto____1 = (function (state_23519){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_23519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e23547){if((e23547 instanceof Object)){
var ex__18885__auto__ = e23547;
var statearr_23548_23569 = state_23519;
(statearr_23548_23569[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23570 = state_23519;
state_23519 = G__23570;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18882__auto__ = function(state_23519){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18882__auto____1.call(this,state_23519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18882__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18882__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___23550,ch))
})();
var state__18995__auto__ = (function (){var statearr_23549 = f__18994__auto__.call(null);
(statearr_23549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___23550);

return statearr_23549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___23550,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23571_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23571_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23578 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23578){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23576 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23577 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23576,_STAR_print_newline_STAR_23577,base_path_23578){
return (function() { 
var G__23579__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23580__i = 0, G__23580__a = new Array(arguments.length -  0);
while (G__23580__i < G__23580__a.length) {G__23580__a[G__23580__i] = arguments[G__23580__i + 0]; ++G__23580__i;}
  args = new cljs.core.IndexedSeq(G__23580__a,0);
} 
return G__23579__delegate.call(this,args);};
G__23579.cljs$lang$maxFixedArity = 0;
G__23579.cljs$lang$applyTo = (function (arglist__23581){
var args = cljs.core.seq(arglist__23581);
return G__23579__delegate(args);
});
G__23579.cljs$core$IFn$_invoke$arity$variadic = G__23579__delegate;
return G__23579;
})()
;})(_STAR_print_fn_STAR_23576,_STAR_print_newline_STAR_23577,base_path_23578))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23577;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23576;
}}catch (e23575){if((e23575 instanceof Error)){
var e = e23575;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23578], null));
} else {
var e = e23575;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23578))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23582){
var map__23589 = p__23582;
var map__23589__$1 = ((((!((map__23589 == null)))?((((map__23589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23589):map__23589);
var opts = map__23589__$1;
var build_id = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23589,map__23589__$1,opts,build_id){
return (function (p__23591){
var vec__23592 = p__23591;
var map__23593 = cljs.core.nth.call(null,vec__23592,(0),null);
var map__23593__$1 = ((((!((map__23593 == null)))?((((map__23593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23593):map__23593);
var msg = map__23593__$1;
var msg_name = cljs.core.get.call(null,map__23593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23592,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23592,map__23593,map__23593__$1,msg,msg_name,_,map__23589,map__23589__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23592,map__23593,map__23593__$1,msg,msg_name,_,map__23589,map__23589__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23589,map__23589__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23599){
var vec__23600 = p__23599;
var map__23601 = cljs.core.nth.call(null,vec__23600,(0),null);
var map__23601__$1 = ((((!((map__23601 == null)))?((((map__23601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23601):map__23601);
var msg = map__23601__$1;
var msg_name = cljs.core.get.call(null,map__23601__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23600,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23603){
var map__23613 = p__23603;
var map__23613__$1 = ((((!((map__23613 == null)))?((((map__23613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);
var on_compile_warning = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23613,map__23613__$1,on_compile_warning,on_compile_fail){
return (function (p__23615){
var vec__23616 = p__23615;
var map__23617 = cljs.core.nth.call(null,vec__23616,(0),null);
var map__23617__$1 = ((((!((map__23617 == null)))?((((map__23617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23617):map__23617);
var msg = map__23617__$1;
var msg_name = cljs.core.get.call(null,map__23617__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23616,(1));
var pred__23619 = cljs.core._EQ_;
var expr__23620 = msg_name;
if(cljs.core.truth_(pred__23619.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23620))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23619.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23620))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23613,map__23613__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__,msg_hist,msg_names,msg){
return (function (state_23836){
var state_val_23837 = (state_23836[(1)]);
if((state_val_23837 === (7))){
var inst_23760 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23760)){
var statearr_23838_23884 = state_23836__$1;
(statearr_23838_23884[(1)] = (8));

} else {
var statearr_23839_23885 = state_23836__$1;
(statearr_23839_23885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (20))){
var inst_23830 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23840_23886 = state_23836__$1;
(statearr_23840_23886[(2)] = inst_23830);

(statearr_23840_23886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (27))){
var inst_23826 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23841_23887 = state_23836__$1;
(statearr_23841_23887[(2)] = inst_23826);

(statearr_23841_23887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (1))){
var inst_23753 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23753)){
var statearr_23842_23888 = state_23836__$1;
(statearr_23842_23888[(1)] = (2));

} else {
var statearr_23843_23889 = state_23836__$1;
(statearr_23843_23889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (24))){
var inst_23828 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23844_23890 = state_23836__$1;
(statearr_23844_23890[(2)] = inst_23828);

(statearr_23844_23890[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (4))){
var inst_23834 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23836__$1,inst_23834);
} else {
if((state_val_23837 === (15))){
var inst_23832 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23845_23891 = state_23836__$1;
(statearr_23845_23891[(2)] = inst_23832);

(statearr_23845_23891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (21))){
var inst_23791 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23846_23892 = state_23836__$1;
(statearr_23846_23892[(2)] = inst_23791);

(statearr_23846_23892[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (31))){
var inst_23815 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23815)){
var statearr_23847_23893 = state_23836__$1;
(statearr_23847_23893[(1)] = (34));

} else {
var statearr_23848_23894 = state_23836__$1;
(statearr_23848_23894[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (32))){
var inst_23824 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23849_23895 = state_23836__$1;
(statearr_23849_23895[(2)] = inst_23824);

(statearr_23849_23895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (33))){
var inst_23813 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23850_23896 = state_23836__$1;
(statearr_23850_23896[(2)] = inst_23813);

(statearr_23850_23896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (13))){
var inst_23774 = figwheel.client.heads_up.clear.call(null);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(16),inst_23774);
} else {
if((state_val_23837 === (22))){
var inst_23795 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23796 = figwheel.client.heads_up.append_message.call(null,inst_23795);
var state_23836__$1 = state_23836;
var statearr_23851_23897 = state_23836__$1;
(statearr_23851_23897[(2)] = inst_23796);

(statearr_23851_23897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (36))){
var inst_23822 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23852_23898 = state_23836__$1;
(statearr_23852_23898[(2)] = inst_23822);

(statearr_23852_23898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (29))){
var inst_23806 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23853_23899 = state_23836__$1;
(statearr_23853_23899[(2)] = inst_23806);

(statearr_23853_23899[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (6))){
var inst_23755 = (state_23836[(7)]);
var state_23836__$1 = state_23836;
var statearr_23854_23900 = state_23836__$1;
(statearr_23854_23900[(2)] = inst_23755);

(statearr_23854_23900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (28))){
var inst_23802 = (state_23836[(2)]);
var inst_23803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23804 = figwheel.client.heads_up.display_warning.call(null,inst_23803);
var state_23836__$1 = (function (){var statearr_23855 = state_23836;
(statearr_23855[(8)] = inst_23802);

return statearr_23855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(29),inst_23804);
} else {
if((state_val_23837 === (25))){
var inst_23800 = figwheel.client.heads_up.clear.call(null);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(28),inst_23800);
} else {
if((state_val_23837 === (34))){
var inst_23817 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(37),inst_23817);
} else {
if((state_val_23837 === (17))){
var inst_23782 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23856_23901 = state_23836__$1;
(statearr_23856_23901[(2)] = inst_23782);

(statearr_23856_23901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (3))){
var inst_23772 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23772)){
var statearr_23857_23902 = state_23836__$1;
(statearr_23857_23902[(1)] = (13));

} else {
var statearr_23858_23903 = state_23836__$1;
(statearr_23858_23903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (12))){
var inst_23768 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23859_23904 = state_23836__$1;
(statearr_23859_23904[(2)] = inst_23768);

(statearr_23859_23904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (2))){
var inst_23755 = (state_23836[(7)]);
var inst_23755__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23836__$1 = (function (){var statearr_23860 = state_23836;
(statearr_23860[(7)] = inst_23755__$1);

return statearr_23860;
})();
if(cljs.core.truth_(inst_23755__$1)){
var statearr_23861_23905 = state_23836__$1;
(statearr_23861_23905[(1)] = (5));

} else {
var statearr_23862_23906 = state_23836__$1;
(statearr_23862_23906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (23))){
var inst_23798 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23798)){
var statearr_23863_23907 = state_23836__$1;
(statearr_23863_23907[(1)] = (25));

} else {
var statearr_23864_23908 = state_23836__$1;
(statearr_23864_23908[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (35))){
var state_23836__$1 = state_23836;
var statearr_23865_23909 = state_23836__$1;
(statearr_23865_23909[(2)] = null);

(statearr_23865_23909[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (19))){
var inst_23793 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23793)){
var statearr_23866_23910 = state_23836__$1;
(statearr_23866_23910[(1)] = (22));

} else {
var statearr_23867_23911 = state_23836__$1;
(statearr_23867_23911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (11))){
var inst_23764 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23868_23912 = state_23836__$1;
(statearr_23868_23912[(2)] = inst_23764);

(statearr_23868_23912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (9))){
var inst_23766 = figwheel.client.heads_up.clear.call(null);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(12),inst_23766);
} else {
if((state_val_23837 === (5))){
var inst_23757 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23836__$1 = state_23836;
var statearr_23869_23913 = state_23836__$1;
(statearr_23869_23913[(2)] = inst_23757);

(statearr_23869_23913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (14))){
var inst_23784 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23784)){
var statearr_23870_23914 = state_23836__$1;
(statearr_23870_23914[(1)] = (18));

} else {
var statearr_23871_23915 = state_23836__$1;
(statearr_23871_23915[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (26))){
var inst_23808 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23836__$1 = state_23836;
if(cljs.core.truth_(inst_23808)){
var statearr_23872_23916 = state_23836__$1;
(statearr_23872_23916[(1)] = (30));

} else {
var statearr_23873_23917 = state_23836__$1;
(statearr_23873_23917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (16))){
var inst_23776 = (state_23836[(2)]);
var inst_23777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23778 = figwheel.client.format_messages.call(null,inst_23777);
var inst_23779 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23780 = figwheel.client.heads_up.display_error.call(null,inst_23778,inst_23779);
var state_23836__$1 = (function (){var statearr_23874 = state_23836;
(statearr_23874[(9)] = inst_23776);

return statearr_23874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(17),inst_23780);
} else {
if((state_val_23837 === (30))){
var inst_23810 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23811 = figwheel.client.heads_up.display_warning.call(null,inst_23810);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(33),inst_23811);
} else {
if((state_val_23837 === (10))){
var inst_23770 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23875_23918 = state_23836__$1;
(statearr_23875_23918[(2)] = inst_23770);

(statearr_23875_23918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (18))){
var inst_23786 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23787 = figwheel.client.format_messages.call(null,inst_23786);
var inst_23788 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23789 = figwheel.client.heads_up.display_error.call(null,inst_23787,inst_23788);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(21),inst_23789);
} else {
if((state_val_23837 === (37))){
var inst_23819 = (state_23836[(2)]);
var state_23836__$1 = state_23836;
var statearr_23876_23919 = state_23836__$1;
(statearr_23876_23919[(2)] = inst_23819);

(statearr_23876_23919[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23837 === (8))){
var inst_23762 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23836__$1 = state_23836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23836__$1,(11),inst_23762);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18993__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18881__auto__,c__18993__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto____0 = (function (){
var statearr_23880 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23880[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto__);

(statearr_23880[(1)] = (1));

return statearr_23880;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto____1 = (function (state_23836){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_23836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e23881){if((e23881 instanceof Object)){
var ex__18885__auto__ = e23881;
var statearr_23882_23920 = state_23836;
(statearr_23882_23920[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23921 = state_23836;
state_23836 = G__23921;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto__ = function(state_23836){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto____1.call(this,state_23836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__,msg_hist,msg_names,msg))
})();
var state__18995__auto__ = (function (){var statearr_23883 = f__18994__auto__.call(null);
(statearr_23883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_23883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__,msg_hist,msg_names,msg))
);

return c__18993__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18993__auto___23984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___23984,ch){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___23984,ch){
return (function (state_23967){
var state_val_23968 = (state_23967[(1)]);
if((state_val_23968 === (1))){
var state_23967__$1 = state_23967;
var statearr_23969_23985 = state_23967__$1;
(statearr_23969_23985[(2)] = null);

(statearr_23969_23985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (2))){
var state_23967__$1 = state_23967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23967__$1,(4),ch);
} else {
if((state_val_23968 === (3))){
var inst_23965 = (state_23967[(2)]);
var state_23967__$1 = state_23967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23967__$1,inst_23965);
} else {
if((state_val_23968 === (4))){
var inst_23955 = (state_23967[(7)]);
var inst_23955__$1 = (state_23967[(2)]);
var state_23967__$1 = (function (){var statearr_23970 = state_23967;
(statearr_23970[(7)] = inst_23955__$1);

return statearr_23970;
})();
if(cljs.core.truth_(inst_23955__$1)){
var statearr_23971_23986 = state_23967__$1;
(statearr_23971_23986[(1)] = (5));

} else {
var statearr_23972_23987 = state_23967__$1;
(statearr_23972_23987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (5))){
var inst_23955 = (state_23967[(7)]);
var inst_23957 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23955);
var state_23967__$1 = state_23967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23967__$1,(8),inst_23957);
} else {
if((state_val_23968 === (6))){
var state_23967__$1 = state_23967;
var statearr_23973_23988 = state_23967__$1;
(statearr_23973_23988[(2)] = null);

(statearr_23973_23988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (7))){
var inst_23963 = (state_23967[(2)]);
var state_23967__$1 = state_23967;
var statearr_23974_23989 = state_23967__$1;
(statearr_23974_23989[(2)] = inst_23963);

(statearr_23974_23989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (8))){
var inst_23959 = (state_23967[(2)]);
var state_23967__$1 = (function (){var statearr_23975 = state_23967;
(statearr_23975[(8)] = inst_23959);

return statearr_23975;
})();
var statearr_23976_23990 = state_23967__$1;
(statearr_23976_23990[(2)] = null);

(statearr_23976_23990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18993__auto___23984,ch))
;
return ((function (switch__18881__auto__,c__18993__auto___23984,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18882__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18882__auto____0 = (function (){
var statearr_23980 = [null,null,null,null,null,null,null,null,null];
(statearr_23980[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18882__auto__);

(statearr_23980[(1)] = (1));

return statearr_23980;
});
var figwheel$client$heads_up_plugin_$_state_machine__18882__auto____1 = (function (state_23967){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_23967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e23981){if((e23981 instanceof Object)){
var ex__18885__auto__ = e23981;
var statearr_23982_23991 = state_23967;
(statearr_23982_23991[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23992 = state_23967;
state_23967 = G__23992;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18882__auto__ = function(state_23967){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18882__auto____1.call(this,state_23967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18882__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18882__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___23984,ch))
})();
var state__18995__auto__ = (function (){var statearr_23983 = f__18994__auto__.call(null);
(statearr_23983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___23984);

return statearr_23983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___23984,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_24013){
var state_val_24014 = (state_24013[(1)]);
if((state_val_24014 === (1))){
var inst_24008 = cljs.core.async.timeout.call(null,(3000));
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24013__$1,(2),inst_24008);
} else {
if((state_val_24014 === (2))){
var inst_24010 = (state_24013[(2)]);
var inst_24011 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24013__$1 = (function (){var statearr_24015 = state_24013;
(statearr_24015[(7)] = inst_24010);

return statearr_24015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24013__$1,inst_24011);
} else {
return null;
}
}
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18882__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18882__auto____0 = (function (){
var statearr_24019 = [null,null,null,null,null,null,null,null];
(statearr_24019[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18882__auto__);

(statearr_24019[(1)] = (1));

return statearr_24019;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18882__auto____1 = (function (state_24013){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_24013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e24020){if((e24020 instanceof Object)){
var ex__18885__auto__ = e24020;
var statearr_24021_24023 = state_24013;
(statearr_24021_24023[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24024 = state_24013;
state_24013 = G__24024;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18882__auto__ = function(state_24013){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18882__auto____1.call(this,state_24013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18882__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18882__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_24022 = f__18994__auto__.call(null);
(statearr_24022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24025){
var map__24032 = p__24025;
var map__24032__$1 = ((((!((map__24032 == null)))?((((map__24032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24032):map__24032);
var ed = map__24032__$1;
var formatted_exception = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24034_24038 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24035_24039 = null;
var count__24036_24040 = (0);
var i__24037_24041 = (0);
while(true){
if((i__24037_24041 < count__24036_24040)){
var msg_24042 = cljs.core._nth.call(null,chunk__24035_24039,i__24037_24041);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24042);

var G__24043 = seq__24034_24038;
var G__24044 = chunk__24035_24039;
var G__24045 = count__24036_24040;
var G__24046 = (i__24037_24041 + (1));
seq__24034_24038 = G__24043;
chunk__24035_24039 = G__24044;
count__24036_24040 = G__24045;
i__24037_24041 = G__24046;
continue;
} else {
var temp__4425__auto___24047 = cljs.core.seq.call(null,seq__24034_24038);
if(temp__4425__auto___24047){
var seq__24034_24048__$1 = temp__4425__auto___24047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24034_24048__$1)){
var c__17629__auto___24049 = cljs.core.chunk_first.call(null,seq__24034_24048__$1);
var G__24050 = cljs.core.chunk_rest.call(null,seq__24034_24048__$1);
var G__24051 = c__17629__auto___24049;
var G__24052 = cljs.core.count.call(null,c__17629__auto___24049);
var G__24053 = (0);
seq__24034_24038 = G__24050;
chunk__24035_24039 = G__24051;
count__24036_24040 = G__24052;
i__24037_24041 = G__24053;
continue;
} else {
var msg_24054 = cljs.core.first.call(null,seq__24034_24048__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24054);

var G__24055 = cljs.core.next.call(null,seq__24034_24048__$1);
var G__24056 = null;
var G__24057 = (0);
var G__24058 = (0);
seq__24034_24038 = G__24055;
chunk__24035_24039 = G__24056;
count__24036_24040 = G__24057;
i__24037_24041 = G__24058;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24059){
var map__24062 = p__24059;
var map__24062__$1 = ((((!((map__24062 == null)))?((((map__24062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24062):map__24062);
var w = map__24062__$1;
var message = cljs.core.get.call(null,map__24062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24070 = cljs.core.seq.call(null,plugins);
var chunk__24071 = null;
var count__24072 = (0);
var i__24073 = (0);
while(true){
if((i__24073 < count__24072)){
var vec__24074 = cljs.core._nth.call(null,chunk__24071,i__24073);
var k = cljs.core.nth.call(null,vec__24074,(0),null);
var plugin = cljs.core.nth.call(null,vec__24074,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24076 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24070,chunk__24071,count__24072,i__24073,pl_24076,vec__24074,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24076.call(null,msg_hist);
});})(seq__24070,chunk__24071,count__24072,i__24073,pl_24076,vec__24074,k,plugin))
);
} else {
}

var G__24077 = seq__24070;
var G__24078 = chunk__24071;
var G__24079 = count__24072;
var G__24080 = (i__24073 + (1));
seq__24070 = G__24077;
chunk__24071 = G__24078;
count__24072 = G__24079;
i__24073 = G__24080;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24070);
if(temp__4425__auto__){
var seq__24070__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24070__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24070__$1);
var G__24081 = cljs.core.chunk_rest.call(null,seq__24070__$1);
var G__24082 = c__17629__auto__;
var G__24083 = cljs.core.count.call(null,c__17629__auto__);
var G__24084 = (0);
seq__24070 = G__24081;
chunk__24071 = G__24082;
count__24072 = G__24083;
i__24073 = G__24084;
continue;
} else {
var vec__24075 = cljs.core.first.call(null,seq__24070__$1);
var k = cljs.core.nth.call(null,vec__24075,(0),null);
var plugin = cljs.core.nth.call(null,vec__24075,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24085 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24070,chunk__24071,count__24072,i__24073,pl_24085,vec__24075,k,plugin,seq__24070__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24085.call(null,msg_hist);
});})(seq__24070,chunk__24071,count__24072,i__24073,pl_24085,vec__24075,k,plugin,seq__24070__$1,temp__4425__auto__))
);
} else {
}

var G__24086 = cljs.core.next.call(null,seq__24070__$1);
var G__24087 = null;
var G__24088 = (0);
var G__24089 = (0);
seq__24070 = G__24086;
chunk__24071 = G__24087;
count__24072 = G__24088;
i__24073 = G__24089;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24090 = [];
var len__17884__auto___24093 = arguments.length;
var i__17885__auto___24094 = (0);
while(true){
if((i__17885__auto___24094 < len__17884__auto___24093)){
args24090.push((arguments[i__17885__auto___24094]));

var G__24095 = (i__17885__auto___24094 + (1));
i__17885__auto___24094 = G__24095;
continue;
} else {
}
break;
}

var G__24092 = args24090.length;
switch (G__24092) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24090.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___24101 = arguments.length;
var i__17885__auto___24102 = (0);
while(true){
if((i__17885__auto___24102 < len__17884__auto___24101)){
args__17891__auto__.push((arguments[i__17885__auto___24102]));

var G__24103 = (i__17885__auto___24102 + (1));
i__17885__auto___24102 = G__24103;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24098){
var map__24099 = p__24098;
var map__24099__$1 = ((((!((map__24099 == null)))?((((map__24099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24099):map__24099);
var opts = map__24099__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24097){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24097));
});

//# sourceMappingURL=client.js.map?rel=1450440274900