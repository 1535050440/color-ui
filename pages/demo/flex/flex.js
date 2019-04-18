
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    name: 'deng',
    banner_list: {},
    product_list: {},
    show: true
  },
  lifetimes: {
    attached() {
      let that = this;
      console.log('============attached开始执行============');
      // 在组件实例进入页面节点树时执行
      that._attached();
      this.setData({
        show: false
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
      console.log('detached===在组件实例被从页面节点树移除时执行');
    },
    show() {
      // 页面被展示xx
      console.log('show')
    },
    created() {
      console.log('created=组件实例刚刚被创建好时=');
    }
  },
  methods: {
    _attached() {
      this.setData({
        name: '元素'
      });

    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('1')
  }
})