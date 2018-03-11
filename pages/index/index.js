//index.js
//获取应用实例
var app = getApp();
Page({
  //数据
  data:{
    motto:'Hello World',
    userInfo:{}
  },
  //事件处理函数
  // bindViewTap:function(){
  //   wx.navigateTo({
  //     url: '../logs/logs',
  //   })
  // },
  //
  onLoad:function(){
    console.info('onLoad');
    var that = this;
    //调用应用实例方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    });
  },
  //页面渲染完成
  onReady:function(){

  },
  //页面显示
  onShow:function(){

  },
  //页面隐藏
  onHide:function(){

  },
  //页面关闭
  onUnload:function(){

  },
  //
  onPullDownRefresh:function(){

  },
  //
  onReachBottom:function(){
    // Do something when page reach bottom.
  },
  //
  onShareAppMessage:function(){
    // return custom share data when user share.
  },
  //
  onFlexClick:function(){
    wx.navigateTo({
      url: '../flex/flex',
    })
  },
  //
  onIconClick:function(){
    wx.navigateTo({
      url: '../icon/icon',
    })
  },
  //
  onTextClick:function(){
    wx.navigateTo({
      url: '../text/text',
    })
  },
  //
  onProgressClick:function(){
    wx.navigateTo({
      url: '../progress/progress',
    })
  },
  //
  onCalculatorClick:function(){
    wx.navigateTo({
      url: '../calculator/calculator',
    })
  },
  //
  onDataClick:function(){
    wx.navigateTo({
      url: '../data/data',
    })
  }
})