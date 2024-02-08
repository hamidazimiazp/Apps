import { rapidAPIKey } from "../constants";
import axios from "axios";

const base_url = "https://exercisedb.p.rapidapi.com/exercises";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": "ad1e976bc9msh78daba39cc1cb6ep15f841jsnc3b1c8e076f1",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(base_url + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
