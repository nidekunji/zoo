/**
 * @author kunji
 * @description 主页
 * @time 2019/4/8
 */
let dataMgr = require('dataMgr');
function initData (info) {
    let name = info || '';
    let newPlayer = isNewPlayer(name);
    if (newPlayer) {
        loadUserData();
    }
    else {
        getUserData();
    }
}
function isNewPlayer (name) {
    let player = name || 'ratel';
    let data = cc.sys.localStorage.getItem(player);
    if (data) 
    return false;
    else 
    return true;
};
function loadUserData(name) {
    let player = name || 'ratel';
    let data = cc.sys.localStorage.getItem(player);
    if (data) {
       userData =  JSON.parse(data);
        console.log("load from localStorage ######");
        console.log(global.userData,JSON.parse(data));
        return;
    }
    else {
        let config = require(player + 'Config');
        userData = config[0];
        cc.log("config in init ", userData);
    }
}

function saveData() {
    var data = JSON.stringify(global.userData);
    let name = global.data.name;
    cc.log(data,name,"saveData");
      cc.sys.localStorage.setItem(name, data);
}

function getUserData (name) {
    let player = name || 'ratel';
    cc.log(player,"name");
    let data = cc.sys.localStorage.getItem(player);
   userData =  JSON.parse(data);
    console.log("get from localStorage ######");
    console.log(global.userData,JSON.parse(data));
}

module.exports = {
    initData:initData,
    saveData:saveData,
    getUserData:getUserData,
};
