require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(uid=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/library-elements/${uid}`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    return axios.get(url,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}