require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (teamId=0,userId=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/teams/${teamId}/members`
    const url = host + path
    const data = {userId}
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    return axios.post(url, data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}