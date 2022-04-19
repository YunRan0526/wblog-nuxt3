<template>
  <NuxtPage @click="clickToEffects"></NuxtPage>
  <ClickEffects
    v-for="item in effectsArr"
    :key="item.id"
    :style="{ position: 'absolute', left: item.left, top: item.top }"
  ></ClickEffects>
</template>
<script setup>
const effectsArr = reactive([]);
let clearTimer = reactive({});
const clickToEffects = (e) => {
  let left = `${e.pageX - 50}px`;
  let top = `${e.pageY - 50}px`;
  let obj = {
    id: Math.random().toString(16).slice(2),
    left,
    top,
    show: true,
  };
  effectsArr.push(obj);
  if (clearTimer) {
    clearTimeout(clearTimer);
    clearTimer = null;
  }
  clearTimer = setTimeout(() => {
    effectsArr.length = 0;
    clearTimeout(clearTimer);
    clearTimer = null;
  }, 1000);
};
</script>
<style lang="scss"></style>
