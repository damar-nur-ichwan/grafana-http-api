require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (update_settings={},removals_settings={}){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/admin/settings`
    const url = host + path

    const config = {
        headers : {
            Authorization : `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    }
    removals_settings === undefined? removals_settings = `"removals": ${removals_settings},`: removals_settings = '';
    const data = {
        "updates":update_settings||{},
        "removal":removals_settings||{}
    }

    return axios.put(url,data,config)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}