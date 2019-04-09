
/**
 * @author kunji
 * @description 控制人物移动
 * @time 2019/4/9
 */
cc.Class({
    extends: cc.Component,

    properties: {

        stick: {
            type: cc.Node,
            default: null,
        },

        max_r: 80,
    },
    start () {
        this.stick.x = 0;
        this.stick.y = 0;
        this.dir = cc.p(0, 0);

        this.stick.on(cc.Node.EventType.TOUCH_START, function (e) {
        }, this);

        // e: 底层传给我们的触摸信息对象
        this.stick.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            // 获取触摸的位置
            var w_pos = e.getLocation();
            var pos = this.node.convertToNodeSpaceAR(w_pos);
            var len = cc.pLength(pos);
            this.dir.x = pos.x / len;
            this.dir.y = pos.y / len;

            /* 好处
            归一化，一个方向，只有一个值;
            this.dir.x = cos(r);
            this.dir.y = sin(r);
            // -1, 1
            */

            if (len > this.max_r) {
                pos.x = this.max_r * pos.x / len;
                pos.y = this.max_r * pos.y / len;
            }

            this.stick.setPosition(pos);

        }, this);

        // 在stick的范围内弹起
        this.stick.on(cc.Node.EventType.TOUCH_END, function (e) {
            this.stick.setPosition(cc.p(0, 0))
            this.dir = cc.p(0, 0);
        }, this);

        // 在stick的范围外弹起
        this.stick.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
            this.stick.setPosition(cc.p(0, 0))
            this.dir = cc.p(0, 0);
        }, this);
    },

    update (dt) {

    },
});
