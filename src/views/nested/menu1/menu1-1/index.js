// import request from '@/api/department'
export default {
  name: 'Menu1-1',
  data() {
    return {
      article: '47',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      multipleSelection: [],
      formInline: {
        departmentName: '',
        department: '',
        date: ''
      },
      form: { // 新增数据
        departmentCode: '',
        departmentName: ''
      },
      props: {
        label: 'name',
        children: 'zones'
      },
      tableData: [{
        name: '部门名称',
        code: '2019'
      }, {
        name: '部门名称',
        code: '2019'
      }, {
        name: '部门名称',
        code: '2019'
      }, {
        name: '部门名称',
        code: '2019'
      }]
    }
  },
  mounted() {
    this.fetchData()
    this.getDepatmentList()// 获取列表
  },
  methods: {
    fetchData() {
      this.article = 'remix'
    },
    onSubmit() {
      // console.log('submit!');
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }, // 重置
    // resetForm(formInline) {
    //   // this.$refs[formInline].resetFields();
    //   // if (this.$refs[formInline] !== undefined) {
    //   //     this.$refs[formInline].resetFields();
    //   // }
    //   // console.log(this.$refs[formInline])
    // },
    // 新增
    addDepartment: function() {
      this.dialogFormVisible = false
      // console.log(this.form);
      // request.addDepartment();
    },
    // 查询数据渲染列表
    getDepatmentList: function() {
      // request.getDepatmentList();
    }
  }
}
