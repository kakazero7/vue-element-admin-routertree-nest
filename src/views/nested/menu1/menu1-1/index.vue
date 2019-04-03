<template>
  <div style="padding:30px;">
    <!-- <el-alert :closable="false" title="menu 1123" />
    {{ article }}-->
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="日期" prop="date">
          <el-date-picker type="date" placeholder v-model="formInline.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="所属单位" prop="department">
          <el-select v-model="formInline.department" placeholder>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单位名称" prop="departmentName">
          <el-input v-model="formInline.departmentName" placeholder="输入关键字查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm('formInline')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      <!-- 新增 -->
      <el-dialog title="部门基本信息" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form">
          <el-form-item label="部门代码" :label-width="formLabelWidth">
            <el-input v-model="form.departmentCode" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="部门名称" :label-width="formLabelWidth">
            <el-input v-model="form.departmentName" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDepartment">确 定</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" plain @click="onSubmit">修改</el-button>
      <el-button type="danger" @click="onSubmit">删除</el-button>
      <el-button @click="onSubmit">导入</el-button>
    </div>
    <div style="margin-top:30px;">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="部门名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="code"
          label="部门编码"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script src="./index.js"></script>
