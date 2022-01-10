require('dotenv').config()
const { default: axios } = require("axios");
const now = Date.now();

module.exports = function (id=0,tags=[''],text=''){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/annotations/${id}`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    let data = {tags,text}
    return axios.patch(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}