require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (org_id=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/user/using/${org_id}`
    const url = host + path
    return axios.post(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}