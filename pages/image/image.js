// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: ''
  },
  handleChooseAlbum() {
    //系统API：让用户在相册中选择图片或者拍照
    //在手机上，一次可以选中9张图片
    wx.chooseImage({
      count: 1,
      success: res => {
        console.log(res);
        this.setData({
          avatar: res.tempFilePaths[0]
        })
      }
    });
  },
  handleImageLoaded() {
    console.log('图片加载完成');
  }
})