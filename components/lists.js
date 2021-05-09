import { useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";

const getPost = () => {
  return useSelector(
    (state) => ({
      posts: state.posts.posts,
    }),
    shallowEqual
  );
};

const Lists = () => {
  const { posts } = getPost();
  return (
    <>
      {posts &&
        posts.map((post) => (
          <List id={post.id} size="24px" color="red">
            {post.title}
          </List>
        ))}
    </>
  );
};

export default Lists;

const List = styled.div`
  font-weight: 700;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
