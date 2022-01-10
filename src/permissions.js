require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (user_id=0,update_permissions={}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/admin/users/${user_id}/permissions`
    const url = host + path

    const data = update_permissions

    return axios.put(url,data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}