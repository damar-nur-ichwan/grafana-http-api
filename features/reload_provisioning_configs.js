require('dotenv').config()
const { default: axios } = require("axios");
const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
module.exports = {
    dashboards: function(){
        const path = `/api/admin/provisioning/dashboards/reload`
        const url = host + path
        return axios.post(url)
        .then(res=>{return res.data})
        .catch(res=>{return res.response.data})
    },
    datasources: function(){
        const path = `/api/admin/provisioning/datasources/reload`
        const url = host + path
        return axios.post(url)
        .then(res=>{return res.data})
        .catch(res=>{return res.response.data})
    },
    plugins: function(){
        const path = `/api/admin/provisioning/plugins/reload`
        const url = host + path
        return axios.post(url)
        .then(res=>{return res.data})
        .catch(res=>{return res.response.data})
    },
    notifications: function(){
        const path = `/api/admin/provisioning/notifications/reload`
        const url = host + path
        return axios.post(url)
        .then(res=>{return res.data})
        .catch(res=>{return res.response.data})
    },
    access_control: function(){
        const path = `/api/admin/provisioning/access-control/reload`
        const url = host + path
        return axios.post(url)
        .then(res=>{return res.data})
        .catch(res=>{return res.response.data})
    },
    all: async function(){
        const path = [
            `/api/admin/provisioning/dashboards/reload`,
            `/api/admin/provisioning/datasources/reload`,
            `/api/admin/provisioning/plugins/reload`,
            `/api/admin/provisioning/notifications/reload`,
            `/api/admin/provisioning/access-control/reload`,
        ]
        let data = []
        for(let i = 0; i<path.length;i++){
            const url = host + path[i]
            try {
                const res = await axios.post(url);
                data.push(res.data);
            } catch (res_1) {
                data.push(res_1.response.data);
            }
        }
        return data
    }
}