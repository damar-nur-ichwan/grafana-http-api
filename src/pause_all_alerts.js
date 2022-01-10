require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (paused=true){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/admin/pause-all-alerts`
    const url = host + path

    const data = {paused}

    return axios.post(url,data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}