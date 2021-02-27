<template>
  <ul id="instafeed">
    <li v-for="(post, index) in posts" :key="index" >
      <a target="_blank" :href="post.permalink"><img class="insta-post" :src="post.media_type === 'IMAGE' ? post.media_url : post.thumbnail_url" :alt="posts.caption"/></a>
    </li>
  </ul>
</template>

<script>

var POSTS_LIMIT = 4; // Limits the number of posts requested. 1-25 (25 is the max, else we will have to ask for the next 25 in a new API call).
export default {
  name: 'gallery',
  components: {

  },
  data() {
    return {
      posts: [], // Variable to keep posts from the API.
    }
  },
  computed: {
    lastFetch () {
      return this.$store.getters.lastFetch;
    }
  },
  methods: {
    updateLastFetch() {
      const time = new Date().getTime()
      this.$store.dispatch('updateLastFetch', time);
    },
    getPosts() {
      var lastTime = this.lastFetch
      var now = new Date().getTime();
      try {
        if (now - lastTime < 5000*60) { // If less than 5 minutes since last fetch, get from localStorage, else fetch.
          this.posts = JSON.parse(localStorage.getItem("instaPosts"));
        } else {
          fetch('https://ig.instant-tokens.com/users/1fa1e484-8a56-44cf-aa6f-042211802e80/instagram/17841446092578844/token?userSecret=zv4kiv8bwxe6dh7p8dbx4j')
          .then(resp => resp.json())
          .then(data => {
            fetch('https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&limit=' + POSTS_LIMIT + '&access_token=' + data.Token)
            .then(feed => feed.json())
            .then(media => {//! Save to localstorage and only refetch every 5-10 minutes.
              this.posts = media.data,
              localStorage.setItem("instaPosts", JSON.stringify(media.data));
            })
          })
        this.updateLastFetch();
        } 
      } catch (error) {
        console.log("Ooops! Something went wrong!");
        console.log(error);
      }
    }
  },
  
  mounted() {
		window.scrollTo(0, 0);

    this.getPosts();
    
  },
  
}
</script>

<style scoped>
.insta-post {
  height: 15rem;
  width: 15rem;
}

#instafeed {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
  #app {
    grid-template-columns: auto !important;
  }
  .insta-post {
    height: 20rem;
    width: 20rem;
  }

  #instafeed {
    display: grid;
    grid-template-areas:"a b"
                        "c d";
    gap: .8em;
    padding: 0;
    justify-content: center;
  }
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>