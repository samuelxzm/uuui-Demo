Page({
  data: {
  },
  // 事件响应函数
  gotoRowcol: function () {
    wx.navigateTo({
      url: '../rowcol/index'
    })
  },
  gotoButton:function(){
    wx.navigateTo({
      url: '../button/index'
    })
  }
})
