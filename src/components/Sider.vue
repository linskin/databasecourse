<template>
  <a-layout-sider collapsible theme="light" >
  <a-menu mode="vertical">
    <a-menu-item>
      <span>System</span>
    </a-menu-item>
    <a-menu-item key="1" >
      <pie-chart-outlined />
      <span>HomePage</span>
    </a-menu-item>
    <a-menu-item key="2">
      <desktop-outlined />
      <span>Management of partner companies</span>
    </a-menu-item>
    <a-menu-item key="3">
      <desktop-outlined />
      <span>Procurement management</span>
    </a-menu-item>
    <a-menu-item key="4">
      <desktop-outlined />
      <span>Statistics</span>
    </a-menu-item>
    <a-sub-menu title="User">
      <template>
        <span >
          <user-outlined/>
          <user-outlined/>
          User
        </span>
      </template>
      <a-menu-item key="5" >
        <desktop-outlined />
        <span>Log out</span>
      </a-menu-item>
      <a-menu-item key="6">
        <desktop-outlined />
        <span>Log in</span>
      </a-menu-item>
    </a-sub-menu>
    </a-menu>
    </a-layout-sider>
</template>

<script>
import {DesktopOutlined, PieChartOutlined} from "@ant-design/icons-vue";

export default {
  name: "Sider",
  components: {DesktopOutlined, PieChartOutlined}
}
</script>

<style scoped>

</style>