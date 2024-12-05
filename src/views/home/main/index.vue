<template>
    <div class="container">
        <div class="gourp">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="其他" width="180" />
            </el-table>
        </div>
        <div class="gourp"></div>
        <div class="gourp"></div>
        <div class="gourp"></div>
    </div>
</template>
<script setup>
const tableData = [
  {
    date: '05-03',
    name: 'Tom',
  },
  {
    date: '05-02',
    name: 'Tom',
  },
  {
    date: '05-04',
    name: 'Tom',
  },
  {
    date: '05-01',
    name: 'Tom',
  },
]

</script>