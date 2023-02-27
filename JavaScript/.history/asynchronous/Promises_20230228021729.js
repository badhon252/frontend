
const url = 'https://instagram47.p.rapidapi.com/hashtag_search?hashtag=programming';


fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));