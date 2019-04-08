/**
 * @author kunji
 * @description 主页
 * @time 2019/4/8
 */

cc.Class({
    extends: cc.Component,
    properties: {
       
    },

    onLoad () {

    },

    start () {

    },
    onStart() {
        cc.director.loadScene("game", onSceneLaunched);
    },
    onAbout() {
        
    },
    onRank() {

    },

    // update (dt) {},
});
