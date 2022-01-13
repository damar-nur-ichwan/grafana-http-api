require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (path_of_url=""){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/short-urls`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    let data = {path:path_of_url}
    return axios.post(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}