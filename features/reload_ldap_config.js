require('dotenv').config()
const { default: axios } = require("axios");
const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
module.exports = function(){
    const path = `/api/admin/ldap/reload`
    const url = host + path
    return axios.post(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}