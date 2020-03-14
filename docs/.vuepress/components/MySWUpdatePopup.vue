<template>
  <SWUpdatePopup>
    <div v-if="enabled"
      slot-scope="{ enabled, reload, message, buttonText }"
      class="my-sw-update-popup">
      {{ message }}
      <br><button @click="reload">{{ buttonText }}</button></br>
    </div>  
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'
export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  text-align: right;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  color:#6a8bad;
  font-size: 19px;
  padding: 15px;
  margin: 0px 15px;
  border: 3px solid #4db6ac;
}

.my-sw-update-popup button {
  background-color: #4db6ac;
  -moz-border-radius:28px;
  -webkit-border-radius:28px;
  border-radius:28px;
  border:1px solid #18ab29;
  display:inline-block;
  cursor:pointer;
  color:#fff;
  font-family:Arial;
  font-size:17px;
  margin: 12px 50px;
  padding:13px 30px;
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;

}

.my-sw-update-popup button:hover {
  background-color:#3eaf7c;
}
</style>