import {Internships} from '../actionTypes'

const initialState = {
  posts: [],
  internships:[],
  categories:[],
  featuredJobs:[],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        posts: action.payload,
      };
    case Internships.GET_INTERNSHIP:
      return {
        ...state,
        internships: action.payload,
      };
    case Internships.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case Internships.GET_FEATURED_JOBS:
      return {
        ...state,
        featuredJobs: action.payload,
      };
    default:
      return state;
  }
}
