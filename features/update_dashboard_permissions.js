require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(dashboardId=0,items=[{role:'',permission:0},{role:'',permission:0},{teamId:0,permission:0},{userId:0,permission:0}]){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/dashboards/id/${dashboardId}/permissions`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    const data = JSON.stringify(items)
    return axios.post(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}