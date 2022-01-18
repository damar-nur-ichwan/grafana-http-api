require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (new_org_name="",role=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/orgs`
    const url = host + path
    const data = {
        name: new_org_name,
        role
    }
    return axios.post(url, data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}