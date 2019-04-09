/**
 * @author kunji
 * @description 玩家移动操作
 * @time 2019/4/9
 */
var joyStick = require("joyStick");
cc.Class({
    extends: cc.Component,

    properties: {
        stick: {
            type: joyStick,
            default: null,
        },

        speed: 200,
    },

    onLoad () {
        // this.stick = cc.find('Canvas/joyStick').getComponent('joyStick');
        // cc.log(this.stick.dir,);
    },

    start () {

    },

    update (dt) {
        if (cc.pLength(this.stick.dir) < 0.5) {
            return;
        }

        var vx = this.stick.dir.x * this.speed; // cos(r)
        var vy = this.stick.dir.y * this.speed; // sin(r)

        var sx = vx * dt;
        var sy = vy * dt;
        this.node.x += sx;
        this.node.y += sy;
        if (this.node.x > 530 || this.node.x < -530 || this.node.y > 370 || this.node.y <-370){
            this.node.x -= sx;
            this.node.y -= sy;
            return;
        }
        
        var r = Math.atan2(this.stick.dir.y, this.stick.dir.x);//计算出弧度值
        var degree = r * 180 / Math.PI;//弧度转度
        degree = 90 - degree;//逆时针转顺时针
        this.node.rotation = degree;//rotation 顺时针转的
    },
 });
