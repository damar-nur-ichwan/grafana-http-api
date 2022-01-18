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
## Admin API
### Fetch settings
**Object:**
```js
.fetch_settings()
```
## Update settings
Updates / removes and reloads database settings. You must provide either updates, removals or both.
This endpoint only supports changes to auth.saml configuration.
**Object:**
```js
.update_settings(
    update_settings={},
    removals_settings={}
  )
```
**Example:**
```javascript
.update_settings(
    update_settings={
      "auth.saml": {
        "enabled": "true"
      }
    },
    removals_settings={
      "auth.saml": ["single_logout"]
    })
```
## Grafana Stats
**Object:**
```js
.grafana_stats()
```
## Password for User
**Object:**
```js

```
