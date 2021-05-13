import { useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";


const getCategories = ()=> (useSelector((state)=>({categories:state.posts.categories,}),shallowEqual));
const getFeaturedJobs =()=> (useSelector((state)=>({featuredJobs:state.posts.featuredJobs,}),shallowEqual));

const Lists = () => {
  const {categories} = getCategories();
  const {featuredJobs} = getFeaturedJobs();
  return (
    <>
      {
        console.log(categories,featuredJobs)
      }
    </>
  );
  
};

export default Lists;

const List = styled.div`
  font-weight: 700;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
