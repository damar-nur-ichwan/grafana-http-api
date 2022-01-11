module.exports = {
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 1,
  "iteration": 1641866287063,
  "links": [
    {
      "asDropdown": false,
      "icon": "external link",
      "includeVars": false,
      "keepTime": false,
      "tags": [
        "kubernetes_info"
      ],
      "targetBlank": false,
      "title": "INFO",
      "tooltip": "",
      "type": "dashboards",
      "url": ""
    }
  ],
  "liveNow": false,
  "panels": [
    {
      "gridPos": {
        "h": 2,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 2,
      "options": {
        "content": "<div style=\"display:flex; height: 100%; width: 100%;\">\n    <img style=\"margin:auto 0px auto auto; height:49px; width:49px; border-radius:4px;\" src=\"${icon_k8s}\" alt=\"overview\"/>\n  <h1 style=\"margin: auto auto auto 8px; font-weight:bold;\">\n    KUBERNETES DASHBOARD\n  </h1>\n</div>",
        "mode": "html"
      },
      "pluginVersion": "8.3.3",
      "transparent": true,
      "type": "text"
    },
    {
      "collapsed": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 2
      },
      "id": 967,
      "panels": [
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 24,
            "x": 0,
            "y": 3
          },
          "id": 20,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.3",
          "title": "General Info",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green",
                    "value": null
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              }
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 24,
            "x": 0,
            "y": 4
          },
          "id": 13,
          "options": {
            "colorMode": "none",
            "graphMode": "none",
            "justifyMode": "center",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value_and_name"
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(sum by (node)(kube_node_status_capacity_cpu_cores))",
              "format": "time_series",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "Nodes",
              "refId": "Nodes"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(kube_configmap_created)",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "ConfigMaps",
              "refId": "ConfigMaps"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(count by (endpoint)(container_cpu_usage_seconds_total{endpoint!=\"\"}))",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "Endpoints",
              "refId": "Endpoints"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(kube_secret_created)",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "Secrets",
              "refId": "Secrets"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(sum by (namespace)(kube_pod_status_ready{condition=\"true\"}))",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "Namespaces",
              "refId": "Namespaces"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(kube_service_info)",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "Services",
              "refId": "Services"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(count by (image)(rate(container_cpu_usage_seconds_total{image!=\"\"}[$__interval])))",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "Images",
              "refId": "Images"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(kube_pod_status_ready{condition=\"true\",pod!=\"\"})",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "PODs",
              "refId": "POD"
            }
          ],
          "transparent": true,
          "type": "stat"
        },
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 14,
            "x": 0,
            "y": 7
          },
          "id": 958,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.3",
          "title": "Pod Kind",
          "type": "text"
        },
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 10,
            "x": 14,
            "y": 7
          },
          "id": 962,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.3",
          "title": "Service Kind",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green",
                    "value": null
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              }
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 14,
            "x": 0,
            "y": 8
          },
          "id": 953,
          "options": {
            "colorMode": "none",
            "graphMode": "none",
            "justifyMode": "center",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value_and_name"
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sum by(created_by_kind)(kube_pod_info)",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{created_by_kind}}",
              "refId": "created_by_kind"
            }
          ],
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green",
                    "value": null
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              }
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 10,
            "x": 14,
            "y": 8
          },
          "id": 963,
          "options": {
            "colorMode": "none",
            "graphMode": "none",
            "justifyMode": "center",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value_and_name"
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sum by (type)(kube_service_spec_type)",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "{{type}}",
              "refId": "Type"
            }
          ],
          "transparent": true,
          "type": "stat"
        }
      ],
      "title": "OVERVIEW",
      "type": "row"
    },
    {
      "collapsed": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 3
      },
      "id": 965,
      "panels": [
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 12,
            "x": 0,
            "y": 4
          },
          "id": 23,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.1",
          "title": "CPU Usage",
          "type": "text"
        },
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 12,
            "x": 12,
            "y": 4
          },
          "id": 24,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.1",
          "title": "Memory Usage",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "palette-classic"
              },
              "custom": {
                "axisLabel": "",
                "axisPlacement": "auto",
                "barAlignment": 0,
                "drawStyle": "bars",
                "fillOpacity": 0,
                "gradientMode": "none",
                "hideFrom": {
                  "legend": false,
                  "tooltip": false,
                  "viz": false
                },
                "lineInterpolation": "linear",
                "lineWidth": 1,
                "pointSize": 5,
                "scaleDistribution": {
                  "type": "linear"
                },
                "showPoints": "auto",
                "spanNulls": false,
                "stacking": {
                  "group": "A",
                  "mode": "none"
                },
                "thresholdsStyle": {
                  "mode": "off"
                }
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percentunit"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 5
          },
          "id": 28,
          "interval": "$interval",
          "options": {
            "legend": {
              "calcs": [],
              "displayMode": "hidden",
              "placement": "bottom"
            },
            "tooltip": {
              "mode": "single"
            }
          },
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": true,
              "expr": "sum(rate(container_cpu_usage_seconds_total{id=\"/\"}[$__interval]))/sum(kube_node_status_capacity_cpu_cores) *100",
              "format": "time_series",
              "instant": false,
              "interval": "",
              "legendFormat": "Usage",
              "refId": "A"
            }
          ],
          "title": "History",
          "transparent": true,
          "type": "timeseries"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              },
              "unit": "CPUs"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 6,
            "y": 5
          },
          "id": 33,
          "options": {
            "colorMode": "none",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sum(kube_node_status_capacity_cpu_cores)",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "title": "Capacity",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 9,
            "y": 5
          },
          "id": 32,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 28,
              "refId": "A"
            }
          ],
          "title": "Last",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "palette-classic"
              },
              "custom": {
                "axisLabel": "",
                "axisPlacement": "auto",
                "barAlignment": 0,
                "drawStyle": "bars",
                "fillOpacity": 0,
                "gradientMode": "none",
                "hideFrom": {
                  "legend": false,
                  "tooltip": false,
                  "viz": false
                },
                "lineInterpolation": "linear",
                "lineWidth": 1,
                "pointSize": 5,
                "scaleDistribution": {
                  "type": "linear"
                },
                "showPoints": "auto",
                "spanNulls": false,
                "stacking": {
                  "group": "A",
                  "mode": "none"
                },
                "thresholdsStyle": {
                  "mode": "off"
                }
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 12,
            "y": 5
          },
          "id": 40,
          "options": {
            "legend": {
              "calcs": [],
              "displayMode": "hidden",
              "placement": "bottom"
            },
            "tooltip": {
              "mode": "single"
            }
          },
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": true,
              "expr": "sum(container_memory_usage_bytes{id=\"/\"})/sum(kube_node_status_capacity_memory_bytes) *100",
              "interval": "",
              "legendFormat": "Usage",
              "refId": "A"
            }
          ],
          "title": "History",
          "transparent": true,
          "type": "timeseries"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              },
              "unit": "decbytes"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 18,
            "y": 5
          },
          "id": 38,
          "options": {
            "colorMode": "none",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sum(kube_node_status_capacity_memory_bytes)",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "title": "Capacity",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 21,
            "y": 5
          },
          "id": 39,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 40,
              "refId": "A"
            }
          ],
          "title": "Last",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 6,
            "y": 8
          },
          "id": 34,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "min"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 28,
              "refId": "A"
            }
          ],
          "title": "Min",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 8,
            "y": 8
          },
          "id": 968,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "mean"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 28,
              "refId": "A"
            }
          ],
          "title": "Avg",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 10,
            "y": 8
          },
          "id": 35,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "max"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 28,
              "refId": "A"
            }
          ],
          "title": "Max",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 18,
            "y": 8
          },
          "id": 41,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "min"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 40,
              "refId": "A"
            }
          ],
          "title": "Min",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 20,
            "y": 8
          },
          "id": 969,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "mean"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 40,
              "refId": "A"
            }
          ],
          "title": "Avg",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 22,
            "y": 8
          },
          "id": 42,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "max"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 40,
              "refId": "A"
            }
          ],
          "title": "Max",
          "transparent": true,
          "type": "stat"
        },
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 12,
            "x": 0,
            "y": 11
          },
          "id": 58,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.1",
          "title": "Fs Usage",
          "type": "text"
        },
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 12,
            "x": 12,
            "y": 11
          },
          "id": 26,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.1",
          "title": "Network Usage",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "palette-classic"
              },
              "custom": {
                "axisLabel": "",
                "axisPlacement": "auto",
                "barAlignment": 0,
                "drawStyle": "bars",
                "fillOpacity": 0,
                "gradientMode": "none",
                "hideFrom": {
                  "legend": false,
                  "tooltip": false,
                  "viz": false
                },
                "lineInterpolation": "linear",
                "lineWidth": 1,
                "pointSize": 5,
                "scaleDistribution": {
                  "type": "linear"
                },
                "showPoints": "auto",
                "spanNulls": false,
                "stacking": {
                  "group": "A",
                  "mode": "none"
                },
                "thresholdsStyle": {
                  "mode": "off"
                }
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 0,
            "y": 12
          },
          "id": 51,
          "options": {
            "legend": {
              "calcs": [],
              "displayMode": "hidden",
              "placement": "bottom"
            },
            "tooltip": {
              "mode": "single"
            }
          },
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": true,
              "expr": "sum(container_fs_usage_bytes{id=\"/\"})/sum(container_fs_limit_bytes{id=\"/\"})*100",
              "interval": "",
              "legendFormat": "Usage",
              "refId": "A"
            }
          ],
          "title": "History",
          "transparent": true,
          "type": "timeseries"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              },
              "unit": "decbytes"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 6,
            "y": 12
          },
          "id": 52,
          "options": {
            "colorMode": "none",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": true,
              "expr": "sum(container_fs_limit_bytes{id=\"/\"})",
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "title": "Capacity",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 9,
            "y": 12
          },
          "id": 53,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 51,
              "refId": "A"
            }
          ],
          "title": "Last",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "palette-classic"
              },
              "custom": {
                "axisLabel": "",
                "axisPlacement": "auto",
                "barAlignment": 0,
                "drawStyle": "line",
                "fillOpacity": 0,
                "gradientMode": "none",
                "hideFrom": {
                  "legend": false,
                  "tooltip": false,
                  "viz": false
                },
                "lineInterpolation": "linear",
                "lineStyle": {
                  "fill": "solid"
                },
                "lineWidth": 1,
                "pointSize": 5,
                "scaleDistribution": {
                  "type": "linear"
                },
                "showPoints": "auto",
                "spanNulls": false,
                "stacking": {
                  "group": "A",
                  "mode": "none"
                },
                "thresholdsStyle": {
                  "mode": "off"
                }
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "Bps"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 12,
            "y": 12
          },
          "id": 59,
          "interval": "$interval",
          "options": {
            "legend": {
              "calcs": [
                "last",
                "min",
                "mean",
                "max"
              ],
              "displayMode": "table",
              "placement": "bottom"
            },
            "tooltip": {
              "mode": "single"
            }
          },
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": true,
              "expr": "sum(rate(container_network_receive_bytes_total{id=\"/\"}[$__interval]))",
              "interval": "",
              "legendFormat": "Receive",
              "refId": "A"
            },
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": true,
              "expr": "sum(rate(container_network_transmit_bytes_total{id=\"/\"}[$__interval]))",
              "hide": false,
              "interval": "",
              "legendFormat": "Transmit",
              "refId": "B"
            }
          ],
          "transparent": true,
          "type": "timeseries"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 6,
            "y": 15
          },
          "id": 54,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "min"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 51,
              "refId": "A"
            }
          ],
          "title": "Min",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 8,
            "y": 15
          },
          "id": 970,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "mean"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 51,
              "refId": "A"
            }
          ],
          "title": "Avg",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 10,
            "y": 15
          },
          "id": 55,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "max"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 51,
              "refId": "A"
            }
          ],
          "title": "Max",
          "transparent": true,
          "type": "stat"
        },
        {
          "description": "",
          "gridPos": {
            "h": 7,
            "w": 12,
            "x": 0,
            "y": 18
          },
          "id": 680,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.1",
          "transparent": true,
          "type": "text"
        },
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 12,
            "x": 12,
            "y": 18
          },
          "id": 25,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.1",
          "title": "Pods Usage",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "palette-classic"
              },
              "custom": {
                "axisLabel": "",
                "axisPlacement": "auto",
                "barAlignment": 0,
                "drawStyle": "bars",
                "fillOpacity": 0,
                "gradientMode": "none",
                "hideFrom": {
                  "legend": false,
                  "tooltip": false,
                  "viz": false
                },
                "lineInterpolation": "linear",
                "lineWidth": 1,
                "pointSize": 5,
                "scaleDistribution": {
                  "type": "linear"
                },
                "showPoints": "auto",
                "spanNulls": false,
                "stacking": {
                  "group": "A",
                  "mode": "none"
                },
                "thresholdsStyle": {
                  "mode": "off"
                }
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 6,
            "x": 12,
            "y": 19
          },
          "id": 43,
          "options": {
            "legend": {
              "calcs": [],
              "displayMode": "hidden",
              "placement": "bottom"
            },
            "tooltip": {
              "mode": "single"
            }
          },
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(kube_pod_status_ready{condition=\"true\",pod!=\"\"})/sum(kube_node_status_capacity_pods)*100",
              "instant": true,
              "interval": "",
              "legendFormat": "Usage",
              "refId": "A"
            }
          ],
          "title": "History",
          "transparent": true,
          "type": "timeseries"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              },
              "unit": "PODs"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 18,
            "y": 19
          },
          "id": 44,
          "options": {
            "colorMode": "none",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sum(kube_node_status_capacity_pods)",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "title": "Capacity",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 3,
            "x": 21,
            "y": 19
          },
          "id": 45,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 43,
              "refId": "A"
            }
          ],
          "title": "Last",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 18,
            "y": 22
          },
          "id": 46,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "min"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 43,
              "refId": "A"
            }
          ],
          "title": "Min",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 20,
            "y": 22
          },
          "id": 971,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "mean"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 43,
              "refId": "A"
            }
          ],
          "title": "Avg",
          "transparent": true,
          "type": "stat"
        },
        {
          "datasource": {
            "type": "datasource",
            "uid": "-- Dashboard --"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "#EAB839",
                    "value": 70
                  },
                  {
                    "color": "red",
                    "value": 90
                  }
                ]
              },
              "unit": "percent"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 3,
            "w": 2,
            "x": 22,
            "y": 22
          },
          "id": 47,
          "options": {
            "colorMode": "background",
            "graphMode": "none",
            "justifyMode": "auto",
            "orientation": "auto",
            "reduceOptions": {
              "calcs": [
                "max"
              ],
              "fields": "",
              "values": false
            },
            "textMode": "value"
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "datasource",
                "uid": "-- Dashboard --"
              },
              "panelId": 43,
              "refId": "A"
            }
          ],
          "title": "Max",
          "transparent": true,
          "type": "stat"
        }
      ],
      "title": "BY CLUSTER",
      "type": "row"
    },
    {
      "collapsed": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 4
      },
      "id": 957,
      "panels": [
        {
          "gridPos": {
            "h": 1,
            "w": 24,
            "x": 0,
            "y": 5
          },
          "id": 973,
          "options": {
            "content": "",
            "mode": "markdown"
          },
          "pluginVersion": "8.3.1",
          "title": "Last Usage",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "palette-classic"
              },
              "custom": {
                "axisLabel": "",
                "axisPlacement": "auto",
                "barAlignment": 0,
                "drawStyle": "line",
                "fillOpacity": 0,
                "gradientMode": "none",
                "hideFrom": {
                  "legend": false,
                  "tooltip": false,
                  "viz": false
                },
                "lineInterpolation": "linear",
                "lineWidth": 1,
                "pointSize": 5,
                "scaleDistribution": {
                  "type": "linear"
                },
                "showPoints": "auto",
                "spanNulls": false,
                "stacking": {
                  "group": "A",
                  "mode": "none"
                },
                "thresholdsStyle": {
                  "mode": "off"
                }
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "transparent"
                  },
                  {
                    "color": "semi-dark-red",
                    "value": 0
                  },
                  {
                    "color": "semi-dark-green",
                    "value": 1
                  }
                ]
              }
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 0,
            "y": 6
          },
          "id": 934,
          "options": {
            "legend": {
              "calcs": [
                "last",
                "min",
                "mean",
                "max"
              ],
              "displayMode": "table",
              "placement": "bottom"
            },
            "tooltip": {
              "mode": "single"
            }
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "count(sum by (node)(container_cpu_usage_seconds_total)>0)",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{node}}",
              "refId": "A"
            }
          ],
          "title": "Ready Worker",
          "transformations": [],
          "transparent": true,
          "type": "timeseries"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "max": 1,
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "percentunit"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 12,
            "y": 6
          },
          "id": 849,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(sum by (node)(rate(container_cpu_usage_seconds_total{id=\"/\"}[$__interval]))/sum by (node)(kube_node_status_capacity_cpu_cores))",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{node}}",
              "refId": "A"
            }
          ],
          "title": "CPU Usage",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "max": 1,
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "percentunit"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 0,
            "y": 11
          },
          "id": 937,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(sum by (node)(rate(container_memory_usage_bytes{id=\"/\"}[$__interval]))/sum by (node)(kube_node_status_capacity_memory_bytes))",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{node}}",
              "refId": "A"
            }
          ],
          "title": "Memory Usage",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "max": 1,
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "percentunit"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 12,
            "y": 11
          },
          "id": 938,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(sum by  (node)(container_fs_usage_bytes{id=\"/\"})/sum by (node)(container_fs_limit_bytes{id=\"/\"}))",
              "instant": true,
              "interval": "",
              "legendFormat": "{{node}}",
              "refId": "A"
            }
          ],
          "title": "Fs Usage",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "Bps"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 0,
            "y": 16
          },
          "id": 939,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(sum by (node)(rate(container_network_receive_bytes_total{id=\"/\"}[$__interval])))",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}}",
              "refId": "A"
            }
          ],
          "title": "Network Receive",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "Bps"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 12,
            "y": 16
          },
          "id": 940,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(sum by (node)(rate(container_network_transmit_bytes_total{id=\"/\"}[$__interval])))",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{node}}",
              "refId": "A"
            }
          ],
          "title": "Network Transmit",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "gridPos": {
            "h": 1,
            "w": 24,
            "x": 0,
            "y": 21
          },
          "id": 974,
          "options": {
            "content": "",
            "mode": "markdown"
          },
          "pluginVersion": "8.3.1",
          "title": "Total Usage",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "s"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 0,
            "y": 22
          },
          "id": 975,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(sum by (node)(container_cpu_usage_seconds_total{id=\"/\"}))",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{node}}",
              "refId": "A"
            }
          ],
          "title": "CPU Usage",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "decbytes"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 5,
            "w": 12,
            "x": 12,
            "y": 22
          },
          "id": 976,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(sum by (node)(container_memory_usage_bytes{id=\"/\"}))",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{node}}",
              "refId": "A"
            }
          ],
          "title": "Memory Usage",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        }
      ],
      "title": "BY WORKER",
      "type": "row"
    },
    {
      "collapsed": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 5
      },
      "id": 955,
      "panels": [
        {
          "gridPos": {
            "h": 1,
            "w": 24,
            "x": 0,
            "y": 6
          },
          "id": 982,
          "options": {
            "content": "",
            "mode": "markdown"
          },
          "pluginVersion": "8.3.1",
          "title": "Request / Limit",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "max": 1,
              "min": 0,
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "percentunit"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 0,
            "y": 7
          },
          "id": 991,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort(kube_pod_container_resource_requests_cpu_cores{namespace=\"${namespace}\"}/kube_pod_container_resource_limits_cpu_cores{namespace=\"${namespace}\"})",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "CPU Usage",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "max": 1,
              "min": 0,
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "percentunit"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 12,
            "y": 7
          },
          "id": 992,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort(kube_pod_container_resource_requests_memory_bytes{namespace=\"${namespace}\"}/kube_pod_container_resource_limits_memory_bytes{namespace=\"${namespace}\"})",
              "format": "time_series",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "Memory Usage",
          "transformations": [],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "gridPos": {
            "h": 1,
            "w": 24,
            "x": 0,
            "y": 13
          },
          "id": 983,
          "options": {
            "content": "",
            "mode": "markdown"
          },
          "pluginVersion": "8.3.1",
          "title": "Last Usage",
          "type": "text"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "custom": {
                "align": "auto",
                "displayMode": "color-background",
                "filterable": false
              },
              "mappings": [
                {
                  "options": {
                    "0": {
                      "index": 1,
                      "text": "Not Ready"
                    },
                    "1": {
                      "index": 0,
                      "text": "Ready"
                    }
                  },
                  "type": "value"
                }
              ],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "transparent"
                  },
                  {
                    "color": "semi-dark-red",
                    "value": 0
                  },
                  {
                    "color": "semi-dark-green",
                    "value": 1
                  }
                ]
              }
            },
            "overrides": [
              {
                "matcher": {
                  "id": "byName",
                  "options": "Status"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 89
                  }
                ]
              },
              {
                "matcher": {
                  "id": "byName",
                  "options": "namespace"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 189
                  }
                ]
              }
            ]
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 0,
            "y": 14
          },
          "id": 843,
          "options": {
            "footer": {
              "fields": "",
              "reducer": [
                "sum"
              ],
              "show": false
            },
            "showHeader": true,
            "sortBy": []
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort(kube_pod_status_ready{condition=\"true\",namespace=\"${namespace}\"})",
              "format": "table",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "Status",
          "transformations": [
            {
              "id": "filterFieldsByName",
              "options": {
                "include": {
                  "names": [
                    "namespace",
                    "pod",
                    "Value #A"
                  ]
                }
              }
            },
            {
              "id": "organize",
              "options": {
                "excludeByName": {},
                "indexByName": {},
                "renameByName": {
                  "Value #A": "Status"
                }
              }
            }
          ],
          "transparent": true,
          "type": "table"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "s"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 12,
            "y": 14
          },
          "id": 935,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(rate(container_cpu_usage_seconds_total{pod!=\"\",namespace=\"${namespace}\"}[$__interval]))",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "CPU Usage",
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "decbytes"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 0,
            "y": 20
          },
          "id": 844,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(rate(container_memory_usage_bytes{container=\"\",pod!=\"\",namespace=\"${namespace}\"}[$__interval]))",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "Memory Usage",
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "decbytes"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 12,
            "y": 20
          },
          "id": 845,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(container_fs_usage_bytes{pod!=\"\",namespace=\"${namespace}\"})",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "Fs Usage",
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "Bps"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 0,
            "y": 26
          },
          "id": 847,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(rate(container_network_receive_bytes_total{pod!=\"\",namespace=\"${namespace}\"}[$__interval]))",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "Network Receive",
          "transformations": [
            {
              "id": "concatenate",
              "options": {}
            }
          ],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "decimals": 2,
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  }
                ]
              },
              "unit": "Bps"
            },
            "overrides": []
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 12,
            "y": 26
          },
          "id": 848,
          "options": {
            "displayMode": "gradient",
            "orientation": "horizontal",
            "reduceOptions": {
              "calcs": [
                "last"
              ],
              "fields": "",
              "values": false
            },
            "showUnfilled": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort_desc(rate(container_network_transmit_bytes_total{pod!=\"\",namespace=\"${namespace}\"}[$__interval]))",
              "instant": true,
              "interval": "",
              "legendFormat": "{{namespace}} / {{pod}}",
              "refId": "A"
            }
          ],
          "title": "Network Transmit",
          "transformations": [
            {
              "id": "concatenate",
              "options": {}
            }
          ],
          "transparent": true,
          "type": "bargauge"
        },
        {
          "description": "",
          "gridPos": {
            "h": 1,
            "w": 4,
            "x": 0,
            "y": 32
          },
          "id": 95,
          "options": {
            "content": "",
            "mode": "html"
          },
          "pluginVersion": "8.3.1",
          "transparent": true,
          "type": "text"
        }
      ],
      "title": "BY POD",
      "type": "row"
    },
    {
      "collapsed": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 6
      },
      "id": 985,
      "panels": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "custom": {
                "align": "auto",
                "displayMode": "color-background",
                "filterable": false
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "transparent"
                  },
                  {
                    "color": "semi-dark-red",
                    "value": 0
                  },
                  {
                    "color": "semi-dark-green",
                    "value": 1
                  }
                ]
              }
            },
            "overrides": [
              {
                "matcher": {
                  "id": "byName",
                  "options": "Status"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 89
                  }
                ]
              },
              {
                "matcher": {
                  "id": "byName",
                  "options": "namespace"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 189
                  }
                ]
              },
              {
                "matcher": {
                  "id": "byName",
                  "options": "pod"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 333
                  }
                ]
              },
              {
                "matcher": {
                  "id": "byName",
                  "options": "phase"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 115
                  }
                ]
              }
            ]
          },
          "gridPos": {
            "h": 6,
            "w": 12,
            "x": 0,
            "y": 5
          },
          "id": 986,
          "maxPerRow": 2,
          "options": {
            "footer": {
              "fields": "",
              "reducer": [
                "sum"
              ],
              "show": false
            },
            "showHeader": true,
            "sortBy": [
              {
                "desc": false,
                "displayName": "phase"
              }
            ]
          },
          "pluginVersion": "8.3.1",
          "repeat": "pod_kind",
          "repeatDirection": "h",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sort(kube_pod_status_phase{namespace=~\"$namespace\",pod!=\"\"}>0) * on (pod) group_left(created_by_kind)(kube_pod_info{namespace=~\"$namespace\",pod!=\"\",created_by_kind=\"${pod_kind}\"})",
              "format": "table",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "title": "${pod_kind}",
          "transformations": [
            {
              "id": "filterFieldsByName",
              "options": {
                "include": {
                  "names": [
                    "namespace",
                    "phase",
                    "pod"
                  ]
                }
              }
            },
            {
              "id": "organize",
              "options": {
                "excludeByName": {},
                "indexByName": {
                  "namespace": 0,
                  "phase": 2,
                  "pod": 1
                },
                "renameByName": {}
              }
            }
          ],
          "transparent": true,
          "type": "table"
        }
      ],
      "title": "BY POD KIND",
      "type": "row"
    },
    {
      "collapsed": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 7
      },
      "id": 997,
      "panels": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "custom": {
                "align": "auto",
                "displayMode": "auto"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              }
            },
            "overrides": [
              {
                "matcher": {
                  "id": "byName",
                  "options": "namespace"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 124
                  }
                ]
              },
              {
                "matcher": {
                  "id": "byName",
                  "options": "pod"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 364
                  }
                ]
              }
            ]
          },
          "gridPos": {
            "h": 4,
            "w": 24,
            "x": 0,
            "y": 8
          },
          "id": 999,
          "options": {
            "footer": {
              "fields": "",
              "reducer": [
                "sum"
              ],
              "show": false
            },
            "showHeader": true,
            "sortBy": []
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "kube_pod_container_status_waiting_reason>0",
              "format": "table",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "title": "POD Status Waiting Reason",
          "transformations": [
            {
              "id": "filterFieldsByName",
              "options": {
                "include": {
                  "names": [
                    "namespace",
                    "pod",
                    "reason"
                  ]
                }
              }
            }
          ],
          "transparent": true,
          "type": "table"
        }
      ],
      "title": "POD Waiting",
      "type": "row"
    },
    {
      "collapsed": true,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 8
      },
      "id": 1003,
      "panels": [
        {
          "datasource": {
            "type": "prometheus",
            "uid": "C3FZCU57k"
          },
          "fieldConfig": {
            "defaults": {
              "color": {
                "mode": "thresholds"
              },
              "custom": {
                "align": "auto",
                "displayMode": "auto"
              },
              "mappings": [],
              "thresholds": {
                "mode": "absolute",
                "steps": [
                  {
                    "color": "green"
                  },
                  {
                    "color": "red",
                    "value": 80
                  }
                ]
              }
            },
            "overrides": []
          },
          "gridPos": {
            "h": 7,
            "w": 12,
            "x": 0,
            "y": 9
          },
          "id": 1001,
          "options": {
            "footer": {
              "fields": "",
              "reducer": [
                "sum"
              ],
              "show": false
            },
            "showHeader": true
          },
          "pluginVersion": "8.3.1",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "kube_persistentvolume_status_phase>0",
              "format": "table",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "title": "Status",
          "transformations": [
            {
              "id": "organize",
              "options": {
                "excludeByName": {
                  "Time": true,
                  "Value #A": true,
                  "__name__": true,
                  "instance": true,
                  "job": true
                },
                "indexByName": {},
                "renameByName": {
                  "persistentvolume": "Name",
                  "phase": "Status"
                }
              }
            }
          ],
          "transparent": true,
          "type": "table"
        }
      ],
      "title": "Persistence Volume",
      "type": "row"
    }
  ],
  "refresh": "",
  "schemaVersion": 34,
  "style": "dark",
  "tags": [
    "kubernetes_dashboard/home"
  ],
  "templating": {
    "list": [
      {
        "current": {
          "selected": false,
          "text": "10m",
          "value": "10m"
        },
        "hide": 2,
        "name": "interval",
        "options": [
          {
            "selected": true,
            "text": "5m",
            "value": "5m"
          }
        ],
        "query": "10m",
        "skipUrlSync": false,
        "type": "textbox"
      },
      {
        "current": {
          "selected": false,
          "text": "All",
          "value": "$__all"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "C3FZCU57k"
        },
        "definition": "label_values(kube_pod_status_ready{condition=\"true\"},namespace)",
        "error": {
          "config": {
            "data": {
              "end": "1641866278",
              "match[]": "kube_pod_status_ready{condition=\"true\"}",
              "start": "1641779878"
            },
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Grafana-Org-Id": 1
            },
            "hideFromInspector": true,
            "method": "POST",
            "retry": 0,
            "url": "api/datasources/proxy/1/api/v1/series"
          },
          "data": {
            "error": "Bad Gateway",
            "message": "Bad Gateway",
            "response": ""
          },
          "message": "Bad Gateway",
          "status": 502,
          "statusText": "Bad Gateway"
        },
        "hide": 0,
        "includeAll": true,
        "multi": false,
        "name": "namespace",
        "options": [],
        "query": {
          "query": "label_values(kube_pod_status_ready{condition=\"true\"},namespace)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "type": "query"
      },
      {
        "current": {
          "selected": false,
          "text": "https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png",
          "value": "https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png"
        },
        "description": "",
        "hide": 2,
        "includeAll": false,
        "multi": false,
        "name": "icon_k8s",
        "options": [
          {
            "selected": true,
            "text": "https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png",
            "value": "https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png"
          }
        ],
        "query": "https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png",
        "skipUrlSync": false,
        "type": "custom"
      },
      {
        "current": {
          "selected": false,
          "text": "All",
          "value": "$__all"
        },
        "datasource": {
          "type": "prometheus",
          "uid": "C3FZCU57k"
        },
        "definition": "label_values(kube_pod_info{created_by_kind!=\"<none>\"},created_by_kind)",
        "error": {
          "config": {
            "data": {
              "end": "1641866278",
              "match[]": "kube_pod_info{created_by_kind!=\"<none>\"}",
              "start": "1641779878"
            },
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Grafana-Org-Id": 1
            },
            "hideFromInspector": true,
            "method": "POST",
            "retry": 0,
            "url": "api/datasources/proxy/1/api/v1/series"
          },
          "data": {
            "error": "Bad Gateway",
            "message": "Bad Gateway",
            "response": ""
          },
          "message": "Bad Gateway",
          "status": 502,
          "statusText": "Bad Gateway"
        },
        "hide": 2,
        "includeAll": true,
        "multi": false,
        "name": "pod_kind",
        "options": [],
        "query": {
          "query": "label_values(kube_pod_info{created_by_kind!=\"<none>\"},created_by_kind)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "type": "query"
      }
    ]
  },
  "time": {
    "from": "now-24h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "HOME",
  "uid": "vr_SEk2nks",
  "version": 2,
  "weekStart": ""
}