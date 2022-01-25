require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(uid="",data={name:"",type:"",isDefault:false,sendReminder:false,frequency:"",settings:{}}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/alert-notifications/uid/${uid}`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    
    return axios.put(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}