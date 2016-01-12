// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('ofws.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19144__delegate = function (x){
if(cljs.core.truth_(ofws.core.on_js_reload)){
return cljs.core.apply.call(null,ofws.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ofws.core/on-js-reload' is missing");
}
};
var G__19144 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19145__i = 0, G__19145__a = new Array(arguments.length -  0);
while (G__19145__i < G__19145__a.length) {G__19145__a[G__19145__i] = arguments[G__19145__i + 0]; ++G__19145__i;}
  x = new cljs.core.IndexedSeq(G__19145__a,0);
} 
return G__19144__delegate.call(this,x);};
G__19144.cljs$lang$maxFixedArity = 0;
G__19144.cljs$lang$applyTo = (function (arglist__19146){
var x = cljs.core.seq(arglist__19146);
return G__19144__delegate(x);
});
G__19144.cljs$core$IFn$_invoke$arity$variadic = G__19144__delegate;
return G__19144;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1451400733854