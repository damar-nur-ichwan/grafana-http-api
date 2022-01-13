require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(uid="",
    items= [
      {
        role: "",
        permission: 1
      },
      {
        role: "",
        permission: 2
      },
      {
        teamId: 1,
        permission: 1
      },
      {
        userId: 0,
        permission: 0
      }
    ]
  ){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/folders/${uid}/permissions`
    const url = host + path
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    const data = {items}
    
    return axios.put(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}