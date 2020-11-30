import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID tJCyWMP4ptGBHv506ryO0kzCAqjL5re49-U5vbfLmrE'
      }
})