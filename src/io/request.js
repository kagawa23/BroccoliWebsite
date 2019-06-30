import axios from 'axios';

const API = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

const sendInvitation = payload =>
  axios
    .post(API, payload)
    .then(resp => {
      if (resp.status === 200) {
        return Promise.resolve(resp.data);
      }
      throw new Error(resp.data);
    })
    .catch(err => {
      throw err;
    });

export default sendInvitation;
