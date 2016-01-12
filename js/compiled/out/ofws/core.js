// Compiled by ClojureScript 1.7.170 {}
goog.provide('ofws.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof ofws.core.app_state !== 'undefined'){
} else {
ofws.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
ofws.core.installer_url_def = "https://dl.openfin.co/services/download?fileName=OpenfinPOC&config=https://demoappdirectory.openf.in/desktop/config/apps/OpenFin/HelloOpenFin/app.json";
ofws.core.base = "https://dl.openfin.co/services/download?";
ofws.core.installer_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fileName="], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config="], null)], null);
/**
 * given 2 maps and an operation perform the updating
 */
ofws.core.update_all = (function ofws$core$update_all(base_map,action,val_map){
return cljs.core.reduce.call(null,(function (prev,curr){
var idx = cljs.core.get.call(null,curr,(0));
var val = cljs.core.get.call(null,curr,(1));
return cljs.core.update_in.call(null,prev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),action,val);
}),base_map,val_map);
});
/**
 * given a map of key -> vec reduce on the vecs and combine
 *   with an & to create a url query string
 */
ofws.core.combine_as_url = (function ofws$core$combine_as_url(val_map){
return cljs.core.reduce.call(null,(function (prev,curr){
return [cljs.core.str(prev),cljs.core.str(cljs.core.reduce.call(null,(function (prev__$1,curr__$1){
return [cljs.core.str(prev__$1),cljs.core.str(curr__$1)].join('');
}),"",cljs.core.get.call(null,curr,(1)))),cljs.core.str("&")].join('');
}),"",val_map);
});
/**
 * return all but the last character in a string
 */
ofws.core.butlast_str = (function ofws$core$butlast_str(the_string){
return cljs.core.subs.call(null,the_string,(0),(cljs.core.count.call(null,the_string) - (1)));
});
/**
 * entry point and wireup
 */
ofws.core.main = (function ofws$core$main(){
var name_box = document.getElementById("name-box");
var dest_box = document.getElementById("dest-box");
var submit = document.getElementById("submit");
var link = document.getElementById("link");
var text = document.getElementById("text");
return submit.addEventListener("click",((function (name_box,dest_box,submit,link,text){
return (function (){
var link_text = cljs.core.partial.call(null,cljs.core.str,ofws.core.base).call(null,ofws.core.butlast_str.call(null,ofws.core.combine_as_url.call(null,cljs.core.partial.call(null,ofws.core.update_all,ofws.core.installer_map,cljs.core.conj).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),name_box.value,new cljs.core.Keyword(null,"config","config",994861415),dest_box.value], null)))));
link.innerHTML = link_text;

link.href = link_text;

return text.innerHTML = link_text;
});})(name_box,dest_box,submit,link,text))
,false);
});
ofws.core.on_js_reload = (function ofws$core$on_js_reload(){
return null;
});
ofws.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1452612363955