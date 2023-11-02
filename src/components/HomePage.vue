<template>
  <a-layout>
    <a-layout-content style="margin: 0 16px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>App</a-breadcrumb-item>
        <a-breadcrumb-item>app</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        Put content here
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Management system ©2023 Created by Linskin
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>