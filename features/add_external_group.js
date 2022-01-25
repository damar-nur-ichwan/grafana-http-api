require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (teamId=0,data = {cn:"",ou:"",dc1:"",dc2:""}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/teams/${teamId}/groups`
    const url = host + path

    data = {
        "groupId" : `cn=${data.cn},ou=${data.ou},dc=${data.dc1},dc=${data.dc2}`
    }

    return axios.post(url, data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}