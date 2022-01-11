require('dotenv').config()
const { default: axios } = require("axios");
const now = Date.now();

module.exports = function (tags= [''],optional={limit:100,from:0,to:now}){
    let parameters = ""
    for(let i = 0;i<tags.length;i++){
        parameters += `tags=${tags[i]}`
        i != tags.length-1? parameters += '&':'';
    }
    if (optional !== {}){
        parameters+='&'
        const keys = Object.keys(optional)
        const value = Object.values(optional)
        for(let i = 0; i < keys.length; i++){
            parameters += `${keys[i]}=${value[i]}`
            i != keys.length-1? parameters += '&':'';
        }
    }
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/annotations?` + parameters
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