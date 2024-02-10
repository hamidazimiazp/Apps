import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err.message);
  }
};

export const fetchExercises = async (params) => {
  let data = await apiCall(baseUrl + `/exercises`, params);
  return data;
};

export const fetchExercisesByBodypart = async (bodyPart, limit) => {
  let data = await apiCall(
    baseUrl + `/exercises/bodyPart/${bodyPart}`,
    (params = { limit })
  );
  return data;
};
