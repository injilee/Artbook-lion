import axios from 'axios';

class BookSearch {
   async search(query) {
      const default_url = `/v1/search/book.json`;
      const api_url = `/v1/search/book.json?query=${query}&display=20`;

      let config = {
         method: 'get',
         url: query ? api_url : default_url,
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
         },
      };

      try {
         const response = await axios.request(config);
         console.log(response);
         return response.data;
      } catch (error) {
         console.log(error);
         return null;
      }
   }
}

export default BookSearch;
