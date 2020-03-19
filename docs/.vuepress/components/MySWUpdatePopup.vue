<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div v-if="enabled" class="my-sw-update-popup">
      {{ message }}
      <br />
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup }
};
</script>

<style>
:root {
  color-scheme: light dark;
  --popup-border-color: #2c3e50;
  --popup-background-color: #fefefe;
  --msg-text-color: #25272a;
}

.my-sw-update-popup {
  position: fixed;
  right: 1em;
  bottom: 1em;
  padding: 1em;
  border: 2px solid #4775c1;
  border-radius: 3px;
  background: var(--popup-background-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  color: var(--msg-text-color);
  text-align: center;
  animation: drop 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  z-index: 2;
}

.my-sw-update-popup button {
  margin-top: 0.5em;
  padding: 0.25em 1.8em;
  background-color: #5d85c8;
  color: #fff;
  border-width: 0;
  border-radius: 3px;
}
</style>
