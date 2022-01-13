require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(name=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/org`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    const data = {name}
    return axios.put(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}