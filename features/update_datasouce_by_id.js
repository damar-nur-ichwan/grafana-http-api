require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(datasourceId=0,Name='',Type='', datasource_url='',Access='', optional={
    uid: 'I2A2141nk',
    password: '',
    user: '',
    database: '',
    basicAuth: false,
    basicAuthUser: '',
    basicAuthPassword: '',
    withCredentials: false,
    isDefault: false,
    jsonData: {httpMethod: 'POST', authType: 'keys', defaultRegion: 'us-west-1' },
    secureJsonData:{
        accessKey:'',
        secretKey:'',
        basicAuthPassword: "",
    }
  }){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/datasources/${datasourceId}`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    let data = {Name,Type,Url:datasource_url,Access}
    if (optional !== {}){
        const keys = Object.keys(optional)
        const value = Object.values(optional)
        for(let i = 0; i < keys.length; i++){
            data[keys[i]] = value[i]
        }
    }
    return axios.put(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}