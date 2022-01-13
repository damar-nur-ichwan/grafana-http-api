require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (
    dashboard= JSON,
    optional={
        name:'',
        expires: 0,
        external:false,
        key:false,
        deleteKey: false       
    }){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/snapshots`
    const url = host + path
 
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }

    const data = {dashboard}
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