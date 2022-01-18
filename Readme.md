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

# Features and Instructions for Use
Don't forget to declare ```grafana-http-api``` module before using it. **Example:**
```js
const grafana = require('grafana-http-api')
```
All objects in this module use **Promise**.
To see the execution result of each object, use the following code:
```js
.then(res=>console.log(res))
.catch(res=>console.log(res))
```
## Authentication API
### X-Grafana-Org-Id Header
**X-Grafana-Org-Id** is an optional property that specifies the organization to which the action is applied. If it is not set, the created key belongs to the current context org. Use this header in all requests except those regarding admin. 
```js
grafana.x_grafana_org_id(
    name?: string, 
    role?: string, 
    secondsToLive?: number
    )
```
### Basic Auth
If basic auth is enabled (it is enabled by default), then you can authenticate your HTTP request via standard basic auth. Basic auth will also authenticate LDAP users.
```js
grafana.basic_auth(
    username?: string, 
    password?: string
    )
```
## Auth HTTP resources / actions
### Api Keys
```js
grafana.get_api_keys()
```
### Create API Key
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
### Delete API Key
```js
graana.delete_api_key(
    id?: number
    )
```
## Dashboard API
## Dashboard versions API
## Dashboard permissions API
## Folder API
## Folder permissions API
## Folder/dashboard search API
## Data source API
## Organization API
## Snapshot API
## Annotations API
## Playlists API
## Alerting API
## Alert notification channels API
## User API
## Team API
## Admin API
## Preferences API
## Other API
