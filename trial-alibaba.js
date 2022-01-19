const { panels } = require('./dashboards/suprboard_kubernetes_home')
const suprboard_kubernetes_home = require('./dashboards/suprboard_kubernetes_home')
const grafana = require('./index')

// grafana.create_org('Perusahaan-1','Viewer')
// grafana.global_user('Member-2','','member-2','101010',2)
// grafana.get_org_users(2)
// grafana.add_team('Team-2','',2)
// grafana.add_team_member(1,3)
// grafana.create_datasource(
//     2,
//     'prometheus',
//     'prometheus',
//     'http://ack-prometheus-operator-prometheus:9090/',
//     'proxy',
//     {
//         isDefault: true
//     })
// grafana.update_datasouce_by_id(
//     3,
//     'prometheus',
//     'prometheus',
//     'http://ack-prometheus-operator-prometheus:9090/',
//     'proxy',{
//         uid:'C3FZCU57k'
//     })
// grafana.create_api_key('AdIns','Admin')
// grafana.create_or_update_dashboard(suprboard_kubernetes_home)
// 

// x = suprboard_kubernetes_home
// // console.log(x.panels[6].panels[0].datasource)
// for(let i =0;i<x.panels.length;i++){
//     if(x.panels[i].panels !== undefined){
//         for(let j =0;j<x.panels[i].panels.length;j++){
//             x.panels[i].panels[j].datasource = 'prometheus'
//             if(x.panels[i].panels[j].type === "timeseries"){
//                 x.panels[i].panels[j].type = "graph"
//             }
//         }
//     }
// }
// // console.log(x.panels[4].panels[0].type)
// const xx = require('dni-file-system')
// xx.CreateFile('./dashboards/x.json',JSON.stringify(x))
grafana.get_actual_user()
// .then(res=>console.log(res)).catch(res=>console.log(res))
grafana.delete_playlist()