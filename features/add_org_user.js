require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (orgId=0,loginOrEmail='',role=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/orgs/${orgId}/users`
    const url = host + path
    const data = {role,loginOrEmail}
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    return axios.post(url, data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}