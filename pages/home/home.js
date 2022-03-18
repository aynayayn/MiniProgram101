Page({
  data: {
    name: 'Toby',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 120, name: 'james', age: 28},
      {id: 130, name: 'toby', age: 40},
      {id: 140, name: 'curry', age: 35},
    ],
    counter: 0
  },
  handleBtnClick() {
    // 错误做法：界面不会刷新
    // this.data.counter += 1;
    // console.log(this.data.counter);

    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClickToSubstract() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})