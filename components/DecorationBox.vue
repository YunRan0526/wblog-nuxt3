<template>
  <div class="DecorationBox">
    <div class="inner">
      <YBIMG class="img" :src="props.src" v-lazybox />
      <ElPopover
        placement="top"
        :width="180"
        trigger="hover"
        :content="props.title"
      >
        <template #reference>
          <div class="title">{{ props.title }}</div>
        </template>
      </ElPopover>
      <p class="description">{{ props.description }}</p>
      <div class="date">{{ $dealtime(props.date) }}</div>
    </div>
  </div>
</template>
<script setup>
import { ElPopover } from "element-plus";
import { $dealtime } from "/utils/dealtime.js";

const props = defineProps({
  title: {
    type: String,
    default: () => {
      return "请输入标题";
    },
  },
  description: {
    type: String,
    default: () => {
      return "请输入描述";
    },
  },
  date: {
    type: String,
    default: () => {
      return "yyyy-mm-dd";
    },
  },
  src: {
    type: String,
  },
});
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;

@media screen and (min-width: 761px) {
  .DecorationBox {
    width: 300px;
    margin: 40px;
    position: relative;
    border: dashed 1px #283c5f;
    padding: 8px;
    box-sizing: border-box;
    align-self: flex-start;
    transition: 0.3s;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      top: -20px;
      left: -20px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("/assets/grey/grey_star.svg");
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: -20px;
      right: -20px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("/assets/grey/grey_moon.svg");
      transform: rotateY(180deg);
    }
    .inner {
      background-color: $theme-white;
      background-image: url("/assets/grey/grey_bg.svg");
      background-size: 130px;
      padding-top: 10px;
      box-sizing: border-box;
      transition: all 0.4s ease 0s;
      cursor: pointer;
      &:hover {
        background-color: $theme-blue;
      }
      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 20px);
        height: auto;
        aspect-ratio: 3/2;
        margin: 0 10px;
        overflow: hidden;
        .el-image__inner {
          height: auto !important;
        }
      }
      .title {
        text-align: start;
        font-size: 20px;
        color: #283c5f;
        padding: 10px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .description {
        text-align: start;
        font-size: 14px;
        font-weight: bold;
        color: #283c5f;
        width: 100%;
        height: 100px;
        padding: 0 20px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .date {
        width: 100%;
        display: block;
        font-size: 14px;
        font-weight: bold;
        text-align: right;
        padding: 5px 30px;
        box-sizing: border-box;
        color: #283c5f;
        &::before {
          content: "";
          display: inline-block;
          width: 18px;
          height: 18px;
          background-image: url("/assets/grey/grey_dog.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          margin-right: 10px;
        }
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .DecorationBox {
    width: 85%;
    margin: 30px 0;
    position: relative;
    border: dashed 1px #283c5f;
    padding: 8px;
    box-sizing: border-box;
    align-self: flex-start;
    transition: 0.3s;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      top: -20px;
      left: -20px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("/assets/grey/grey_star.svg");
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: -20px;
      right: -20px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("/assets/grey/grey_moon.svg");
      transform: rotateY(180deg);
    }
    .inner {
      background-color: $theme-white;
      background-image: url("/assets/grey/grey_bg.svg");
      background-size: 130px;
      padding-top: 10px;
      box-sizing: border-box;
      transition: all 0.4s ease 0s;
      cursor: pointer;
      &:hover {
        background-color: $theme-blue;
      }
      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 20px);
        height: auto;
        aspect-ratio: 3/2;
        margin: 0 10px;
        overflow: hidden;
        .el-image__inner {
          height: auto !important;
        }
      }
      .title {
        text-align: start;
        font-size: 20px;
        color: #283c5f;
        padding: 10px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .description {
        text-align: start;
        font-size: 14px;
        font-weight: bold;
        color: #283c5f;
        width: 100%;
        height: 100px;
        padding: 0 20px;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .date {
        width: 100%;
        display: block;
        font-size: 14px;
        font-weight: bold;
        text-align: right;
        padding: 5px 30px;
        box-sizing: border-box;
        color: #283c5f;
        &::before {
          content: "";
          display: inline-block;
          width: 18px;
          height: 18px;
          background-image: url("/assets/grey/grey_dog.svg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
