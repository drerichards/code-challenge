import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = '/api'

const responseBody = res => res.body;

const requests = {
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
}

const Zomato = {
  search: searchURL =>
    requests.post('/search/', {"searchURL": searchURL}),
  reviews: id =>
    requests.post('/reviews/', id),
}



export default {
  Zomato
}
