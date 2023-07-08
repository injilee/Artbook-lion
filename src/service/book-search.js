import axios from 'axios';

class BookSearch {
   async search() {
      const api_url = '/v1/search/book.json?query=여름이 온다';

      let config = {
         method: 'get',
         url: api_url,
         params: {
            display: 20,
         },
         headers: {
            'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
         },
      };

      try {
         const response = await axios.request(config);
         return response.data;
      } catch (error) {
         console.log(error);
         return null;
      }

      // const result = await axios
      //    .request(config)
      //    .then(response => console.log(JSON.stringify(response.data)))
      //    .catch(error => console.log(error));
      // return result;
   }
}

export default BookSearch;
