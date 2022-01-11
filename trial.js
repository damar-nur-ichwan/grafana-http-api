require('dotenv').config({path: __dirname + '/.env'})
const blank = require('./dashboards/blank')
const index = require('./index')
const suprboard_kubernetes_info = require('./dashboards/suprboard_kubernetes_info')


// index.create_org(`trial_api`)
// index.add_admin_user_to_org(`2`,`damar`,`Admin`)
// index.switch_org_context(1)
// index.create_api_key('trial2','Admin',{secondsToLive:60})
// index.delete_api_key(4)
// index.create_or_update_dashboard(suprboard_kubernetes_info,{message:'add kubernetes info dashboard'})
// index.fetch_settings()
// index.update_settings(
//     {
//       "auth.saml": {
//         "enabled": "true"
//       }
//     }
// )
// index.grafana_stats()
// index.global_user('damar','damar.ni@ad-ins.com','damar','101010',1)
// index.password_for_user(1,'damarnur001')
// index.permissions(1,{"isGrafanaAdmin": true})
// index.delete_global_user(1)
// index.pause_all_alerts(true)
// index.auth_token_for_user(1)
// index.revoke_auth_token_for_user(1)
// index.logout_user(1)
// index.reload_provisioning_configs.access_control()
// index.reload_provisioning_configs.dashboards()
// index.reload_provisioning_configs.datasources()
// index.reload_provisioning_configs.notifications()
// index.reload_provisioning_configs.plugins()
// index.reload_provisioning_configs.all()
// index.reload_ldap_config()
// index.get_alerts()
// index.get_alert_by_id(0)
// index.pause_alert_by_id(0,true)
// index.get_all_notification_channels()
// index.get_all_notification_channels_lookup()
// index.get_notification_channel_by_id(0)
// index.get_notification_channel_by_uid(0)
// index.create_notification_channel('trial alert1','email',false,false,"",{
//     addresses: "damarnurichwan24@gmail.com"
// })
// index.update_notification_channel_by_uid("LqnWtM1nz",'trial alert updated by uid','email',false,false,"",{
//     addresses: "damarnurichwan24@gmail.com"
// })
// index.update_notification_channel_by_id(1,'trial alert updated by id','email',false,false,"",{
//     addresses: "damarnurichwan24@gmail.com"
// })
// index.delete_notification_channel_by_uid('tROJ5M17k')
// index.delete_notification_channel_by_id(2)
// index.test_notification_channel('email',{
//     addresses: 'damarnurichwan.official@gmail.com'
// })
// index.create_annotation(['tag2'],'example',{time:1341830799975,timeEnd:1641830799975})
// index.create_annotation_in_graphite("Event - Deploy",['tag3'],{data:'this is description'})
// index.find_annotations(['tag3'],{
//     limit:1
// })
// index.update_annotation(14,['tag3'],'trying to update',{
//     time: 1341830799975000,
//     timeEnd: 1641830799975000
// })
// index.patch_annotation(14,['tag3','tag4'],'trying patch')
// index.delete_annotation_by_id(2)
// index.find_annotations_tags(['tag'])
// index.x_grafana_org_id('dnii','Admin',30000)
// index.auth_token_for_user(2)
// index.basic_auth('admin','admin')
// index.basic_auth_using_token('eyJrIjoiMkRLamZ3T1g5cDRrSjR0Y1ROanVoR21WSzNJV09IcWwiLCJuIjoiZG5pIiwiaWQiOjF9')
// index.get_dashboard_by_uid('trial1')
// index.delete_dashboard_by_uid('trial1')
// index.get_home_dashboard()
// index.tags_for_dashboard()
// index.get_dashboard_permissions(1)
// index.update_dashboard_permissions(1,[
//     {role: 'Viewer', permission: 1},
//     {role: 'Editor', permission: 2},
//     {userId: 1, permission: 2},
//     {teamId: 1, permission: 2},
//     ])
// index.get_all_dashboard_versions(3,0,2)
// index.get_dashboard_version(1,2)
// index.restore_dashboard(1,3)
// index.compare_dashboard_versions({dashboardId:1,version:1},{dashboardId:1,version:3})
// index.get_all_datasources()
// index.get_datasource_by_id(1)
// index.get_datasource_by_uid('xx')
// index.get_datasource_by_name('prometheus')
// index.get_datasource_id_by_name('promehteus')
// index.create_datasource('prometheus1','prometheus','http://shirohige:30000/','proxy',true,{
//     basicAuthUser:'adicipta',
//     secureJsonData: {
//         basicAuthPassword: 'AdIns2021'
//     }
// })
// index.create_datasource('test_datasource','cloudwatch','http://monitoring.us-west-1.amazonaws.com','proxy',{
//     jsonData: {
//         authType: "keys",
//         defaultRegion: "us-west-1"
//       },
//       secureJsonData: {
//         accessKey: "Ol4pIDpeKSA6XikgOl4p",
//         secretKey: "dGVzdCBrZXkgYmxlYXNlIGRvbid0IHN0ZWFs"
//       },
//       isDefault: true
// })
// index.update_datasouce_by_id(1,'prometheus','prometheus','shirohige:30000','proxy',{secureJsonData:{basicAuthPassword:'blablabla'}})
// index.delete_datasource_by_id(3)
// index.delete_datasource_by_uid('Js0E1VJ7z')
// index.delete_datasource_by_name('prometheus')
// index.datasource_proxy_calls(4)
// index.query_datasource_by_id(0,16000000000,[{
//     refId:'sda',
//     intervalMs: 10000,
//     maxDataPoints: 200,
//     datasourceId: 1,
//     rawSql: 'SELECT * FROM database',
//     format: 'table'
// }])
.then(res=>console.log(res)).catch(res=>console.log(res))
