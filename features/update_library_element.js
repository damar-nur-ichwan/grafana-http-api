require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(uid='',optional={folderId: 0, name: '', kind:'',version:0,uid:'', model:{description:'',type:''}}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/library-elements/${uid}`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    let data = {}
    if (optional !== {}){
        const keys = Object.keys(optional)
        const value = Object.values(optional)
        for(let i = 0; i < keys.length; i++){
            data[keys[i]] = value[i]
        }
    }
    return axios.patch(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}