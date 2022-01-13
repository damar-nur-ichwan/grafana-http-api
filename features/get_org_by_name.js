require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (orgName=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/orgs/name/${orgName}`
    const url = host + path
    return axios.get(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}