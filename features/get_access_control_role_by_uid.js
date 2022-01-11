require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(uid=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/access-control/roles/${uid}`
    const url = host + path
    return axios.get(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}