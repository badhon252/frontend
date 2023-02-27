import fetch from 'node-fetch';

const url = 'https://instagram47.p.rapidapi.com/hashtag_search?hashtag=programming';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '20b7bfac6dmsh6608b9766b64a3fp10fab3jsnf7e0787f30c5',
    'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));