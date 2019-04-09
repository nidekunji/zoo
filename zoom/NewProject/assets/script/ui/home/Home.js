/**
 * @author kunji
 * @description 主页
 * @time 2019/4/8
 */

cc.Class({
    extends: cc.Component,
    properties: {
        curNum: 0,
        curTotal: 3,
        pageTeample: cc.Prefab,
        target: cc.PageView,
        label: cc.Label
    },

    onLoad () {

    },

    start () {

    },
    onStart() {
        cc.director.loadScene("game", tools.initData());
    },
    onAbout() {
        
    },
    onRank() {

    },

    // update (dt) {},
});
