<template>
  <div class="PageDecoration">
    <div class="decoration"></div>
    <div class="pageBorder"></div>
    <div class="moon_and_star">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div :class="{ page_content: true, 'beautiful-scroll': true }">
      <div style="width: 100%; display: flex; justify-content: center">
        <div class="page_title" :data-content="props.title1"></div>
      </div>
      <div style="width: 100%; display: flex; justify-content: center">
        <div class="page_project">
          <span class="project_text">{{ props.title2 }}</span>
        </div>
      </div>
      <div style="width: 100%; display: flex; justify-content: center">
        <div class="flower_border_bottom section_title">
          <h1>@YBW</h1>
        </div>
      </div>
      <slot></slot>
      <slot name="test" :test="'11'" :test2="'22'"></slot>
    </div>
    <CircleCloseButton class="btn" @click="close" />
  </div>
</template>
<script setup>
const props = defineProps({
  title1: {
    type: String,
    default: () => {
      return "";
    },
  },
  title2: {
    type: String,
    default: () => {
      return "";
    },
  },
});
let timer = null;
const scrollOP = ref(0);
const scrollColor = computed(() => {
  return `rgba(40, 60, 95, ${scrollOP.value})`;
});
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
onMounted(() => {
  timer = setInterval(() => {
    if (scrollOP.value >= 1) {
      clearInterval(timer);
      return;
    }
    scrollOP.value += 0.025;
  }, 10);
});
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slide-top {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
@keyframes slide-bottom {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}
@keyframes page__show-frame {
  from {
    transform: scale(1.1);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slide-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes star-down {
  0% {
    transform: translateY(-110%);
  }
  20% {
    transform: translateY(0%);
  }
  40% {
    transform: translateY(-3%);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-1.5%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes star_rotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}
@keyframes page__show-title {
  from {
    transform: translateX(-5%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes page__show-project {
  from {
    transform: translateX(5%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes page__show-section-title {
  from {
    transform: translateY(30%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
.beautiful-scroll {
  overflow: scroll !important;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: v-bind(scrollColor);
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.3) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 75%,
      transparent 75%,
      transparent
    );
  }
}
.page_title {
  opacity: 0;
  transition: 0.3s;
  animation: page__show-title 1s ease 0.4s forwards;
}
.section_title {
  text-align: center;
  transform: translateY(30%);
  opacity: 0;
  animation: page__show-section-title 1s ease 0.6s forwards;
}
.page_project {
  opacity: 0;
  transition: 0.3s;
  white-space: nowrap;
  animation: page__show-project 1s ease 0.5s forwards;
}
.page_project {
  width: 70%;
  height: 10px;
  margin-top: 8px;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    top: calc(50% - 0.5px);
    background-color: #283c5f;
  }
  .project_text {
    padding: 0 10px;
    font-size: 16px;
    font-weight: 700;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (min-width: 761px) {
  .PageDecoration {
    width: 100%;
    height: 100vh;
    contain: paint;
    position: relative;
    overflow: hidden;
    .btn {
      z-index: 999;
      position: absolute;
      right: -18px;
      top: -18px;
      transform: translateX(100%);
      &:hover {
        box-shadow: 0 0 50px rgb(0 0 0 / 50%);
      }
      animation: slide-left 0.6s cubic-bezier(0.06, 0.51, 0.01, 1.03) 1.2s
        forwards;
    }
    .decoration {
      &::before {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 60px;
        background-color: $theme-red;
        animation: slide-bottom 0.6s cubic-bezier(0.99, 0.04, 0.01, 0.99) 0s
          forwards;
        transform: translateY(-100%);
        transition: 0.3s;
        z-index: 20;
      }
      &::after {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: $theme-green;
        animation: slide-top 0.6s cubic-bezier(0.99, 0.04, 0.01, 0.99) 0s
          forwards;
        transform: translateY(100%);
        transition: 0.3s;
        z-index: 20;
      }
    }
    .pageBorder {
      z-index: 30;
      top: 30px;
      left: 30px;
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      border: dashed 5px #283c5f;
      border-radius: 40px;
      position: absolute;
      box-sizing: border-box;
      opacity: 0;
      animation: page__show-frame 0.8s cubic-bezier(0.99, 0.04, 0.01, 0.99) 0.2s
        forwards;
      transition: 0.3s;
    }
    .moon_and_star {
      div {
        z-index: 10;
        position: absolute;
        top: 0;
        width: 30px;
        transform: translateY(-110%);
        perspective: 1000px;
        transform-style: preserve-3d;
        &::before {
          content: "";
          display: block;
          margin-left: calc(50% - 0.5px);
          width: 1px;
          background-color: #283c5f;
          height: calc(100% - 15px);
        }
        &::after {
          content: "";
          display: block;
          width: 30px;
          height: 30px;
          background-image: url("/assets/grey/grey_star.svg");
          background-position: center top;
          background-size: contain;
          background-repeat: no-repeat;
          animation: star_rotate 6s linear 0s infinite;
        }
        &:nth-of-type(1) {
          left: 10%;
          height: 30%;
          animation: star-down 0.6s ease 0.8s forwards;
        }
        &:nth-of-type(2) {
          left: 20%;
          height: 25%;
          animation: star-down 0.6s ease 1s forwards;
        }
        &:nth-of-type(3) {
          right: 20%;
          height: 45%;
          animation: star-down 0.6s ease 0.9s forwards;
          &::after {
            background-image: url("/assets/grey/grey_moon.svg");
          }
        }
        &:nth-of-type(4) {
          right: 10%;
          height: 30%;
          animation: star-down 0.6s ease 1.1s forwards;
        }
      }
    }
    .page_content {
      position: absolute;
      top: 60px;
      left: 40px;
      width: calc(100% - 80px);
      height: calc(100% - 120px);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      z-index: 31;
      overflow: hidden;
      overflow-x: hidden;

      .section_title {
        width: 550px;
        padding: 5px 0;
        font-size: 16px;
        margin-top: 140px;
        transition: 0.3s;
      }
      .page_title {
        width: 450px;
        height: 65px;
        margin-top: 50px;
        font-size: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color: white;
        border: solid 3px #283c5f;
        transform: translateX(-5%);

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 450px;
          height: 65px;
          box-sizing: border-box;
          background-color: #283c5f;
          opacity: 0.5;
          transform: translate(8px, -8px);
          z-index: 31;
        }
        &::after {
          text-align: center;
          content: attr(data-content);
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          z-index: 32;
        }
      }
      .page_project {
        width: 450px;
        height: 15px;
        margin-top: 5px;
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          top: calc(50% - 0.5px);
          background-color: #283c5f;
        }
        .project_text {
          padding: 0 10px;
          background-color: #fff;
          font-size: 20px;
          font-weight: 700;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

@media screen and (max-width: 760px) {
  .PageDecoration {
    width: 100%;
    height: 100vh;
    contain: paint;
    position: relative;

    .btn {
      z-index: 999;
      position: absolute;
      right: -18px;
      top: -18px;
      transform: translateX(100%);
      &:hover {
        box-shadow: 0 0 50px rgb(0 0 0 / 50%);
      }
      animation: slide-left 0.6s cubic-bezier(0.06, 0.51, 0.01, 1.03) 0.6s
        forwards;
    }
    .decoration {
      &::before {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 40px;
        background-color: $theme-red;
        animation: slide-bottom 0.6s cubic-bezier(0.99, 0.04, 0.01, 0.99) 0s
          forwards;
        transform: translateY(-100%);
        transition: 0.3s;
      }
      &::after {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        background-color: $theme-green;
        animation: slide-top 0.6s cubic-bezier(0.99, 0.04, 0.01, 0.99) 0s
          forwards;
        transform: translateY(100%);
        transition: 0.3s;
      }
    }
    .pageBorder {
      top: 10px;
      left: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      border: dashed 2.5px #283c5f;
      border-radius: 30px;
      position: absolute;
      box-sizing: border-box;
      opacity: 0;
      animation: page__show-frame 0.8s cubic-bezier(0.99, 0.04, 0.01, 0.99) 0.2s
        forwards;
      transition: 0.3s;
    }
    .moon_and_star {
      div {
        position: absolute;
        top: 0;
        width: 15px;
        transform: translateY(-110%);
        perspective: 1000px;
        transform-style: preserve-3d;
        &::before {
          content: "";
          display: block;
          margin-left: calc(50% - 0.5px);
          width: 1px;
          background-color: #283c5f;
          height: calc(100% - 15px);
        }
        &::after {
          content: "";
          display: block;
          width: 15px;
          height: 15px;
          background-image: url("/assets/grey/grey_star.svg");
          background-position: center top;
          background-size: contain;
          background-repeat: no-repeat;
          animation: star_rotate 6s linear 0s infinite;
        }
        &:nth-of-type(1) {
          left: 6%;
          height: 20%;
          animation: star-down 0.6s ease 0.8s forwards;
        }
        &:nth-of-type(2) {
          left: 12%;
          height: 12%;
          animation: star-down 0.6s ease 1s forwards;
        }
        &:nth-of-type(3) {
          right: 12%;
          height: 30%;
          animation: star-down 0.6s ease 0.9s forwards;
          &::after {
            background-image: url("/assets/grey/grey_moon.svg");
          }
        }
        &:nth-of-type(4) {
          right: 6%;
          height: 20%;
          animation: star-down 0.6s ease 1.1s forwards;
        }
      }
    }
    .page_content {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 40px;
      left: 20px;
      width: calc(100% - 40px);
      height: calc(100% - 80px);
      :deep(.el-scrollbar__wrap) {
        width: 100% !important;
      }
      .section_title {
        width: 85%;
        padding: 5px 0;
        font-size: 12px;
        margin-top: 50px;
        transition: 0.3s;
      }
      .page_title {
        width: 70%;
        height: 40px;
        margin-top: 80px;
        margin-top: 50px;
        font-size: 21px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        position: relative;
        color: white;
        border: solid 3px #283c5f;
        transition: 0.3s;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: calc(100% + 6px);
          height: 40px;
          box-sizing: border-box;
          background-color: #283c5f;
          opacity: 0.5;
          transform: translate(4px, -9px);
          z-index: 31;
        }
        &::after {
          text-align: center;
          content: attr(data-content);
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          z-index: 32;
        }
      }
    }
  }
}
</style>
