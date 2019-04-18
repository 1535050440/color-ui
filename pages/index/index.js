Page({
  data: {
    PageCur: 'basics'
  },
  NavChange(e) {
    console.log('您当前选择的为：' + e.currentTarget.dataset.cur);
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})