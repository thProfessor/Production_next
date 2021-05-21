/* eslint-disable import/no-anonymous-default-export */
import DataService from "./dataService";
import { API_ENDPOINT } from "./baseURL";

const client = new DataService({ baseURL: API_ENDPOINT });
export default {
  // SignUp: async(data) => {
  //   return DataService.post('/skilzen/v1/sign_up/', data);
  // },
  // userLogin: async(data) => {
  //   return await DataService.post('/skilzen/v1/login/', data);
  // },
  getPhoneOTP: async () => {
    return await client.get("/skilzen/v1/phone_otp/");
  },
  getEmailOTP: async () => {
    return await client.get("/skilzen/v1/email_otp/");
  },
  verifyPhoneOTP: async (data) => {
    return client.post("/skilzen/v1/phone_otp/verify", data);
  },
  verifyEmailOTP: async (data) => {
    return client.post("/skilzen/v1/email_otp/verify", data);
  },
  getUserProfile: async () => {
    return client.get("/skilzen/v1/profile/");
  },
  createUserProfile: async (data) => {
    return client.post("/skilzen/v1/profile/update_profile/", data);
  },
  updateUserProfile: async (data) => {
    return client.put("/skilzen/v1/profile/update_profile/", data);
  },
  getInternshipsList: async () => {
    return await client.get("/internship/v1/internships/");
  },
  getInternshipsCategories: async () => {
    return await client.get("/internship/v1/internships/stats/");
  },
  getInternshipsDetail: async (id) => {
    return await client.get(`/internship/v1/internships/${id}/`);
  },
  InternshipsApply: async (id) => {
    return await client.get(`/internship/v1/internships/${id}/apply/`);
  },
  InternshipsBookmark: async (id) => {
    return await client.get(`/internship/v1/internships/${id}/bookmark/`);
  },
  addRecruiters: async (data) => {
    return client.post("/internship/v1/company-recruiters/", data);
  },
  getcompanyRecruiters: async () => {
    return client.get("/internship/v1/company-recruiters");
  },
  getCompanyDashboard: async () => {
    return client.get("/internship/v1/company-recruiters/dashboard/");
  },
  postInternship: async (data) => {
    return client.post("/internship/v1/company-recruiter/postings/", data);
  },
  getCompanyInternship: async () => {
    return client.get("/internship/v1/company-recruiter/postings/");
  },
  getActiveCompanyInternship: async () => {
    return await client.get(
      "/internship/v1/company-recruiter/postings?currently_active=true"
    );
  },
  getInactiveCompanyInternship: async () => {
    return await client.get(
      "/internship/v1/company-recruiter/postings?currently_active=false"
    );
  },
  editInternship: async (data) => {
    return client.put("/internship/v1/company-recruiter/postings/", data);
  },
  getIndividualInternship: async (id) => {
    return client.get(`/internship/v1/company-recruiter/postings/${id}`);
  },
  createCompanyProfile: async (data) => {
    return client.post("/skilzen/v1/profile/company/", data);
  },
  getCompanyProfile: async () => {
    return client.get("/skilzen/v1/profile/company/");
  },
  updateCompanyProfile: async (data) => {
    return client.put("/skilzen/v1/profile/company/", data);
  },
  getUserEducation: async (id) => {
    return client.get(`/skilzen/v1/profile/education/${id}`);
  },
  createUserEducation: async (data) => {
    return client.post("/skilzen/v1/profile/education/", data);
  },
  updateUserEducation: async (data, id) => {
    return client.put(`/skilzen/v1/profile/education/${id}/`, data);
  },
  getUserExperience: async (id) => {
    return client.get(`/profile/work_experience/${id}`);
  },
  createUserExperience: async (data) => {
    return client.post("/skilzen/v1/profile/work_experience/", data);
  },
  updateUserExperience: async (data, id) => {
    return client.put(`/skilzen/v1/profile/work_experience/${id}/`, data);
  },
  getUserSkills: async (id) => {
    return client.get(`/skilzen/v1/profile/skill/${id}`);
  },
  createUserSkills: async (data, id) => {
    return client.post(`/skilzen/v1/profile/skill/${id}/`, data);
  },
  updateUserSkills: async (data, id) => {
    return client.put(`/skilzen/v1/profile/skill/${id}/`, data);
  },
  getCompanyLocation: async () => {
    return client.get(`/skilzen/v1/profile/company_location/`);
  },
  getCompanyLocationDetails: async (id) => {
    return client.get(`/skilzen/v1/profile/company_location/${id}`);
  },
  createCompanyLocationDetails: async (data) => {
    return client.post(`/skilzen/v1/profile/company_location/`, data);
  },
  updateCompanyLocationDetails: async (data, id) => {
    return client.put(`/skilzen/v1/profile/company_location/${id}/`, data);
  },
  getCompanyList: async () => {
    return client.get("/internship/v1/company-recruiters");
  },
  DeactivateInternship: async (id) => {
    return client.get(
      `/internship/v1/company-recruiter/postings/${id}/deactivate/`
    );
  },
  EditInternship: async (id, data) => {
    return client.put(`/internship/v1/company-recruiter/postings/${id}/`, data);
  },
  ApplicantsCompany: async (id) => {
    return client.get(
      `/internship/v1/company-recruiter/postings/${id}/applicants`
    );
  },
  getAppliedInternships: async () => {
    return client.get(`/internship/v1/internships/applied`);
  },
  getSavedInternships: async () => {
    return client.get(`/internship/v1/internships/bookmarked`);
  },
  signInUser: async (data) => {
    return client.post("/skilzen/v1/login/", data);
  },
};
