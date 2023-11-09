<template>
  <div id="app">
    <Sidebar />
    <Agreement />
  </div>
</template>

<script>
import Agreement from './components/Agreement.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Agreement,
    Sidebar
  }
};
</script>

<style>
#app {
  display: flex;
  font-family: 'Times New Roman', serif;
  width: 850px;
}
</style>
