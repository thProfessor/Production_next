import AdminService from '../../AdminServices/AdminService';
import {Internships} from '../actionTypes'
import axios from 'axios';
import { API_ENDPOINT } from '../../AdminServices/baseURL';

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

export const getInternships = () => {
  return async (dispatch) => {
    try{
      const res = await AdminService.getInternshipsList();
      dispatch({
        type: Internships.GET_INTERNSHIP,
        payload: res.data.results,
      });
    }
    catch(err){
      console.log(err);
    }
  }
}
export const getCategories = () => {
  return async (dispatch) => {
    try{
      console.log("getcategories is called");
      const res = await axios.get(`${API_ENDPOINT}/internship/v1/internships/stats/`);
      dispatch({
        type: Internships.GET_CATEGORIES,
        payload: res.data.category,
      });
    }
    catch(err){
      console.log(err);
    }
  }
}
export const getFeaturedJobs = () => {
  return async (dispatch) => {
    try{
      console.log("featured jobs is called");
      const res = await axios.get(`${API_ENDPOINT}/internship/v1/internships/`);

      dispatch({
        type: Internships.GET_FEATURED_JOBS,
        payload: res.data.results,
      });
    }
    catch(err){
      console.log(err);
    }
  }
}