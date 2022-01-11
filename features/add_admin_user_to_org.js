require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (org_id=0,add_admin_username="",add_role=""){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/orgs/${org_id}/users`
    const url = host + path

    const data = {
        "loginOrEmail" : add_admin_username, 
        "role": add_role
    }

    return axios.post(url, data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}