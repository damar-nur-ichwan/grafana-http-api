require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (userId=0,roleUID=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/access-control/users/${userId}/roles/${roleUID}`
    const url = host + path
    return axios.delete(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}