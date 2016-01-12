// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22305_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22305_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22310 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22311 = null;
var count__22312 = (0);
var i__22313 = (0);
while(true){
if((i__22313 < count__22312)){
var n = cljs.core._nth.call(null,chunk__22311,i__22313);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22314 = seq__22310;
var G__22315 = chunk__22311;
var G__22316 = count__22312;
var G__22317 = (i__22313 + (1));
seq__22310 = G__22314;
chunk__22311 = G__22315;
count__22312 = G__22316;
i__22313 = G__22317;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22310);
if(temp__4425__auto__){
var seq__22310__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22310__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22310__$1);
var G__22318 = cljs.core.chunk_rest.call(null,seq__22310__$1);
var G__22319 = c__17629__auto__;
var G__22320 = cljs.core.count.call(null,c__17629__auto__);
var G__22321 = (0);
seq__22310 = G__22318;
chunk__22311 = G__22319;
count__22312 = G__22320;
i__22313 = G__22321;
continue;
} else {
var n = cljs.core.first.call(null,seq__22310__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22322 = cljs.core.next.call(null,seq__22310__$1);
var G__22323 = null;
var G__22324 = (0);
var G__22325 = (0);
seq__22310 = G__22322;
chunk__22311 = G__22323;
count__22312 = G__22324;
i__22313 = G__22325;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22364_22371 = cljs.core.seq.call(null,deps);
var chunk__22365_22372 = null;
var count__22366_22373 = (0);
var i__22367_22374 = (0);
while(true){
if((i__22367_22374 < count__22366_22373)){
var dep_22375 = cljs.core._nth.call(null,chunk__22365_22372,i__22367_22374);
topo_sort_helper_STAR_.call(null,dep_22375,(depth + (1)),state);

var G__22376 = seq__22364_22371;
var G__22377 = chunk__22365_22372;
var G__22378 = count__22366_22373;
var G__22379 = (i__22367_22374 + (1));
seq__22364_22371 = G__22376;
chunk__22365_22372 = G__22377;
count__22366_22373 = G__22378;
i__22367_22374 = G__22379;
continue;
} else {
var temp__4425__auto___22380 = cljs.core.seq.call(null,seq__22364_22371);
if(temp__4425__auto___22380){
var seq__22364_22381__$1 = temp__4425__auto___22380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22364_22381__$1)){
var c__17629__auto___22382 = cljs.core.chunk_first.call(null,seq__22364_22381__$1);
var G__22383 = cljs.core.chunk_rest.call(null,seq__22364_22381__$1);
var G__22384 = c__17629__auto___22382;
var G__22385 = cljs.core.count.call(null,c__17629__auto___22382);
var G__22386 = (0);
seq__22364_22371 = G__22383;
chunk__22365_22372 = G__22384;
count__22366_22373 = G__22385;
i__22367_22374 = G__22386;
continue;
} else {
var dep_22387 = cljs.core.first.call(null,seq__22364_22381__$1);
topo_sort_helper_STAR_.call(null,dep_22387,(depth + (1)),state);

var G__22388 = cljs.core.next.call(null,seq__22364_22381__$1);
var G__22389 = null;
var G__22390 = (0);
var G__22391 = (0);
seq__22364_22371 = G__22388;
chunk__22365_22372 = G__22389;
count__22366_22373 = G__22390;
i__22367_22374 = G__22391;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22368){
var vec__22370 = p__22368;
var x = cljs.core.nth.call(null,vec__22370,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22370,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22370,x,xs,get_deps__$1){
return (function (p1__22326_SHARP_){
return clojure.set.difference.call(null,p1__22326_SHARP_,x);
});})(vec__22370,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22404 = cljs.core.seq.call(null,provides);
var chunk__22405 = null;
var count__22406 = (0);
var i__22407 = (0);
while(true){
if((i__22407 < count__22406)){
var prov = cljs.core._nth.call(null,chunk__22405,i__22407);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22408_22416 = cljs.core.seq.call(null,requires);
var chunk__22409_22417 = null;
var count__22410_22418 = (0);
var i__22411_22419 = (0);
while(true){
if((i__22411_22419 < count__22410_22418)){
var req_22420 = cljs.core._nth.call(null,chunk__22409_22417,i__22411_22419);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22420,prov);

var G__22421 = seq__22408_22416;
var G__22422 = chunk__22409_22417;
var G__22423 = count__22410_22418;
var G__22424 = (i__22411_22419 + (1));
seq__22408_22416 = G__22421;
chunk__22409_22417 = G__22422;
count__22410_22418 = G__22423;
i__22411_22419 = G__22424;
continue;
} else {
var temp__4425__auto___22425 = cljs.core.seq.call(null,seq__22408_22416);
if(temp__4425__auto___22425){
var seq__22408_22426__$1 = temp__4425__auto___22425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22408_22426__$1)){
var c__17629__auto___22427 = cljs.core.chunk_first.call(null,seq__22408_22426__$1);
var G__22428 = cljs.core.chunk_rest.call(null,seq__22408_22426__$1);
var G__22429 = c__17629__auto___22427;
var G__22430 = cljs.core.count.call(null,c__17629__auto___22427);
var G__22431 = (0);
seq__22408_22416 = G__22428;
chunk__22409_22417 = G__22429;
count__22410_22418 = G__22430;
i__22411_22419 = G__22431;
continue;
} else {
var req_22432 = cljs.core.first.call(null,seq__22408_22426__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22432,prov);

var G__22433 = cljs.core.next.call(null,seq__22408_22426__$1);
var G__22434 = null;
var G__22435 = (0);
var G__22436 = (0);
seq__22408_22416 = G__22433;
chunk__22409_22417 = G__22434;
count__22410_22418 = G__22435;
i__22411_22419 = G__22436;
continue;
}
} else {
}
}
break;
}

var G__22437 = seq__22404;
var G__22438 = chunk__22405;
var G__22439 = count__22406;
var G__22440 = (i__22407 + (1));
seq__22404 = G__22437;
chunk__22405 = G__22438;
count__22406 = G__22439;
i__22407 = G__22440;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22404);
if(temp__4425__auto__){
var seq__22404__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22404__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22404__$1);
var G__22441 = cljs.core.chunk_rest.call(null,seq__22404__$1);
var G__22442 = c__17629__auto__;
var G__22443 = cljs.core.count.call(null,c__17629__auto__);
var G__22444 = (0);
seq__22404 = G__22441;
chunk__22405 = G__22442;
count__22406 = G__22443;
i__22407 = G__22444;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22404__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22412_22445 = cljs.core.seq.call(null,requires);
var chunk__22413_22446 = null;
var count__22414_22447 = (0);
var i__22415_22448 = (0);
while(true){
if((i__22415_22448 < count__22414_22447)){
var req_22449 = cljs.core._nth.call(null,chunk__22413_22446,i__22415_22448);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22449,prov);

var G__22450 = seq__22412_22445;
var G__22451 = chunk__22413_22446;
var G__22452 = count__22414_22447;
var G__22453 = (i__22415_22448 + (1));
seq__22412_22445 = G__22450;
chunk__22413_22446 = G__22451;
count__22414_22447 = G__22452;
i__22415_22448 = G__22453;
continue;
} else {
var temp__4425__auto___22454__$1 = cljs.core.seq.call(null,seq__22412_22445);
if(temp__4425__auto___22454__$1){
var seq__22412_22455__$1 = temp__4425__auto___22454__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22412_22455__$1)){
var c__17629__auto___22456 = cljs.core.chunk_first.call(null,seq__22412_22455__$1);
var G__22457 = cljs.core.chunk_rest.call(null,seq__22412_22455__$1);
var G__22458 = c__17629__auto___22456;
var G__22459 = cljs.core.count.call(null,c__17629__auto___22456);
var G__22460 = (0);
seq__22412_22445 = G__22457;
chunk__22413_22446 = G__22458;
count__22414_22447 = G__22459;
i__22415_22448 = G__22460;
continue;
} else {
var req_22461 = cljs.core.first.call(null,seq__22412_22455__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22461,prov);

var G__22462 = cljs.core.next.call(null,seq__22412_22455__$1);
var G__22463 = null;
var G__22464 = (0);
var G__22465 = (0);
seq__22412_22445 = G__22462;
chunk__22413_22446 = G__22463;
count__22414_22447 = G__22464;
i__22415_22448 = G__22465;
continue;
}
} else {
}
}
break;
}

var G__22466 = cljs.core.next.call(null,seq__22404__$1);
var G__22467 = null;
var G__22468 = (0);
var G__22469 = (0);
seq__22404 = G__22466;
chunk__22405 = G__22467;
count__22406 = G__22468;
i__22407 = G__22469;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22474_22478 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22475_22479 = null;
var count__22476_22480 = (0);
var i__22477_22481 = (0);
while(true){
if((i__22477_22481 < count__22476_22480)){
var ns_22482 = cljs.core._nth.call(null,chunk__22475_22479,i__22477_22481);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22482);

var G__22483 = seq__22474_22478;
var G__22484 = chunk__22475_22479;
var G__22485 = count__22476_22480;
var G__22486 = (i__22477_22481 + (1));
seq__22474_22478 = G__22483;
chunk__22475_22479 = G__22484;
count__22476_22480 = G__22485;
i__22477_22481 = G__22486;
continue;
} else {
var temp__4425__auto___22487 = cljs.core.seq.call(null,seq__22474_22478);
if(temp__4425__auto___22487){
var seq__22474_22488__$1 = temp__4425__auto___22487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22474_22488__$1)){
var c__17629__auto___22489 = cljs.core.chunk_first.call(null,seq__22474_22488__$1);
var G__22490 = cljs.core.chunk_rest.call(null,seq__22474_22488__$1);
var G__22491 = c__17629__auto___22489;
var G__22492 = cljs.core.count.call(null,c__17629__auto___22489);
var G__22493 = (0);
seq__22474_22478 = G__22490;
chunk__22475_22479 = G__22491;
count__22476_22480 = G__22492;
i__22477_22481 = G__22493;
continue;
} else {
var ns_22494 = cljs.core.first.call(null,seq__22474_22488__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22494);

var G__22495 = cljs.core.next.call(null,seq__22474_22488__$1);
var G__22496 = null;
var G__22497 = (0);
var G__22498 = (0);
seq__22474_22478 = G__22495;
chunk__22475_22479 = G__22496;
count__22476_22480 = G__22497;
i__22477_22481 = G__22498;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22499__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22500__i = 0, G__22500__a = new Array(arguments.length -  0);
while (G__22500__i < G__22500__a.length) {G__22500__a[G__22500__i] = arguments[G__22500__i + 0]; ++G__22500__i;}
  args = new cljs.core.IndexedSeq(G__22500__a,0);
} 
return G__22499__delegate.call(this,args);};
G__22499.cljs$lang$maxFixedArity = 0;
G__22499.cljs$lang$applyTo = (function (arglist__22501){
var args = cljs.core.seq(arglist__22501);
return G__22499__delegate(args);
});
G__22499.cljs$core$IFn$_invoke$arity$variadic = G__22499__delegate;
return G__22499;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22503 = cljs.core._EQ_;
var expr__22504 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22503.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22504))){
var path_parts = ((function (pred__22503,expr__22504){
return (function (p1__22502_SHARP_){
return clojure.string.split.call(null,p1__22502_SHARP_,/[\/\\]/);
});})(pred__22503,expr__22504))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22503,expr__22504){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22506){if((e22506 instanceof Error)){
var e = e22506;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22506;

}
}})());
});
;})(path_parts,sep,root,pred__22503,expr__22504))
} else {
if(cljs.core.truth_(pred__22503.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22504))){
return ((function (pred__22503,expr__22504){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22503,expr__22504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22503,expr__22504))
);

return deferred.addErrback(((function (deferred,pred__22503,expr__22504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22503,expr__22504))
);
});
;})(pred__22503,expr__22504))
} else {
return ((function (pred__22503,expr__22504){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22503,expr__22504))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22507,callback){
var map__22510 = p__22507;
var map__22510__$1 = ((((!((map__22510 == null)))?((((map__22510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22510):map__22510);
var file_msg = map__22510__$1;
var request_url = cljs.core.get.call(null,map__22510__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22510,map__22510__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22510,map__22510__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_22534){
var state_val_22535 = (state_22534[(1)]);
if((state_val_22535 === (7))){
var inst_22530 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
var statearr_22536_22556 = state_22534__$1;
(statearr_22536_22556[(2)] = inst_22530);

(statearr_22536_22556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (1))){
var state_22534__$1 = state_22534;
var statearr_22537_22557 = state_22534__$1;
(statearr_22537_22557[(2)] = null);

(statearr_22537_22557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (4))){
var inst_22514 = (state_22534[(7)]);
var inst_22514__$1 = (state_22534[(2)]);
var state_22534__$1 = (function (){var statearr_22538 = state_22534;
(statearr_22538[(7)] = inst_22514__$1);

return statearr_22538;
})();
if(cljs.core.truth_(inst_22514__$1)){
var statearr_22539_22558 = state_22534__$1;
(statearr_22539_22558[(1)] = (5));

} else {
var statearr_22540_22559 = state_22534__$1;
(statearr_22540_22559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (6))){
var state_22534__$1 = state_22534;
var statearr_22541_22560 = state_22534__$1;
(statearr_22541_22560[(2)] = null);

(statearr_22541_22560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (3))){
var inst_22532 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22534__$1,inst_22532);
} else {
if((state_val_22535 === (2))){
var state_22534__$1 = state_22534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22534__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22535 === (11))){
var inst_22526 = (state_22534[(2)]);
var state_22534__$1 = (function (){var statearr_22542 = state_22534;
(statearr_22542[(8)] = inst_22526);

return statearr_22542;
})();
var statearr_22543_22561 = state_22534__$1;
(statearr_22543_22561[(2)] = null);

(statearr_22543_22561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (9))){
var inst_22518 = (state_22534[(9)]);
var inst_22520 = (state_22534[(10)]);
var inst_22522 = inst_22520.call(null,inst_22518);
var state_22534__$1 = state_22534;
var statearr_22544_22562 = state_22534__$1;
(statearr_22544_22562[(2)] = inst_22522);

(statearr_22544_22562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (5))){
var inst_22514 = (state_22534[(7)]);
var inst_22516 = figwheel.client.file_reloading.blocking_load.call(null,inst_22514);
var state_22534__$1 = state_22534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22534__$1,(8),inst_22516);
} else {
if((state_val_22535 === (10))){
var inst_22518 = (state_22534[(9)]);
var inst_22524 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22518);
var state_22534__$1 = state_22534;
var statearr_22545_22563 = state_22534__$1;
(statearr_22545_22563[(2)] = inst_22524);

(statearr_22545_22563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (8))){
var inst_22514 = (state_22534[(7)]);
var inst_22520 = (state_22534[(10)]);
var inst_22518 = (state_22534[(2)]);
var inst_22519 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22520__$1 = cljs.core.get.call(null,inst_22519,inst_22514);
var state_22534__$1 = (function (){var statearr_22546 = state_22534;
(statearr_22546[(9)] = inst_22518);

(statearr_22546[(10)] = inst_22520__$1);

return statearr_22546;
})();
if(cljs.core.truth_(inst_22520__$1)){
var statearr_22547_22564 = state_22534__$1;
(statearr_22547_22564[(1)] = (9));

} else {
var statearr_22548_22565 = state_22534__$1;
(statearr_22548_22565[(1)] = (10));

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
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18882__auto__ = null;
var figwheel$client$file_reloading$state_machine__18882__auto____0 = (function (){
var statearr_22552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22552[(0)] = figwheel$client$file_reloading$state_machine__18882__auto__);

(statearr_22552[(1)] = (1));

return statearr_22552;
});
var figwheel$client$file_reloading$state_machine__18882__auto____1 = (function (state_22534){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22553){if((e22553 instanceof Object)){
var ex__18885__auto__ = e22553;
var statearr_22554_22566 = state_22534;
(statearr_22554_22566[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22567 = state_22534;
state_22534 = G__22567;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18882__auto__ = function(state_22534){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18882__auto____1.call(this,state_22534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18882__auto____0;
figwheel$client$file_reloading$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18882__auto____1;
return figwheel$client$file_reloading$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_22555 = f__18994__auto__.call(null);
(statearr_22555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_22555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22568,callback){
var map__22571 = p__22568;
var map__22571__$1 = ((((!((map__22571 == null)))?((((map__22571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22571):map__22571);
var file_msg = map__22571__$1;
var namespace = cljs.core.get.call(null,map__22571__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22571,map__22571__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22571,map__22571__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22573){
var map__22576 = p__22573;
var map__22576__$1 = ((((!((map__22576 == null)))?((((map__22576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22576):map__22576);
var file_msg = map__22576__$1;
var namespace = cljs.core.get.call(null,map__22576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22578,callback){
var map__22581 = p__22578;
var map__22581__$1 = ((((!((map__22581 == null)))?((((map__22581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22581):map__22581);
var file_msg = map__22581__$1;
var request_url = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18993__auto___22669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___22669,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___22669,out){
return (function (state_22651){
var state_val_22652 = (state_22651[(1)]);
if((state_val_22652 === (1))){
var inst_22629 = cljs.core.nth.call(null,files,(0),null);
var inst_22630 = cljs.core.nthnext.call(null,files,(1));
var inst_22631 = files;
var state_22651__$1 = (function (){var statearr_22653 = state_22651;
(statearr_22653[(7)] = inst_22629);

(statearr_22653[(8)] = inst_22631);

(statearr_22653[(9)] = inst_22630);

return statearr_22653;
})();
var statearr_22654_22670 = state_22651__$1;
(statearr_22654_22670[(2)] = null);

(statearr_22654_22670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (2))){
var inst_22634 = (state_22651[(10)]);
var inst_22631 = (state_22651[(8)]);
var inst_22634__$1 = cljs.core.nth.call(null,inst_22631,(0),null);
var inst_22635 = cljs.core.nthnext.call(null,inst_22631,(1));
var inst_22636 = (inst_22634__$1 == null);
var inst_22637 = cljs.core.not.call(null,inst_22636);
var state_22651__$1 = (function (){var statearr_22655 = state_22651;
(statearr_22655[(10)] = inst_22634__$1);

(statearr_22655[(11)] = inst_22635);

return statearr_22655;
})();
if(inst_22637){
var statearr_22656_22671 = state_22651__$1;
(statearr_22656_22671[(1)] = (4));

} else {
var statearr_22657_22672 = state_22651__$1;
(statearr_22657_22672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (3))){
var inst_22649 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22651__$1,inst_22649);
} else {
if((state_val_22652 === (4))){
var inst_22634 = (state_22651[(10)]);
var inst_22639 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22634);
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22651__$1,(7),inst_22639);
} else {
if((state_val_22652 === (5))){
var inst_22645 = cljs.core.async.close_BANG_.call(null,out);
var state_22651__$1 = state_22651;
var statearr_22658_22673 = state_22651__$1;
(statearr_22658_22673[(2)] = inst_22645);

(statearr_22658_22673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (6))){
var inst_22647 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
var statearr_22659_22674 = state_22651__$1;
(statearr_22659_22674[(2)] = inst_22647);

(statearr_22659_22674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (7))){
var inst_22635 = (state_22651[(11)]);
var inst_22641 = (state_22651[(2)]);
var inst_22642 = cljs.core.async.put_BANG_.call(null,out,inst_22641);
var inst_22631 = inst_22635;
var state_22651__$1 = (function (){var statearr_22660 = state_22651;
(statearr_22660[(12)] = inst_22642);

(statearr_22660[(8)] = inst_22631);

return statearr_22660;
})();
var statearr_22661_22675 = state_22651__$1;
(statearr_22661_22675[(2)] = null);

(statearr_22661_22675[(1)] = (2));


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
});})(c__18993__auto___22669,out))
;
return ((function (switch__18881__auto__,c__18993__auto___22669,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____0 = (function (){
var statearr_22665 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22665[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__);

(statearr_22665[(1)] = (1));

return statearr_22665;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____1 = (function (state_22651){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22666){if((e22666 instanceof Object)){
var ex__18885__auto__ = e22666;
var statearr_22667_22676 = state_22651;
(statearr_22667_22676[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22677 = state_22651;
state_22651 = G__22677;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__ = function(state_22651){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____1.call(this,state_22651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___22669,out))
})();
var state__18995__auto__ = (function (){var statearr_22668 = f__18994__auto__.call(null);
(statearr_22668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___22669);

return statearr_22668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___22669,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22678,opts){
var map__22682 = p__22678;
var map__22682__$1 = ((((!((map__22682 == null)))?((((map__22682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22682):map__22682);
var eval_body__$1 = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22682__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22684){var e = e22684;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22685_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22685_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22690){
var vec__22691 = p__22690;
var k = cljs.core.nth.call(null,vec__22691,(0),null);
var v = cljs.core.nth.call(null,vec__22691,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22692){
var vec__22693 = p__22692;
var k = cljs.core.nth.call(null,vec__22693,(0),null);
var v = cljs.core.nth.call(null,vec__22693,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22697,p__22698){
var map__22945 = p__22697;
var map__22945__$1 = ((((!((map__22945 == null)))?((((map__22945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22945):map__22945);
var opts = map__22945__$1;
var before_jsload = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22946 = p__22698;
var map__22946__$1 = ((((!((map__22946 == null)))?((((map__22946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22946):map__22946);
var msg = map__22946__$1;
var files = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23099){
var state_val_23100 = (state_23099[(1)]);
if((state_val_23100 === (7))){
var inst_22961 = (state_23099[(7)]);
var inst_22963 = (state_23099[(8)]);
var inst_22962 = (state_23099[(9)]);
var inst_22960 = (state_23099[(10)]);
var inst_22968 = cljs.core._nth.call(null,inst_22961,inst_22963);
var inst_22969 = figwheel.client.file_reloading.eval_body.call(null,inst_22968,opts);
var inst_22970 = (inst_22963 + (1));
var tmp23101 = inst_22961;
var tmp23102 = inst_22962;
var tmp23103 = inst_22960;
var inst_22960__$1 = tmp23103;
var inst_22961__$1 = tmp23101;
var inst_22962__$1 = tmp23102;
var inst_22963__$1 = inst_22970;
var state_23099__$1 = (function (){var statearr_23104 = state_23099;
(statearr_23104[(7)] = inst_22961__$1);

(statearr_23104[(8)] = inst_22963__$1);

(statearr_23104[(11)] = inst_22969);

(statearr_23104[(9)] = inst_22962__$1);

(statearr_23104[(10)] = inst_22960__$1);

return statearr_23104;
})();
var statearr_23105_23191 = state_23099__$1;
(statearr_23105_23191[(2)] = null);

(statearr_23105_23191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (20))){
var inst_23003 = (state_23099[(12)]);
var inst_23011 = figwheel.client.file_reloading.sort_files.call(null,inst_23003);
var state_23099__$1 = state_23099;
var statearr_23106_23192 = state_23099__$1;
(statearr_23106_23192[(2)] = inst_23011);

(statearr_23106_23192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (27))){
var state_23099__$1 = state_23099;
var statearr_23107_23193 = state_23099__$1;
(statearr_23107_23193[(2)] = null);

(statearr_23107_23193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (1))){
var inst_22952 = (state_23099[(13)]);
var inst_22949 = before_jsload.call(null,files);
var inst_22950 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22951 = (function (){return ((function (inst_22952,inst_22949,inst_22950,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22694_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22694_SHARP_);
});
;})(inst_22952,inst_22949,inst_22950,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22952__$1 = cljs.core.filter.call(null,inst_22951,files);
var inst_22953 = cljs.core.not_empty.call(null,inst_22952__$1);
var state_23099__$1 = (function (){var statearr_23108 = state_23099;
(statearr_23108[(13)] = inst_22952__$1);

(statearr_23108[(14)] = inst_22949);

(statearr_23108[(15)] = inst_22950);

return statearr_23108;
})();
if(cljs.core.truth_(inst_22953)){
var statearr_23109_23194 = state_23099__$1;
(statearr_23109_23194[(1)] = (2));

} else {
var statearr_23110_23195 = state_23099__$1;
(statearr_23110_23195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (24))){
var state_23099__$1 = state_23099;
var statearr_23111_23196 = state_23099__$1;
(statearr_23111_23196[(2)] = null);

(statearr_23111_23196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (39))){
var inst_23053 = (state_23099[(16)]);
var state_23099__$1 = state_23099;
var statearr_23112_23197 = state_23099__$1;
(statearr_23112_23197[(2)] = inst_23053);

(statearr_23112_23197[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (46))){
var inst_23094 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23113_23198 = state_23099__$1;
(statearr_23113_23198[(2)] = inst_23094);

(statearr_23113_23198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (4))){
var inst_22997 = (state_23099[(2)]);
var inst_22998 = cljs.core.List.EMPTY;
var inst_22999 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22998);
var inst_23000 = (function (){return ((function (inst_22997,inst_22998,inst_22999,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22695_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22695_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22695_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_22997,inst_22998,inst_22999,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23001 = cljs.core.filter.call(null,inst_23000,files);
var inst_23002 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23003 = cljs.core.concat.call(null,inst_23001,inst_23002);
var state_23099__$1 = (function (){var statearr_23114 = state_23099;
(statearr_23114[(17)] = inst_22999);

(statearr_23114[(18)] = inst_22997);

(statearr_23114[(12)] = inst_23003);

return statearr_23114;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23115_23199 = state_23099__$1;
(statearr_23115_23199[(1)] = (16));

} else {
var statearr_23116_23200 = state_23099__$1;
(statearr_23116_23200[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (15))){
var inst_22987 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23117_23201 = state_23099__$1;
(statearr_23117_23201[(2)] = inst_22987);

(statearr_23117_23201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (21))){
var inst_23013 = (state_23099[(19)]);
var inst_23013__$1 = (state_23099[(2)]);
var inst_23014 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23013__$1);
var state_23099__$1 = (function (){var statearr_23118 = state_23099;
(statearr_23118[(19)] = inst_23013__$1);

return statearr_23118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23099__$1,(22),inst_23014);
} else {
if((state_val_23100 === (31))){
var inst_23097 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23099__$1,inst_23097);
} else {
if((state_val_23100 === (32))){
var inst_23053 = (state_23099[(16)]);
var inst_23058 = inst_23053.cljs$lang$protocol_mask$partition0$;
var inst_23059 = (inst_23058 & (64));
var inst_23060 = inst_23053.cljs$core$ISeq$;
var inst_23061 = (inst_23059) || (inst_23060);
var state_23099__$1 = state_23099;
if(cljs.core.truth_(inst_23061)){
var statearr_23119_23202 = state_23099__$1;
(statearr_23119_23202[(1)] = (35));

} else {
var statearr_23120_23203 = state_23099__$1;
(statearr_23120_23203[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (40))){
var inst_23074 = (state_23099[(20)]);
var inst_23073 = (state_23099[(2)]);
var inst_23074__$1 = cljs.core.get.call(null,inst_23073,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23075 = cljs.core.get.call(null,inst_23073,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23076 = cljs.core.not_empty.call(null,inst_23074__$1);
var state_23099__$1 = (function (){var statearr_23121 = state_23099;
(statearr_23121[(21)] = inst_23075);

(statearr_23121[(20)] = inst_23074__$1);

return statearr_23121;
})();
if(cljs.core.truth_(inst_23076)){
var statearr_23122_23204 = state_23099__$1;
(statearr_23122_23204[(1)] = (41));

} else {
var statearr_23123_23205 = state_23099__$1;
(statearr_23123_23205[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (33))){
var state_23099__$1 = state_23099;
var statearr_23124_23206 = state_23099__$1;
(statearr_23124_23206[(2)] = false);

(statearr_23124_23206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (13))){
var inst_22973 = (state_23099[(22)]);
var inst_22977 = cljs.core.chunk_first.call(null,inst_22973);
var inst_22978 = cljs.core.chunk_rest.call(null,inst_22973);
var inst_22979 = cljs.core.count.call(null,inst_22977);
var inst_22960 = inst_22978;
var inst_22961 = inst_22977;
var inst_22962 = inst_22979;
var inst_22963 = (0);
var state_23099__$1 = (function (){var statearr_23125 = state_23099;
(statearr_23125[(7)] = inst_22961);

(statearr_23125[(8)] = inst_22963);

(statearr_23125[(9)] = inst_22962);

(statearr_23125[(10)] = inst_22960);

return statearr_23125;
})();
var statearr_23126_23207 = state_23099__$1;
(statearr_23126_23207[(2)] = null);

(statearr_23126_23207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (22))){
var inst_23016 = (state_23099[(23)]);
var inst_23017 = (state_23099[(24)]);
var inst_23021 = (state_23099[(25)]);
var inst_23013 = (state_23099[(19)]);
var inst_23016__$1 = (state_23099[(2)]);
var inst_23017__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23016__$1);
var inst_23018 = (function (){var all_files = inst_23013;
var res_SINGLEQUOTE_ = inst_23016__$1;
var res = inst_23017__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23016,inst_23017,inst_23021,inst_23013,inst_23016__$1,inst_23017__$1,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22696_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22696_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23016,inst_23017,inst_23021,inst_23013,inst_23016__$1,inst_23017__$1,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23019 = cljs.core.filter.call(null,inst_23018,inst_23016__$1);
var inst_23020 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23021__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23020);
var inst_23022 = cljs.core.not_empty.call(null,inst_23021__$1);
var state_23099__$1 = (function (){var statearr_23127 = state_23099;
(statearr_23127[(23)] = inst_23016__$1);

(statearr_23127[(24)] = inst_23017__$1);

(statearr_23127[(26)] = inst_23019);

(statearr_23127[(25)] = inst_23021__$1);

return statearr_23127;
})();
if(cljs.core.truth_(inst_23022)){
var statearr_23128_23208 = state_23099__$1;
(statearr_23128_23208[(1)] = (23));

} else {
var statearr_23129_23209 = state_23099__$1;
(statearr_23129_23209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (36))){
var state_23099__$1 = state_23099;
var statearr_23130_23210 = state_23099__$1;
(statearr_23130_23210[(2)] = false);

(statearr_23130_23210[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (41))){
var inst_23074 = (state_23099[(20)]);
var inst_23078 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23079 = cljs.core.map.call(null,inst_23078,inst_23074);
var inst_23080 = cljs.core.pr_str.call(null,inst_23079);
var inst_23081 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23080)].join('');
var inst_23082 = figwheel.client.utils.log.call(null,inst_23081);
var state_23099__$1 = state_23099;
var statearr_23131_23211 = state_23099__$1;
(statearr_23131_23211[(2)] = inst_23082);

(statearr_23131_23211[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (43))){
var inst_23075 = (state_23099[(21)]);
var inst_23085 = (state_23099[(2)]);
var inst_23086 = cljs.core.not_empty.call(null,inst_23075);
var state_23099__$1 = (function (){var statearr_23132 = state_23099;
(statearr_23132[(27)] = inst_23085);

return statearr_23132;
})();
if(cljs.core.truth_(inst_23086)){
var statearr_23133_23212 = state_23099__$1;
(statearr_23133_23212[(1)] = (44));

} else {
var statearr_23134_23213 = state_23099__$1;
(statearr_23134_23213[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (29))){
var inst_23053 = (state_23099[(16)]);
var inst_23016 = (state_23099[(23)]);
var inst_23017 = (state_23099[(24)]);
var inst_23019 = (state_23099[(26)]);
var inst_23021 = (state_23099[(25)]);
var inst_23013 = (state_23099[(19)]);
var inst_23049 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23052 = (function (){var all_files = inst_23013;
var res_SINGLEQUOTE_ = inst_23016;
var res = inst_23017;
var files_not_loaded = inst_23019;
var dependencies_that_loaded = inst_23021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23053,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23049,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23051){
var map__23135 = p__23051;
var map__23135__$1 = ((((!((map__23135 == null)))?((((map__23135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23135):map__23135);
var namespace = cljs.core.get.call(null,map__23135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23053,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23049,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23053__$1 = cljs.core.group_by.call(null,inst_23052,inst_23019);
var inst_23055 = (inst_23053__$1 == null);
var inst_23056 = cljs.core.not.call(null,inst_23055);
var state_23099__$1 = (function (){var statearr_23137 = state_23099;
(statearr_23137[(16)] = inst_23053__$1);

(statearr_23137[(28)] = inst_23049);

return statearr_23137;
})();
if(inst_23056){
var statearr_23138_23214 = state_23099__$1;
(statearr_23138_23214[(1)] = (32));

} else {
var statearr_23139_23215 = state_23099__$1;
(statearr_23139_23215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (44))){
var inst_23075 = (state_23099[(21)]);
var inst_23088 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23075);
var inst_23089 = cljs.core.pr_str.call(null,inst_23088);
var inst_23090 = [cljs.core.str("not required: "),cljs.core.str(inst_23089)].join('');
var inst_23091 = figwheel.client.utils.log.call(null,inst_23090);
var state_23099__$1 = state_23099;
var statearr_23140_23216 = state_23099__$1;
(statearr_23140_23216[(2)] = inst_23091);

(statearr_23140_23216[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (6))){
var inst_22994 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23141_23217 = state_23099__$1;
(statearr_23141_23217[(2)] = inst_22994);

(statearr_23141_23217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (28))){
var inst_23019 = (state_23099[(26)]);
var inst_23046 = (state_23099[(2)]);
var inst_23047 = cljs.core.not_empty.call(null,inst_23019);
var state_23099__$1 = (function (){var statearr_23142 = state_23099;
(statearr_23142[(29)] = inst_23046);

return statearr_23142;
})();
if(cljs.core.truth_(inst_23047)){
var statearr_23143_23218 = state_23099__$1;
(statearr_23143_23218[(1)] = (29));

} else {
var statearr_23144_23219 = state_23099__$1;
(statearr_23144_23219[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (25))){
var inst_23017 = (state_23099[(24)]);
var inst_23033 = (state_23099[(2)]);
var inst_23034 = cljs.core.not_empty.call(null,inst_23017);
var state_23099__$1 = (function (){var statearr_23145 = state_23099;
(statearr_23145[(30)] = inst_23033);

return statearr_23145;
})();
if(cljs.core.truth_(inst_23034)){
var statearr_23146_23220 = state_23099__$1;
(statearr_23146_23220[(1)] = (26));

} else {
var statearr_23147_23221 = state_23099__$1;
(statearr_23147_23221[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (34))){
var inst_23068 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
if(cljs.core.truth_(inst_23068)){
var statearr_23148_23222 = state_23099__$1;
(statearr_23148_23222[(1)] = (38));

} else {
var statearr_23149_23223 = state_23099__$1;
(statearr_23149_23223[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (17))){
var state_23099__$1 = state_23099;
var statearr_23150_23224 = state_23099__$1;
(statearr_23150_23224[(2)] = recompile_dependents);

(statearr_23150_23224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (3))){
var state_23099__$1 = state_23099;
var statearr_23151_23225 = state_23099__$1;
(statearr_23151_23225[(2)] = null);

(statearr_23151_23225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (12))){
var inst_22990 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23152_23226 = state_23099__$1;
(statearr_23152_23226[(2)] = inst_22990);

(statearr_23152_23226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (2))){
var inst_22952 = (state_23099[(13)]);
var inst_22959 = cljs.core.seq.call(null,inst_22952);
var inst_22960 = inst_22959;
var inst_22961 = null;
var inst_22962 = (0);
var inst_22963 = (0);
var state_23099__$1 = (function (){var statearr_23153 = state_23099;
(statearr_23153[(7)] = inst_22961);

(statearr_23153[(8)] = inst_22963);

(statearr_23153[(9)] = inst_22962);

(statearr_23153[(10)] = inst_22960);

return statearr_23153;
})();
var statearr_23154_23227 = state_23099__$1;
(statearr_23154_23227[(2)] = null);

(statearr_23154_23227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (23))){
var inst_23016 = (state_23099[(23)]);
var inst_23017 = (state_23099[(24)]);
var inst_23019 = (state_23099[(26)]);
var inst_23021 = (state_23099[(25)]);
var inst_23013 = (state_23099[(19)]);
var inst_23024 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23026 = (function (){var all_files = inst_23013;
var res_SINGLEQUOTE_ = inst_23016;
var res = inst_23017;
var files_not_loaded = inst_23019;
var dependencies_that_loaded = inst_23021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23024,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23025){
var map__23155 = p__23025;
var map__23155__$1 = ((((!((map__23155 == null)))?((((map__23155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23155):map__23155);
var request_url = cljs.core.get.call(null,map__23155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23024,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23027 = cljs.core.reverse.call(null,inst_23021);
var inst_23028 = cljs.core.map.call(null,inst_23026,inst_23027);
var inst_23029 = cljs.core.pr_str.call(null,inst_23028);
var inst_23030 = figwheel.client.utils.log.call(null,inst_23029);
var state_23099__$1 = (function (){var statearr_23157 = state_23099;
(statearr_23157[(31)] = inst_23024);

return statearr_23157;
})();
var statearr_23158_23228 = state_23099__$1;
(statearr_23158_23228[(2)] = inst_23030);

(statearr_23158_23228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (35))){
var state_23099__$1 = state_23099;
var statearr_23159_23229 = state_23099__$1;
(statearr_23159_23229[(2)] = true);

(statearr_23159_23229[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (19))){
var inst_23003 = (state_23099[(12)]);
var inst_23009 = figwheel.client.file_reloading.expand_files.call(null,inst_23003);
var state_23099__$1 = state_23099;
var statearr_23160_23230 = state_23099__$1;
(statearr_23160_23230[(2)] = inst_23009);

(statearr_23160_23230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (11))){
var state_23099__$1 = state_23099;
var statearr_23161_23231 = state_23099__$1;
(statearr_23161_23231[(2)] = null);

(statearr_23161_23231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (9))){
var inst_22992 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23162_23232 = state_23099__$1;
(statearr_23162_23232[(2)] = inst_22992);

(statearr_23162_23232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (5))){
var inst_22963 = (state_23099[(8)]);
var inst_22962 = (state_23099[(9)]);
var inst_22965 = (inst_22963 < inst_22962);
var inst_22966 = inst_22965;
var state_23099__$1 = state_23099;
if(cljs.core.truth_(inst_22966)){
var statearr_23163_23233 = state_23099__$1;
(statearr_23163_23233[(1)] = (7));

} else {
var statearr_23164_23234 = state_23099__$1;
(statearr_23164_23234[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (14))){
var inst_22973 = (state_23099[(22)]);
var inst_22982 = cljs.core.first.call(null,inst_22973);
var inst_22983 = figwheel.client.file_reloading.eval_body.call(null,inst_22982,opts);
var inst_22984 = cljs.core.next.call(null,inst_22973);
var inst_22960 = inst_22984;
var inst_22961 = null;
var inst_22962 = (0);
var inst_22963 = (0);
var state_23099__$1 = (function (){var statearr_23165 = state_23099;
(statearr_23165[(7)] = inst_22961);

(statearr_23165[(8)] = inst_22963);

(statearr_23165[(32)] = inst_22983);

(statearr_23165[(9)] = inst_22962);

(statearr_23165[(10)] = inst_22960);

return statearr_23165;
})();
var statearr_23166_23235 = state_23099__$1;
(statearr_23166_23235[(2)] = null);

(statearr_23166_23235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (45))){
var state_23099__$1 = state_23099;
var statearr_23167_23236 = state_23099__$1;
(statearr_23167_23236[(2)] = null);

(statearr_23167_23236[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (26))){
var inst_23016 = (state_23099[(23)]);
var inst_23017 = (state_23099[(24)]);
var inst_23019 = (state_23099[(26)]);
var inst_23021 = (state_23099[(25)]);
var inst_23013 = (state_23099[(19)]);
var inst_23036 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23038 = (function (){var all_files = inst_23013;
var res_SINGLEQUOTE_ = inst_23016;
var res = inst_23017;
var files_not_loaded = inst_23019;
var dependencies_that_loaded = inst_23021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23036,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23037){
var map__23168 = p__23037;
var map__23168__$1 = ((((!((map__23168 == null)))?((((map__23168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23168):map__23168);
var namespace = cljs.core.get.call(null,map__23168__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23168__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23036,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23039 = cljs.core.map.call(null,inst_23038,inst_23017);
var inst_23040 = cljs.core.pr_str.call(null,inst_23039);
var inst_23041 = figwheel.client.utils.log.call(null,inst_23040);
var inst_23042 = (function (){var all_files = inst_23013;
var res_SINGLEQUOTE_ = inst_23016;
var res = inst_23017;
var files_not_loaded = inst_23019;
var dependencies_that_loaded = inst_23021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23036,inst_23038,inst_23039,inst_23040,inst_23041,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23016,inst_23017,inst_23019,inst_23021,inst_23013,inst_23036,inst_23038,inst_23039,inst_23040,inst_23041,state_val_23100,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23043 = setTimeout(inst_23042,(10));
var state_23099__$1 = (function (){var statearr_23170 = state_23099;
(statearr_23170[(33)] = inst_23041);

(statearr_23170[(34)] = inst_23036);

return statearr_23170;
})();
var statearr_23171_23237 = state_23099__$1;
(statearr_23171_23237[(2)] = inst_23043);

(statearr_23171_23237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (16))){
var state_23099__$1 = state_23099;
var statearr_23172_23238 = state_23099__$1;
(statearr_23172_23238[(2)] = reload_dependents);

(statearr_23172_23238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (38))){
var inst_23053 = (state_23099[(16)]);
var inst_23070 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23053);
var state_23099__$1 = state_23099;
var statearr_23173_23239 = state_23099__$1;
(statearr_23173_23239[(2)] = inst_23070);

(statearr_23173_23239[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (30))){
var state_23099__$1 = state_23099;
var statearr_23174_23240 = state_23099__$1;
(statearr_23174_23240[(2)] = null);

(statearr_23174_23240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (10))){
var inst_22973 = (state_23099[(22)]);
var inst_22975 = cljs.core.chunked_seq_QMARK_.call(null,inst_22973);
var state_23099__$1 = state_23099;
if(inst_22975){
var statearr_23175_23241 = state_23099__$1;
(statearr_23175_23241[(1)] = (13));

} else {
var statearr_23176_23242 = state_23099__$1;
(statearr_23176_23242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (18))){
var inst_23007 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
if(cljs.core.truth_(inst_23007)){
var statearr_23177_23243 = state_23099__$1;
(statearr_23177_23243[(1)] = (19));

} else {
var statearr_23178_23244 = state_23099__$1;
(statearr_23178_23244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (42))){
var state_23099__$1 = state_23099;
var statearr_23179_23245 = state_23099__$1;
(statearr_23179_23245[(2)] = null);

(statearr_23179_23245[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (37))){
var inst_23065 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23180_23246 = state_23099__$1;
(statearr_23180_23246[(2)] = inst_23065);

(statearr_23180_23246[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (8))){
var inst_22973 = (state_23099[(22)]);
var inst_22960 = (state_23099[(10)]);
var inst_22973__$1 = cljs.core.seq.call(null,inst_22960);
var state_23099__$1 = (function (){var statearr_23181 = state_23099;
(statearr_23181[(22)] = inst_22973__$1);

return statearr_23181;
})();
if(inst_22973__$1){
var statearr_23182_23247 = state_23099__$1;
(statearr_23182_23247[(1)] = (10));

} else {
var statearr_23183_23248 = state_23099__$1;
(statearr_23183_23248[(1)] = (11));

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
});})(c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18881__auto__,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____0 = (function (){
var statearr_23187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23187[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__);

(statearr_23187[(1)] = (1));

return statearr_23187;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____1 = (function (state_23099){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_23099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e23188){if((e23188 instanceof Object)){
var ex__18885__auto__ = e23188;
var statearr_23189_23249 = state_23099;
(statearr_23189_23249[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23250 = state_23099;
state_23099 = G__23250;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__ = function(state_23099){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____1.call(this,state_23099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18995__auto__ = (function (){var statearr_23190 = f__18994__auto__.call(null);
(statearr_23190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_23190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__,map__22945,map__22945__$1,opts,before_jsload,on_jsload,reload_dependents,map__22946,map__22946__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18993__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23253,link){
var map__23256 = p__23253;
var map__23256__$1 = ((((!((map__23256 == null)))?((((map__23256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23256):map__23256);
var file = cljs.core.get.call(null,map__23256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23256,map__23256__$1,file){
return (function (p1__23251_SHARP_,p2__23252_SHARP_){
if(cljs.core._EQ_.call(null,p1__23251_SHARP_,p2__23252_SHARP_)){
return p1__23251_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23256,map__23256__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23262){
var map__23263 = p__23262;
var map__23263__$1 = ((((!((map__23263 == null)))?((((map__23263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23263):map__23263);
var match_length = cljs.core.get.call(null,map__23263__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23263__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23258_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23258_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23265 = [];
var len__17884__auto___23268 = arguments.length;
var i__17885__auto___23269 = (0);
while(true){
if((i__17885__auto___23269 < len__17884__auto___23268)){
args23265.push((arguments[i__17885__auto___23269]));

var G__23270 = (i__17885__auto___23269 + (1));
i__17885__auto___23269 = G__23270;
continue;
} else {
}
break;
}

var G__23267 = args23265.length;
switch (G__23267) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23265.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23272_SHARP_,p2__23273_SHARP_){
return cljs.core.assoc.call(null,p1__23272_SHARP_,cljs.core.get.call(null,p2__23273_SHARP_,key),p2__23273_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23274){
var map__23277 = p__23274;
var map__23277__$1 = ((((!((map__23277 == null)))?((((map__23277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23277):map__23277);
var f_data = map__23277__$1;
var file = cljs.core.get.call(null,map__23277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23279,files_msg){
var map__23286 = p__23279;
var map__23286__$1 = ((((!((map__23286 == null)))?((((map__23286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23286):map__23286);
var opts = map__23286__$1;
var on_cssload = cljs.core.get.call(null,map__23286__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23288_23292 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23289_23293 = null;
var count__23290_23294 = (0);
var i__23291_23295 = (0);
while(true){
if((i__23291_23295 < count__23290_23294)){
var f_23296 = cljs.core._nth.call(null,chunk__23289_23293,i__23291_23295);
figwheel.client.file_reloading.reload_css_file.call(null,f_23296);

var G__23297 = seq__23288_23292;
var G__23298 = chunk__23289_23293;
var G__23299 = count__23290_23294;
var G__23300 = (i__23291_23295 + (1));
seq__23288_23292 = G__23297;
chunk__23289_23293 = G__23298;
count__23290_23294 = G__23299;
i__23291_23295 = G__23300;
continue;
} else {
var temp__4425__auto___23301 = cljs.core.seq.call(null,seq__23288_23292);
if(temp__4425__auto___23301){
var seq__23288_23302__$1 = temp__4425__auto___23301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23288_23302__$1)){
var c__17629__auto___23303 = cljs.core.chunk_first.call(null,seq__23288_23302__$1);
var G__23304 = cljs.core.chunk_rest.call(null,seq__23288_23302__$1);
var G__23305 = c__17629__auto___23303;
var G__23306 = cljs.core.count.call(null,c__17629__auto___23303);
var G__23307 = (0);
seq__23288_23292 = G__23304;
chunk__23289_23293 = G__23305;
count__23290_23294 = G__23306;
i__23291_23295 = G__23307;
continue;
} else {
var f_23308 = cljs.core.first.call(null,seq__23288_23302__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23308);

var G__23309 = cljs.core.next.call(null,seq__23288_23302__$1);
var G__23310 = null;
var G__23311 = (0);
var G__23312 = (0);
seq__23288_23292 = G__23309;
chunk__23289_23293 = G__23310;
count__23290_23294 = G__23311;
i__23291_23295 = G__23312;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23286,map__23286__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23286,map__23286__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1450440274496