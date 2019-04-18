Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    phone: '400-010-9797'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    callPhone() {
      wx.makePhoneCall({
        phoneNumber: this.data.phone
      })
    }
  }
})