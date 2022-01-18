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
- **base -** an object representing the base dashboard version
- **new -** an object representing the new dashboard version
# Dashboard permissions API
# Folder API
# Folder permissions API
# Folder/dashboard search API
# Data source API
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
