require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(orgId=0,userId=0,role=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/orgs/${orgId}/users/${userId}`
    const url = host + path
    const data = {role}
    return axios.patch(url,data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}