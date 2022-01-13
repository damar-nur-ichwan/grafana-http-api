require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (role=0,loginOrEmail=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/org/users`
    const url = host + path
    const data = {role,loginOrEmail2}
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    return axios.post(url, data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}