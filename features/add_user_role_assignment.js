require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (userId=0,global=false,roleUid=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/access-control/users/${userId}/roles`
    const url = host + path
    const data = { global, roleUid}
    return axios.post(url, data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}