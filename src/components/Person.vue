<template>
  <el-col :span="4">
    <el-card>
      <div>{{ person.name }}</div>
      <div>{{ person.height }}</div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "Person",
  props: {
    person: {
      type: Object,
      required: true
    }
  }
};
</script>
