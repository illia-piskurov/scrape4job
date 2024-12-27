const axios = require('axios');

async function scrapeSite(category: string) {
	const url = `https://jobs.dou.ua/vacancies/?category=${category}`;
	const { data } = await axios.get(url);
	return data
}

const keyword = ".NET";

scrapeSite(keyword).then(result => {
	console.log(result)
}).catch(err => console.log(err));