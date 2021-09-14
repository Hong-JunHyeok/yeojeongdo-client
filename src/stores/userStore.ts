import { observable } from "mobx";

const user = observable({
  loadMyInfoLoading: false,
  loadMyInfoFailure: false,

  loadUserPostsLoading: false,
  loadUserPostsFailure: false,

  me: {
    name: "",
    age: 0,
  },
  posts: [],

  loadMyInfo() {
    this.loadMyInfoLoading = true;
    setTimeout(() => {
      this.me = {
        name: "Hong",
        age: 18,
      };
      this.loadMyInfoLoading = false;
    }, 1000);
  },

  async loadUserPosts() {
    this.loadUserPostsLoading = true;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    this.posts = await res.json();
    this.loadUserPostsLoading = false;
  },
});

export { user };
