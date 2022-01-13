require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(optional={searchString:'',kind:0,sortDirection:'',typeFilter:'',excludeUid:'',folderFilter:'',perPage:0,page:''}){
    let parameters = `?`
    if (optional !== {}){
        const keys = Object.keys(optional)
        const value = Object.values(optional)
        for(let i; i <value.length; i++){
            value.includes(' ')?value.replace(/ /g,'%20'):{};
        }
        for(let i = 0; i < keys.length; i++){
            parameters += `${keys[i]}=${value[i]}`
            i != keys.length-1? parameters += '&':'';
        }
    }
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/library-elements${parameters}`
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