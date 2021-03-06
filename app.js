//app.js
App({
  //启动
  onlaunch:function(){
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },
  //用户信息
  getUserInfo:function(cb){
    var that = this;
    if (this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用接口
      wx.login({
        success:function(){
          wx.getUserInfo({
           success:function(res){
             that.globalData.userInfo = res.userInfo;
             typeof cb == "function" && cb(that.globalData.userInfo)
           }
          })
        }
      });
    }
  },
  //
  globalData:{
    userInfo:null
  }
})