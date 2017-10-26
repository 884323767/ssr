export default function(context) {
  console.log(context);
  console.log('%%%%%%%%%%%%%%%%%');
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
// import axios from 'axios'

// export default function ({ route }) {
//   return axios.post('http://my-stats-api.com', {
//     url: route.fullPath
//   })
// }
