
Component({
  properties: {
    color: {
      type: String,
      value: '#ffffffff'
    },
    height: {
      type: String,
      value: 'unset'
    },
    plain: {
      type: Boolean,
      value: false
    },
    circle: {
      type: Boolean,
      value: false
    }
  },
  data: {
    flag: false,
  },
  lifetimes: {
  }
})
