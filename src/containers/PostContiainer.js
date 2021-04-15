import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../modules/posts";
import Post from "../components/Post";
import { withRouter } from "react-router";

function PostContainer({ postId, history }) {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
    //   return () => dispatch(clearPost());
  }, [dispatch, postId, data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return (
    <>
      <button onClick={() => history.push("/")}>홈으로 돌아가기</button>
      <Post post={data} />
    </>
  );
}

export default withRouter(PostContainer);
