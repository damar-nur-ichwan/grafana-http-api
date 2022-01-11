require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (name="",role="",optional={secondsToLive:0}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/auth/keys`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    let data = { name, role}
    if (optional !== {}){
        const keys = Object.keys(optional)
        const value = Object.values(optional)
        for(let i = 0; i < keys.length; i++){
            data[keys[i]] = value[i]
        }
    }
    return axios.post(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}