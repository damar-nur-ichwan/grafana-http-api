require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (username="",password=""){
    process.env.GRAFANA_USERNAME = username
    process.env.GRAFANA_PASSWORD = password
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/org`
    const url = host + path
    return axios.get(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}