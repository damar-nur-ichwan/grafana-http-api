require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (token=""){
    process.env.GRAFANA_TOKEN = token
    const host = `http://api_key:${process.env.GRAFANA_TOKEN}@${process.env.GRAFANA_HOST}`
    const path = `/api/org`
    const url = host + path
    return axios.get(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}