
function request(url) {
  return fetch(`${process.env.REACT_APP_WEATHER_API}${url}&appId=${process.env.REACT_APP_WEATHER_TOKEN}`)
    .then(res => res.json());
}

export function get(url) {
  return request(url);
}
