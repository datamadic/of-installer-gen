// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19038 = [];
var len__17884__auto___19044 = arguments.length;
var i__17885__auto___19045 = (0);
while(true){
if((i__17885__auto___19045 < len__17884__auto___19044)){
args19038.push((arguments[i__17885__auto___19045]));

var G__19046 = (i__17885__auto___19045 + (1));
i__17885__auto___19045 = G__19046;
continue;
} else {
}
break;
}

var G__19040 = args19038.length;
switch (G__19040) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19038.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19041 = (function (f,blockable,meta19042){
this.f = f;
this.blockable = blockable;
this.meta19042 = meta19042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19043,meta19042__$1){
var self__ = this;
var _19043__$1 = this;
return (new cljs.core.async.t_cljs$core$async19041(self__.f,self__.blockable,meta19042__$1));
});

cljs.core.async.t_cljs$core$async19041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19043){
var self__ = this;
var _19043__$1 = this;
return self__.meta19042;
});

cljs.core.async.t_cljs$core$async19041.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19042","meta19042",1484886618,null)], null);
});

cljs.core.async.t_cljs$core$async19041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19041";

cljs.core.async.t_cljs$core$async19041.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19041");
});

cljs.core.async.__GT_t_cljs$core$async19041 = (function cljs$core$async$__GT_t_cljs$core$async19041(f__$1,blockable__$1,meta19042){
return (new cljs.core.async.t_cljs$core$async19041(f__$1,blockable__$1,meta19042));
});

}

return (new cljs.core.async.t_cljs$core$async19041(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19050 = [];
var len__17884__auto___19053 = arguments.length;
var i__17885__auto___19054 = (0);
while(true){
if((i__17885__auto___19054 < len__17884__auto___19053)){
args19050.push((arguments[i__17885__auto___19054]));

var G__19055 = (i__17885__auto___19054 + (1));
i__17885__auto___19054 = G__19055;
continue;
} else {
}
break;
}

var G__19052 = args19050.length;
switch (G__19052) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19050.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19057 = [];
var len__17884__auto___19060 = arguments.length;
var i__17885__auto___19061 = (0);
while(true){
if((i__17885__auto___19061 < len__17884__auto___19060)){
args19057.push((arguments[i__17885__auto___19061]));

var G__19062 = (i__17885__auto___19061 + (1));
i__17885__auto___19061 = G__19062;
continue;
} else {
}
break;
}

var G__19059 = args19057.length;
switch (G__19059) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19057.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19064 = [];
var len__17884__auto___19067 = arguments.length;
var i__17885__auto___19068 = (0);
while(true){
if((i__17885__auto___19068 < len__17884__auto___19067)){
args19064.push((arguments[i__17885__auto___19068]));

var G__19069 = (i__17885__auto___19068 + (1));
i__17885__auto___19068 = G__19069;
continue;
} else {
}
break;
}

var G__19066 = args19064.length;
switch (G__19066) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19064.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19071 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19071);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19071,ret){
return (function (){
return fn1.call(null,val_19071);
});})(val_19071,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19072 = [];
var len__17884__auto___19075 = arguments.length;
var i__17885__auto___19076 = (0);
while(true){
if((i__17885__auto___19076 < len__17884__auto___19075)){
args19072.push((arguments[i__17885__auto___19076]));

var G__19077 = (i__17885__auto___19076 + (1));
i__17885__auto___19076 = G__19077;
continue;
} else {
}
break;
}

var G__19074 = args19072.length;
switch (G__19074) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19072.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___19079 = n;
var x_19080 = (0);
while(true){
if((x_19080 < n__17729__auto___19079)){
(a[x_19080] = (0));

var G__19081 = (x_19080 + (1));
x_19080 = G__19081;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19082 = (i + (1));
i = G__19082;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19086 = (function (alt_flag,flag,meta19087){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19087 = meta19087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19088,meta19087__$1){
var self__ = this;
var _19088__$1 = this;
return (new cljs.core.async.t_cljs$core$async19086(self__.alt_flag,self__.flag,meta19087__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19088){
var self__ = this;
var _19088__$1 = this;
return self__.meta19087;
});})(flag))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19086.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19087","meta19087",1927336744,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19086";

cljs.core.async.t_cljs$core$async19086.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19086");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19086 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19086(alt_flag__$1,flag__$1,meta19087){
return (new cljs.core.async.t_cljs$core$async19086(alt_flag__$1,flag__$1,meta19087));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19086(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19092 = (function (alt_handler,flag,cb,meta19093){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19093 = meta19093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19094,meta19093__$1){
var self__ = this;
var _19094__$1 = this;
return (new cljs.core.async.t_cljs$core$async19092(self__.alt_handler,self__.flag,self__.cb,meta19093__$1));
});

cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19094){
var self__ = this;
var _19094__$1 = this;
return self__.meta19093;
});

cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19093","meta19093",928102474,null)], null);
});

cljs.core.async.t_cljs$core$async19092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19092";

cljs.core.async.t_cljs$core$async19092.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19092");
});

cljs.core.async.__GT_t_cljs$core$async19092 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19092(alt_handler__$1,flag__$1,cb__$1,meta19093){
return (new cljs.core.async.t_cljs$core$async19092(alt_handler__$1,flag__$1,cb__$1,meta19093));
});

}

return (new cljs.core.async.t_cljs$core$async19092(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19095_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19095_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19096_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19096_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19097 = (i + (1));
i = G__19097;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19103 = arguments.length;
var i__17885__auto___19104 = (0);
while(true){
if((i__17885__auto___19104 < len__17884__auto___19103)){
args__17891__auto__.push((arguments[i__17885__auto___19104]));

var G__19105 = (i__17885__auto___19104 + (1));
i__17885__auto___19104 = G__19105;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19100){
var map__19101 = p__19100;
var map__19101__$1 = ((((!((map__19101 == null)))?((((map__19101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19101):map__19101);
var opts = map__19101__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19098){
var G__19099 = cljs.core.first.call(null,seq19098);
var seq19098__$1 = cljs.core.next.call(null,seq19098);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19099,seq19098__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19106 = [];
var len__17884__auto___19156 = arguments.length;
var i__17885__auto___19157 = (0);
while(true){
if((i__17885__auto___19157 < len__17884__auto___19156)){
args19106.push((arguments[i__17885__auto___19157]));

var G__19158 = (i__17885__auto___19157 + (1));
i__17885__auto___19157 = G__19158;
continue;
} else {
}
break;
}

var G__19108 = args19106.length;
switch (G__19108) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19106.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18993__auto___19160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___19160){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___19160){
return (function (state_19132){
var state_val_19133 = (state_19132[(1)]);
if((state_val_19133 === (7))){
var inst_19128 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19134_19161 = state_19132__$1;
(statearr_19134_19161[(2)] = inst_19128);

(statearr_19134_19161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (1))){
var state_19132__$1 = state_19132;
var statearr_19135_19162 = state_19132__$1;
(statearr_19135_19162[(2)] = null);

(statearr_19135_19162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (4))){
var inst_19111 = (state_19132[(7)]);
var inst_19111__$1 = (state_19132[(2)]);
var inst_19112 = (inst_19111__$1 == null);
var state_19132__$1 = (function (){var statearr_19136 = state_19132;
(statearr_19136[(7)] = inst_19111__$1);

return statearr_19136;
})();
if(cljs.core.truth_(inst_19112)){
var statearr_19137_19163 = state_19132__$1;
(statearr_19137_19163[(1)] = (5));

} else {
var statearr_19138_19164 = state_19132__$1;
(statearr_19138_19164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (13))){
var state_19132__$1 = state_19132;
var statearr_19139_19165 = state_19132__$1;
(statearr_19139_19165[(2)] = null);

(statearr_19139_19165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (6))){
var inst_19111 = (state_19132[(7)]);
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19132__$1,(11),to,inst_19111);
} else {
if((state_val_19133 === (3))){
var inst_19130 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19132__$1,inst_19130);
} else {
if((state_val_19133 === (12))){
var state_19132__$1 = state_19132;
var statearr_19140_19166 = state_19132__$1;
(statearr_19140_19166[(2)] = null);

(statearr_19140_19166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (2))){
var state_19132__$1 = state_19132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19132__$1,(4),from);
} else {
if((state_val_19133 === (11))){
var inst_19121 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
if(cljs.core.truth_(inst_19121)){
var statearr_19141_19167 = state_19132__$1;
(statearr_19141_19167[(1)] = (12));

} else {
var statearr_19142_19168 = state_19132__$1;
(statearr_19142_19168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (9))){
var state_19132__$1 = state_19132;
var statearr_19143_19169 = state_19132__$1;
(statearr_19143_19169[(2)] = null);

(statearr_19143_19169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (5))){
var state_19132__$1 = state_19132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19144_19170 = state_19132__$1;
(statearr_19144_19170[(1)] = (8));

} else {
var statearr_19145_19171 = state_19132__$1;
(statearr_19145_19171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (14))){
var inst_19126 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19146_19172 = state_19132__$1;
(statearr_19146_19172[(2)] = inst_19126);

(statearr_19146_19172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (10))){
var inst_19118 = (state_19132[(2)]);
var state_19132__$1 = state_19132;
var statearr_19147_19173 = state_19132__$1;
(statearr_19147_19173[(2)] = inst_19118);

(statearr_19147_19173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19133 === (8))){
var inst_19115 = cljs.core.async.close_BANG_.call(null,to);
var state_19132__$1 = state_19132;
var statearr_19148_19174 = state_19132__$1;
(statearr_19148_19174[(2)] = inst_19115);

(statearr_19148_19174[(1)] = (10));


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
});})(c__18993__auto___19160))
;
return ((function (switch__18881__auto__,c__18993__auto___19160){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_19152 = [null,null,null,null,null,null,null,null];
(statearr_19152[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_19152[(1)] = (1));

return statearr_19152;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_19132){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19153){if((e19153 instanceof Object)){
var ex__18885__auto__ = e19153;
var statearr_19154_19175 = state_19132;
(statearr_19154_19175[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19176 = state_19132;
state_19132 = G__19176;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_19132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_19132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___19160))
})();
var state__18995__auto__ = (function (){var statearr_19155 = f__18994__auto__.call(null);
(statearr_19155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___19160);

return statearr_19155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___19160))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19360){
var vec__19361 = p__19360;
var v = cljs.core.nth.call(null,vec__19361,(0),null);
var p = cljs.core.nth.call(null,vec__19361,(1),null);
var job = vec__19361;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18993__auto___19543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___19543,res,vec__19361,v,p,job,jobs,results){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___19543,res,vec__19361,v,p,job,jobs,results){
return (function (state_19366){
var state_val_19367 = (state_19366[(1)]);
if((state_val_19367 === (1))){
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19366__$1,(2),res,v);
} else {
if((state_val_19367 === (2))){
var inst_19363 = (state_19366[(2)]);
var inst_19364 = cljs.core.async.close_BANG_.call(null,res);
var state_19366__$1 = (function (){var statearr_19368 = state_19366;
(statearr_19368[(7)] = inst_19363);

return statearr_19368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19366__$1,inst_19364);
} else {
return null;
}
}
});})(c__18993__auto___19543,res,vec__19361,v,p,job,jobs,results))
;
return ((function (switch__18881__auto__,c__18993__auto___19543,res,vec__19361,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0 = (function (){
var statearr_19372 = [null,null,null,null,null,null,null,null];
(statearr_19372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__);

(statearr_19372[(1)] = (1));

return statearr_19372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1 = (function (state_19366){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19373){if((e19373 instanceof Object)){
var ex__18885__auto__ = e19373;
var statearr_19374_19544 = state_19366;
(statearr_19374_19544[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19545 = state_19366;
state_19366 = G__19545;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = function(state_19366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1.call(this,state_19366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___19543,res,vec__19361,v,p,job,jobs,results))
})();
var state__18995__auto__ = (function (){var statearr_19375 = f__18994__auto__.call(null);
(statearr_19375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___19543);

return statearr_19375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___19543,res,vec__19361,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19376){
var vec__19377 = p__19376;
var v = cljs.core.nth.call(null,vec__19377,(0),null);
var p = cljs.core.nth.call(null,vec__19377,(1),null);
var job = vec__19377;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___19546 = n;
var __19547 = (0);
while(true){
if((__19547 < n__17729__auto___19546)){
var G__19378_19548 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19378_19548) {
case "compute":
var c__18993__auto___19550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19547,c__18993__auto___19550,G__19378_19548,n__17729__auto___19546,jobs,results,process,async){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (__19547,c__18993__auto___19550,G__19378_19548,n__17729__auto___19546,jobs,results,process,async){
return (function (state_19391){
var state_val_19392 = (state_19391[(1)]);
if((state_val_19392 === (1))){
var state_19391__$1 = state_19391;
var statearr_19393_19551 = state_19391__$1;
(statearr_19393_19551[(2)] = null);

(statearr_19393_19551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (2))){
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19391__$1,(4),jobs);
} else {
if((state_val_19392 === (3))){
var inst_19389 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19391__$1,inst_19389);
} else {
if((state_val_19392 === (4))){
var inst_19381 = (state_19391[(2)]);
var inst_19382 = process.call(null,inst_19381);
var state_19391__$1 = state_19391;
if(cljs.core.truth_(inst_19382)){
var statearr_19394_19552 = state_19391__$1;
(statearr_19394_19552[(1)] = (5));

} else {
var statearr_19395_19553 = state_19391__$1;
(statearr_19395_19553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (5))){
var state_19391__$1 = state_19391;
var statearr_19396_19554 = state_19391__$1;
(statearr_19396_19554[(2)] = null);

(statearr_19396_19554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (6))){
var state_19391__$1 = state_19391;
var statearr_19397_19555 = state_19391__$1;
(statearr_19397_19555[(2)] = null);

(statearr_19397_19555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19392 === (7))){
var inst_19387 = (state_19391[(2)]);
var state_19391__$1 = state_19391;
var statearr_19398_19556 = state_19391__$1;
(statearr_19398_19556[(2)] = inst_19387);

(statearr_19398_19556[(1)] = (3));


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
});})(__19547,c__18993__auto___19550,G__19378_19548,n__17729__auto___19546,jobs,results,process,async))
;
return ((function (__19547,switch__18881__auto__,c__18993__auto___19550,G__19378_19548,n__17729__auto___19546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0 = (function (){
var statearr_19402 = [null,null,null,null,null,null,null];
(statearr_19402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__);

(statearr_19402[(1)] = (1));

return statearr_19402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1 = (function (state_19391){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19403){if((e19403 instanceof Object)){
var ex__18885__auto__ = e19403;
var statearr_19404_19557 = state_19391;
(statearr_19404_19557[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19558 = state_19391;
state_19391 = G__19558;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = function(state_19391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1.call(this,state_19391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__;
})()
;})(__19547,switch__18881__auto__,c__18993__auto___19550,G__19378_19548,n__17729__auto___19546,jobs,results,process,async))
})();
var state__18995__auto__ = (function (){var statearr_19405 = f__18994__auto__.call(null);
(statearr_19405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___19550);

return statearr_19405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(__19547,c__18993__auto___19550,G__19378_19548,n__17729__auto___19546,jobs,results,process,async))
);


break;
case "async":
var c__18993__auto___19559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19547,c__18993__auto___19559,G__19378_19548,n__17729__auto___19546,jobs,results,process,async){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (__19547,c__18993__auto___19559,G__19378_19548,n__17729__auto___19546,jobs,results,process,async){
return (function (state_19418){
var state_val_19419 = (state_19418[(1)]);
if((state_val_19419 === (1))){
var state_19418__$1 = state_19418;
var statearr_19420_19560 = state_19418__$1;
(statearr_19420_19560[(2)] = null);

(statearr_19420_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19419 === (2))){
var state_19418__$1 = state_19418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19418__$1,(4),jobs);
} else {
if((state_val_19419 === (3))){
var inst_19416 = (state_19418[(2)]);
var state_19418__$1 = state_19418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19418__$1,inst_19416);
} else {
if((state_val_19419 === (4))){
var inst_19408 = (state_19418[(2)]);
var inst_19409 = async.call(null,inst_19408);
var state_19418__$1 = state_19418;
if(cljs.core.truth_(inst_19409)){
var statearr_19421_19561 = state_19418__$1;
(statearr_19421_19561[(1)] = (5));

} else {
var statearr_19422_19562 = state_19418__$1;
(statearr_19422_19562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19419 === (5))){
var state_19418__$1 = state_19418;
var statearr_19423_19563 = state_19418__$1;
(statearr_19423_19563[(2)] = null);

(statearr_19423_19563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19419 === (6))){
var state_19418__$1 = state_19418;
var statearr_19424_19564 = state_19418__$1;
(statearr_19424_19564[(2)] = null);

(statearr_19424_19564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19419 === (7))){
var inst_19414 = (state_19418[(2)]);
var state_19418__$1 = state_19418;
var statearr_19425_19565 = state_19418__$1;
(statearr_19425_19565[(2)] = inst_19414);

(statearr_19425_19565[(1)] = (3));


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
});})(__19547,c__18993__auto___19559,G__19378_19548,n__17729__auto___19546,jobs,results,process,async))
;
return ((function (__19547,switch__18881__auto__,c__18993__auto___19559,G__19378_19548,n__17729__auto___19546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0 = (function (){
var statearr_19429 = [null,null,null,null,null,null,null];
(statearr_19429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__);

(statearr_19429[(1)] = (1));

return statearr_19429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1 = (function (state_19418){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19430){if((e19430 instanceof Object)){
var ex__18885__auto__ = e19430;
var statearr_19431_19566 = state_19418;
(statearr_19431_19566[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19567 = state_19418;
state_19418 = G__19567;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = function(state_19418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1.call(this,state_19418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__;
})()
;})(__19547,switch__18881__auto__,c__18993__auto___19559,G__19378_19548,n__17729__auto___19546,jobs,results,process,async))
})();
var state__18995__auto__ = (function (){var statearr_19432 = f__18994__auto__.call(null);
(statearr_19432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___19559);

return statearr_19432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(__19547,c__18993__auto___19559,G__19378_19548,n__17729__auto___19546,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19568 = (__19547 + (1));
__19547 = G__19568;
continue;
} else {
}
break;
}

var c__18993__auto___19569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___19569,jobs,results,process,async){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___19569,jobs,results,process,async){
return (function (state_19454){
var state_val_19455 = (state_19454[(1)]);
if((state_val_19455 === (1))){
var state_19454__$1 = state_19454;
var statearr_19456_19570 = state_19454__$1;
(statearr_19456_19570[(2)] = null);

(statearr_19456_19570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (2))){
var state_19454__$1 = state_19454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19454__$1,(4),from);
} else {
if((state_val_19455 === (3))){
var inst_19452 = (state_19454[(2)]);
var state_19454__$1 = state_19454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19454__$1,inst_19452);
} else {
if((state_val_19455 === (4))){
var inst_19435 = (state_19454[(7)]);
var inst_19435__$1 = (state_19454[(2)]);
var inst_19436 = (inst_19435__$1 == null);
var state_19454__$1 = (function (){var statearr_19457 = state_19454;
(statearr_19457[(7)] = inst_19435__$1);

return statearr_19457;
})();
if(cljs.core.truth_(inst_19436)){
var statearr_19458_19571 = state_19454__$1;
(statearr_19458_19571[(1)] = (5));

} else {
var statearr_19459_19572 = state_19454__$1;
(statearr_19459_19572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (5))){
var inst_19438 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19454__$1 = state_19454;
var statearr_19460_19573 = state_19454__$1;
(statearr_19460_19573[(2)] = inst_19438);

(statearr_19460_19573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (6))){
var inst_19440 = (state_19454[(8)]);
var inst_19435 = (state_19454[(7)]);
var inst_19440__$1 = cljs.core.async.chan.call(null,(1));
var inst_19441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19442 = [inst_19435,inst_19440__$1];
var inst_19443 = (new cljs.core.PersistentVector(null,2,(5),inst_19441,inst_19442,null));
var state_19454__$1 = (function (){var statearr_19461 = state_19454;
(statearr_19461[(8)] = inst_19440__$1);

return statearr_19461;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19454__$1,(8),jobs,inst_19443);
} else {
if((state_val_19455 === (7))){
var inst_19450 = (state_19454[(2)]);
var state_19454__$1 = state_19454;
var statearr_19462_19574 = state_19454__$1;
(statearr_19462_19574[(2)] = inst_19450);

(statearr_19462_19574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19455 === (8))){
var inst_19440 = (state_19454[(8)]);
var inst_19445 = (state_19454[(2)]);
var state_19454__$1 = (function (){var statearr_19463 = state_19454;
(statearr_19463[(9)] = inst_19445);

return statearr_19463;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19454__$1,(9),results,inst_19440);
} else {
if((state_val_19455 === (9))){
var inst_19447 = (state_19454[(2)]);
var state_19454__$1 = (function (){var statearr_19464 = state_19454;
(statearr_19464[(10)] = inst_19447);

return statearr_19464;
})();
var statearr_19465_19575 = state_19454__$1;
(statearr_19465_19575[(2)] = null);

(statearr_19465_19575[(1)] = (2));


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
});})(c__18993__auto___19569,jobs,results,process,async))
;
return ((function (switch__18881__auto__,c__18993__auto___19569,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0 = (function (){
var statearr_19469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__);

(statearr_19469[(1)] = (1));

return statearr_19469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1 = (function (state_19454){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19470){if((e19470 instanceof Object)){
var ex__18885__auto__ = e19470;
var statearr_19471_19576 = state_19454;
(statearr_19471_19576[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19577 = state_19454;
state_19454 = G__19577;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = function(state_19454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1.call(this,state_19454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___19569,jobs,results,process,async))
})();
var state__18995__auto__ = (function (){var statearr_19472 = f__18994__auto__.call(null);
(statearr_19472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___19569);

return statearr_19472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___19569,jobs,results,process,async))
);


var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__,jobs,results,process,async){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__,jobs,results,process,async){
return (function (state_19510){
var state_val_19511 = (state_19510[(1)]);
if((state_val_19511 === (7))){
var inst_19506 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19512_19578 = state_19510__$1;
(statearr_19512_19578[(2)] = inst_19506);

(statearr_19512_19578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (20))){
var state_19510__$1 = state_19510;
var statearr_19513_19579 = state_19510__$1;
(statearr_19513_19579[(2)] = null);

(statearr_19513_19579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (1))){
var state_19510__$1 = state_19510;
var statearr_19514_19580 = state_19510__$1;
(statearr_19514_19580[(2)] = null);

(statearr_19514_19580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (4))){
var inst_19475 = (state_19510[(7)]);
var inst_19475__$1 = (state_19510[(2)]);
var inst_19476 = (inst_19475__$1 == null);
var state_19510__$1 = (function (){var statearr_19515 = state_19510;
(statearr_19515[(7)] = inst_19475__$1);

return statearr_19515;
})();
if(cljs.core.truth_(inst_19476)){
var statearr_19516_19581 = state_19510__$1;
(statearr_19516_19581[(1)] = (5));

} else {
var statearr_19517_19582 = state_19510__$1;
(statearr_19517_19582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (15))){
var inst_19488 = (state_19510[(8)]);
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19510__$1,(18),to,inst_19488);
} else {
if((state_val_19511 === (21))){
var inst_19501 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19518_19583 = state_19510__$1;
(statearr_19518_19583[(2)] = inst_19501);

(statearr_19518_19583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (13))){
var inst_19503 = (state_19510[(2)]);
var state_19510__$1 = (function (){var statearr_19519 = state_19510;
(statearr_19519[(9)] = inst_19503);

return statearr_19519;
})();
var statearr_19520_19584 = state_19510__$1;
(statearr_19520_19584[(2)] = null);

(statearr_19520_19584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (6))){
var inst_19475 = (state_19510[(7)]);
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19510__$1,(11),inst_19475);
} else {
if((state_val_19511 === (17))){
var inst_19496 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
if(cljs.core.truth_(inst_19496)){
var statearr_19521_19585 = state_19510__$1;
(statearr_19521_19585[(1)] = (19));

} else {
var statearr_19522_19586 = state_19510__$1;
(statearr_19522_19586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (3))){
var inst_19508 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19510__$1,inst_19508);
} else {
if((state_val_19511 === (12))){
var inst_19485 = (state_19510[(10)]);
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19510__$1,(14),inst_19485);
} else {
if((state_val_19511 === (2))){
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19510__$1,(4),results);
} else {
if((state_val_19511 === (19))){
var state_19510__$1 = state_19510;
var statearr_19523_19587 = state_19510__$1;
(statearr_19523_19587[(2)] = null);

(statearr_19523_19587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (11))){
var inst_19485 = (state_19510[(2)]);
var state_19510__$1 = (function (){var statearr_19524 = state_19510;
(statearr_19524[(10)] = inst_19485);

return statearr_19524;
})();
var statearr_19525_19588 = state_19510__$1;
(statearr_19525_19588[(2)] = null);

(statearr_19525_19588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (9))){
var state_19510__$1 = state_19510;
var statearr_19526_19589 = state_19510__$1;
(statearr_19526_19589[(2)] = null);

(statearr_19526_19589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (5))){
var state_19510__$1 = state_19510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19527_19590 = state_19510__$1;
(statearr_19527_19590[(1)] = (8));

} else {
var statearr_19528_19591 = state_19510__$1;
(statearr_19528_19591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (14))){
var inst_19488 = (state_19510[(8)]);
var inst_19490 = (state_19510[(11)]);
var inst_19488__$1 = (state_19510[(2)]);
var inst_19489 = (inst_19488__$1 == null);
var inst_19490__$1 = cljs.core.not.call(null,inst_19489);
var state_19510__$1 = (function (){var statearr_19529 = state_19510;
(statearr_19529[(8)] = inst_19488__$1);

(statearr_19529[(11)] = inst_19490__$1);

return statearr_19529;
})();
if(inst_19490__$1){
var statearr_19530_19592 = state_19510__$1;
(statearr_19530_19592[(1)] = (15));

} else {
var statearr_19531_19593 = state_19510__$1;
(statearr_19531_19593[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (16))){
var inst_19490 = (state_19510[(11)]);
var state_19510__$1 = state_19510;
var statearr_19532_19594 = state_19510__$1;
(statearr_19532_19594[(2)] = inst_19490);

(statearr_19532_19594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (10))){
var inst_19482 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19533_19595 = state_19510__$1;
(statearr_19533_19595[(2)] = inst_19482);

(statearr_19533_19595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (18))){
var inst_19493 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19534_19596 = state_19510__$1;
(statearr_19534_19596[(2)] = inst_19493);

(statearr_19534_19596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (8))){
var inst_19479 = cljs.core.async.close_BANG_.call(null,to);
var state_19510__$1 = state_19510;
var statearr_19535_19597 = state_19510__$1;
(statearr_19535_19597[(2)] = inst_19479);

(statearr_19535_19597[(1)] = (10));


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
});})(c__18993__auto__,jobs,results,process,async))
;
return ((function (switch__18881__auto__,c__18993__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0 = (function (){
var statearr_19539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__);

(statearr_19539[(1)] = (1));

return statearr_19539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1 = (function (state_19510){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19540){if((e19540 instanceof Object)){
var ex__18885__auto__ = e19540;
var statearr_19541_19598 = state_19510;
(statearr_19541_19598[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19599 = state_19510;
state_19510 = G__19599;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__ = function(state_19510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1.call(this,state_19510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__,jobs,results,process,async))
})();
var state__18995__auto__ = (function (){var statearr_19542 = f__18994__auto__.call(null);
(statearr_19542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_19542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__,jobs,results,process,async))
);

return c__18993__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19600 = [];
var len__17884__auto___19603 = arguments.length;
var i__17885__auto___19604 = (0);
while(true){
if((i__17885__auto___19604 < len__17884__auto___19603)){
args19600.push((arguments[i__17885__auto___19604]));

var G__19605 = (i__17885__auto___19604 + (1));
i__17885__auto___19604 = G__19605;
continue;
} else {
}
break;
}

var G__19602 = args19600.length;
switch (G__19602) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19600.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19607 = [];
var len__17884__auto___19610 = arguments.length;
var i__17885__auto___19611 = (0);
while(true){
if((i__17885__auto___19611 < len__17884__auto___19610)){
args19607.push((arguments[i__17885__auto___19611]));

var G__19612 = (i__17885__auto___19611 + (1));
i__17885__auto___19611 = G__19612;
continue;
} else {
}
break;
}

var G__19609 = args19607.length;
switch (G__19609) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19607.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19614 = [];
var len__17884__auto___19667 = arguments.length;
var i__17885__auto___19668 = (0);
while(true){
if((i__17885__auto___19668 < len__17884__auto___19667)){
args19614.push((arguments[i__17885__auto___19668]));

var G__19669 = (i__17885__auto___19668 + (1));
i__17885__auto___19668 = G__19669;
continue;
} else {
}
break;
}

var G__19616 = args19614.length;
switch (G__19616) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19614.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18993__auto___19671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___19671,tc,fc){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___19671,tc,fc){
return (function (state_19642){
var state_val_19643 = (state_19642[(1)]);
if((state_val_19643 === (7))){
var inst_19638 = (state_19642[(2)]);
var state_19642__$1 = state_19642;
var statearr_19644_19672 = state_19642__$1;
(statearr_19644_19672[(2)] = inst_19638);

(statearr_19644_19672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (1))){
var state_19642__$1 = state_19642;
var statearr_19645_19673 = state_19642__$1;
(statearr_19645_19673[(2)] = null);

(statearr_19645_19673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (4))){
var inst_19619 = (state_19642[(7)]);
var inst_19619__$1 = (state_19642[(2)]);
var inst_19620 = (inst_19619__$1 == null);
var state_19642__$1 = (function (){var statearr_19646 = state_19642;
(statearr_19646[(7)] = inst_19619__$1);

return statearr_19646;
})();
if(cljs.core.truth_(inst_19620)){
var statearr_19647_19674 = state_19642__$1;
(statearr_19647_19674[(1)] = (5));

} else {
var statearr_19648_19675 = state_19642__$1;
(statearr_19648_19675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (13))){
var state_19642__$1 = state_19642;
var statearr_19649_19676 = state_19642__$1;
(statearr_19649_19676[(2)] = null);

(statearr_19649_19676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (6))){
var inst_19619 = (state_19642[(7)]);
var inst_19625 = p.call(null,inst_19619);
var state_19642__$1 = state_19642;
if(cljs.core.truth_(inst_19625)){
var statearr_19650_19677 = state_19642__$1;
(statearr_19650_19677[(1)] = (9));

} else {
var statearr_19651_19678 = state_19642__$1;
(statearr_19651_19678[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (3))){
var inst_19640 = (state_19642[(2)]);
var state_19642__$1 = state_19642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19642__$1,inst_19640);
} else {
if((state_val_19643 === (12))){
var state_19642__$1 = state_19642;
var statearr_19652_19679 = state_19642__$1;
(statearr_19652_19679[(2)] = null);

(statearr_19652_19679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (2))){
var state_19642__$1 = state_19642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19642__$1,(4),ch);
} else {
if((state_val_19643 === (11))){
var inst_19619 = (state_19642[(7)]);
var inst_19629 = (state_19642[(2)]);
var state_19642__$1 = state_19642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19642__$1,(8),inst_19629,inst_19619);
} else {
if((state_val_19643 === (9))){
var state_19642__$1 = state_19642;
var statearr_19653_19680 = state_19642__$1;
(statearr_19653_19680[(2)] = tc);

(statearr_19653_19680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (5))){
var inst_19622 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19623 = cljs.core.async.close_BANG_.call(null,fc);
var state_19642__$1 = (function (){var statearr_19654 = state_19642;
(statearr_19654[(8)] = inst_19622);

return statearr_19654;
})();
var statearr_19655_19681 = state_19642__$1;
(statearr_19655_19681[(2)] = inst_19623);

(statearr_19655_19681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (14))){
var inst_19636 = (state_19642[(2)]);
var state_19642__$1 = state_19642;
var statearr_19656_19682 = state_19642__$1;
(statearr_19656_19682[(2)] = inst_19636);

(statearr_19656_19682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (10))){
var state_19642__$1 = state_19642;
var statearr_19657_19683 = state_19642__$1;
(statearr_19657_19683[(2)] = fc);

(statearr_19657_19683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19643 === (8))){
var inst_19631 = (state_19642[(2)]);
var state_19642__$1 = state_19642;
if(cljs.core.truth_(inst_19631)){
var statearr_19658_19684 = state_19642__$1;
(statearr_19658_19684[(1)] = (12));

} else {
var statearr_19659_19685 = state_19642__$1;
(statearr_19659_19685[(1)] = (13));

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
});})(c__18993__auto___19671,tc,fc))
;
return ((function (switch__18881__auto__,c__18993__auto___19671,tc,fc){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_19663 = [null,null,null,null,null,null,null,null,null];
(statearr_19663[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_19663[(1)] = (1));

return statearr_19663;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_19642){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19664){if((e19664 instanceof Object)){
var ex__18885__auto__ = e19664;
var statearr_19665_19686 = state_19642;
(statearr_19665_19686[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19687 = state_19642;
state_19642 = G__19687;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_19642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_19642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___19671,tc,fc))
})();
var state__18995__auto__ = (function (){var statearr_19666 = f__18994__auto__.call(null);
(statearr_19666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___19671);

return statearr_19666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___19671,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_19751){
var state_val_19752 = (state_19751[(1)]);
if((state_val_19752 === (7))){
var inst_19747 = (state_19751[(2)]);
var state_19751__$1 = state_19751;
var statearr_19753_19774 = state_19751__$1;
(statearr_19753_19774[(2)] = inst_19747);

(statearr_19753_19774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (1))){
var inst_19731 = init;
var state_19751__$1 = (function (){var statearr_19754 = state_19751;
(statearr_19754[(7)] = inst_19731);

return statearr_19754;
})();
var statearr_19755_19775 = state_19751__$1;
(statearr_19755_19775[(2)] = null);

(statearr_19755_19775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (4))){
var inst_19734 = (state_19751[(8)]);
var inst_19734__$1 = (state_19751[(2)]);
var inst_19735 = (inst_19734__$1 == null);
var state_19751__$1 = (function (){var statearr_19756 = state_19751;
(statearr_19756[(8)] = inst_19734__$1);

return statearr_19756;
})();
if(cljs.core.truth_(inst_19735)){
var statearr_19757_19776 = state_19751__$1;
(statearr_19757_19776[(1)] = (5));

} else {
var statearr_19758_19777 = state_19751__$1;
(statearr_19758_19777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (6))){
var inst_19731 = (state_19751[(7)]);
var inst_19734 = (state_19751[(8)]);
var inst_19738 = (state_19751[(9)]);
var inst_19738__$1 = f.call(null,inst_19731,inst_19734);
var inst_19739 = cljs.core.reduced_QMARK_.call(null,inst_19738__$1);
var state_19751__$1 = (function (){var statearr_19759 = state_19751;
(statearr_19759[(9)] = inst_19738__$1);

return statearr_19759;
})();
if(inst_19739){
var statearr_19760_19778 = state_19751__$1;
(statearr_19760_19778[(1)] = (8));

} else {
var statearr_19761_19779 = state_19751__$1;
(statearr_19761_19779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (3))){
var inst_19749 = (state_19751[(2)]);
var state_19751__$1 = state_19751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19751__$1,inst_19749);
} else {
if((state_val_19752 === (2))){
var state_19751__$1 = state_19751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19751__$1,(4),ch);
} else {
if((state_val_19752 === (9))){
var inst_19738 = (state_19751[(9)]);
var inst_19731 = inst_19738;
var state_19751__$1 = (function (){var statearr_19762 = state_19751;
(statearr_19762[(7)] = inst_19731);

return statearr_19762;
})();
var statearr_19763_19780 = state_19751__$1;
(statearr_19763_19780[(2)] = null);

(statearr_19763_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (5))){
var inst_19731 = (state_19751[(7)]);
var state_19751__$1 = state_19751;
var statearr_19764_19781 = state_19751__$1;
(statearr_19764_19781[(2)] = inst_19731);

(statearr_19764_19781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (10))){
var inst_19745 = (state_19751[(2)]);
var state_19751__$1 = state_19751;
var statearr_19765_19782 = state_19751__$1;
(statearr_19765_19782[(2)] = inst_19745);

(statearr_19765_19782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (8))){
var inst_19738 = (state_19751[(9)]);
var inst_19741 = cljs.core.deref.call(null,inst_19738);
var state_19751__$1 = state_19751;
var statearr_19766_19783 = state_19751__$1;
(statearr_19766_19783[(2)] = inst_19741);

(statearr_19766_19783[(1)] = (10));


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
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18882__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18882__auto____0 = (function (){
var statearr_19770 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19770[(0)] = cljs$core$async$reduce_$_state_machine__18882__auto__);

(statearr_19770[(1)] = (1));

return statearr_19770;
});
var cljs$core$async$reduce_$_state_machine__18882__auto____1 = (function (state_19751){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19771){if((e19771 instanceof Object)){
var ex__18885__auto__ = e19771;
var statearr_19772_19784 = state_19751;
(statearr_19772_19784[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19785 = state_19751;
state_19751 = G__19785;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18882__auto__ = function(state_19751){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18882__auto____1.call(this,state_19751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18882__auto____0;
cljs$core$async$reduce_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18882__auto____1;
return cljs$core$async$reduce_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_19773 = f__18994__auto__.call(null);
(statearr_19773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_19773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19786 = [];
var len__17884__auto___19838 = arguments.length;
var i__17885__auto___19839 = (0);
while(true){
if((i__17885__auto___19839 < len__17884__auto___19838)){
args19786.push((arguments[i__17885__auto___19839]));

var G__19840 = (i__17885__auto___19839 + (1));
i__17885__auto___19839 = G__19840;
continue;
} else {
}
break;
}

var G__19788 = args19786.length;
switch (G__19788) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19786.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_19813){
var state_val_19814 = (state_19813[(1)]);
if((state_val_19814 === (7))){
var inst_19795 = (state_19813[(2)]);
var state_19813__$1 = state_19813;
var statearr_19815_19842 = state_19813__$1;
(statearr_19815_19842[(2)] = inst_19795);

(statearr_19815_19842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (1))){
var inst_19789 = cljs.core.seq.call(null,coll);
var inst_19790 = inst_19789;
var state_19813__$1 = (function (){var statearr_19816 = state_19813;
(statearr_19816[(7)] = inst_19790);

return statearr_19816;
})();
var statearr_19817_19843 = state_19813__$1;
(statearr_19817_19843[(2)] = null);

(statearr_19817_19843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (4))){
var inst_19790 = (state_19813[(7)]);
var inst_19793 = cljs.core.first.call(null,inst_19790);
var state_19813__$1 = state_19813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19813__$1,(7),ch,inst_19793);
} else {
if((state_val_19814 === (13))){
var inst_19807 = (state_19813[(2)]);
var state_19813__$1 = state_19813;
var statearr_19818_19844 = state_19813__$1;
(statearr_19818_19844[(2)] = inst_19807);

(statearr_19818_19844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (6))){
var inst_19798 = (state_19813[(2)]);
var state_19813__$1 = state_19813;
if(cljs.core.truth_(inst_19798)){
var statearr_19819_19845 = state_19813__$1;
(statearr_19819_19845[(1)] = (8));

} else {
var statearr_19820_19846 = state_19813__$1;
(statearr_19820_19846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (3))){
var inst_19811 = (state_19813[(2)]);
var state_19813__$1 = state_19813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19813__$1,inst_19811);
} else {
if((state_val_19814 === (12))){
var state_19813__$1 = state_19813;
var statearr_19821_19847 = state_19813__$1;
(statearr_19821_19847[(2)] = null);

(statearr_19821_19847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (2))){
var inst_19790 = (state_19813[(7)]);
var state_19813__$1 = state_19813;
if(cljs.core.truth_(inst_19790)){
var statearr_19822_19848 = state_19813__$1;
(statearr_19822_19848[(1)] = (4));

} else {
var statearr_19823_19849 = state_19813__$1;
(statearr_19823_19849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (11))){
var inst_19804 = cljs.core.async.close_BANG_.call(null,ch);
var state_19813__$1 = state_19813;
var statearr_19824_19850 = state_19813__$1;
(statearr_19824_19850[(2)] = inst_19804);

(statearr_19824_19850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (9))){
var state_19813__$1 = state_19813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19825_19851 = state_19813__$1;
(statearr_19825_19851[(1)] = (11));

} else {
var statearr_19826_19852 = state_19813__$1;
(statearr_19826_19852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (5))){
var inst_19790 = (state_19813[(7)]);
var state_19813__$1 = state_19813;
var statearr_19827_19853 = state_19813__$1;
(statearr_19827_19853[(2)] = inst_19790);

(statearr_19827_19853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (10))){
var inst_19809 = (state_19813[(2)]);
var state_19813__$1 = state_19813;
var statearr_19828_19854 = state_19813__$1;
(statearr_19828_19854[(2)] = inst_19809);

(statearr_19828_19854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19814 === (8))){
var inst_19790 = (state_19813[(7)]);
var inst_19800 = cljs.core.next.call(null,inst_19790);
var inst_19790__$1 = inst_19800;
var state_19813__$1 = (function (){var statearr_19829 = state_19813;
(statearr_19829[(7)] = inst_19790__$1);

return statearr_19829;
})();
var statearr_19830_19855 = state_19813__$1;
(statearr_19830_19855[(2)] = null);

(statearr_19830_19855[(1)] = (2));


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
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_19834 = [null,null,null,null,null,null,null,null];
(statearr_19834[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_19834[(1)] = (1));

return statearr_19834;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_19813){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_19813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e19835){if((e19835 instanceof Object)){
var ex__18885__auto__ = e19835;
var statearr_19836_19856 = state_19813;
(statearr_19836_19856[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19857 = state_19813;
state_19813 = G__19857;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_19813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_19813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_19837 = f__18994__auto__.call(null);
(statearr_19837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_19837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20079 = (function (mult,ch,cs,meta20080){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20080 = meta20080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20081,meta20080__$1){
var self__ = this;
var _20081__$1 = this;
return (new cljs.core.async.t_cljs$core$async20079(self__.mult,self__.ch,self__.cs,meta20080__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20081){
var self__ = this;
var _20081__$1 = this;
return self__.meta20080;
});})(cs))
;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20079.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20079.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20080","meta20080",-128380534,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20079";

cljs.core.async.t_cljs$core$async20079.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20079");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20079 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20079(mult__$1,ch__$1,cs__$1,meta20080){
return (new cljs.core.async.t_cljs$core$async20079(mult__$1,ch__$1,cs__$1,meta20080));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20079(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18993__auto___20300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___20300,cs,m,dchan,dctr,done){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___20300,cs,m,dchan,dctr,done){
return (function (state_20212){
var state_val_20213 = (state_20212[(1)]);
if((state_val_20213 === (7))){
var inst_20208 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20214_20301 = state_20212__$1;
(statearr_20214_20301[(2)] = inst_20208);

(statearr_20214_20301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (20))){
var inst_20113 = (state_20212[(7)]);
var inst_20123 = cljs.core.first.call(null,inst_20113);
var inst_20124 = cljs.core.nth.call(null,inst_20123,(0),null);
var inst_20125 = cljs.core.nth.call(null,inst_20123,(1),null);
var state_20212__$1 = (function (){var statearr_20215 = state_20212;
(statearr_20215[(8)] = inst_20124);

return statearr_20215;
})();
if(cljs.core.truth_(inst_20125)){
var statearr_20216_20302 = state_20212__$1;
(statearr_20216_20302[(1)] = (22));

} else {
var statearr_20217_20303 = state_20212__$1;
(statearr_20217_20303[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (27))){
var inst_20153 = (state_20212[(9)]);
var inst_20160 = (state_20212[(10)]);
var inst_20155 = (state_20212[(11)]);
var inst_20084 = (state_20212[(12)]);
var inst_20160__$1 = cljs.core._nth.call(null,inst_20153,inst_20155);
var inst_20161 = cljs.core.async.put_BANG_.call(null,inst_20160__$1,inst_20084,done);
var state_20212__$1 = (function (){var statearr_20218 = state_20212;
(statearr_20218[(10)] = inst_20160__$1);

return statearr_20218;
})();
if(cljs.core.truth_(inst_20161)){
var statearr_20219_20304 = state_20212__$1;
(statearr_20219_20304[(1)] = (30));

} else {
var statearr_20220_20305 = state_20212__$1;
(statearr_20220_20305[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (1))){
var state_20212__$1 = state_20212;
var statearr_20221_20306 = state_20212__$1;
(statearr_20221_20306[(2)] = null);

(statearr_20221_20306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (24))){
var inst_20113 = (state_20212[(7)]);
var inst_20130 = (state_20212[(2)]);
var inst_20131 = cljs.core.next.call(null,inst_20113);
var inst_20093 = inst_20131;
var inst_20094 = null;
var inst_20095 = (0);
var inst_20096 = (0);
var state_20212__$1 = (function (){var statearr_20222 = state_20212;
(statearr_20222[(13)] = inst_20093);

(statearr_20222[(14)] = inst_20130);

(statearr_20222[(15)] = inst_20096);

(statearr_20222[(16)] = inst_20094);

(statearr_20222[(17)] = inst_20095);

return statearr_20222;
})();
var statearr_20223_20307 = state_20212__$1;
(statearr_20223_20307[(2)] = null);

(statearr_20223_20307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (39))){
var state_20212__$1 = state_20212;
var statearr_20227_20308 = state_20212__$1;
(statearr_20227_20308[(2)] = null);

(statearr_20227_20308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (4))){
var inst_20084 = (state_20212[(12)]);
var inst_20084__$1 = (state_20212[(2)]);
var inst_20085 = (inst_20084__$1 == null);
var state_20212__$1 = (function (){var statearr_20228 = state_20212;
(statearr_20228[(12)] = inst_20084__$1);

return statearr_20228;
})();
if(cljs.core.truth_(inst_20085)){
var statearr_20229_20309 = state_20212__$1;
(statearr_20229_20309[(1)] = (5));

} else {
var statearr_20230_20310 = state_20212__$1;
(statearr_20230_20310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (15))){
var inst_20093 = (state_20212[(13)]);
var inst_20096 = (state_20212[(15)]);
var inst_20094 = (state_20212[(16)]);
var inst_20095 = (state_20212[(17)]);
var inst_20109 = (state_20212[(2)]);
var inst_20110 = (inst_20096 + (1));
var tmp20224 = inst_20093;
var tmp20225 = inst_20094;
var tmp20226 = inst_20095;
var inst_20093__$1 = tmp20224;
var inst_20094__$1 = tmp20225;
var inst_20095__$1 = tmp20226;
var inst_20096__$1 = inst_20110;
var state_20212__$1 = (function (){var statearr_20231 = state_20212;
(statearr_20231[(13)] = inst_20093__$1);

(statearr_20231[(15)] = inst_20096__$1);

(statearr_20231[(18)] = inst_20109);

(statearr_20231[(16)] = inst_20094__$1);

(statearr_20231[(17)] = inst_20095__$1);

return statearr_20231;
})();
var statearr_20232_20311 = state_20212__$1;
(statearr_20232_20311[(2)] = null);

(statearr_20232_20311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (21))){
var inst_20134 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20236_20312 = state_20212__$1;
(statearr_20236_20312[(2)] = inst_20134);

(statearr_20236_20312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (31))){
var inst_20160 = (state_20212[(10)]);
var inst_20164 = done.call(null,null);
var inst_20165 = cljs.core.async.untap_STAR_.call(null,m,inst_20160);
var state_20212__$1 = (function (){var statearr_20237 = state_20212;
(statearr_20237[(19)] = inst_20164);

return statearr_20237;
})();
var statearr_20238_20313 = state_20212__$1;
(statearr_20238_20313[(2)] = inst_20165);

(statearr_20238_20313[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (32))){
var inst_20153 = (state_20212[(9)]);
var inst_20152 = (state_20212[(20)]);
var inst_20155 = (state_20212[(11)]);
var inst_20154 = (state_20212[(21)]);
var inst_20167 = (state_20212[(2)]);
var inst_20168 = (inst_20155 + (1));
var tmp20233 = inst_20153;
var tmp20234 = inst_20152;
var tmp20235 = inst_20154;
var inst_20152__$1 = tmp20234;
var inst_20153__$1 = tmp20233;
var inst_20154__$1 = tmp20235;
var inst_20155__$1 = inst_20168;
var state_20212__$1 = (function (){var statearr_20239 = state_20212;
(statearr_20239[(9)] = inst_20153__$1);

(statearr_20239[(20)] = inst_20152__$1);

(statearr_20239[(11)] = inst_20155__$1);

(statearr_20239[(21)] = inst_20154__$1);

(statearr_20239[(22)] = inst_20167);

return statearr_20239;
})();
var statearr_20240_20314 = state_20212__$1;
(statearr_20240_20314[(2)] = null);

(statearr_20240_20314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (40))){
var inst_20180 = (state_20212[(23)]);
var inst_20184 = done.call(null,null);
var inst_20185 = cljs.core.async.untap_STAR_.call(null,m,inst_20180);
var state_20212__$1 = (function (){var statearr_20241 = state_20212;
(statearr_20241[(24)] = inst_20184);

return statearr_20241;
})();
var statearr_20242_20315 = state_20212__$1;
(statearr_20242_20315[(2)] = inst_20185);

(statearr_20242_20315[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (33))){
var inst_20171 = (state_20212[(25)]);
var inst_20173 = cljs.core.chunked_seq_QMARK_.call(null,inst_20171);
var state_20212__$1 = state_20212;
if(inst_20173){
var statearr_20243_20316 = state_20212__$1;
(statearr_20243_20316[(1)] = (36));

} else {
var statearr_20244_20317 = state_20212__$1;
(statearr_20244_20317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (13))){
var inst_20103 = (state_20212[(26)]);
var inst_20106 = cljs.core.async.close_BANG_.call(null,inst_20103);
var state_20212__$1 = state_20212;
var statearr_20245_20318 = state_20212__$1;
(statearr_20245_20318[(2)] = inst_20106);

(statearr_20245_20318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (22))){
var inst_20124 = (state_20212[(8)]);
var inst_20127 = cljs.core.async.close_BANG_.call(null,inst_20124);
var state_20212__$1 = state_20212;
var statearr_20246_20319 = state_20212__$1;
(statearr_20246_20319[(2)] = inst_20127);

(statearr_20246_20319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (36))){
var inst_20171 = (state_20212[(25)]);
var inst_20175 = cljs.core.chunk_first.call(null,inst_20171);
var inst_20176 = cljs.core.chunk_rest.call(null,inst_20171);
var inst_20177 = cljs.core.count.call(null,inst_20175);
var inst_20152 = inst_20176;
var inst_20153 = inst_20175;
var inst_20154 = inst_20177;
var inst_20155 = (0);
var state_20212__$1 = (function (){var statearr_20247 = state_20212;
(statearr_20247[(9)] = inst_20153);

(statearr_20247[(20)] = inst_20152);

(statearr_20247[(11)] = inst_20155);

(statearr_20247[(21)] = inst_20154);

return statearr_20247;
})();
var statearr_20248_20320 = state_20212__$1;
(statearr_20248_20320[(2)] = null);

(statearr_20248_20320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (41))){
var inst_20171 = (state_20212[(25)]);
var inst_20187 = (state_20212[(2)]);
var inst_20188 = cljs.core.next.call(null,inst_20171);
var inst_20152 = inst_20188;
var inst_20153 = null;
var inst_20154 = (0);
var inst_20155 = (0);
var state_20212__$1 = (function (){var statearr_20249 = state_20212;
(statearr_20249[(9)] = inst_20153);

(statearr_20249[(20)] = inst_20152);

(statearr_20249[(11)] = inst_20155);

(statearr_20249[(21)] = inst_20154);

(statearr_20249[(27)] = inst_20187);

return statearr_20249;
})();
var statearr_20250_20321 = state_20212__$1;
(statearr_20250_20321[(2)] = null);

(statearr_20250_20321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (43))){
var state_20212__$1 = state_20212;
var statearr_20251_20322 = state_20212__$1;
(statearr_20251_20322[(2)] = null);

(statearr_20251_20322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (29))){
var inst_20196 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20252_20323 = state_20212__$1;
(statearr_20252_20323[(2)] = inst_20196);

(statearr_20252_20323[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (44))){
var inst_20205 = (state_20212[(2)]);
var state_20212__$1 = (function (){var statearr_20253 = state_20212;
(statearr_20253[(28)] = inst_20205);

return statearr_20253;
})();
var statearr_20254_20324 = state_20212__$1;
(statearr_20254_20324[(2)] = null);

(statearr_20254_20324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (6))){
var inst_20144 = (state_20212[(29)]);
var inst_20143 = cljs.core.deref.call(null,cs);
var inst_20144__$1 = cljs.core.keys.call(null,inst_20143);
var inst_20145 = cljs.core.count.call(null,inst_20144__$1);
var inst_20146 = cljs.core.reset_BANG_.call(null,dctr,inst_20145);
var inst_20151 = cljs.core.seq.call(null,inst_20144__$1);
var inst_20152 = inst_20151;
var inst_20153 = null;
var inst_20154 = (0);
var inst_20155 = (0);
var state_20212__$1 = (function (){var statearr_20255 = state_20212;
(statearr_20255[(30)] = inst_20146);

(statearr_20255[(9)] = inst_20153);

(statearr_20255[(20)] = inst_20152);

(statearr_20255[(11)] = inst_20155);

(statearr_20255[(21)] = inst_20154);

(statearr_20255[(29)] = inst_20144__$1);

return statearr_20255;
})();
var statearr_20256_20325 = state_20212__$1;
(statearr_20256_20325[(2)] = null);

(statearr_20256_20325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (28))){
var inst_20152 = (state_20212[(20)]);
var inst_20171 = (state_20212[(25)]);
var inst_20171__$1 = cljs.core.seq.call(null,inst_20152);
var state_20212__$1 = (function (){var statearr_20257 = state_20212;
(statearr_20257[(25)] = inst_20171__$1);

return statearr_20257;
})();
if(inst_20171__$1){
var statearr_20258_20326 = state_20212__$1;
(statearr_20258_20326[(1)] = (33));

} else {
var statearr_20259_20327 = state_20212__$1;
(statearr_20259_20327[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (25))){
var inst_20155 = (state_20212[(11)]);
var inst_20154 = (state_20212[(21)]);
var inst_20157 = (inst_20155 < inst_20154);
var inst_20158 = inst_20157;
var state_20212__$1 = state_20212;
if(cljs.core.truth_(inst_20158)){
var statearr_20260_20328 = state_20212__$1;
(statearr_20260_20328[(1)] = (27));

} else {
var statearr_20261_20329 = state_20212__$1;
(statearr_20261_20329[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (34))){
var state_20212__$1 = state_20212;
var statearr_20262_20330 = state_20212__$1;
(statearr_20262_20330[(2)] = null);

(statearr_20262_20330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (17))){
var state_20212__$1 = state_20212;
var statearr_20263_20331 = state_20212__$1;
(statearr_20263_20331[(2)] = null);

(statearr_20263_20331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (3))){
var inst_20210 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20212__$1,inst_20210);
} else {
if((state_val_20213 === (12))){
var inst_20139 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20264_20332 = state_20212__$1;
(statearr_20264_20332[(2)] = inst_20139);

(statearr_20264_20332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (2))){
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20212__$1,(4),ch);
} else {
if((state_val_20213 === (23))){
var state_20212__$1 = state_20212;
var statearr_20265_20333 = state_20212__$1;
(statearr_20265_20333[(2)] = null);

(statearr_20265_20333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (35))){
var inst_20194 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20266_20334 = state_20212__$1;
(statearr_20266_20334[(2)] = inst_20194);

(statearr_20266_20334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (19))){
var inst_20113 = (state_20212[(7)]);
var inst_20117 = cljs.core.chunk_first.call(null,inst_20113);
var inst_20118 = cljs.core.chunk_rest.call(null,inst_20113);
var inst_20119 = cljs.core.count.call(null,inst_20117);
var inst_20093 = inst_20118;
var inst_20094 = inst_20117;
var inst_20095 = inst_20119;
var inst_20096 = (0);
var state_20212__$1 = (function (){var statearr_20267 = state_20212;
(statearr_20267[(13)] = inst_20093);

(statearr_20267[(15)] = inst_20096);

(statearr_20267[(16)] = inst_20094);

(statearr_20267[(17)] = inst_20095);

return statearr_20267;
})();
var statearr_20268_20335 = state_20212__$1;
(statearr_20268_20335[(2)] = null);

(statearr_20268_20335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (11))){
var inst_20093 = (state_20212[(13)]);
var inst_20113 = (state_20212[(7)]);
var inst_20113__$1 = cljs.core.seq.call(null,inst_20093);
var state_20212__$1 = (function (){var statearr_20269 = state_20212;
(statearr_20269[(7)] = inst_20113__$1);

return statearr_20269;
})();
if(inst_20113__$1){
var statearr_20270_20336 = state_20212__$1;
(statearr_20270_20336[(1)] = (16));

} else {
var statearr_20271_20337 = state_20212__$1;
(statearr_20271_20337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (9))){
var inst_20141 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20272_20338 = state_20212__$1;
(statearr_20272_20338[(2)] = inst_20141);

(statearr_20272_20338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (5))){
var inst_20091 = cljs.core.deref.call(null,cs);
var inst_20092 = cljs.core.seq.call(null,inst_20091);
var inst_20093 = inst_20092;
var inst_20094 = null;
var inst_20095 = (0);
var inst_20096 = (0);
var state_20212__$1 = (function (){var statearr_20273 = state_20212;
(statearr_20273[(13)] = inst_20093);

(statearr_20273[(15)] = inst_20096);

(statearr_20273[(16)] = inst_20094);

(statearr_20273[(17)] = inst_20095);

return statearr_20273;
})();
var statearr_20274_20339 = state_20212__$1;
(statearr_20274_20339[(2)] = null);

(statearr_20274_20339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (14))){
var state_20212__$1 = state_20212;
var statearr_20275_20340 = state_20212__$1;
(statearr_20275_20340[(2)] = null);

(statearr_20275_20340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (45))){
var inst_20202 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20276_20341 = state_20212__$1;
(statearr_20276_20341[(2)] = inst_20202);

(statearr_20276_20341[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (26))){
var inst_20144 = (state_20212[(29)]);
var inst_20198 = (state_20212[(2)]);
var inst_20199 = cljs.core.seq.call(null,inst_20144);
var state_20212__$1 = (function (){var statearr_20277 = state_20212;
(statearr_20277[(31)] = inst_20198);

return statearr_20277;
})();
if(inst_20199){
var statearr_20278_20342 = state_20212__$1;
(statearr_20278_20342[(1)] = (42));

} else {
var statearr_20279_20343 = state_20212__$1;
(statearr_20279_20343[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (16))){
var inst_20113 = (state_20212[(7)]);
var inst_20115 = cljs.core.chunked_seq_QMARK_.call(null,inst_20113);
var state_20212__$1 = state_20212;
if(inst_20115){
var statearr_20280_20344 = state_20212__$1;
(statearr_20280_20344[(1)] = (19));

} else {
var statearr_20281_20345 = state_20212__$1;
(statearr_20281_20345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (38))){
var inst_20191 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20282_20346 = state_20212__$1;
(statearr_20282_20346[(2)] = inst_20191);

(statearr_20282_20346[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (30))){
var state_20212__$1 = state_20212;
var statearr_20283_20347 = state_20212__$1;
(statearr_20283_20347[(2)] = null);

(statearr_20283_20347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (10))){
var inst_20096 = (state_20212[(15)]);
var inst_20094 = (state_20212[(16)]);
var inst_20102 = cljs.core._nth.call(null,inst_20094,inst_20096);
var inst_20103 = cljs.core.nth.call(null,inst_20102,(0),null);
var inst_20104 = cljs.core.nth.call(null,inst_20102,(1),null);
var state_20212__$1 = (function (){var statearr_20284 = state_20212;
(statearr_20284[(26)] = inst_20103);

return statearr_20284;
})();
if(cljs.core.truth_(inst_20104)){
var statearr_20285_20348 = state_20212__$1;
(statearr_20285_20348[(1)] = (13));

} else {
var statearr_20286_20349 = state_20212__$1;
(statearr_20286_20349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (18))){
var inst_20137 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20287_20350 = state_20212__$1;
(statearr_20287_20350[(2)] = inst_20137);

(statearr_20287_20350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (42))){
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20212__$1,(45),dchan);
} else {
if((state_val_20213 === (37))){
var inst_20171 = (state_20212[(25)]);
var inst_20180 = (state_20212[(23)]);
var inst_20084 = (state_20212[(12)]);
var inst_20180__$1 = cljs.core.first.call(null,inst_20171);
var inst_20181 = cljs.core.async.put_BANG_.call(null,inst_20180__$1,inst_20084,done);
var state_20212__$1 = (function (){var statearr_20288 = state_20212;
(statearr_20288[(23)] = inst_20180__$1);

return statearr_20288;
})();
if(cljs.core.truth_(inst_20181)){
var statearr_20289_20351 = state_20212__$1;
(statearr_20289_20351[(1)] = (39));

} else {
var statearr_20290_20352 = state_20212__$1;
(statearr_20290_20352[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (8))){
var inst_20096 = (state_20212[(15)]);
var inst_20095 = (state_20212[(17)]);
var inst_20098 = (inst_20096 < inst_20095);
var inst_20099 = inst_20098;
var state_20212__$1 = state_20212;
if(cljs.core.truth_(inst_20099)){
var statearr_20291_20353 = state_20212__$1;
(statearr_20291_20353[(1)] = (10));

} else {
var statearr_20292_20354 = state_20212__$1;
(statearr_20292_20354[(1)] = (11));

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
});})(c__18993__auto___20300,cs,m,dchan,dctr,done))
;
return ((function (switch__18881__auto__,c__18993__auto___20300,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18882__auto__ = null;
var cljs$core$async$mult_$_state_machine__18882__auto____0 = (function (){
var statearr_20296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20296[(0)] = cljs$core$async$mult_$_state_machine__18882__auto__);

(statearr_20296[(1)] = (1));

return statearr_20296;
});
var cljs$core$async$mult_$_state_machine__18882__auto____1 = (function (state_20212){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_20212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e20297){if((e20297 instanceof Object)){
var ex__18885__auto__ = e20297;
var statearr_20298_20355 = state_20212;
(statearr_20298_20355[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20356 = state_20212;
state_20212 = G__20356;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18882__auto__ = function(state_20212){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18882__auto____1.call(this,state_20212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18882__auto____0;
cljs$core$async$mult_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18882__auto____1;
return cljs$core$async$mult_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___20300,cs,m,dchan,dctr,done))
})();
var state__18995__auto__ = (function (){var statearr_20299 = f__18994__auto__.call(null);
(statearr_20299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___20300);

return statearr_20299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___20300,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20357 = [];
var len__17884__auto___20360 = arguments.length;
var i__17885__auto___20361 = (0);
while(true){
if((i__17885__auto___20361 < len__17884__auto___20360)){
args20357.push((arguments[i__17885__auto___20361]));

var G__20362 = (i__17885__auto___20361 + (1));
i__17885__auto___20361 = G__20362;
continue;
} else {
}
break;
}

var G__20359 = args20357.length;
switch (G__20359) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20357.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___20374 = arguments.length;
var i__17885__auto___20375 = (0);
while(true){
if((i__17885__auto___20375 < len__17884__auto___20374)){
args__17891__auto__.push((arguments[i__17885__auto___20375]));

var G__20376 = (i__17885__auto___20375 + (1));
i__17885__auto___20375 = G__20376;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20368){
var map__20369 = p__20368;
var map__20369__$1 = ((((!((map__20369 == null)))?((((map__20369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20369):map__20369);
var opts = map__20369__$1;
var statearr_20371_20377 = state;
(statearr_20371_20377[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20369,map__20369__$1,opts){
return (function (val){
var statearr_20372_20378 = state;
(statearr_20372_20378[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20369,map__20369__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20373_20379 = state;
(statearr_20373_20379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20364){
var G__20365 = cljs.core.first.call(null,seq20364);
var seq20364__$1 = cljs.core.next.call(null,seq20364);
var G__20366 = cljs.core.first.call(null,seq20364__$1);
var seq20364__$2 = cljs.core.next.call(null,seq20364__$1);
var G__20367 = cljs.core.first.call(null,seq20364__$2);
var seq20364__$3 = cljs.core.next.call(null,seq20364__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20365,G__20366,G__20367,seq20364__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20543 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20544){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20544 = meta20544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20545,meta20544__$1){
var self__ = this;
var _20545__$1 = this;
return (new cljs.core.async.t_cljs$core$async20543(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20544__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20545){
var self__ = this;
var _20545__$1 = this;
return self__.meta20544;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20544","meta20544",-852766326,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20543";

cljs.core.async.t_cljs$core$async20543.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20543");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20543 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20543(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20544){
return (new cljs.core.async.t_cljs$core$async20543(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20544));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20543(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18993__auto___20706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___20706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___20706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20643){
var state_val_20644 = (state_20643[(1)]);
if((state_val_20644 === (7))){
var inst_20561 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
var statearr_20645_20707 = state_20643__$1;
(statearr_20645_20707[(2)] = inst_20561);

(statearr_20645_20707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (20))){
var inst_20573 = (state_20643[(7)]);
var state_20643__$1 = state_20643;
var statearr_20646_20708 = state_20643__$1;
(statearr_20646_20708[(2)] = inst_20573);

(statearr_20646_20708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (27))){
var state_20643__$1 = state_20643;
var statearr_20647_20709 = state_20643__$1;
(statearr_20647_20709[(2)] = null);

(statearr_20647_20709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (1))){
var inst_20549 = (state_20643[(8)]);
var inst_20549__$1 = calc_state.call(null);
var inst_20551 = (inst_20549__$1 == null);
var inst_20552 = cljs.core.not.call(null,inst_20551);
var state_20643__$1 = (function (){var statearr_20648 = state_20643;
(statearr_20648[(8)] = inst_20549__$1);

return statearr_20648;
})();
if(inst_20552){
var statearr_20649_20710 = state_20643__$1;
(statearr_20649_20710[(1)] = (2));

} else {
var statearr_20650_20711 = state_20643__$1;
(statearr_20650_20711[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (24))){
var inst_20603 = (state_20643[(9)]);
var inst_20596 = (state_20643[(10)]);
var inst_20617 = (state_20643[(11)]);
var inst_20617__$1 = inst_20596.call(null,inst_20603);
var state_20643__$1 = (function (){var statearr_20651 = state_20643;
(statearr_20651[(11)] = inst_20617__$1);

return statearr_20651;
})();
if(cljs.core.truth_(inst_20617__$1)){
var statearr_20652_20712 = state_20643__$1;
(statearr_20652_20712[(1)] = (29));

} else {
var statearr_20653_20713 = state_20643__$1;
(statearr_20653_20713[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (4))){
var inst_20564 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20564)){
var statearr_20654_20714 = state_20643__$1;
(statearr_20654_20714[(1)] = (8));

} else {
var statearr_20655_20715 = state_20643__$1;
(statearr_20655_20715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (15))){
var inst_20590 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20590)){
var statearr_20656_20716 = state_20643__$1;
(statearr_20656_20716[(1)] = (19));

} else {
var statearr_20657_20717 = state_20643__$1;
(statearr_20657_20717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (21))){
var inst_20595 = (state_20643[(12)]);
var inst_20595__$1 = (state_20643[(2)]);
var inst_20596 = cljs.core.get.call(null,inst_20595__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20597 = cljs.core.get.call(null,inst_20595__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20598 = cljs.core.get.call(null,inst_20595__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20643__$1 = (function (){var statearr_20658 = state_20643;
(statearr_20658[(12)] = inst_20595__$1);

(statearr_20658[(10)] = inst_20596);

(statearr_20658[(13)] = inst_20597);

return statearr_20658;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20643__$1,(22),inst_20598);
} else {
if((state_val_20644 === (31))){
var inst_20625 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20625)){
var statearr_20659_20718 = state_20643__$1;
(statearr_20659_20718[(1)] = (32));

} else {
var statearr_20660_20719 = state_20643__$1;
(statearr_20660_20719[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (32))){
var inst_20602 = (state_20643[(14)]);
var state_20643__$1 = state_20643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20643__$1,(35),out,inst_20602);
} else {
if((state_val_20644 === (33))){
var inst_20595 = (state_20643[(12)]);
var inst_20573 = inst_20595;
var state_20643__$1 = (function (){var statearr_20661 = state_20643;
(statearr_20661[(7)] = inst_20573);

return statearr_20661;
})();
var statearr_20662_20720 = state_20643__$1;
(statearr_20662_20720[(2)] = null);

(statearr_20662_20720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (13))){
var inst_20573 = (state_20643[(7)]);
var inst_20580 = inst_20573.cljs$lang$protocol_mask$partition0$;
var inst_20581 = (inst_20580 & (64));
var inst_20582 = inst_20573.cljs$core$ISeq$;
var inst_20583 = (inst_20581) || (inst_20582);
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20583)){
var statearr_20663_20721 = state_20643__$1;
(statearr_20663_20721[(1)] = (16));

} else {
var statearr_20664_20722 = state_20643__$1;
(statearr_20664_20722[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (22))){
var inst_20603 = (state_20643[(9)]);
var inst_20602 = (state_20643[(14)]);
var inst_20601 = (state_20643[(2)]);
var inst_20602__$1 = cljs.core.nth.call(null,inst_20601,(0),null);
var inst_20603__$1 = cljs.core.nth.call(null,inst_20601,(1),null);
var inst_20604 = (inst_20602__$1 == null);
var inst_20605 = cljs.core._EQ_.call(null,inst_20603__$1,change);
var inst_20606 = (inst_20604) || (inst_20605);
var state_20643__$1 = (function (){var statearr_20665 = state_20643;
(statearr_20665[(9)] = inst_20603__$1);

(statearr_20665[(14)] = inst_20602__$1);

return statearr_20665;
})();
if(cljs.core.truth_(inst_20606)){
var statearr_20666_20723 = state_20643__$1;
(statearr_20666_20723[(1)] = (23));

} else {
var statearr_20667_20724 = state_20643__$1;
(statearr_20667_20724[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (36))){
var inst_20595 = (state_20643[(12)]);
var inst_20573 = inst_20595;
var state_20643__$1 = (function (){var statearr_20668 = state_20643;
(statearr_20668[(7)] = inst_20573);

return statearr_20668;
})();
var statearr_20669_20725 = state_20643__$1;
(statearr_20669_20725[(2)] = null);

(statearr_20669_20725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (29))){
var inst_20617 = (state_20643[(11)]);
var state_20643__$1 = state_20643;
var statearr_20670_20726 = state_20643__$1;
(statearr_20670_20726[(2)] = inst_20617);

(statearr_20670_20726[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (6))){
var state_20643__$1 = state_20643;
var statearr_20671_20727 = state_20643__$1;
(statearr_20671_20727[(2)] = false);

(statearr_20671_20727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (28))){
var inst_20613 = (state_20643[(2)]);
var inst_20614 = calc_state.call(null);
var inst_20573 = inst_20614;
var state_20643__$1 = (function (){var statearr_20672 = state_20643;
(statearr_20672[(7)] = inst_20573);

(statearr_20672[(15)] = inst_20613);

return statearr_20672;
})();
var statearr_20673_20728 = state_20643__$1;
(statearr_20673_20728[(2)] = null);

(statearr_20673_20728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (25))){
var inst_20639 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
var statearr_20674_20729 = state_20643__$1;
(statearr_20674_20729[(2)] = inst_20639);

(statearr_20674_20729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (34))){
var inst_20637 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
var statearr_20675_20730 = state_20643__$1;
(statearr_20675_20730[(2)] = inst_20637);

(statearr_20675_20730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (17))){
var state_20643__$1 = state_20643;
var statearr_20676_20731 = state_20643__$1;
(statearr_20676_20731[(2)] = false);

(statearr_20676_20731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (3))){
var state_20643__$1 = state_20643;
var statearr_20677_20732 = state_20643__$1;
(statearr_20677_20732[(2)] = false);

(statearr_20677_20732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (12))){
var inst_20641 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20643__$1,inst_20641);
} else {
if((state_val_20644 === (2))){
var inst_20549 = (state_20643[(8)]);
var inst_20554 = inst_20549.cljs$lang$protocol_mask$partition0$;
var inst_20555 = (inst_20554 & (64));
var inst_20556 = inst_20549.cljs$core$ISeq$;
var inst_20557 = (inst_20555) || (inst_20556);
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20557)){
var statearr_20678_20733 = state_20643__$1;
(statearr_20678_20733[(1)] = (5));

} else {
var statearr_20679_20734 = state_20643__$1;
(statearr_20679_20734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (23))){
var inst_20602 = (state_20643[(14)]);
var inst_20608 = (inst_20602 == null);
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20608)){
var statearr_20680_20735 = state_20643__$1;
(statearr_20680_20735[(1)] = (26));

} else {
var statearr_20681_20736 = state_20643__$1;
(statearr_20681_20736[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (35))){
var inst_20628 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20628)){
var statearr_20682_20737 = state_20643__$1;
(statearr_20682_20737[(1)] = (36));

} else {
var statearr_20683_20738 = state_20643__$1;
(statearr_20683_20738[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (19))){
var inst_20573 = (state_20643[(7)]);
var inst_20592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20573);
var state_20643__$1 = state_20643;
var statearr_20684_20739 = state_20643__$1;
(statearr_20684_20739[(2)] = inst_20592);

(statearr_20684_20739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (11))){
var inst_20573 = (state_20643[(7)]);
var inst_20577 = (inst_20573 == null);
var inst_20578 = cljs.core.not.call(null,inst_20577);
var state_20643__$1 = state_20643;
if(inst_20578){
var statearr_20685_20740 = state_20643__$1;
(statearr_20685_20740[(1)] = (13));

} else {
var statearr_20686_20741 = state_20643__$1;
(statearr_20686_20741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (9))){
var inst_20549 = (state_20643[(8)]);
var state_20643__$1 = state_20643;
var statearr_20687_20742 = state_20643__$1;
(statearr_20687_20742[(2)] = inst_20549);

(statearr_20687_20742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (5))){
var state_20643__$1 = state_20643;
var statearr_20688_20743 = state_20643__$1;
(statearr_20688_20743[(2)] = true);

(statearr_20688_20743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (14))){
var state_20643__$1 = state_20643;
var statearr_20689_20744 = state_20643__$1;
(statearr_20689_20744[(2)] = false);

(statearr_20689_20744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (26))){
var inst_20603 = (state_20643[(9)]);
var inst_20610 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20603);
var state_20643__$1 = state_20643;
var statearr_20690_20745 = state_20643__$1;
(statearr_20690_20745[(2)] = inst_20610);

(statearr_20690_20745[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (16))){
var state_20643__$1 = state_20643;
var statearr_20691_20746 = state_20643__$1;
(statearr_20691_20746[(2)] = true);

(statearr_20691_20746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (38))){
var inst_20633 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
var statearr_20692_20747 = state_20643__$1;
(statearr_20692_20747[(2)] = inst_20633);

(statearr_20692_20747[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (30))){
var inst_20603 = (state_20643[(9)]);
var inst_20596 = (state_20643[(10)]);
var inst_20597 = (state_20643[(13)]);
var inst_20620 = cljs.core.empty_QMARK_.call(null,inst_20596);
var inst_20621 = inst_20597.call(null,inst_20603);
var inst_20622 = cljs.core.not.call(null,inst_20621);
var inst_20623 = (inst_20620) && (inst_20622);
var state_20643__$1 = state_20643;
var statearr_20693_20748 = state_20643__$1;
(statearr_20693_20748[(2)] = inst_20623);

(statearr_20693_20748[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (10))){
var inst_20549 = (state_20643[(8)]);
var inst_20569 = (state_20643[(2)]);
var inst_20570 = cljs.core.get.call(null,inst_20569,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20571 = cljs.core.get.call(null,inst_20569,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20572 = cljs.core.get.call(null,inst_20569,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20573 = inst_20549;
var state_20643__$1 = (function (){var statearr_20694 = state_20643;
(statearr_20694[(7)] = inst_20573);

(statearr_20694[(16)] = inst_20572);

(statearr_20694[(17)] = inst_20570);

(statearr_20694[(18)] = inst_20571);

return statearr_20694;
})();
var statearr_20695_20749 = state_20643__$1;
(statearr_20695_20749[(2)] = null);

(statearr_20695_20749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (18))){
var inst_20587 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
var statearr_20696_20750 = state_20643__$1;
(statearr_20696_20750[(2)] = inst_20587);

(statearr_20696_20750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (37))){
var state_20643__$1 = state_20643;
var statearr_20697_20751 = state_20643__$1;
(statearr_20697_20751[(2)] = null);

(statearr_20697_20751[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (8))){
var inst_20549 = (state_20643[(8)]);
var inst_20566 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20549);
var state_20643__$1 = state_20643;
var statearr_20698_20752 = state_20643__$1;
(statearr_20698_20752[(2)] = inst_20566);

(statearr_20698_20752[(1)] = (10));


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
});})(c__18993__auto___20706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18881__auto__,c__18993__auto___20706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18882__auto__ = null;
var cljs$core$async$mix_$_state_machine__18882__auto____0 = (function (){
var statearr_20702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20702[(0)] = cljs$core$async$mix_$_state_machine__18882__auto__);

(statearr_20702[(1)] = (1));

return statearr_20702;
});
var cljs$core$async$mix_$_state_machine__18882__auto____1 = (function (state_20643){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_20643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e20703){if((e20703 instanceof Object)){
var ex__18885__auto__ = e20703;
var statearr_20704_20753 = state_20643;
(statearr_20704_20753[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20754 = state_20643;
state_20643 = G__20754;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18882__auto__ = function(state_20643){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18882__auto____1.call(this,state_20643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18882__auto____0;
cljs$core$async$mix_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18882__auto____1;
return cljs$core$async$mix_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___20706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18995__auto__ = (function (){var statearr_20705 = f__18994__auto__.call(null);
(statearr_20705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___20706);

return statearr_20705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___20706,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20755 = [];
var len__17884__auto___20758 = arguments.length;
var i__17885__auto___20759 = (0);
while(true){
if((i__17885__auto___20759 < len__17884__auto___20758)){
args20755.push((arguments[i__17885__auto___20759]));

var G__20760 = (i__17885__auto___20759 + (1));
i__17885__auto___20759 = G__20760;
continue;
} else {
}
break;
}

var G__20757 = args20755.length;
switch (G__20757) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20755.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20763 = [];
var len__17884__auto___20888 = arguments.length;
var i__17885__auto___20889 = (0);
while(true){
if((i__17885__auto___20889 < len__17884__auto___20888)){
args20763.push((arguments[i__17885__auto___20889]));

var G__20890 = (i__17885__auto___20889 + (1));
i__17885__auto___20889 = G__20890;
continue;
} else {
}
break;
}

var G__20765 = args20763.length;
switch (G__20765) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20763.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__20762_SHARP_){
if(cljs.core.truth_(p1__20762_SHARP_.call(null,topic))){
return p1__20762_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20762_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20766 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20767){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20767 = meta20767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20768,meta20767__$1){
var self__ = this;
var _20768__$1 = this;
return (new cljs.core.async.t_cljs$core$async20766(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20767__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20768){
var self__ = this;
var _20768__$1 = this;
return self__.meta20767;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20767","meta20767",378789664,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20766";

cljs.core.async.t_cljs$core$async20766.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20766");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20766 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20767){
return (new cljs.core.async.t_cljs$core$async20766(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20767));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20766(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18993__auto___20892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___20892,mults,ensure_mult,p){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___20892,mults,ensure_mult,p){
return (function (state_20840){
var state_val_20841 = (state_20840[(1)]);
if((state_val_20841 === (7))){
var inst_20836 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
var statearr_20842_20893 = state_20840__$1;
(statearr_20842_20893[(2)] = inst_20836);

(statearr_20842_20893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (20))){
var state_20840__$1 = state_20840;
var statearr_20843_20894 = state_20840__$1;
(statearr_20843_20894[(2)] = null);

(statearr_20843_20894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (1))){
var state_20840__$1 = state_20840;
var statearr_20844_20895 = state_20840__$1;
(statearr_20844_20895[(2)] = null);

(statearr_20844_20895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (24))){
var inst_20819 = (state_20840[(7)]);
var inst_20828 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20819);
var state_20840__$1 = state_20840;
var statearr_20845_20896 = state_20840__$1;
(statearr_20845_20896[(2)] = inst_20828);

(statearr_20845_20896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (4))){
var inst_20771 = (state_20840[(8)]);
var inst_20771__$1 = (state_20840[(2)]);
var inst_20772 = (inst_20771__$1 == null);
var state_20840__$1 = (function (){var statearr_20846 = state_20840;
(statearr_20846[(8)] = inst_20771__$1);

return statearr_20846;
})();
if(cljs.core.truth_(inst_20772)){
var statearr_20847_20897 = state_20840__$1;
(statearr_20847_20897[(1)] = (5));

} else {
var statearr_20848_20898 = state_20840__$1;
(statearr_20848_20898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (15))){
var inst_20813 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
var statearr_20849_20899 = state_20840__$1;
(statearr_20849_20899[(2)] = inst_20813);

(statearr_20849_20899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (21))){
var inst_20833 = (state_20840[(2)]);
var state_20840__$1 = (function (){var statearr_20850 = state_20840;
(statearr_20850[(9)] = inst_20833);

return statearr_20850;
})();
var statearr_20851_20900 = state_20840__$1;
(statearr_20851_20900[(2)] = null);

(statearr_20851_20900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (13))){
var inst_20795 = (state_20840[(10)]);
var inst_20797 = cljs.core.chunked_seq_QMARK_.call(null,inst_20795);
var state_20840__$1 = state_20840;
if(inst_20797){
var statearr_20852_20901 = state_20840__$1;
(statearr_20852_20901[(1)] = (16));

} else {
var statearr_20853_20902 = state_20840__$1;
(statearr_20853_20902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (22))){
var inst_20825 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
if(cljs.core.truth_(inst_20825)){
var statearr_20854_20903 = state_20840__$1;
(statearr_20854_20903[(1)] = (23));

} else {
var statearr_20855_20904 = state_20840__$1;
(statearr_20855_20904[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (6))){
var inst_20771 = (state_20840[(8)]);
var inst_20819 = (state_20840[(7)]);
var inst_20821 = (state_20840[(11)]);
var inst_20819__$1 = topic_fn.call(null,inst_20771);
var inst_20820 = cljs.core.deref.call(null,mults);
var inst_20821__$1 = cljs.core.get.call(null,inst_20820,inst_20819__$1);
var state_20840__$1 = (function (){var statearr_20856 = state_20840;
(statearr_20856[(7)] = inst_20819__$1);

(statearr_20856[(11)] = inst_20821__$1);

return statearr_20856;
})();
if(cljs.core.truth_(inst_20821__$1)){
var statearr_20857_20905 = state_20840__$1;
(statearr_20857_20905[(1)] = (19));

} else {
var statearr_20858_20906 = state_20840__$1;
(statearr_20858_20906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (25))){
var inst_20830 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
var statearr_20859_20907 = state_20840__$1;
(statearr_20859_20907[(2)] = inst_20830);

(statearr_20859_20907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (17))){
var inst_20795 = (state_20840[(10)]);
var inst_20804 = cljs.core.first.call(null,inst_20795);
var inst_20805 = cljs.core.async.muxch_STAR_.call(null,inst_20804);
var inst_20806 = cljs.core.async.close_BANG_.call(null,inst_20805);
var inst_20807 = cljs.core.next.call(null,inst_20795);
var inst_20781 = inst_20807;
var inst_20782 = null;
var inst_20783 = (0);
var inst_20784 = (0);
var state_20840__$1 = (function (){var statearr_20860 = state_20840;
(statearr_20860[(12)] = inst_20781);

(statearr_20860[(13)] = inst_20806);

(statearr_20860[(14)] = inst_20783);

(statearr_20860[(15)] = inst_20784);

(statearr_20860[(16)] = inst_20782);

return statearr_20860;
})();
var statearr_20861_20908 = state_20840__$1;
(statearr_20861_20908[(2)] = null);

(statearr_20861_20908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (3))){
var inst_20838 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20840__$1,inst_20838);
} else {
if((state_val_20841 === (12))){
var inst_20815 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
var statearr_20862_20909 = state_20840__$1;
(statearr_20862_20909[(2)] = inst_20815);

(statearr_20862_20909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (2))){
var state_20840__$1 = state_20840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20840__$1,(4),ch);
} else {
if((state_val_20841 === (23))){
var state_20840__$1 = state_20840;
var statearr_20863_20910 = state_20840__$1;
(statearr_20863_20910[(2)] = null);

(statearr_20863_20910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (19))){
var inst_20771 = (state_20840[(8)]);
var inst_20821 = (state_20840[(11)]);
var inst_20823 = cljs.core.async.muxch_STAR_.call(null,inst_20821);
var state_20840__$1 = state_20840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20840__$1,(22),inst_20823,inst_20771);
} else {
if((state_val_20841 === (11))){
var inst_20781 = (state_20840[(12)]);
var inst_20795 = (state_20840[(10)]);
var inst_20795__$1 = cljs.core.seq.call(null,inst_20781);
var state_20840__$1 = (function (){var statearr_20864 = state_20840;
(statearr_20864[(10)] = inst_20795__$1);

return statearr_20864;
})();
if(inst_20795__$1){
var statearr_20865_20911 = state_20840__$1;
(statearr_20865_20911[(1)] = (13));

} else {
var statearr_20866_20912 = state_20840__$1;
(statearr_20866_20912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (9))){
var inst_20817 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
var statearr_20867_20913 = state_20840__$1;
(statearr_20867_20913[(2)] = inst_20817);

(statearr_20867_20913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (5))){
var inst_20778 = cljs.core.deref.call(null,mults);
var inst_20779 = cljs.core.vals.call(null,inst_20778);
var inst_20780 = cljs.core.seq.call(null,inst_20779);
var inst_20781 = inst_20780;
var inst_20782 = null;
var inst_20783 = (0);
var inst_20784 = (0);
var state_20840__$1 = (function (){var statearr_20868 = state_20840;
(statearr_20868[(12)] = inst_20781);

(statearr_20868[(14)] = inst_20783);

(statearr_20868[(15)] = inst_20784);

(statearr_20868[(16)] = inst_20782);

return statearr_20868;
})();
var statearr_20869_20914 = state_20840__$1;
(statearr_20869_20914[(2)] = null);

(statearr_20869_20914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (14))){
var state_20840__$1 = state_20840;
var statearr_20873_20915 = state_20840__$1;
(statearr_20873_20915[(2)] = null);

(statearr_20873_20915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (16))){
var inst_20795 = (state_20840[(10)]);
var inst_20799 = cljs.core.chunk_first.call(null,inst_20795);
var inst_20800 = cljs.core.chunk_rest.call(null,inst_20795);
var inst_20801 = cljs.core.count.call(null,inst_20799);
var inst_20781 = inst_20800;
var inst_20782 = inst_20799;
var inst_20783 = inst_20801;
var inst_20784 = (0);
var state_20840__$1 = (function (){var statearr_20874 = state_20840;
(statearr_20874[(12)] = inst_20781);

(statearr_20874[(14)] = inst_20783);

(statearr_20874[(15)] = inst_20784);

(statearr_20874[(16)] = inst_20782);

return statearr_20874;
})();
var statearr_20875_20916 = state_20840__$1;
(statearr_20875_20916[(2)] = null);

(statearr_20875_20916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (10))){
var inst_20781 = (state_20840[(12)]);
var inst_20783 = (state_20840[(14)]);
var inst_20784 = (state_20840[(15)]);
var inst_20782 = (state_20840[(16)]);
var inst_20789 = cljs.core._nth.call(null,inst_20782,inst_20784);
var inst_20790 = cljs.core.async.muxch_STAR_.call(null,inst_20789);
var inst_20791 = cljs.core.async.close_BANG_.call(null,inst_20790);
var inst_20792 = (inst_20784 + (1));
var tmp20870 = inst_20781;
var tmp20871 = inst_20783;
var tmp20872 = inst_20782;
var inst_20781__$1 = tmp20870;
var inst_20782__$1 = tmp20872;
var inst_20783__$1 = tmp20871;
var inst_20784__$1 = inst_20792;
var state_20840__$1 = (function (){var statearr_20876 = state_20840;
(statearr_20876[(12)] = inst_20781__$1);

(statearr_20876[(14)] = inst_20783__$1);

(statearr_20876[(15)] = inst_20784__$1);

(statearr_20876[(17)] = inst_20791);

(statearr_20876[(16)] = inst_20782__$1);

return statearr_20876;
})();
var statearr_20877_20917 = state_20840__$1;
(statearr_20877_20917[(2)] = null);

(statearr_20877_20917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (18))){
var inst_20810 = (state_20840[(2)]);
var state_20840__$1 = state_20840;
var statearr_20878_20918 = state_20840__$1;
(statearr_20878_20918[(2)] = inst_20810);

(statearr_20878_20918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20841 === (8))){
var inst_20783 = (state_20840[(14)]);
var inst_20784 = (state_20840[(15)]);
var inst_20786 = (inst_20784 < inst_20783);
var inst_20787 = inst_20786;
var state_20840__$1 = state_20840;
if(cljs.core.truth_(inst_20787)){
var statearr_20879_20919 = state_20840__$1;
(statearr_20879_20919[(1)] = (10));

} else {
var statearr_20880_20920 = state_20840__$1;
(statearr_20880_20920[(1)] = (11));

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
});})(c__18993__auto___20892,mults,ensure_mult,p))
;
return ((function (switch__18881__auto__,c__18993__auto___20892,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_20884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20884[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_20884[(1)] = (1));

return statearr_20884;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_20840){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_20840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e20885){if((e20885 instanceof Object)){
var ex__18885__auto__ = e20885;
var statearr_20886_20921 = state_20840;
(statearr_20886_20921[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20922 = state_20840;
state_20840 = G__20922;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_20840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_20840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___20892,mults,ensure_mult,p))
})();
var state__18995__auto__ = (function (){var statearr_20887 = f__18994__auto__.call(null);
(statearr_20887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___20892);

return statearr_20887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___20892,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20923 = [];
var len__17884__auto___20926 = arguments.length;
var i__17885__auto___20927 = (0);
while(true){
if((i__17885__auto___20927 < len__17884__auto___20926)){
args20923.push((arguments[i__17885__auto___20927]));

var G__20928 = (i__17885__auto___20927 + (1));
i__17885__auto___20927 = G__20928;
continue;
} else {
}
break;
}

var G__20925 = args20923.length;
switch (G__20925) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20923.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20930 = [];
var len__17884__auto___20933 = arguments.length;
var i__17885__auto___20934 = (0);
while(true){
if((i__17885__auto___20934 < len__17884__auto___20933)){
args20930.push((arguments[i__17885__auto___20934]));

var G__20935 = (i__17885__auto___20934 + (1));
i__17885__auto___20934 = G__20935;
continue;
} else {
}
break;
}

var G__20932 = args20930.length;
switch (G__20932) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20930.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20937 = [];
var len__17884__auto___21008 = arguments.length;
var i__17885__auto___21009 = (0);
while(true){
if((i__17885__auto___21009 < len__17884__auto___21008)){
args20937.push((arguments[i__17885__auto___21009]));

var G__21010 = (i__17885__auto___21009 + (1));
i__17885__auto___21009 = G__21010;
continue;
} else {
}
break;
}

var G__20939 = args20937.length;
switch (G__20939) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20937.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18993__auto___21012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___21012,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___21012,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20978){
var state_val_20979 = (state_20978[(1)]);
if((state_val_20979 === (7))){
var state_20978__$1 = state_20978;
var statearr_20980_21013 = state_20978__$1;
(statearr_20980_21013[(2)] = null);

(statearr_20980_21013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (1))){
var state_20978__$1 = state_20978;
var statearr_20981_21014 = state_20978__$1;
(statearr_20981_21014[(2)] = null);

(statearr_20981_21014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (4))){
var inst_20942 = (state_20978[(7)]);
var inst_20944 = (inst_20942 < cnt);
var state_20978__$1 = state_20978;
if(cljs.core.truth_(inst_20944)){
var statearr_20982_21015 = state_20978__$1;
(statearr_20982_21015[(1)] = (6));

} else {
var statearr_20983_21016 = state_20978__$1;
(statearr_20983_21016[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (15))){
var inst_20974 = (state_20978[(2)]);
var state_20978__$1 = state_20978;
var statearr_20984_21017 = state_20978__$1;
(statearr_20984_21017[(2)] = inst_20974);

(statearr_20984_21017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (13))){
var inst_20967 = cljs.core.async.close_BANG_.call(null,out);
var state_20978__$1 = state_20978;
var statearr_20985_21018 = state_20978__$1;
(statearr_20985_21018[(2)] = inst_20967);

(statearr_20985_21018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (6))){
var state_20978__$1 = state_20978;
var statearr_20986_21019 = state_20978__$1;
(statearr_20986_21019[(2)] = null);

(statearr_20986_21019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (3))){
var inst_20976 = (state_20978[(2)]);
var state_20978__$1 = state_20978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20978__$1,inst_20976);
} else {
if((state_val_20979 === (12))){
var inst_20964 = (state_20978[(8)]);
var inst_20964__$1 = (state_20978[(2)]);
var inst_20965 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20964__$1);
var state_20978__$1 = (function (){var statearr_20987 = state_20978;
(statearr_20987[(8)] = inst_20964__$1);

return statearr_20987;
})();
if(cljs.core.truth_(inst_20965)){
var statearr_20988_21020 = state_20978__$1;
(statearr_20988_21020[(1)] = (13));

} else {
var statearr_20989_21021 = state_20978__$1;
(statearr_20989_21021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (2))){
var inst_20941 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20942 = (0);
var state_20978__$1 = (function (){var statearr_20990 = state_20978;
(statearr_20990[(9)] = inst_20941);

(statearr_20990[(7)] = inst_20942);

return statearr_20990;
})();
var statearr_20991_21022 = state_20978__$1;
(statearr_20991_21022[(2)] = null);

(statearr_20991_21022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (11))){
var inst_20942 = (state_20978[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20978,(10),Object,null,(9));
var inst_20951 = chs__$1.call(null,inst_20942);
var inst_20952 = done.call(null,inst_20942);
var inst_20953 = cljs.core.async.take_BANG_.call(null,inst_20951,inst_20952);
var state_20978__$1 = state_20978;
var statearr_20992_21023 = state_20978__$1;
(statearr_20992_21023[(2)] = inst_20953);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (9))){
var inst_20942 = (state_20978[(7)]);
var inst_20955 = (state_20978[(2)]);
var inst_20956 = (inst_20942 + (1));
var inst_20942__$1 = inst_20956;
var state_20978__$1 = (function (){var statearr_20993 = state_20978;
(statearr_20993[(7)] = inst_20942__$1);

(statearr_20993[(10)] = inst_20955);

return statearr_20993;
})();
var statearr_20994_21024 = state_20978__$1;
(statearr_20994_21024[(2)] = null);

(statearr_20994_21024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (5))){
var inst_20962 = (state_20978[(2)]);
var state_20978__$1 = (function (){var statearr_20995 = state_20978;
(statearr_20995[(11)] = inst_20962);

return statearr_20995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20978__$1,(12),dchan);
} else {
if((state_val_20979 === (14))){
var inst_20964 = (state_20978[(8)]);
var inst_20969 = cljs.core.apply.call(null,f,inst_20964);
var state_20978__$1 = state_20978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20978__$1,(16),out,inst_20969);
} else {
if((state_val_20979 === (16))){
var inst_20971 = (state_20978[(2)]);
var state_20978__$1 = (function (){var statearr_20996 = state_20978;
(statearr_20996[(12)] = inst_20971);

return statearr_20996;
})();
var statearr_20997_21025 = state_20978__$1;
(statearr_20997_21025[(2)] = null);

(statearr_20997_21025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (10))){
var inst_20946 = (state_20978[(2)]);
var inst_20947 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20978__$1 = (function (){var statearr_20998 = state_20978;
(statearr_20998[(13)] = inst_20946);

return statearr_20998;
})();
var statearr_20999_21026 = state_20978__$1;
(statearr_20999_21026[(2)] = inst_20947);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20979 === (8))){
var inst_20960 = (state_20978[(2)]);
var state_20978__$1 = state_20978;
var statearr_21000_21027 = state_20978__$1;
(statearr_21000_21027[(2)] = inst_20960);

(statearr_21000_21027[(1)] = (5));


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
});})(c__18993__auto___21012,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18881__auto__,c__18993__auto___21012,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_21004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21004[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_21004[(1)] = (1));

return statearr_21004;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_20978){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_20978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21005){if((e21005 instanceof Object)){
var ex__18885__auto__ = e21005;
var statearr_21006_21028 = state_20978;
(statearr_21006_21028[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21029 = state_20978;
state_20978 = G__21029;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_20978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_20978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___21012,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18995__auto__ = (function (){var statearr_21007 = f__18994__auto__.call(null);
(statearr_21007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___21012);

return statearr_21007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___21012,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21031 = [];
var len__17884__auto___21087 = arguments.length;
var i__17885__auto___21088 = (0);
while(true){
if((i__17885__auto___21088 < len__17884__auto___21087)){
args21031.push((arguments[i__17885__auto___21088]));

var G__21089 = (i__17885__auto___21088 + (1));
i__17885__auto___21088 = G__21089;
continue;
} else {
}
break;
}

var G__21033 = args21031.length;
switch (G__21033) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21031.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18993__auto___21091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___21091,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___21091,out){
return (function (state_21063){
var state_val_21064 = (state_21063[(1)]);
if((state_val_21064 === (7))){
var inst_21043 = (state_21063[(7)]);
var inst_21042 = (state_21063[(8)]);
var inst_21042__$1 = (state_21063[(2)]);
var inst_21043__$1 = cljs.core.nth.call(null,inst_21042__$1,(0),null);
var inst_21044 = cljs.core.nth.call(null,inst_21042__$1,(1),null);
var inst_21045 = (inst_21043__$1 == null);
var state_21063__$1 = (function (){var statearr_21065 = state_21063;
(statearr_21065[(7)] = inst_21043__$1);

(statearr_21065[(9)] = inst_21044);

(statearr_21065[(8)] = inst_21042__$1);

return statearr_21065;
})();
if(cljs.core.truth_(inst_21045)){
var statearr_21066_21092 = state_21063__$1;
(statearr_21066_21092[(1)] = (8));

} else {
var statearr_21067_21093 = state_21063__$1;
(statearr_21067_21093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21064 === (1))){
var inst_21034 = cljs.core.vec.call(null,chs);
var inst_21035 = inst_21034;
var state_21063__$1 = (function (){var statearr_21068 = state_21063;
(statearr_21068[(10)] = inst_21035);

return statearr_21068;
})();
var statearr_21069_21094 = state_21063__$1;
(statearr_21069_21094[(2)] = null);

(statearr_21069_21094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21064 === (4))){
var inst_21035 = (state_21063[(10)]);
var state_21063__$1 = state_21063;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21063__$1,(7),inst_21035);
} else {
if((state_val_21064 === (6))){
var inst_21059 = (state_21063[(2)]);
var state_21063__$1 = state_21063;
var statearr_21070_21095 = state_21063__$1;
(statearr_21070_21095[(2)] = inst_21059);

(statearr_21070_21095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21064 === (3))){
var inst_21061 = (state_21063[(2)]);
var state_21063__$1 = state_21063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21063__$1,inst_21061);
} else {
if((state_val_21064 === (2))){
var inst_21035 = (state_21063[(10)]);
var inst_21037 = cljs.core.count.call(null,inst_21035);
var inst_21038 = (inst_21037 > (0));
var state_21063__$1 = state_21063;
if(cljs.core.truth_(inst_21038)){
var statearr_21072_21096 = state_21063__$1;
(statearr_21072_21096[(1)] = (4));

} else {
var statearr_21073_21097 = state_21063__$1;
(statearr_21073_21097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21064 === (11))){
var inst_21035 = (state_21063[(10)]);
var inst_21052 = (state_21063[(2)]);
var tmp21071 = inst_21035;
var inst_21035__$1 = tmp21071;
var state_21063__$1 = (function (){var statearr_21074 = state_21063;
(statearr_21074[(11)] = inst_21052);

(statearr_21074[(10)] = inst_21035__$1);

return statearr_21074;
})();
var statearr_21075_21098 = state_21063__$1;
(statearr_21075_21098[(2)] = null);

(statearr_21075_21098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21064 === (9))){
var inst_21043 = (state_21063[(7)]);
var state_21063__$1 = state_21063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21063__$1,(11),out,inst_21043);
} else {
if((state_val_21064 === (5))){
var inst_21057 = cljs.core.async.close_BANG_.call(null,out);
var state_21063__$1 = state_21063;
var statearr_21076_21099 = state_21063__$1;
(statearr_21076_21099[(2)] = inst_21057);

(statearr_21076_21099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21064 === (10))){
var inst_21055 = (state_21063[(2)]);
var state_21063__$1 = state_21063;
var statearr_21077_21100 = state_21063__$1;
(statearr_21077_21100[(2)] = inst_21055);

(statearr_21077_21100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21064 === (8))){
var inst_21035 = (state_21063[(10)]);
var inst_21043 = (state_21063[(7)]);
var inst_21044 = (state_21063[(9)]);
var inst_21042 = (state_21063[(8)]);
var inst_21047 = (function (){var cs = inst_21035;
var vec__21040 = inst_21042;
var v = inst_21043;
var c = inst_21044;
return ((function (cs,vec__21040,v,c,inst_21035,inst_21043,inst_21044,inst_21042,state_val_21064,c__18993__auto___21091,out){
return (function (p1__21030_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21030_SHARP_);
});
;})(cs,vec__21040,v,c,inst_21035,inst_21043,inst_21044,inst_21042,state_val_21064,c__18993__auto___21091,out))
})();
var inst_21048 = cljs.core.filterv.call(null,inst_21047,inst_21035);
var inst_21035__$1 = inst_21048;
var state_21063__$1 = (function (){var statearr_21078 = state_21063;
(statearr_21078[(10)] = inst_21035__$1);

return statearr_21078;
})();
var statearr_21079_21101 = state_21063__$1;
(statearr_21079_21101[(2)] = null);

(statearr_21079_21101[(1)] = (2));


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
});})(c__18993__auto___21091,out))
;
return ((function (switch__18881__auto__,c__18993__auto___21091,out){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_21083 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21083[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_21083[(1)] = (1));

return statearr_21083;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_21063){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_21063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21084){if((e21084 instanceof Object)){
var ex__18885__auto__ = e21084;
var statearr_21085_21102 = state_21063;
(statearr_21085_21102[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21103 = state_21063;
state_21063 = G__21103;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_21063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_21063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___21091,out))
})();
var state__18995__auto__ = (function (){var statearr_21086 = f__18994__auto__.call(null);
(statearr_21086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___21091);

return statearr_21086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___21091,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21104 = [];
var len__17884__auto___21153 = arguments.length;
var i__17885__auto___21154 = (0);
while(true){
if((i__17885__auto___21154 < len__17884__auto___21153)){
args21104.push((arguments[i__17885__auto___21154]));

var G__21155 = (i__17885__auto___21154 + (1));
i__17885__auto___21154 = G__21155;
continue;
} else {
}
break;
}

var G__21106 = args21104.length;
switch (G__21106) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21104.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18993__auto___21157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___21157,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___21157,out){
return (function (state_21130){
var state_val_21131 = (state_21130[(1)]);
if((state_val_21131 === (7))){
var inst_21112 = (state_21130[(7)]);
var inst_21112__$1 = (state_21130[(2)]);
var inst_21113 = (inst_21112__$1 == null);
var inst_21114 = cljs.core.not.call(null,inst_21113);
var state_21130__$1 = (function (){var statearr_21132 = state_21130;
(statearr_21132[(7)] = inst_21112__$1);

return statearr_21132;
})();
if(inst_21114){
var statearr_21133_21158 = state_21130__$1;
(statearr_21133_21158[(1)] = (8));

} else {
var statearr_21134_21159 = state_21130__$1;
(statearr_21134_21159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (1))){
var inst_21107 = (0);
var state_21130__$1 = (function (){var statearr_21135 = state_21130;
(statearr_21135[(8)] = inst_21107);

return statearr_21135;
})();
var statearr_21136_21160 = state_21130__$1;
(statearr_21136_21160[(2)] = null);

(statearr_21136_21160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (4))){
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(7),ch);
} else {
if((state_val_21131 === (6))){
var inst_21125 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21137_21161 = state_21130__$1;
(statearr_21137_21161[(2)] = inst_21125);

(statearr_21137_21161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (3))){
var inst_21127 = (state_21130[(2)]);
var inst_21128 = cljs.core.async.close_BANG_.call(null,out);
var state_21130__$1 = (function (){var statearr_21138 = state_21130;
(statearr_21138[(9)] = inst_21127);

return statearr_21138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21130__$1,inst_21128);
} else {
if((state_val_21131 === (2))){
var inst_21107 = (state_21130[(8)]);
var inst_21109 = (inst_21107 < n);
var state_21130__$1 = state_21130;
if(cljs.core.truth_(inst_21109)){
var statearr_21139_21162 = state_21130__$1;
(statearr_21139_21162[(1)] = (4));

} else {
var statearr_21140_21163 = state_21130__$1;
(statearr_21140_21163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (11))){
var inst_21107 = (state_21130[(8)]);
var inst_21117 = (state_21130[(2)]);
var inst_21118 = (inst_21107 + (1));
var inst_21107__$1 = inst_21118;
var state_21130__$1 = (function (){var statearr_21141 = state_21130;
(statearr_21141[(8)] = inst_21107__$1);

(statearr_21141[(10)] = inst_21117);

return statearr_21141;
})();
var statearr_21142_21164 = state_21130__$1;
(statearr_21142_21164[(2)] = null);

(statearr_21142_21164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (9))){
var state_21130__$1 = state_21130;
var statearr_21143_21165 = state_21130__$1;
(statearr_21143_21165[(2)] = null);

(statearr_21143_21165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (5))){
var state_21130__$1 = state_21130;
var statearr_21144_21166 = state_21130__$1;
(statearr_21144_21166[(2)] = null);

(statearr_21144_21166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (10))){
var inst_21122 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21145_21167 = state_21130__$1;
(statearr_21145_21167[(2)] = inst_21122);

(statearr_21145_21167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (8))){
var inst_21112 = (state_21130[(7)]);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21130__$1,(11),out,inst_21112);
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
});})(c__18993__auto___21157,out))
;
return ((function (switch__18881__auto__,c__18993__auto___21157,out){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_21149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21149[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_21149[(1)] = (1));

return statearr_21149;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_21130){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_21130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21150){if((e21150 instanceof Object)){
var ex__18885__auto__ = e21150;
var statearr_21151_21168 = state_21130;
(statearr_21151_21168[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21169 = state_21130;
state_21130 = G__21169;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___21157,out))
})();
var state__18995__auto__ = (function (){var statearr_21152 = f__18994__auto__.call(null);
(statearr_21152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___21157);

return statearr_21152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___21157,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21177 = (function (map_LT_,f,ch,meta21178){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21178 = meta21178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21179,meta21178__$1){
var self__ = this;
var _21179__$1 = this;
return (new cljs.core.async.t_cljs$core$async21177(self__.map_LT_,self__.f,self__.ch,meta21178__$1));
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21179){
var self__ = this;
var _21179__$1 = this;
return self__.meta21178;
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21180 = (function (map_LT_,f,ch,meta21178,_,fn1,meta21181){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21178 = meta21178;
this._ = _;
this.fn1 = fn1;
this.meta21181 = meta21181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21182,meta21181__$1){
var self__ = this;
var _21182__$1 = this;
return (new cljs.core.async.t_cljs$core$async21180(self__.map_LT_,self__.f,self__.ch,self__.meta21178,self__._,self__.fn1,meta21181__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21182){
var self__ = this;
var _21182__$1 = this;
return self__.meta21181;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21180.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21170_SHARP_){
return f1.call(null,(((p1__21170_SHARP_ == null))?null:self__.f.call(null,p1__21170_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21180.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21178","meta21178",1856523628,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21177","cljs.core.async/t_cljs$core$async21177",-1897806767,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21181","meta21181",111616938,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21180";

cljs.core.async.t_cljs$core$async21180.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21180");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21180 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21180(map_LT___$1,f__$1,ch__$1,meta21178__$1,___$2,fn1__$1,meta21181){
return (new cljs.core.async.t_cljs$core$async21180(map_LT___$1,f__$1,ch__$1,meta21178__$1,___$2,fn1__$1,meta21181));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21180(self__.map_LT_,self__.f,self__.ch,self__.meta21178,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21178","meta21178",1856523628,null)], null);
});

cljs.core.async.t_cljs$core$async21177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21177";

cljs.core.async.t_cljs$core$async21177.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21177");
});

cljs.core.async.__GT_t_cljs$core$async21177 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21177(map_LT___$1,f__$1,ch__$1,meta21178){
return (new cljs.core.async.t_cljs$core$async21177(map_LT___$1,f__$1,ch__$1,meta21178));
});

}

return (new cljs.core.async.t_cljs$core$async21177(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21186 = (function (map_GT_,f,ch,meta21187){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21187 = meta21187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21188,meta21187__$1){
var self__ = this;
var _21188__$1 = this;
return (new cljs.core.async.t_cljs$core$async21186(self__.map_GT_,self__.f,self__.ch,meta21187__$1));
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21188){
var self__ = this;
var _21188__$1 = this;
return self__.meta21187;
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21187","meta21187",1703302551,null)], null);
});

cljs.core.async.t_cljs$core$async21186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21186";

cljs.core.async.t_cljs$core$async21186.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21186");
});

cljs.core.async.__GT_t_cljs$core$async21186 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21186(map_GT___$1,f__$1,ch__$1,meta21187){
return (new cljs.core.async.t_cljs$core$async21186(map_GT___$1,f__$1,ch__$1,meta21187));
});

}

return (new cljs.core.async.t_cljs$core$async21186(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21192 = (function (filter_GT_,p,ch,meta21193){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21193 = meta21193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21194,meta21193__$1){
var self__ = this;
var _21194__$1 = this;
return (new cljs.core.async.t_cljs$core$async21192(self__.filter_GT_,self__.p,self__.ch,meta21193__$1));
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21194){
var self__ = this;
var _21194__$1 = this;
return self__.meta21193;
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21193","meta21193",2039000894,null)], null);
});

cljs.core.async.t_cljs$core$async21192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21192";

cljs.core.async.t_cljs$core$async21192.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21192");
});

cljs.core.async.__GT_t_cljs$core$async21192 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21192(filter_GT___$1,p__$1,ch__$1,meta21193){
return (new cljs.core.async.t_cljs$core$async21192(filter_GT___$1,p__$1,ch__$1,meta21193));
});

}

return (new cljs.core.async.t_cljs$core$async21192(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21195 = [];
var len__17884__auto___21239 = arguments.length;
var i__17885__auto___21240 = (0);
while(true){
if((i__17885__auto___21240 < len__17884__auto___21239)){
args21195.push((arguments[i__17885__auto___21240]));

var G__21241 = (i__17885__auto___21240 + (1));
i__17885__auto___21240 = G__21241;
continue;
} else {
}
break;
}

var G__21197 = args21195.length;
switch (G__21197) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21195.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18993__auto___21243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___21243,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___21243,out){
return (function (state_21218){
var state_val_21219 = (state_21218[(1)]);
if((state_val_21219 === (7))){
var inst_21214 = (state_21218[(2)]);
var state_21218__$1 = state_21218;
var statearr_21220_21244 = state_21218__$1;
(statearr_21220_21244[(2)] = inst_21214);

(statearr_21220_21244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (1))){
var state_21218__$1 = state_21218;
var statearr_21221_21245 = state_21218__$1;
(statearr_21221_21245[(2)] = null);

(statearr_21221_21245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (4))){
var inst_21200 = (state_21218[(7)]);
var inst_21200__$1 = (state_21218[(2)]);
var inst_21201 = (inst_21200__$1 == null);
var state_21218__$1 = (function (){var statearr_21222 = state_21218;
(statearr_21222[(7)] = inst_21200__$1);

return statearr_21222;
})();
if(cljs.core.truth_(inst_21201)){
var statearr_21223_21246 = state_21218__$1;
(statearr_21223_21246[(1)] = (5));

} else {
var statearr_21224_21247 = state_21218__$1;
(statearr_21224_21247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (6))){
var inst_21200 = (state_21218[(7)]);
var inst_21205 = p.call(null,inst_21200);
var state_21218__$1 = state_21218;
if(cljs.core.truth_(inst_21205)){
var statearr_21225_21248 = state_21218__$1;
(statearr_21225_21248[(1)] = (8));

} else {
var statearr_21226_21249 = state_21218__$1;
(statearr_21226_21249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (3))){
var inst_21216 = (state_21218[(2)]);
var state_21218__$1 = state_21218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21218__$1,inst_21216);
} else {
if((state_val_21219 === (2))){
var state_21218__$1 = state_21218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21218__$1,(4),ch);
} else {
if((state_val_21219 === (11))){
var inst_21208 = (state_21218[(2)]);
var state_21218__$1 = state_21218;
var statearr_21227_21250 = state_21218__$1;
(statearr_21227_21250[(2)] = inst_21208);

(statearr_21227_21250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (9))){
var state_21218__$1 = state_21218;
var statearr_21228_21251 = state_21218__$1;
(statearr_21228_21251[(2)] = null);

(statearr_21228_21251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (5))){
var inst_21203 = cljs.core.async.close_BANG_.call(null,out);
var state_21218__$1 = state_21218;
var statearr_21229_21252 = state_21218__$1;
(statearr_21229_21252[(2)] = inst_21203);

(statearr_21229_21252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (10))){
var inst_21211 = (state_21218[(2)]);
var state_21218__$1 = (function (){var statearr_21230 = state_21218;
(statearr_21230[(8)] = inst_21211);

return statearr_21230;
})();
var statearr_21231_21253 = state_21218__$1;
(statearr_21231_21253[(2)] = null);

(statearr_21231_21253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21219 === (8))){
var inst_21200 = (state_21218[(7)]);
var state_21218__$1 = state_21218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21218__$1,(11),out,inst_21200);
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
});})(c__18993__auto___21243,out))
;
return ((function (switch__18881__auto__,c__18993__auto___21243,out){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_21235 = [null,null,null,null,null,null,null,null,null];
(statearr_21235[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_21235[(1)] = (1));

return statearr_21235;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_21218){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_21218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21236){if((e21236 instanceof Object)){
var ex__18885__auto__ = e21236;
var statearr_21237_21254 = state_21218;
(statearr_21237_21254[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21255 = state_21218;
state_21218 = G__21255;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_21218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_21218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___21243,out))
})();
var state__18995__auto__ = (function (){var statearr_21238 = f__18994__auto__.call(null);
(statearr_21238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___21243);

return statearr_21238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___21243,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21256 = [];
var len__17884__auto___21259 = arguments.length;
var i__17885__auto___21260 = (0);
while(true){
if((i__17885__auto___21260 < len__17884__auto___21259)){
args21256.push((arguments[i__17885__auto___21260]));

var G__21261 = (i__17885__auto___21260 + (1));
i__17885__auto___21260 = G__21261;
continue;
} else {
}
break;
}

var G__21258 = args21256.length;
switch (G__21258) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21256.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_21428){
var state_val_21429 = (state_21428[(1)]);
if((state_val_21429 === (7))){
var inst_21424 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21430_21471 = state_21428__$1;
(statearr_21430_21471[(2)] = inst_21424);

(statearr_21430_21471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (20))){
var inst_21394 = (state_21428[(7)]);
var inst_21405 = (state_21428[(2)]);
var inst_21406 = cljs.core.next.call(null,inst_21394);
var inst_21380 = inst_21406;
var inst_21381 = null;
var inst_21382 = (0);
var inst_21383 = (0);
var state_21428__$1 = (function (){var statearr_21431 = state_21428;
(statearr_21431[(8)] = inst_21382);

(statearr_21431[(9)] = inst_21380);

(statearr_21431[(10)] = inst_21381);

(statearr_21431[(11)] = inst_21405);

(statearr_21431[(12)] = inst_21383);

return statearr_21431;
})();
var statearr_21432_21472 = state_21428__$1;
(statearr_21432_21472[(2)] = null);

(statearr_21432_21472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (1))){
var state_21428__$1 = state_21428;
var statearr_21433_21473 = state_21428__$1;
(statearr_21433_21473[(2)] = null);

(statearr_21433_21473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (4))){
var inst_21369 = (state_21428[(13)]);
var inst_21369__$1 = (state_21428[(2)]);
var inst_21370 = (inst_21369__$1 == null);
var state_21428__$1 = (function (){var statearr_21434 = state_21428;
(statearr_21434[(13)] = inst_21369__$1);

return statearr_21434;
})();
if(cljs.core.truth_(inst_21370)){
var statearr_21435_21474 = state_21428__$1;
(statearr_21435_21474[(1)] = (5));

} else {
var statearr_21436_21475 = state_21428__$1;
(statearr_21436_21475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (15))){
var state_21428__$1 = state_21428;
var statearr_21440_21476 = state_21428__$1;
(statearr_21440_21476[(2)] = null);

(statearr_21440_21476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (21))){
var state_21428__$1 = state_21428;
var statearr_21441_21477 = state_21428__$1;
(statearr_21441_21477[(2)] = null);

(statearr_21441_21477[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (13))){
var inst_21382 = (state_21428[(8)]);
var inst_21380 = (state_21428[(9)]);
var inst_21381 = (state_21428[(10)]);
var inst_21383 = (state_21428[(12)]);
var inst_21390 = (state_21428[(2)]);
var inst_21391 = (inst_21383 + (1));
var tmp21437 = inst_21382;
var tmp21438 = inst_21380;
var tmp21439 = inst_21381;
var inst_21380__$1 = tmp21438;
var inst_21381__$1 = tmp21439;
var inst_21382__$1 = tmp21437;
var inst_21383__$1 = inst_21391;
var state_21428__$1 = (function (){var statearr_21442 = state_21428;
(statearr_21442[(14)] = inst_21390);

(statearr_21442[(8)] = inst_21382__$1);

(statearr_21442[(9)] = inst_21380__$1);

(statearr_21442[(10)] = inst_21381__$1);

(statearr_21442[(12)] = inst_21383__$1);

return statearr_21442;
})();
var statearr_21443_21478 = state_21428__$1;
(statearr_21443_21478[(2)] = null);

(statearr_21443_21478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (22))){
var state_21428__$1 = state_21428;
var statearr_21444_21479 = state_21428__$1;
(statearr_21444_21479[(2)] = null);

(statearr_21444_21479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (6))){
var inst_21369 = (state_21428[(13)]);
var inst_21378 = f.call(null,inst_21369);
var inst_21379 = cljs.core.seq.call(null,inst_21378);
var inst_21380 = inst_21379;
var inst_21381 = null;
var inst_21382 = (0);
var inst_21383 = (0);
var state_21428__$1 = (function (){var statearr_21445 = state_21428;
(statearr_21445[(8)] = inst_21382);

(statearr_21445[(9)] = inst_21380);

(statearr_21445[(10)] = inst_21381);

(statearr_21445[(12)] = inst_21383);

return statearr_21445;
})();
var statearr_21446_21480 = state_21428__$1;
(statearr_21446_21480[(2)] = null);

(statearr_21446_21480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (17))){
var inst_21394 = (state_21428[(7)]);
var inst_21398 = cljs.core.chunk_first.call(null,inst_21394);
var inst_21399 = cljs.core.chunk_rest.call(null,inst_21394);
var inst_21400 = cljs.core.count.call(null,inst_21398);
var inst_21380 = inst_21399;
var inst_21381 = inst_21398;
var inst_21382 = inst_21400;
var inst_21383 = (0);
var state_21428__$1 = (function (){var statearr_21447 = state_21428;
(statearr_21447[(8)] = inst_21382);

(statearr_21447[(9)] = inst_21380);

(statearr_21447[(10)] = inst_21381);

(statearr_21447[(12)] = inst_21383);

return statearr_21447;
})();
var statearr_21448_21481 = state_21428__$1;
(statearr_21448_21481[(2)] = null);

(statearr_21448_21481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (3))){
var inst_21426 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21428__$1,inst_21426);
} else {
if((state_val_21429 === (12))){
var inst_21414 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21449_21482 = state_21428__$1;
(statearr_21449_21482[(2)] = inst_21414);

(statearr_21449_21482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (2))){
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21428__$1,(4),in$);
} else {
if((state_val_21429 === (23))){
var inst_21422 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21450_21483 = state_21428__$1;
(statearr_21450_21483[(2)] = inst_21422);

(statearr_21450_21483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (19))){
var inst_21409 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21451_21484 = state_21428__$1;
(statearr_21451_21484[(2)] = inst_21409);

(statearr_21451_21484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (11))){
var inst_21380 = (state_21428[(9)]);
var inst_21394 = (state_21428[(7)]);
var inst_21394__$1 = cljs.core.seq.call(null,inst_21380);
var state_21428__$1 = (function (){var statearr_21452 = state_21428;
(statearr_21452[(7)] = inst_21394__$1);

return statearr_21452;
})();
if(inst_21394__$1){
var statearr_21453_21485 = state_21428__$1;
(statearr_21453_21485[(1)] = (14));

} else {
var statearr_21454_21486 = state_21428__$1;
(statearr_21454_21486[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (9))){
var inst_21416 = (state_21428[(2)]);
var inst_21417 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21428__$1 = (function (){var statearr_21455 = state_21428;
(statearr_21455[(15)] = inst_21416);

return statearr_21455;
})();
if(cljs.core.truth_(inst_21417)){
var statearr_21456_21487 = state_21428__$1;
(statearr_21456_21487[(1)] = (21));

} else {
var statearr_21457_21488 = state_21428__$1;
(statearr_21457_21488[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (5))){
var inst_21372 = cljs.core.async.close_BANG_.call(null,out);
var state_21428__$1 = state_21428;
var statearr_21458_21489 = state_21428__$1;
(statearr_21458_21489[(2)] = inst_21372);

(statearr_21458_21489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (14))){
var inst_21394 = (state_21428[(7)]);
var inst_21396 = cljs.core.chunked_seq_QMARK_.call(null,inst_21394);
var state_21428__$1 = state_21428;
if(inst_21396){
var statearr_21459_21490 = state_21428__$1;
(statearr_21459_21490[(1)] = (17));

} else {
var statearr_21460_21491 = state_21428__$1;
(statearr_21460_21491[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (16))){
var inst_21412 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21461_21492 = state_21428__$1;
(statearr_21461_21492[(2)] = inst_21412);

(statearr_21461_21492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (10))){
var inst_21381 = (state_21428[(10)]);
var inst_21383 = (state_21428[(12)]);
var inst_21388 = cljs.core._nth.call(null,inst_21381,inst_21383);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21428__$1,(13),out,inst_21388);
} else {
if((state_val_21429 === (18))){
var inst_21394 = (state_21428[(7)]);
var inst_21403 = cljs.core.first.call(null,inst_21394);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21428__$1,(20),out,inst_21403);
} else {
if((state_val_21429 === (8))){
var inst_21382 = (state_21428[(8)]);
var inst_21383 = (state_21428[(12)]);
var inst_21385 = (inst_21383 < inst_21382);
var inst_21386 = inst_21385;
var state_21428__$1 = state_21428;
if(cljs.core.truth_(inst_21386)){
var statearr_21462_21493 = state_21428__$1;
(statearr_21462_21493[(1)] = (10));

} else {
var statearr_21463_21494 = state_21428__$1;
(statearr_21463_21494[(1)] = (11));

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
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18882__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18882__auto____0 = (function (){
var statearr_21467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21467[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18882__auto__);

(statearr_21467[(1)] = (1));

return statearr_21467;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18882__auto____1 = (function (state_21428){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_21428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21468){if((e21468 instanceof Object)){
var ex__18885__auto__ = e21468;
var statearr_21469_21495 = state_21428;
(statearr_21469_21495[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21496 = state_21428;
state_21428 = G__21496;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18882__auto__ = function(state_21428){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18882__auto____1.call(this,state_21428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18882__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18882__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_21470 = f__18994__auto__.call(null);
(statearr_21470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_21470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21497 = [];
var len__17884__auto___21500 = arguments.length;
var i__17885__auto___21501 = (0);
while(true){
if((i__17885__auto___21501 < len__17884__auto___21500)){
args21497.push((arguments[i__17885__auto___21501]));

var G__21502 = (i__17885__auto___21501 + (1));
i__17885__auto___21501 = G__21502;
continue;
} else {
}
break;
}

var G__21499 = args21497.length;
switch (G__21499) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21497.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21504 = [];
var len__17884__auto___21507 = arguments.length;
var i__17885__auto___21508 = (0);
while(true){
if((i__17885__auto___21508 < len__17884__auto___21507)){
args21504.push((arguments[i__17885__auto___21508]));

var G__21509 = (i__17885__auto___21508 + (1));
i__17885__auto___21508 = G__21509;
continue;
} else {
}
break;
}

var G__21506 = args21504.length;
switch (G__21506) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21504.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21511 = [];
var len__17884__auto___21562 = arguments.length;
var i__17885__auto___21563 = (0);
while(true){
if((i__17885__auto___21563 < len__17884__auto___21562)){
args21511.push((arguments[i__17885__auto___21563]));

var G__21564 = (i__17885__auto___21563 + (1));
i__17885__auto___21563 = G__21564;
continue;
} else {
}
break;
}

var G__21513 = args21511.length;
switch (G__21513) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21511.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18993__auto___21566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___21566,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___21566,out){
return (function (state_21537){
var state_val_21538 = (state_21537[(1)]);
if((state_val_21538 === (7))){
var inst_21532 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
var statearr_21539_21567 = state_21537__$1;
(statearr_21539_21567[(2)] = inst_21532);

(statearr_21539_21567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (1))){
var inst_21514 = null;
var state_21537__$1 = (function (){var statearr_21540 = state_21537;
(statearr_21540[(7)] = inst_21514);

return statearr_21540;
})();
var statearr_21541_21568 = state_21537__$1;
(statearr_21541_21568[(2)] = null);

(statearr_21541_21568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (4))){
var inst_21517 = (state_21537[(8)]);
var inst_21517__$1 = (state_21537[(2)]);
var inst_21518 = (inst_21517__$1 == null);
var inst_21519 = cljs.core.not.call(null,inst_21518);
var state_21537__$1 = (function (){var statearr_21542 = state_21537;
(statearr_21542[(8)] = inst_21517__$1);

return statearr_21542;
})();
if(inst_21519){
var statearr_21543_21569 = state_21537__$1;
(statearr_21543_21569[(1)] = (5));

} else {
var statearr_21544_21570 = state_21537__$1;
(statearr_21544_21570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (6))){
var state_21537__$1 = state_21537;
var statearr_21545_21571 = state_21537__$1;
(statearr_21545_21571[(2)] = null);

(statearr_21545_21571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (3))){
var inst_21534 = (state_21537[(2)]);
var inst_21535 = cljs.core.async.close_BANG_.call(null,out);
var state_21537__$1 = (function (){var statearr_21546 = state_21537;
(statearr_21546[(9)] = inst_21534);

return statearr_21546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21537__$1,inst_21535);
} else {
if((state_val_21538 === (2))){
var state_21537__$1 = state_21537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21537__$1,(4),ch);
} else {
if((state_val_21538 === (11))){
var inst_21517 = (state_21537[(8)]);
var inst_21526 = (state_21537[(2)]);
var inst_21514 = inst_21517;
var state_21537__$1 = (function (){var statearr_21547 = state_21537;
(statearr_21547[(7)] = inst_21514);

(statearr_21547[(10)] = inst_21526);

return statearr_21547;
})();
var statearr_21548_21572 = state_21537__$1;
(statearr_21548_21572[(2)] = null);

(statearr_21548_21572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (9))){
var inst_21517 = (state_21537[(8)]);
var state_21537__$1 = state_21537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21537__$1,(11),out,inst_21517);
} else {
if((state_val_21538 === (5))){
var inst_21517 = (state_21537[(8)]);
var inst_21514 = (state_21537[(7)]);
var inst_21521 = cljs.core._EQ_.call(null,inst_21517,inst_21514);
var state_21537__$1 = state_21537;
if(inst_21521){
var statearr_21550_21573 = state_21537__$1;
(statearr_21550_21573[(1)] = (8));

} else {
var statearr_21551_21574 = state_21537__$1;
(statearr_21551_21574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (10))){
var inst_21529 = (state_21537[(2)]);
var state_21537__$1 = state_21537;
var statearr_21552_21575 = state_21537__$1;
(statearr_21552_21575[(2)] = inst_21529);

(statearr_21552_21575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21538 === (8))){
var inst_21514 = (state_21537[(7)]);
var tmp21549 = inst_21514;
var inst_21514__$1 = tmp21549;
var state_21537__$1 = (function (){var statearr_21553 = state_21537;
(statearr_21553[(7)] = inst_21514__$1);

return statearr_21553;
})();
var statearr_21554_21576 = state_21537__$1;
(statearr_21554_21576[(2)] = null);

(statearr_21554_21576[(1)] = (2));


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
});})(c__18993__auto___21566,out))
;
return ((function (switch__18881__auto__,c__18993__auto___21566,out){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_21558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21558[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_21558[(1)] = (1));

return statearr_21558;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_21537){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_21537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21559){if((e21559 instanceof Object)){
var ex__18885__auto__ = e21559;
var statearr_21560_21577 = state_21537;
(statearr_21560_21577[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21578 = state_21537;
state_21537 = G__21578;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_21537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_21537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___21566,out))
})();
var state__18995__auto__ = (function (){var statearr_21561 = f__18994__auto__.call(null);
(statearr_21561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___21566);

return statearr_21561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___21566,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21579 = [];
var len__17884__auto___21649 = arguments.length;
var i__17885__auto___21650 = (0);
while(true){
if((i__17885__auto___21650 < len__17884__auto___21649)){
args21579.push((arguments[i__17885__auto___21650]));

var G__21651 = (i__17885__auto___21650 + (1));
i__17885__auto___21650 = G__21651;
continue;
} else {
}
break;
}

var G__21581 = args21579.length;
switch (G__21581) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21579.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18993__auto___21653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___21653,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___21653,out){
return (function (state_21619){
var state_val_21620 = (state_21619[(1)]);
if((state_val_21620 === (7))){
var inst_21615 = (state_21619[(2)]);
var state_21619__$1 = state_21619;
var statearr_21621_21654 = state_21619__$1;
(statearr_21621_21654[(2)] = inst_21615);

(statearr_21621_21654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (1))){
var inst_21582 = (new Array(n));
var inst_21583 = inst_21582;
var inst_21584 = (0);
var state_21619__$1 = (function (){var statearr_21622 = state_21619;
(statearr_21622[(7)] = inst_21583);

(statearr_21622[(8)] = inst_21584);

return statearr_21622;
})();
var statearr_21623_21655 = state_21619__$1;
(statearr_21623_21655[(2)] = null);

(statearr_21623_21655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (4))){
var inst_21587 = (state_21619[(9)]);
var inst_21587__$1 = (state_21619[(2)]);
var inst_21588 = (inst_21587__$1 == null);
var inst_21589 = cljs.core.not.call(null,inst_21588);
var state_21619__$1 = (function (){var statearr_21624 = state_21619;
(statearr_21624[(9)] = inst_21587__$1);

return statearr_21624;
})();
if(inst_21589){
var statearr_21625_21656 = state_21619__$1;
(statearr_21625_21656[(1)] = (5));

} else {
var statearr_21626_21657 = state_21619__$1;
(statearr_21626_21657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (15))){
var inst_21609 = (state_21619[(2)]);
var state_21619__$1 = state_21619;
var statearr_21627_21658 = state_21619__$1;
(statearr_21627_21658[(2)] = inst_21609);

(statearr_21627_21658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (13))){
var state_21619__$1 = state_21619;
var statearr_21628_21659 = state_21619__$1;
(statearr_21628_21659[(2)] = null);

(statearr_21628_21659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (6))){
var inst_21584 = (state_21619[(8)]);
var inst_21605 = (inst_21584 > (0));
var state_21619__$1 = state_21619;
if(cljs.core.truth_(inst_21605)){
var statearr_21629_21660 = state_21619__$1;
(statearr_21629_21660[(1)] = (12));

} else {
var statearr_21630_21661 = state_21619__$1;
(statearr_21630_21661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (3))){
var inst_21617 = (state_21619[(2)]);
var state_21619__$1 = state_21619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21619__$1,inst_21617);
} else {
if((state_val_21620 === (12))){
var inst_21583 = (state_21619[(7)]);
var inst_21607 = cljs.core.vec.call(null,inst_21583);
var state_21619__$1 = state_21619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21619__$1,(15),out,inst_21607);
} else {
if((state_val_21620 === (2))){
var state_21619__$1 = state_21619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21619__$1,(4),ch);
} else {
if((state_val_21620 === (11))){
var inst_21599 = (state_21619[(2)]);
var inst_21600 = (new Array(n));
var inst_21583 = inst_21600;
var inst_21584 = (0);
var state_21619__$1 = (function (){var statearr_21631 = state_21619;
(statearr_21631[(7)] = inst_21583);

(statearr_21631[(8)] = inst_21584);

(statearr_21631[(10)] = inst_21599);

return statearr_21631;
})();
var statearr_21632_21662 = state_21619__$1;
(statearr_21632_21662[(2)] = null);

(statearr_21632_21662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (9))){
var inst_21583 = (state_21619[(7)]);
var inst_21597 = cljs.core.vec.call(null,inst_21583);
var state_21619__$1 = state_21619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21619__$1,(11),out,inst_21597);
} else {
if((state_val_21620 === (5))){
var inst_21587 = (state_21619[(9)]);
var inst_21592 = (state_21619[(11)]);
var inst_21583 = (state_21619[(7)]);
var inst_21584 = (state_21619[(8)]);
var inst_21591 = (inst_21583[inst_21584] = inst_21587);
var inst_21592__$1 = (inst_21584 + (1));
var inst_21593 = (inst_21592__$1 < n);
var state_21619__$1 = (function (){var statearr_21633 = state_21619;
(statearr_21633[(11)] = inst_21592__$1);

(statearr_21633[(12)] = inst_21591);

return statearr_21633;
})();
if(cljs.core.truth_(inst_21593)){
var statearr_21634_21663 = state_21619__$1;
(statearr_21634_21663[(1)] = (8));

} else {
var statearr_21635_21664 = state_21619__$1;
(statearr_21635_21664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (14))){
var inst_21612 = (state_21619[(2)]);
var inst_21613 = cljs.core.async.close_BANG_.call(null,out);
var state_21619__$1 = (function (){var statearr_21637 = state_21619;
(statearr_21637[(13)] = inst_21612);

return statearr_21637;
})();
var statearr_21638_21665 = state_21619__$1;
(statearr_21638_21665[(2)] = inst_21613);

(statearr_21638_21665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (10))){
var inst_21603 = (state_21619[(2)]);
var state_21619__$1 = state_21619;
var statearr_21639_21666 = state_21619__$1;
(statearr_21639_21666[(2)] = inst_21603);

(statearr_21639_21666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21620 === (8))){
var inst_21592 = (state_21619[(11)]);
var inst_21583 = (state_21619[(7)]);
var tmp21636 = inst_21583;
var inst_21583__$1 = tmp21636;
var inst_21584 = inst_21592;
var state_21619__$1 = (function (){var statearr_21640 = state_21619;
(statearr_21640[(7)] = inst_21583__$1);

(statearr_21640[(8)] = inst_21584);

return statearr_21640;
})();
var statearr_21641_21667 = state_21619__$1;
(statearr_21641_21667[(2)] = null);

(statearr_21641_21667[(1)] = (2));


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
});})(c__18993__auto___21653,out))
;
return ((function (switch__18881__auto__,c__18993__auto___21653,out){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_21645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21645[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_21645[(1)] = (1));

return statearr_21645;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_21619){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_21619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21646){if((e21646 instanceof Object)){
var ex__18885__auto__ = e21646;
var statearr_21647_21668 = state_21619;
(statearr_21647_21668[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21669 = state_21619;
state_21619 = G__21669;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_21619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_21619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___21653,out))
})();
var state__18995__auto__ = (function (){var statearr_21648 = f__18994__auto__.call(null);
(statearr_21648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___21653);

return statearr_21648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___21653,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21670 = [];
var len__17884__auto___21744 = arguments.length;
var i__17885__auto___21745 = (0);
while(true){
if((i__17885__auto___21745 < len__17884__auto___21744)){
args21670.push((arguments[i__17885__auto___21745]));

var G__21746 = (i__17885__auto___21745 + (1));
i__17885__auto___21745 = G__21746;
continue;
} else {
}
break;
}

var G__21672 = args21670.length;
switch (G__21672) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21670.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18993__auto___21748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___21748,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___21748,out){
return (function (state_21714){
var state_val_21715 = (state_21714[(1)]);
if((state_val_21715 === (7))){
var inst_21710 = (state_21714[(2)]);
var state_21714__$1 = state_21714;
var statearr_21716_21749 = state_21714__$1;
(statearr_21716_21749[(2)] = inst_21710);

(statearr_21716_21749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (1))){
var inst_21673 = [];
var inst_21674 = inst_21673;
var inst_21675 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21714__$1 = (function (){var statearr_21717 = state_21714;
(statearr_21717[(7)] = inst_21675);

(statearr_21717[(8)] = inst_21674);

return statearr_21717;
})();
var statearr_21718_21750 = state_21714__$1;
(statearr_21718_21750[(2)] = null);

(statearr_21718_21750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (4))){
var inst_21678 = (state_21714[(9)]);
var inst_21678__$1 = (state_21714[(2)]);
var inst_21679 = (inst_21678__$1 == null);
var inst_21680 = cljs.core.not.call(null,inst_21679);
var state_21714__$1 = (function (){var statearr_21719 = state_21714;
(statearr_21719[(9)] = inst_21678__$1);

return statearr_21719;
})();
if(inst_21680){
var statearr_21720_21751 = state_21714__$1;
(statearr_21720_21751[(1)] = (5));

} else {
var statearr_21721_21752 = state_21714__$1;
(statearr_21721_21752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (15))){
var inst_21704 = (state_21714[(2)]);
var state_21714__$1 = state_21714;
var statearr_21722_21753 = state_21714__$1;
(statearr_21722_21753[(2)] = inst_21704);

(statearr_21722_21753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (13))){
var state_21714__$1 = state_21714;
var statearr_21723_21754 = state_21714__$1;
(statearr_21723_21754[(2)] = null);

(statearr_21723_21754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (6))){
var inst_21674 = (state_21714[(8)]);
var inst_21699 = inst_21674.length;
var inst_21700 = (inst_21699 > (0));
var state_21714__$1 = state_21714;
if(cljs.core.truth_(inst_21700)){
var statearr_21724_21755 = state_21714__$1;
(statearr_21724_21755[(1)] = (12));

} else {
var statearr_21725_21756 = state_21714__$1;
(statearr_21725_21756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (3))){
var inst_21712 = (state_21714[(2)]);
var state_21714__$1 = state_21714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21714__$1,inst_21712);
} else {
if((state_val_21715 === (12))){
var inst_21674 = (state_21714[(8)]);
var inst_21702 = cljs.core.vec.call(null,inst_21674);
var state_21714__$1 = state_21714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21714__$1,(15),out,inst_21702);
} else {
if((state_val_21715 === (2))){
var state_21714__$1 = state_21714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21714__$1,(4),ch);
} else {
if((state_val_21715 === (11))){
var inst_21678 = (state_21714[(9)]);
var inst_21682 = (state_21714[(10)]);
var inst_21692 = (state_21714[(2)]);
var inst_21693 = [];
var inst_21694 = inst_21693.push(inst_21678);
var inst_21674 = inst_21693;
var inst_21675 = inst_21682;
var state_21714__$1 = (function (){var statearr_21726 = state_21714;
(statearr_21726[(11)] = inst_21694);

(statearr_21726[(7)] = inst_21675);

(statearr_21726[(8)] = inst_21674);

(statearr_21726[(12)] = inst_21692);

return statearr_21726;
})();
var statearr_21727_21757 = state_21714__$1;
(statearr_21727_21757[(2)] = null);

(statearr_21727_21757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (9))){
var inst_21674 = (state_21714[(8)]);
var inst_21690 = cljs.core.vec.call(null,inst_21674);
var state_21714__$1 = state_21714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21714__$1,(11),out,inst_21690);
} else {
if((state_val_21715 === (5))){
var inst_21678 = (state_21714[(9)]);
var inst_21675 = (state_21714[(7)]);
var inst_21682 = (state_21714[(10)]);
var inst_21682__$1 = f.call(null,inst_21678);
var inst_21683 = cljs.core._EQ_.call(null,inst_21682__$1,inst_21675);
var inst_21684 = cljs.core.keyword_identical_QMARK_.call(null,inst_21675,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21685 = (inst_21683) || (inst_21684);
var state_21714__$1 = (function (){var statearr_21728 = state_21714;
(statearr_21728[(10)] = inst_21682__$1);

return statearr_21728;
})();
if(cljs.core.truth_(inst_21685)){
var statearr_21729_21758 = state_21714__$1;
(statearr_21729_21758[(1)] = (8));

} else {
var statearr_21730_21759 = state_21714__$1;
(statearr_21730_21759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (14))){
var inst_21707 = (state_21714[(2)]);
var inst_21708 = cljs.core.async.close_BANG_.call(null,out);
var state_21714__$1 = (function (){var statearr_21732 = state_21714;
(statearr_21732[(13)] = inst_21707);

return statearr_21732;
})();
var statearr_21733_21760 = state_21714__$1;
(statearr_21733_21760[(2)] = inst_21708);

(statearr_21733_21760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (10))){
var inst_21697 = (state_21714[(2)]);
var state_21714__$1 = state_21714;
var statearr_21734_21761 = state_21714__$1;
(statearr_21734_21761[(2)] = inst_21697);

(statearr_21734_21761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21715 === (8))){
var inst_21678 = (state_21714[(9)]);
var inst_21674 = (state_21714[(8)]);
var inst_21682 = (state_21714[(10)]);
var inst_21687 = inst_21674.push(inst_21678);
var tmp21731 = inst_21674;
var inst_21674__$1 = tmp21731;
var inst_21675 = inst_21682;
var state_21714__$1 = (function (){var statearr_21735 = state_21714;
(statearr_21735[(14)] = inst_21687);

(statearr_21735[(7)] = inst_21675);

(statearr_21735[(8)] = inst_21674__$1);

return statearr_21735;
})();
var statearr_21736_21762 = state_21714__$1;
(statearr_21736_21762[(2)] = null);

(statearr_21736_21762[(1)] = (2));


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
});})(c__18993__auto___21748,out))
;
return ((function (switch__18881__auto__,c__18993__auto___21748,out){
return (function() {
var cljs$core$async$state_machine__18882__auto__ = null;
var cljs$core$async$state_machine__18882__auto____0 = (function (){
var statearr_21740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21740[(0)] = cljs$core$async$state_machine__18882__auto__);

(statearr_21740[(1)] = (1));

return statearr_21740;
});
var cljs$core$async$state_machine__18882__auto____1 = (function (state_21714){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_21714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e21741){if((e21741 instanceof Object)){
var ex__18885__auto__ = e21741;
var statearr_21742_21763 = state_21714;
(statearr_21742_21763[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21764 = state_21714;
state_21714 = G__21764;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
cljs$core$async$state_machine__18882__auto__ = function(state_21714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18882__auto____1.call(this,state_21714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18882__auto____0;
cljs$core$async$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18882__auto____1;
return cljs$core$async$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___21748,out))
})();
var state__18995__auto__ = (function (){var statearr_21743 = f__18994__auto__.call(null);
(statearr_21743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___21748);

return statearr_21743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___21748,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1450440273183