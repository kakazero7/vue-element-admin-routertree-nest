export default {
  data() {
    return {
      article: '47'
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.article = 'remix'
    }
  }
}
