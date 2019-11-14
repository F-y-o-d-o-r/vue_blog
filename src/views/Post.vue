<template>
  <div id="blog-post">
    <div v-if="post.data">
      <h1>{{ post.data.title }}</h1>
      <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <div v-html="post.data.body"></div>

      <router-link
        v-if="post.meta.previous_post"
        :to="/blog/ + post.meta.previous_post.slug"
        class="button"
      >
        {{ post.meta.previous_post.title }}
      </router-link>
      <router-link
        v-if="post.meta.next_post"
        :to="/blog/ + post.meta.next_post.slug"
        class="button"
      >
        {{ post.meta.next_post.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
  // const butter = require('buttercms')('be87ba792e04772a2ed4347ee55695e57933c1e0');
  export default {
    name: 'post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data;
            console.log(
              '%c Fyodor ',
              'color: white; background-color: #95B46A',
              'post => ', this.post
            );
          }).catch(res => {
          console.log(res)
        })
      }
    },
    created() {
      this.getPost()
    }
  }
</script>

<style scoped>

</style>
