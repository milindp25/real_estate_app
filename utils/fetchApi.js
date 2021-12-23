import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '5cbb65c81amsh306265248dd20f3p1db7abjsn978f0f55ae46'
    },
  });
    
  return data;
}