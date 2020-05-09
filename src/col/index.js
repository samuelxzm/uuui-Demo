
Component({
  properties: {
    span: {
      type: Number,
      value: 12,
    },
  },
  data: {
    flag: false,
  },
  lifetimes: {
    attached() {
      console.log(this)
    }
  }
})
