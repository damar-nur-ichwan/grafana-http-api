require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (data={name:"",email:"",login:"",password:"",OrgId:0}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/admin/users`
    const url = host + path
    return axios.post(url, data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}