<template>
  <v-card class="mx-auto">
    <v-list-item>
      <div class="scraping">
        <h5>ID：{{ items.id }}</h5>
        <h5>商品画像URL：{{ items.imageUrl }}</h5>
        <h5>ブランド名：{{ items.brandName }}</h5>
        <h5>アイテム名：{{ items.itemName }}</h5>
        <h5>価格：￥{{ items.price }} (税込)</h5>
        <h5>素材：{{ items.material }}</h5>
        <h5>ブランドスタイルID：{{ items.brandStyleId }}</h5>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get("http://localhost:5000");
    return { items };
  },
};
</script>