<template>
  <PageDecoration @close="close" :title1="comTitle" title2="Article Deatils">
    <div class="content">
      <div class="viewer-container">
        <MdEditor v-model="content" :previewOnly="true" />
      </div>
    </div>
  </PageDecoration>
</template>

<script setup>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const router = useRouter();
const route = useRoute();
const content = ref("");
const ArticleId = ref(route.query.id);
const ArticleTitle = ref(route.query.title);
const comTitle = computed(() => {
  let str = ArticleTitle.value;
  if (str.length > 7) {
    str = str.slice(0, 9);
    str += "...";
  }
  return str;
});
const close = () => {
  router.push({ path: "/Articles" });
};
const initArticle = async () => {
  const { data, refresh } = await useFetch(
    `https://www.yebaoc.com/api/article/getArticle?id=${ArticleId.value}`
  );
  if (data)
    if (data.value)
      if (data.value.results)
        if (data.value.results[0])
          content.value = data.value.results[0].content;
};
onMounted(() => {
  initArticle();
});
</script>

<style lang="scss" scoped>
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
.content {
  opacity: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadein 1s ease 0.7s forwards;
}
.viewer-container {
  ::v-deep(a) {
    pointer-events: none !important;
    cursor: text !important;
  }
}
@media screen and (min-width: 761px) {
  .viewer-container {
    width: calc(100% - 300px);
    box-sizing: border-box;
    min-height: 500px;
    padding: 0 0 30px 0;
    background: #ffffff;
    margin-top: 60px;
    text-align: left;
  }
}
@media screen and (max-width: 760px) {
  .viewer-container {
    width: calc(100% - 40px);
    box-sizing: border-box;
    min-height: 500px;
    padding: 0 0 30px 0;
    background: #ffffff;
    margin-top: 30px;
    text-align: left;
  }
}
</style>
