<template>
  <el-row class="row-bg" id="app">
    <el-col :span="8" class="full-height">
      <div class="grid-content full-height">
        <sidebar></sidebar>
      </div>
    </el-col>
    <el-col :span="16" class="full-height" id="view">
        <toolbar></toolbar>
        <ngl></ngl>
        <statusbar></statusbar>
    </el-col>
    <alert></alert>
  </el-row>
</template>

<script>
import Sidebar from './components/Sidebar'
import ngl from './components/NGLViewport'
import SearchLibmol from './components/Searchlibmol'
import Toolbar from './components/Toolbar'
import Statusbar from './components/Statusbar'
import Alert from './components/Alert'

export default {
  name: 'app',
  components: {
    Sidebar,
    ngl,
    SearchLibmol,
    Toolbar,
    Statusbar,
    Alert
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow: hidden;
    user-select: none;
    -moz-user-select: none;
    cursor: default;
  }
  
  #app {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  
  .el-col {
    border-radius: 4px;
  }
  
  .bg-purple {
    background: #d3dce6;
  }
    
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  
  .row-bg {
    /* padding: 10px 0; */
    background-color: #f9fafc;
  }
  
  .full-height {
    position: relative;
    height: 100%;
  }

</style>
