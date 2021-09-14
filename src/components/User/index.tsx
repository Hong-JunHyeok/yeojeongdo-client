import { useObserver } from "mobx-react";
import useStore from "hooks/useStore";
import { useEffect } from "react";

const User = () => {
  const { user } = useStore();
  useEffect(() => {
    user.loadMyInfo();
    user.loadUserPosts();
  }, [user]);

  return useObserver(() => (
    <>
      <div>{user.loadMyInfoLoading ? "Loading" : user?.me.name}</div>
      <ul>
        {user.loadUserPostsLoading
          ? "Loading"
          : user.posts.map((post: any) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  ));
};

export default User;
