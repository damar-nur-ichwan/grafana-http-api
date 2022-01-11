require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (from=0,to=0,queries=[
      {
        refId: "A",
        intervalMs: 86400000,
        maxDataPoints: 1092,
        datasourceId: 0,
        rawSql: "",
        format: "time_series"
      }
    ]){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/tsdb/query`
    const url = host + path
 
    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }

    const data = JSON.stringify({from, to, queries})

    return axios.post(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}