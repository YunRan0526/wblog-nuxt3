<template>
  <PageDecoration
    :title1="'我的文章'"
    :title2="'My Articles'"
    @close="close"
    @scroll="scroll"
  >
    <div class="content">
      <DecorationBox
        style="z-index: 30"
        v-for="v in articles"
        :key="v.id"
        :title="v.title"
        :description="v.description"
        :date="v.create_time"
        :src="`${v.poster}`"
        @click="getDeatil(v)"
      />
    </div>
  </PageDecoration>
</template>

<script setup>
const router = useRouter();
const articles = ref([]);
const close = () => {
  router.push({ path: "/" });
};
const scroll = () => {};
const getDeatil = (v) => {
  const { id, title } = v;
  router.push({ path: "/ArticleViewer", query: { id, title } });
};

const initList = async () => {
  const { data, refresh } = await useFetch(
    "https://www.yebaoc.com/api/article/getAll"
  );
  if (data)
    if (data.value)
      if (data.value.results) articles.value = data?.value?.results;
};
onMounted(() => {
  initList();
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
.content {
  opacity: 0;
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  flex-wrap: wrap;
  animation: fadein 1s ease 0.7s forwards;
  :deep(.md2vue-wrapper) {
    width: 100% !important;
    margin: 0 20px;
  }
}
</style>
