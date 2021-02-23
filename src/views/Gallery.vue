<template>
  <div id="main-content">
    <ul id="instafeed">
      <li v-for="(post, index) in posts" :key="index" >
        <a target="_blank" :href="post.permalink"><img :src="post.media_type === 'IMAGE' ? post.media_url : post.thumbnail_url" :alt="posts.caption" height="200" width="200"/></a>
      </li>
    </ul>
  </div>
</template>

<script>
var POSTS_LIMIT = 5; // Limits the number of posts requested. 1-25 (25 is the max, else we will have to ask for the next 25 in a new API call).
export default {
  name: 'gallery',
  components: {

  },
  data() {
    return {
      posts: [], // Variable to keep posts from the API.
    }
  },
  mounted() {
		window.scrollTo(0, 0);

    fetch('https://ig.instant-tokens.com/users/1fa1e484-8a56-44cf-aa6f-042211802e80/instagram/17841400905223262/token?userSecret=1lzozvypyovehssq94skrt')
    .then(resp => resp.json())
    .then(data => {
      fetch('https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&limit=' + POSTS_LIMIT + '&access_token=' + data.Token)
      .then(feed => feed.json())
      .then(media => this.posts = media.data) //! Save to localstorage and only refetch every 5-10 minutes.
    })
  },
  
}
</script>

<style>
#instafeed {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>