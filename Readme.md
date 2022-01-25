* **Developed by** Damar Nur Ichwan

# Installation
1. Run this command in your project
```
npm i grafana-http-api
```
2. Enter and configure the following variables in your ```.env``` file.
```
GRAFANA_HOST = <your grafana host>
GRAFANA_USERNAME = <your grafana username>
GRAFANA_PASSWORD = <your grafana password>
GRAFANA_TOKEN = <your grafana api key>
```
*Note: If you don't have it already, please create a file called ```.env```.*

3. Don't forget to declare ```grafana-http-api``` module before using it. **Example:**
```js
const grafana = require('grafana-http-api')
```
4. All objects in this module use **Promise**. To see the execution result of each object, use the following code:
```js
.then(res=>console.log(res))
.catch(res=>console.log(res))
```
# Authentication API
## X-Grafana-Org-Id Header
**X-Grafana-Org-Id** is an optional property that specifies the organization to which the action is applied. If it is not set, the created key belongs to the current context org. Use this header in all requests except those regarding admin. 
```js
grafana.x_grafana_org_id(
    name?: string, 
    role?: string, 
    secondsToLive?: number
)
```
## Basic Auth
If basic auth is enabled (it is enabled by default), then you can authenticate your HTTP request via standard basic auth. Basic auth will also authenticate LDAP users.
```js
grafana.basic_auth(
    username?: string, 
    password?: string
)
```
# Auth HTTP resources / actions
## Api Keys
```js
grafana.get_api_keys()
```
## Create API Key
```js
grafana.create_api_key(
    name?: string, 
    role?: string, 
    optional?: {
        secondsToLive: number
    }
)
```
- **name –** The key name
- **role –** Sets the access level/Grafana Role for the key. Can be one of the following values: Viewer, Editor or Admin.
- **secondsToLive –** Sets the key expiration in seconds. It is optional. If it is a positive number an expiration date for the key is set. If it is null, zero or is omitted completely (unless api_key_max_seconds_to_live configuration option is set) the key will never expire.
## Delete API Key
```js
grafana.delete_api_key(
    id?: number
)
```
# Dashboard API
## Create / Update dashboard
Creates a new dashboard or updates an existing dashboard. When updating existing dashboards, if you do not define the folderId or the folderUid property, then the dashboard(s) are moved to the General folder. (You need to define only one property, not both).
```js
grafana.create_or_update_dashboard(
    dashboard?: JSON, 
    optional?: { 
        folderId: number,
        folderUid: string, 
        message: string,
        overwrite: boolean, 
        refresh: string,
    }
)
```
- **dashboard –** The complete dashboard model, id = null to create a new dashboard.
- **dashboard.id –** id = null to create a new dashboard.
- **dashboard.uid –** Optional unique identifier when creating a dashboard. uid = null will generate a new uid.
- **folderId –** The id of the folder to save the dashboard in.
- **folderUid –** The UID of the folder to save the dashboard in. Overrides the folderId.
- **overwrite –** Set to true if you want to overwrite existing dashboard with newer version, same dashboard title in folder or same dashboard uid.
- **message -** Set a commit message for the version history.
- **refresh -** Set the dashboard refresh interval. If this is lower than the minimum refresh interval, then Grafana will ignore it and will enforce the minimum refresh interval.
## Get dashboard by uid
Will return the dashboard given the dashboard unique identifier (uid). Information about the unique identifier of a folder containing the requested dashboard might be found in the metadata.
```js
grafana.get_dashboard_by_uid(
    uid?: string
)
```
## Delete dashboard by uid
Will delete the dashboard given the specified unique identifier (uid).
```js
grafana.delete_dashboard_by_uid(
    uid?: string
)
```
## Gets the home dashboard
Will return the home dashboard.
```js
grafana.get_home_dashboard()
```
## Tags for Dashboard
Get all tags of dashboards
```js
grafana.tags_for_dashboard()
```
# Dashboard versions API
## Get all dashboard versions
Gets all existing dashboard versions for the dashboard with the given dashboardId.
```js
grafana.get_all_dashboard_versions(
    dashboardId?: number, 
    start?: number, 
    limit?: number
)
```
- **limit -** Maximum number of results to return
- **start -** Version to start from when returning queries
## Get dashboard version
Get the dashboard version with the given version, for the dashboard with the given id.
```js
grafana.get_dashboard_version(
    dashboardId?: number, 
    version?: number
)
```
## Restore dashboard
Restores a dashboard to a given dashboard version.
```js
grafana.restore_dashboard(
    dashboardId?: number, 
    version?: number
)
```
- **version -** The dashboard version to restore to

JSON response body schema:
- **slug -** the URL friendly slug of the dashboard’s title
- **status -** whether the restoration was successful or not
- **version -** the new dashboard version, following the restoration
## Compare dashboard versions
Compares two dashboard versions by calculating the JSON diff of them.
```js
grafana.compare_dashboard_versions(
    first_dashboard?: { 
        dashboardId: number,
        version: number,
    }, 
    second_dashboard?: { 
        dashboardId: number, 
        version: number,
    }
)
```
- **first_dashboard -** an object representing the base dashboard version
- **second_dashboard -** an object representing the new dashboard version
# Dashboard permissions API
This API can be used to update/get the permissions for a dashboard.

Permissions with dashboardId=-1 are the default permissions for users with the Viewer and Editor roles. Permissions can be set for a user, a team or a role (Viewer or Editor). Permissions cannot be set for Admins - they always have access to everything.

The permission levels for the permission field:

1 = View,
2 = Edit,
4 = Admin
## Get permissions for a dashboard
Gets all existing permissions for the dashboard with the given ```dashboardId```
```js
grafana.get_dashboard_permissions(
    dashboardId?: number
)
```
## Update permissions for a dashboard
Updates permissions for a dashboard. This operation will remove existing permissions if they’re not included in the request.
```js
grafana.update_dashboard_permissions(
    dashboardId?: number, 
    items?: [
        { 
            role: string,
            permission: number,
        },{ 
            role: string,
            permission: number,
        },{
            teamId: number,
            permission: number,
        },{
            userId: number;
            permission: number,
        },
    ]
)
```
- **items -** The permission items to add/update. Items that are omitted from the list will be removed.
# Folder API
- The uid can have a maximum length of 40 characters.
- The General folder (id=0) is special and is not part of the Folder API which means that you cannot use this API for retrieving information about the General folder.
## Get all folders
Returns all folders that the authenticated user has permission to view. 
```js
grafana.get_all_folders()
```
## Get folder by uid
Will return the folder given the folder uid.
```js
grafana.get_folder_by_uid(
    uid?: string
)
```
## Create folder
Creates a new folder.
```js
grafana.create_folder(
    uid?: string, 
    title?: string
)
```
- **uid –** Optional unique identifier.
- **title –** The title of the folder.
## Update Folder
Updates an existing folder identified by uid.
```js
grafana.update_folder(
    uid?: string, 
    title?: string, 
    optional?: { 
        overwrite: boolean,
        version: number,
    }
)
```
- **uid –** Provide another unique identifier than stored to change the unique identifier.
- **title –** The title of the folder.
- **version –** Provide the current version to be able to update the folder. Not needed if overwrite=true.
- **overwrite –** Set to true if you want to overwrite existing folder with newer version.
## Delete Folder
Deletes an existing folder identified by UID along with all dashboards (and their alerts) stored in the folder. This operation cannot be reverted.
```js
grafana.delete_folder(
    uid?: string
)
```
## Get folder by id
Will return the folder identified by id.
```js
grafana.get_folder_by_id(
    id?: number
)
```
# Folder permissions API
This API can be used to update/get the permissions for a folder.

Permissions with folderId=-1 are the default permissions for users with the Viewer and Editor roles. Permissions can be set for a user, a team or a role (Viewer or Editor). Permissions cannot be set for Admins - they always have access to everything.

The permission levels for the permission field:

1 = View,
2 = Edit,
4 = Admin
## Get permissions for a folder
Gets all existing permissions for the folder with the given ```uid```.
```js
grafana.get_folder_permissions(
    uid?: string
)
```
## Update permissions for a folder
Updates permissions for a folder. This operation will remove existing permissions if they’re not included in the request.
```js
grafana.update_folder_permission(
    uid?: string, 
    items?: [
        { 
            role: string,
            permission: number
        }, { 
            role: string,
            permission: number
        }, {
            
        }, {
            teamId: number,
            permission: number
        }, {
            userId: number,
            permission: number
        }
    ]
)
```
- **items -** The permission items to add/update. Items that are omitted from the list will be removed.
# Folder/dashboard search API
## Search folders and dashboards
Query parameters:

- **query –** Search Query
- **tag –** List of tags to search for
- **type –** Type to search for, dash-folder or dash-db
- **dashboardIds –** List of dashboard id’s to search for
- **folderIds –** List of folder id’s to search in for dashboards
- **starred –** Flag indicating if only starred Dashboards should be returned
- **limit –** Limit the number of returned results (max 5000)
- **page –** Use this parameter to access hits beyond limit. Numbering starts at 1. limit param acts as page size. Only available in Grafana v6.2+.
```js
grafana.folder_or_dashboard_search(
    optional?: { 
        query: string,
        tag: string,
        type: string, 
        dashboardIds: number, 
        folderIds: number,
        starred: boolean;,
        limit: number,
        page: string,
    }
)
```
# Data source API
If you are running Grafana Enterprise and have **Fine-grained access** control enabled, for some endpoints you would need to have relevant permissions. Refer to specific resources to understand what permissions are required.
## Get all data sources
```js
grafana.get_all_datasources()
```
## Get a single data source by Id
```js
grafana.get_datasource_by_id(
    datasourceId?: number
)
```
## Get a single data source by UID
```js
grafana.get_datasource_by_uid(
    uid?: string
)
```
## Get a single data source by Name
```js
grafana.get_datasource_by_name(
    name?: string
)
```
## Get data source Id by Name
```js
grafana.get_datasource_id_by_name(
    name?: string
)
```
## Create a data source
```js
grafana.create_datasource(
    data?: { 
        orgId: number, 
        name: string,
        type: string, 
        url: string, 
        access: string, 
    }, 
    optional?: { 
        isDefault: boolean, 
        basicAuth: boolean, 
        basicAuthUser: string, 
        secureJsonData: { 
            accessKey: string, 
            secretKey: string, 
            basicAuthPassword: string, 
        }, 
        jsonData: { 
            httpMethod: string,
            authType: string, 
            defaultRegion: string,
        }
    }
)
```
By defining ```password``` and ```basicAuthPassword``` under ```secureJsonData``` Grafana encrypts them securely as an encrypted blob in the database. The response then lists the encrypted fields under ```secureJsonFields```
## Update an existing data source
```js
grafana.update_datasouce_by_id(
    datasourceId?: number, 
    data?: { 
        Name: string, 
        Type: string, 
        Url: string, 
        Access: string
    }, 
    optional?: { 
        uid: string, 
        password: string, 
        user: string, 
        database: string, 
        basicAuth: boolean, 
        basicAuthUser: string, 
        basicAuthPassword: string, 
        withCredentials: boolean, 
        isDefault: boolean, 
        jsonData: {
            httpMethod: string, 
            authType: string, 
            defaultRegion: string
        },
        secureJsonData:{
            accessKey: string,
            secretKey:string,
            basicAuthPassword: string
        }
    }
)
```
Similar to **creating a data source**, ```password``` and ```basicAuthPassword``` should be defined under ```secureJsonData``` in order to be stored securely as an encrypted blob in the database. Then, the encrypted fields are listed under ```secureJsonFields``` section in the response.
## Delete an existing data source by id
```js
grafana.delete_datasource_by_id(
    datasourceId?: number
)
```
## Delete an existing data source by UID
```js
grafana.delete_datasource_by_uid(
    uid?: string
)
```
## Delete an existing data source by Name
```js
grafana.delete_datasource_by_name(
    name?: string
)
```
## Data source proxy calls
Proxies all calls to the actual data source.
```js
grafana.datasource_proxy_calls(
    datasourceId?: number
)
```
## Query a data source by ID
Queries a data source having backend implementation.
*Most of Grafana’s builtin data sources have backend implementation.*
```js
grafana.query_datasource_by_id(
    from?: number, 
    to?: number, 
    queries?: [
        { 
            refId: string; 
            intervalMs: number; 
            maxDataPoints: number; 
            datasourceId: number; 
            rawSql: string; 
            format: string; 
        },
    ]
)
```
*The ```from```, ```to```, and ```queries``` properties are required.*
- **from/to –** Should be either absolute in epoch timestamps in milliseconds or relative using Grafana time units. For example, now-1h.
- **queries.refId –** Specifies an identifier of the query. Is optional and default to “A”.
- **queries.datasourceId –** Specifies the data source to be queried. Each query in the request must have an unique datasourceId.
- **queries.maxDataPoints -** Species maximum amount of data points that dashboard panel can render. Is optional and default to 100.
- **queries.intervalMs -** Specifies the time interval in milliseconds of time series. Is optional and defaults to 1000.
In addition, each data source has its own specific properties that should be added in a request.
# Organization API
*If you are running Grafana Enterprise and have Fine-grained access control enabled, for some endpoints you would need to have relevant permissions. Refer to specific resources to understand what permissions are required.*
## Get current Organization
```js
grafana.get_current_org()
```
## Get all users within the current organization
Returns all org users within the current organization. Accessible to users with org admin role.
```js
grafana.get_current_org_users()
```
## Get all users within the current organization (lookup)
Returns all org users within the current organization, but with less detailed information. Accessible to users with org admin role, admin in any folder or admin of any team. Mainly used by Grafana UI for providing list of users when adding team members and when editing folder/dashboard permissions.
```js
grafana.get_current_org_users_lookup()
```
## Updates the given user
```js
grafana.updates_the_given_user(
    userId?: number, 
    role?: string
)
```
## Delete user in current organization
```js
grafana.delete_user_in_current_org(
    userId?: number
)
```
## Update current Organization
```js
grafana.update_current_org(
    name?: string
)
```
## Add a new user to the current organization
Adds a global user to the current organization.
```js
grafana.add_user_to_the_current_org(
    role?: number, 
    loginOrEmail?: number
)
```
## Get Organization by Id
```js
grafana.get_org_by_id(
    orgId?: number
)
```
## Get Organization by Name
```js
grafana.get_org_by_name(
    name?: string
)
```
## Create Organization
```js
grafana.create_org(
    new_org_name?: string, 
    role?: string
)
```
Note: The api will work in the following two ways
1. Need to set GF_USERS_ALLOW_ORG_CREATE=true
2. Set the config value users.allow_org_create to true in ini file
## Search all Organizations
```js
grafana.search_all_orgs(
    perpage?: number, 
    page?: number
)
```
*Default value for the ```perpage``` parameter is 1000 and for the ```page``` parameter is 0.*
## Update Organization Name
```js
grafana.update_org(
    orgId?: number, 
    name?: string
)
```
## Delete Organization
```js
grafana.delete_org(
    orgId?: number
)
```
## Get Users in Organization
```js
grafana.get_org_users(
    orgId?: number
)
```
## Add User in Organization
```js
grafana.add_org_user(
    orgId?: number, 
    loginOrEmail?: string, 
    role?: string
)
```
## Update Users in Organization
```js
grafana.update_org_user(
    orgId?: number, 
    userId?: number, 
    role?: string
)
```
## Delete User in Organization
```js
grafana.delete_org_user(
    orgId?: number, 
    userId?: number
)
```
# Snapshot API
## Create new snapshot
```js
grafana.create_snapshot(
    dashboard?: JSON, 
    optional?: { 
        name: string; 
        expires: number; 
        external: boolean; 
        key: boolean; 
        deleteKey: boolean; 
    }
)
```
- **dashboard –** Required. The complete dashboard model.
- **name –** Optional. snapshot name
- **expires -** Optional. When the snapshot should expire in seconds. 3600 is 1 hour, 86400 is 1 day. Default is never to expire.
- **external -** Optional. Save the snapshot on an external server rather than locally. Default is false.
- **key -** Optional. Define the unique key. Required if external is true.
- **deleteKey -** Optional. Unique key used to delete the snapshot. It is different from the key so that only the creator can delete the snapshot. Required if external is true.
*When creating a snapshot using the API, you have to provide the full dashboard payload including the snapshot data. This endpoint is designed for the Grafana UI.*
Response Keys:
- **deleteKey –** Key generated to delete the snapshot
- **key –** Key generated to share the dashboard
## Get list of Snapshots
- **query –** Search Query
- **limit –** Limit the number of returned results
```js
grafana.get_snapshots_list(
    Query?: string, 
    optional?: { 
        limit: number
    }
)
```
## Get Snapshot by Key
```js
grafana.get_snapshot_by_key(
    key?: string
)
```
## Delete Snapshot by Key
```js
grafana.delete_snapshot_by_key(
    key?: string
)
```
## Delete Snapshot by deleteKey
```js
grafana.delete_snapshot_by_deleteKey(
    deleteKey?: string
)
```
# Annotations API
This is the API documentation for the new Grafana Annotations feature released in Grafana 4.6. Annotations are saved in the Grafana database (sqlite, mysql or postgres). Annotations can be global annotations that can be shown on any dashboard by configuring an annotation data source - they are filtered by tags. Or they can be tied to a panel on a dashboard and are then only shown on that panel.
## Find Annotations
```js
grafana.find_annotations(
    tags?: string[], 
    optional?: { 
        limit: number,
        from: number,
        to: number
    }
)
```
- **from:** epoch datetime in milliseconds. Optional.
- **to: epoch datetime in milliseconds. Optional.
- **limit:** number. Optional - default is 100. Max limit for results returned.
- **tags:** string. Optional. Use this to filter global annotations. Global annotations are annotations from an annotation data source that are not connected specifically to a dashboard or panel.
*Starting in Grafana v6.4 regions annotations are now returned in one entity that now includes the timeEnd property.*
## Create Annotation
Creates an annotation in the Grafana database. The ```dashboardId``` and ```panelId``` fields are optional. If they are not specified then a global annotation is created and can be queried in any dashboard that adds the Grafana annotations data source. When creating a region annotation include the timeEnd property.

The format for ```time``` and timeE```nd should be epoch numbers in millisecond resolution.
```js
grafana.create_annotation(
    tags?: string[], 
    text?: string, 
    optional?: { 
        time: number,
        timeEnd: number
    }
)
```
*The response for this HTTP request is slightly different in versions prior to v6.4. In prior versions you would also get an endId if you where creating a region. But in 6.4 regions are represented using a single event with time and timeEnd properties.*
## Create Annotation in Graphite format
Creates an annotation by using Graphite-compatible event format. The ```when``` and ```data``` fields are optional. If ```when``` is not specified then the current time will be used as annotation’s timestamp. The ```tags``` field can also be in prior to Graphite 0.10.0 format (string with multiple tags being separated by a space).
```js
grafana.create_annotation_in_graphite(
    what?: string, 
    tags?: string[], 
    optional?: { 
        when: number, 
        data: string, 
    }
)
```
## Update Annotation
Updates all properties of an annotation that matches the specified id. To only update certain property, consider using the Patch Annotation operation.
```js
grafana.update_annotation(
    id?: number, 
    tags?: string[], 
    text?: string, 
    optional?: { 
        time: number,
        timeEnd: number, 
    }
)
```
## Patch Annotation
*This is available in Grafana 6.0.0-beta2 and above.*
```js
grafana.patch_annotation(
    id?: number, 
    tags?: string[], 
    text?: string
)
```
Updates one or more properties of an annotation that matches the specified id.
## Delete Annotation By Id
Deletes the annotation that matches the specified id.
```js
grafana.delete_annotation_by_id(
    id?: number
)
```
## Find Annotations Tags
Find all the event tags created in the annotations.
```js
grafana.find_annotations_tags(
    tags?: string[], 
    optional?: { 
        limit: number
    }
)
```
- **tag:** Optional. A string that you can use to filter tags.
- **limit:** Optional. A number, where the default is 100. Max limit for results returned.
# Playlists API
## Search Playlist
Get all existing playlist for the current organization using pagination
```js
grafana.search_playlist(
    optional?: { 
        query: string, 
        limit: number, 
    }
)
```
- **query -** Limit response to playlist having a name like this value.
- **limit -** Limit response to X number of playlist.
## Get one playlist
```js
grafana.get_one_playlist(
    id?: number
)
```
## Get Playlist items
```js
grafana.get_playlist_items(
    id?: number
)
```
## Get Playlist dashboards
```js
grafana.get_playlist_dashboards(
    id?: number
)
```
## Create a playlist
```js
grafana.create_playlist(
    name?: string, 
    interval?: string, 
    items?: [
        { 
            type: string,
            value: string, 
            order: number, 
            title: string, 
        }
    ]
)
```
## Update a playlist
```js
grafana.update_playlist(
    id?: number, 
    data?: { 
        name: string,
        interval: string,
        items: [
            { 
            type: string, 
            value: string, 
            order: number, 
            title: string,
            }
        ]
    }
)
```
## Delete a playlist
```js
grafana.delete_playlist(
    id?: number
)
```
# Alerting API
*This topic is relevant for the legacy dashboard alerts only.*
You can use the Alerting API to get information about legacy dashboard alerts and their states but this API cannot be used to modify the alert. To create new alerts or modify them you need to update the dashboard JSON that contains the alerts.
## Get alerts
```js
grafana.get_alerts(
    optional?: { 
        dashboardId: number,
        panelId: number,
        query: string,
        state: string, 
        limit: number, 
        folderId: number, 
        dashboardQuery: string, 
        dashboardTag: string 
    }
)
```
- **dashboardId –** Limit response to alerts in specified dashboard(s). You can specify multiple dashboards, e.g. dashboardId=23&dashboardId=35.
- **panelId –** Limit response to alert for a specified panel on a dashboard.
- **query -** Limit response to alerts having a name like this value.
- **state -** Return alerts with one or more of the following alert states: ALL,no_data, paused, alerting, ok, pending. To specify multiple states use the following format: ?state=paused&state=alerting
- **limit -** Limit response to X number of alerts.
- **folderId –** Limit response to alerts of dashboards in specified folder(s). You can specify multiple folders, e.g. folderId=23&folderId=35.
- **dashboardQuery -** Limit response to alerts having a dashboard name like this value.
- **dashboardTag -** Limit response to alerts of dashboards with specified tags.
## Get alert by id
```js
grafana.get_alert_by_id(
    alert_id?: number
)
```
**Important Note:** “evalMatches” data is cached in the db when and only when the state of the alert changes (e.g. transitioning from “ok” to “alerting” state).

If data from one server triggers the alert first and, before that server is seen leaving alerting state, a second server also enters a state that would trigger the alert, the second server will not be visible in “evalMatches” data.
## Pause alert by id
```js
grafanapause_alert_by_id(
    alert_id?: number, 
    paused?: boolean
)
```
- **paused –** Can be true or false. True to pause an alert. False to unpause an alert.
# Alert notification channels API
The uid can have a maximum length of 40 characters.
## Get all notification channels
Returns all notification channels that the authenticated user has permission to view.
```js
grafana.get_all_notification_channels()
```
## Get all notification channels (lookup)
Returns all notification channels, but with less detailed information. Accessible by any authenticated user and is mainly used by providing alert notification channels in Grafana UI when configuring alert rule.
```js
grafana.get_all_notification_channels_lookup()
```
## Get notification channel by uid
Returns the notification channel given the notification channel uid.
```js
grafana.get_notification_channel_by_uid(
    uid?: string
)
```
## Get notification channel by id
Returns the notification channel given the notification channel id.
```js
grafana.get_notification_channel_by_id(
    id?: number
)
```
## Create notification channel
You can find the full list of supported notifiers on the alert notifiers page.
```js
grafana.create_notification_channel(
    data?: { 
        name: string, 
        type: string, 
        isDefault: boolean, 
        sendReminder: boolean, 
        frequency: string, 
        settings: {}
    }
)
```
## Update notification channel by uid
Updates an existing notification channel identified by uid.
```js
grafana.update_notification_channel_by_uid(
    uid?: string, 
    data?: { 
        name: string, 
        type: string,
        isDefault: boolean, 
        sendReminder: boolean, 
        frequency: string, 
        settings: {}; 
    }
)
```
## Update notification channel by id
Updates an existing notification channel identified by id.
```js
grafana.update_notification_channel_by_id(
    id?: number, 
    data?: { 
        name: string, 
        type: string,
        isDefault: boolean, 
        sendReminder: boolean, 
        frequency: string, 
        settings: {}; 
    }
)
```
## Delete alert notification by uid
Deletes an existing notification channel identified by uid.
```js
grafana.delete_notification_channel_by_uid(
    uid?: string
)
```
## Delete alert notification by id
Deletes an existing notification channel identified by id.
```js
grafana.delete_notification_channel_by_id(
    id?: number
)
```
## Test notification channel
Sends a test notification message for the given notification channel type and settings. You can find the full list of supported notifiers at the alert notifiers page.
```js
grafana.test_notification_channel(
    type?: string, 
    settings?: {}
)
```
# User API
## Search Users
```js
grafana.search_users(
    optional?: { 
        perpage: number; 
        page: number; 
    }
)
```
Default value for the ```perpage``` parameter is ```1000``` and for the ```page``` parameter is ```1```. Requires basic authentication and that the authenticated user is a Grafana Admin.
## Search Users with Paging
```js
grafana.search_users_with_paging(
    optional?: { 
        perpage: number; 
        page: number; 
        query: string; 
    }
)
```
Default value for the ```perpage``` parameter is ```1000``` and for the ```page``` parameter is ```1```. The ```query``` parameter is optional and it will return results where the ```query``` value is contained in one of the ```name```, login or email fields.
## Get single user by Id
```js
grafana.get_single_user_by_id(
    id?: number
)
```
## Get single user by Username(login) or Email
```js
grafana.get_single_user_by_username_or_email(
    username_or_email?: string
)
```
## User Update
```js
grafana.user_update(
    id?: number, 
    data?: { 
        email: string,
        name: string,
        login: string, 
        theme: string 
    }
)
```
## Get Organizations for user
```js
grafana.get_user_orgs(
    userId?: number
)
```
## Get Teams for user
```js
grafana.get_user_teams(
    userId?: number
)
```
## Actual User
```js
grafana.get_actual_user()
```
## Change Password
Changes the password for the user.
```js
grafana.change_password(
    oldPassword?: string, 
    newPassword?: string
)
```
## Switch user context for a specified user
Switch user context to the given organization.
```js
grafana.switch_user_context_for_specified_user(
    userId?: number, 
    organizationId?: number
)
```
## Switch user context for signed in user
Switch user context to the given organization.
```js
grafana.switch_user_context_for_signed_in_user(
    organizationId?: number
)
```
## Organizations of the actual User
Return a list of all organizations of the current user. 
```js
grafana.orgs_of_actual_user()
```
## Teams that the actual User is member of
Return a list of all teams that the current user is member of.
```js
grafana.get_actual_user_teams()
```
## Star a dashboard
Stars the given Dashboard for the actual user.
```js
grafana.star_a_dashboard(
    dashboardId?: number
)
```
## Unstar a dashboard
Deletes the starring of the given Dashboard for the actual user.
```js
grafana.unstar_a_dashboard(
    dashboardId?: number
)
```
## Auth tokens of the actual User
Return a list of all auth tokens (devices) that the actual user currently have logged in from.
```js
grafana.auth_tokens_of_the_actual_user()
```
## Revoke an auth token of the actual User
Revokes the given auth token (device) for the actual user. User of issued auth token (device) will no longer be logged in and will be required to authenticate again upon next activity.
```js
grafana.revoke_auth_tokens_of_the_actual_user(
    authTokenId?: number
)
```
# Team API
This API can be used to create/update/delete Teams and to add/remove users to Teams. All actions require that the user has the Admin role for the organization.
## Team Search With Paging
```js
grafana.team_search(
    optional?: { 
        perpage: string,
        page: string,
        query: string, 
        name: string
    }
)
```
Default value for the ```perpage``` parameter is 1000 and for the ```page``` parameter is 1. The ```name``` parameter returns a single team if the parameter matches the name field.
## Get Team By Id
```js
grafana.get_team_by_id(
    id?: number
)
```
## Add Team
The Team ```name``` needs to be unique. ```name``` is required and ```email```,```orgId``` is optional.
```js
grafana.add_team(
    name?: string, 
    email?: string, 
    orgId?: number
)
```
## Update Team
There are two fields that can be updated for a team: ```name``` and ```email```.
```js
grafana.update_team(
    id?: number, 
    name?: string, 
    email?: string
)
```
## Delete Team by Id
```js
grafana.delete_team_by_id(
    id?: number
)
```
## Get Team Members
```js
grafana.get_team_members(
    teamId?: number
)
```
## Add Team Member
```js
grafana.add_team_member(
    teamId?: number, 
    userId?: number
)
```
## Remove Member From Team
```js
grafana.remove_member_from_team(
    teamId?: number, 
    userId?: number
)
```
## Get Team Preferences
```js
grafana.get_team_preferences(
    teamId?: number
)
```
## Update Team Preferences
```js
grafana.update_team_preferences(
    teamId?: number, 
    data?: { 
        theme: string, 
        homeDashboardId: number, 
        timezone: string, 
    }
)
```
- **theme -** One of: light, dark, or an empty string for the default theme
- **homeDashboardId -** The numerical :id of a dashboard, default: 0
- **timezone -** One of: utc, browser, or an empty string for the default
Omitting a key will cause the current value to be replaced with the system default value.
# Admin API
## Fetch settings
```js
grafana.fetch_settings()
```
## Update Settings
Updates / removes and reloads database settings. You must provide either ```update_settings```, ```removals_settings``` or both.

This endpoint only supports changes to ```auth.saml``` configuration.
```js
grafana.update_settings(
    update_settings?: {}, removals_settings?: {}
)
```
## Grafana Stats
```js
grafana.grafana_stats()
```
## Global Users
Create new user.
```js
grafana.global_user(
    data?: { 
        name: string, 
        email: string, 
        login: string, 
        password: string, 
        OrgId: number
    }
)
```
## Password for User
Change password for a specific user.
```js
grafana.password_for_user(
    user_id?: number, 
    new_password?: string
)
```
## Permissions
```js
grafana.permissions(
    user_id?: number, 
    update_permissions?: {}
)
```
## Delete global User
```js
grafana.delete_global_user(
    user_id?: number
)
```
## Pause all alerts
```js
grafana.pause_all_alerts(
    paused?: boolean
)
```
- **paused** – If true then all alerts are to be paused, false unpauses all alerts.
## Auth tokens for User
Return a list of all auth tokens (devices) that the user currently have logged in from.
```js
grafana.auth_tokens_for_user(
    user_id?: number
)
```
## Revoke auth token for User
Revokes the given auth token (device) for the user. User of issued auth token (device) will no longer be logged in and will be required to authenticate again upon next activity.
```js
grafana.revoke_auth_token_for_user(user_id?: number)
```
## Logout User
Logout user revokes all auth tokens (devices) for the user. User of issued auth tokens (devices) will no longer be logged in and will be required to authenticate again upon next activity.
```js
grafana.logout_user(
    user_id?: number
)
```
## Reload provisioning configurations
Reloads the provisioning config files for specified type and provision entities again. It won’t return until the new provisioned entities are already stored in the database. In case of dashboards, it will stop polling for changes in dashboard files and then restart it with new configurations after returning.
```js
grafana.reload_provisioning_configs.access_control()
grafana.reload_provisioning_configs.dashboards()
grafana.reload_provisioning_configs.datasources()
grafana.reload_provisioning_configs.notifications()
grafana.reload_provisioning_configs.plugins()
grafana.reload_provisioning_configs.all()
```
## Reload LDAP configuration
Reloads the LDAP configuration.
```js
grafana.reload_ldap_config()
```
# Preferences API
## User and Org Preferences API
Keys:
- **theme -** One of: light, dark, or an empty string for the default theme
- **homeDashboardId -** The numerical :id of a favorited dashboard, default: 0
- **timezone -** One of: utc, browser, or an empty string for the default
Omitting a key will cause the current value to be replaced with the system default value.
## Get Current User Prefs
```js
grafana.get_current_user_prefs()
```
## Update Current User Prefs
```js
grafana.update_current_user_prefs(
    theme?: string, 
    homeDashboardId?: number, 
    timezone?: string
)
```
## Get Current Org Prefs
```js
grafana.get_current_org_prefs()
```
## Update Current Org Prefs
```js
grafana.update_current_org_prefs(
    theme?: number, 
    homeDashboardId?: number, 
    timezone?: string
)
```
# Other API
## Frontend Settings API
**Get Settings**
```js
grafana.get_settings()
```
## Login API 
**Renew session based on remember cookie**
```js
grafana.grafana.renew_session_based_on_remember_cookie()
```
## Health API
**Returns health information about Grafana**
```js
grafana.grafana_health_information()
```
