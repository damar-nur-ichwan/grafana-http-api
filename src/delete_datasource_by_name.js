require('dotenv').config()
const { default: axios } = require("axios");


module.exports = function (datasourceName=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/datasources/name/${datasourceName}`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    return axios.delete(url,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}