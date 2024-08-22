# Vue mounted生命周期获取元素异常

在vue的mounted事件中，写在组件`<template>`中的`div`，使用`document.querySelector('#id')`获取dom元素失败，但是如果适用ref就可以正常获取，具体原因待确认；

环境：vue@3.3.4，qiankun，在使用了transition(mode='out-in')，keepalive(includes)

