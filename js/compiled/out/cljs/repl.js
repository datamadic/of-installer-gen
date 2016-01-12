// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23329_23343 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23330_23344 = null;
var count__23331_23345 = (0);
var i__23332_23346 = (0);
while(true){
if((i__23332_23346 < count__23331_23345)){
var f_23347 = cljs.core._nth.call(null,chunk__23330_23344,i__23332_23346);
cljs.core.println.call(null,"  ",f_23347);

var G__23348 = seq__23329_23343;
var G__23349 = chunk__23330_23344;
var G__23350 = count__23331_23345;
var G__23351 = (i__23332_23346 + (1));
seq__23329_23343 = G__23348;
chunk__23330_23344 = G__23349;
count__23331_23345 = G__23350;
i__23332_23346 = G__23351;
continue;
} else {
var temp__4425__auto___23352 = cljs.core.seq.call(null,seq__23329_23343);
if(temp__4425__auto___23352){
var seq__23329_23353__$1 = temp__4425__auto___23352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23329_23353__$1)){
var c__17629__auto___23354 = cljs.core.chunk_first.call(null,seq__23329_23353__$1);
var G__23355 = cljs.core.chunk_rest.call(null,seq__23329_23353__$1);
var G__23356 = c__17629__auto___23354;
var G__23357 = cljs.core.count.call(null,c__17629__auto___23354);
var G__23358 = (0);
seq__23329_23343 = G__23355;
chunk__23330_23344 = G__23356;
count__23331_23345 = G__23357;
i__23332_23346 = G__23358;
continue;
} else {
var f_23359 = cljs.core.first.call(null,seq__23329_23353__$1);
cljs.core.println.call(null,"  ",f_23359);

var G__23360 = cljs.core.next.call(null,seq__23329_23353__$1);
var G__23361 = null;
var G__23362 = (0);
var G__23363 = (0);
seq__23329_23343 = G__23360;
chunk__23330_23344 = G__23361;
count__23331_23345 = G__23362;
i__23332_23346 = G__23363;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23364 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23364);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23364)))?cljs.core.second.call(null,arglists_23364):arglists_23364));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23334 = null;
var count__23335 = (0);
var i__23336 = (0);
while(true){
if((i__23336 < count__23335)){
var vec__23337 = cljs.core._nth.call(null,chunk__23334,i__23336);
var name = cljs.core.nth.call(null,vec__23337,(0),null);
var map__23338 = cljs.core.nth.call(null,vec__23337,(1),null);
var map__23338__$1 = ((((!((map__23338 == null)))?((((map__23338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23338):map__23338);
var doc = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23338__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23365 = seq__23333;
var G__23366 = chunk__23334;
var G__23367 = count__23335;
var G__23368 = (i__23336 + (1));
seq__23333 = G__23365;
chunk__23334 = G__23366;
count__23335 = G__23367;
i__23336 = G__23368;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23333);
if(temp__4425__auto__){
var seq__23333__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23333__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23333__$1);
var G__23369 = cljs.core.chunk_rest.call(null,seq__23333__$1);
var G__23370 = c__17629__auto__;
var G__23371 = cljs.core.count.call(null,c__17629__auto__);
var G__23372 = (0);
seq__23333 = G__23369;
chunk__23334 = G__23370;
count__23335 = G__23371;
i__23336 = G__23372;
continue;
} else {
var vec__23340 = cljs.core.first.call(null,seq__23333__$1);
var name = cljs.core.nth.call(null,vec__23340,(0),null);
var map__23341 = cljs.core.nth.call(null,vec__23340,(1),null);
var map__23341__$1 = ((((!((map__23341 == null)))?((((map__23341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23341):map__23341);
var doc = cljs.core.get.call(null,map__23341__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23341__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23373 = cljs.core.next.call(null,seq__23333__$1);
var G__23374 = null;
var G__23375 = (0);
var G__23376 = (0);
seq__23333 = G__23373;
chunk__23334 = G__23374;
count__23335 = G__23375;
i__23336 = G__23376;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1450440274577