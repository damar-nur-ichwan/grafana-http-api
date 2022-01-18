* **Developed by** Damar Nur Ichwan

# Installation
1. Run this command in your project
```
npm i grafana-http-api
```
2. Enter and configure the following variables in your ```.env``` file.
```
GRAFANA_HOST = <your grafana host> // example: localhost:3000
GRAFANA_USERNAME = <your grafana username> // example: admin (by default)
GRAFANA_PASSWORD = <your grafana password> // example: admin (by default)
GRAFANA_TOKEN = <your grafana api key> // example: eyJrIjoiMkRLamZ3T1g5cDRrSjR0Y1ROanVoR21WSzNJV09IcWwiLCJuIjoiZG5pIiwiaWQiOjF9
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
        secondsToLive: number; 
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
        folderId: number; 
        folderUid: string; 
        message: string; 
        overwrite: boolean; 
        refresh: string; 
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
        dashboardId: number; 
        version: number; 
        }, 
    second_dashboard?: { 
        dashboardId: 
        number; version: number; 
        }
    )
```
- **first_dashboard -** an object representing the base dashboard version
- **second_dashboard -** an object representing the new dashboard version
# Dashboard permissions API
This API can be used to update/get the permissions for a dashboard.

Permissions with dashboardId=-1 are the default permissions for users with the Viewer and Editor roles. Permissions can be set for a user, a team or a role (Viewer or Editor). Permissions cannot be set for Admins - they always have access to everything.

The permission levels for the permission field:

1 = View
2 = Edit
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
        overwrite: boolean; 
        version: number; 
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

1 = View
2 = Edit
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
    ])
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
        query: string; 
        tag: string; 
        type: string; 
        dashboardIds: number; 
        folderIds: number; 
        starred: boolean; 
        limit: number; 
        page: string; 
        }
```
# Data source API
* If you are running Grafana Enterprise and have **Fine-grained access** control enabled, for some endpoints you would need to have relevant permissions. Refer to specific resources to understand what permissions are required.
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
    orgId?: number, 
    name?: string, 
    type?: string, 
    datasource_url?: string, 
    access?: string, 
    optional?: { 
        isDefault: boolean; 
        basicAuth: boolean; 
        basicAuthUser: string; 
        secureJsonData: { 
            accessKey: string; 
            secretKey: string; 
            basicAuthPassword: string; 
            }; 
        jsonData: { 
            httpMethod: string; 
            authType: string; 
            defaultRegion: string; 
            }; 
        }
    )
```
* By defining ```password``` and ```basicAuthPassword``` under ```secureJsonData``` Grafana encrypts them securely as an encrypted blob in the database. The response then lists the encrypted fields under ```secureJsonFields```
## Update an existing data source
```js
grafana.update_datasouce_by_id(
    datasourceId?: number, 
    Name?: string, 
    Type?: string, 
    datasource_url?: string, 
    Access?: string, 
    optional?: { 
        uid: string; 
        password: string; 
        user: string; 
        database: string; 
        basicAuth: boolean; 
        basicAuthUser: string; 
        basicAuthPassword: string; 
        withCredentials: boolean; 
        isDefault: boolean; 
        jsonData: { ...; }; 
        secureJsonData: { ...; }; 
        }
    )
```
* Similar to **creating a data source**, ```password``` and ```basicAuthPassword``` should be defined under ```secureJsonData``` in order to be stored securely as an encrypted blob in the database. Then, the encrypted fields are listed under ```secureJsonFields``` section in the response.
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
* Most of Grafana’s builtin data sources have backend implementation.
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
    ])
```
* The ```from```, ```to```, and ```queries``` properties are required.
- **from/to –** Should be either absolute in epoch timestamps in milliseconds or relative using Grafana time units. For example, now-1h.
- **queries.refId –** Specifies an identifier of the query. Is optional and default to “A”.
- **queries.datasourceId –** Specifies the data source to be queried. Each query in the request must have an unique datasourceId.
- **queries.maxDataPoints -** Species maximum amount of data points that dashboard panel can render. Is optional and default to 100.
- **queries.intervalMs -** Specifies the time interval in milliseconds of time series. Is optional and defaults to 1000.
In addition, each data source has its own specific properties that should be added in a request.
# Organization API
# Snapshot API
# Annotations API
# Playlists API
# Alerting API
# Alert notification channels API
# User API
# Team API
# Admin API
# Preferences API
# Other API
