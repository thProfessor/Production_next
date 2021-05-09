export const getPosts = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    dispatch({
      type: "GET",
      payload: posts,
    });
  };
};
