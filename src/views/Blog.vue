<template>
  <div id="blog-home">
    <h1>{{ page_title }}</h1>
    <!-- Создаём `v-for` и добавляем `key` для Vue. -->
    <!-- Для этого используем комбинацию slug и index -->
    <div
      v-for="(post,index) in posts"
      :key="post.slug + '_' + index"
    >
      <router-link :to="'/blog/' + post.slug">
        <article class="media">
          <figure>
            <!-- Привязываем результаты с помощью `:` -->
            <!-- Используем `v-if`/`else` для отображения картинки записи блога (`featured_image`) -->
            <img
              v-if="post.featured_image"
              :src="post.featured_image"
              alt=""
            >
            <img
              v-else
              src="http://via.placeholder.com/250x250"
              alt=""
            >
          </figure>
          <h2>{{ post.title }}</h2>
          <p>{{ post.summary }}</p>
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
  // const butter = require('buttercms')('be87ba792e04772a2ed4347ee55695e57933c1e0');
  export default {
    name: 'blog',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data;
        })
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>

<style scoped>

</style>
