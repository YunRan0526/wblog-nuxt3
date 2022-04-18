<template>
  <div class="ClickEffects">
    <section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
</template>
<script setup>
const colorList = reactive([
  "#283c5f",
  "#2ecc71",
  "#c3ce5f",
  "#4aa9a4",
  "#c45c66",
  "#8e44ad",
  "#c0392b",
  "#f39c12",
]);
const borderColor =
  colorList[Math.floor(Math.random() * (colorList.length - 1) * 1.1)];
</script>
<style lang="scss" scoped>
@keyframes show-type {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(-18px);
  }
}

.ClickEffects {
  pointer-events: none;
  section {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 999;
    position: relative;
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        transform: rotate(0deg);
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(90deg);
      }
      &:nth-child(4) {
        transform: rotate(135deg);
      }
      &:nth-child(5) {
        transform: rotate(180deg);
      }
      &:nth-child(6) {
        transform: rotate(225deg);
      }
      &:nth-child(7) {
        transform: rotate(270deg);
      }
      &:nth-child(8) {
        transform: rotate(315deg);
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 1.25px;
        left: calc(50% - 5px);
        border-top: solid 17px;
        border-top-color: v-bind(borderColor);
        border-left: solid 5px transparent;
        border-right: solid 5px transparent;
        transform: translateY(130px);
        opacity: 0;
        animation: fadein 0.3s ease 0s forwards, show-type 0.6s ease 0s forwards;
      }
    }
  }
}
</style>
