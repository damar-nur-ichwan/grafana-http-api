require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (name="",email="",login="",password="",org_id=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/admin/users`
    const url = host + path
    const data = {
        "name": name,
        "email": email,
        "login": login,
        "password": password,
        "OrgId": org_id
    }
    return axios.post(url, data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}