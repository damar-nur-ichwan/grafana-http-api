require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(data={
    version: 0,
    uid: "",
    name: "",
    description: "",
    group:"",
    displayName: "",
    global: false,
    permissions: [{ action: "", scope: ""}]
}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/access-control/roles`
    const url = host + path

    return axios.post(url,data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}