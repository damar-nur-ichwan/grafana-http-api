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
  "id": null,
  "iteration": 1641866964883,
  "links": [
    {
      "asDropdown": false,
      "icon": "external link",
      "includeVars": false,
      "keepTime": false,
      "tags": [
        "kubernetes_dashboard/home"
      ],
      "targetBlank": false,
      "title": "HOME",
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
      "id": 34,
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
                  "options": "Compiler"
                },
                "properties": [
                  {
                    "id": "custom.width",
                    "value": 150
                  }
                ]
              }
            ]
          },
          "gridPos": {
            "h": 4,
            "w": 24,
            "x": 0,
            "y": 3
          },
          "id": 32,
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
                "displayName": "Platform"
              }
            ]
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "kubernetes_build_info",
              "format": "table",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "transformations": [
            {
              "id": "organize",
              "options": {
                "excludeByName": {
                  "Time": true,
                  "Value #A": true,
                  "__name__": true,
                  "endpoint": true,
                  "git_tree_state": true,
                  "job": true,
                  "major": true,
                  "minor": true,
                  "namespace": true,
                  "node": true,
                  "service": true
                },
                "indexByName": {},
                "renameByName": {
                  "build_date": "Build Date",
                  "compiler": "Compiler",
                  "endpoint": "",
                  "git_commit": "GIT Commit",
                  "git_version": "GIT Version",
                  "go_version": "GO Version",
                  "instance": "Instance",
                  "platform": "Platform",
                  "service": "Service"
                }
              }
            }
          ],
          "transparent": true,
          "type": "table"
        }
      ],
      "title": "Build Info",
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
      "id": 30,
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
                "displayMode": "auto",
                "filterable": false
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
            "h": 4,
            "w": 24,
            "x": 0,
            "y": 4
          },
          "id": 15,
          "options": {
            "footer": {
              "fields": "",
              "reducer": [
                "sum"
              ],
              "show": false
            },
            "frameIndex": 0,
            "showHeader": true,
            "sortBy": [
              {
                "desc": false,
                "displayName": "kubeproxy_version"
              }
            ]
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "kube_node_info",
              "format": "table",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "transformations": [
            {
              "id": "filterFieldsByName",
              "options": {
                "include": {
                  "names": [
                    "container_runtime_version",
                    "kernel_version",
                    "kubelet_version",
                    "kubeproxy_version",
                    "node",
                    "os_image"
                  ]
                }
              }
            },
            {
              "id": "groupBy",
              "options": {
                "fields": {
                  "container_runtime_version": {
                    "aggregations": [],
                    "operation": "groupby"
                  },
                  "job": {
                    "aggregations": [],
                    "operation": "groupby"
                  },
                  "kernel_version": {
                    "aggregations": [],
                    "operation": "groupby"
                  },
                  "kubelet_version": {
                    "aggregations": [],
                    "operation": "groupby"
                  },
                  "kubeproxy_version": {
                    "aggregations": [],
                    "operation": "groupby"
                  },
                  "node": {
                    "aggregations": [],
                    "operation": "groupby"
                  },
                  "os_image": {
                    "aggregations": [],
                    "operation": "groupby"
                  }
                }
              }
            },
            {
              "id": "organize",
              "options": {
                "excludeByName": {},
                "indexByName": {
                  "container_runtime_version": 2,
                  "kernel_version": 3,
                  "kubelet_version": 4,
                  "kubeproxy_version": 5,
                  "node": 0,
                  "os_image": 1
                },
                "renameByName": {
                  "container_runtime_version": "Container Runtime Version",
                  "kernel_version": "Kernel Version",
                  "kubelet_version": "Kubelet Version",
                  "kubeproxy_version": "Kubeproxy Version",
                  "node": "Node",
                  "os_image": "OS Image"
                }
              }
            }
          ],
          "transparent": true,
          "type": "table"
        }
      ],
      "title": "Worker",
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
      "id": 28,
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
                "displayMode": "auto",
                "filterable": false
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
            "h": 4,
            "w": 24,
            "x": 0,
            "y": 5
          },
          "id": 21,
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
                "displayName": "namespace"
              }
            ]
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "kube_service_info{namespace=~\"$Namespace\"}",
              "format": "table",
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "A"
            }
          ],
          "transformations": [
            {
              "id": "organize",
              "options": {
                "excludeByName": {
                  "Time": true,
                  "Value #A": true,
                  "instance": true,
                  "job": true,
                  "type": false
                },
                "indexByName": {
                  "cluster_ip": 3,
                  "namespace": 0,
                  "service": 1,
                  "type": 2
                },
                "renameByName": {
                  "cluster_ip": "Cluster IP",
                  "namespace": "Namespace",
                  "service": "Service"
                }
              }
            }
          ],
          "transparent": true,
          "type": "table"
        }
      ],
      "title": "Service",
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
      "id": 26,
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
                "displayMode": "auto",
                "filterable": false
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
            "h": 9,
            "w": 24,
            "x": 0,
            "y": 6
          },
          "id": 23,
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
                "displayName": "namespace"
              }
            ]
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "kube_pod_info{namespace=~\"$Namespace\",pod!=\"\"}",
              "format": "table",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "B"
            }
          ],
          "title": "Information",
          "transformations": [
            {
              "id": "organize",
              "options": {
                "excludeByName": {
                  "Time": true,
                  "Value #B": true,
                  "__name__": true,
                  "instance": true,
                  "job": true,
                  "node": true,
                  "pod": true,
                  "uid": true
                },
                "indexByName": {
                  "Time": 0,
                  "Value #B": 5,
                  "__name__": 6,
                  "created_by_kind": 7,
                  "created_by_name": 8,
                  "host_ip": 2,
                  "instance": 9,
                  "job": 10,
                  "namespace": 1,
                  "node": 3,
                  "pod": 11,
                  "pod_ip": 12,
                  "pod_name": 4,
                  "priority_class": 14,
                  "uid": 13
                },
                "renameByName": {
                  "Time": "",
                  "created_by_kind": "Kind",
                  "created_by_name": "Deployment Name",
                  "host_ip": "Host IP",
                  "instance": "",
                  "namespace": "Namespace",
                  "node": "Node",
                  "pod_ip": "Pod IP",
                  "pod_name": "Pod Name",
                  "priority_class": "Priority Class"
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
              "custom": {
                "align": "auto",
                "displayMode": "auto",
                "filterable": false
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
            "h": 9,
            "w": 24,
            "x": 0,
            "y": 15
          },
          "id": 24,
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
                "displayName": "namespace"
              }
            ]
          },
          "pluginVersion": "8.3.3",
          "targets": [
            {
              "datasource": {
                "type": "prometheus",
                "uid": "C3FZCU57k"
              },
              "exemplar": false,
              "expr": "sum by (namespace,pod_name,container,image)(kube_pod_container_info{namespace=~\"$Namespace\"})",
              "format": "table",
              "hide": false,
              "instant": true,
              "interval": "",
              "legendFormat": "",
              "refId": "B"
            }
          ],
          "title": "Container - Image",
          "transformations": [
            {
              "id": "organize",
              "options": {
                "excludeByName": {
                  "Time": true,
                  "Value #B": true
                },
                "indexByName": {
                  "Time": 0,
                  "Value #B": 5,
                  "container": 3,
                  "image": 4,
                  "namespace": 1,
                  "pod_name": 2
                },
                "renameByName": {
                  "container": "Container",
                  "image": "Image",
                  "namespace": "Namespace",
                  "pod_name": "Pod Name"
                }
              }
            }
          ],
          "transparent": true,
          "type": "table"
        }
      ],
      "title": "Pod",
      "type": "row"
    }
  ],
  "refresh": "",
  "schemaVersion": 34,
  "style": "dark",
  "tags": [
    "kubernetes_info"
  ],
  "templating": {
    "list": [
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
        "definition": "label_values(kube_pod_status_ready,namespace)",
        "error": {
          "config": {
            "data": {
              "end": "1641866955",
              "match[]": "kube_pod_status_ready",
              "start": "1641845355"
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
        "name": "Namespace",
        "options": [],
        "query": {
          "query": "label_values(kube_pod_status_ready,namespace)",
          "refId": "StandardVariableQuery"
        },
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "type": "query"
      },
      {
        "current": {
          "selected": true,
          "text": "https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png",
          "value": "https://seeklogo.com/images/K/kubernetes-logo-3A67038EAB-seeklogo.com.png"
        },
        "hide": 2,
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
        "type": "textbox"
      }
    ]
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "INFO",
  "uid": "y6gQw2hn",
  "version": 5,
  "weekStart": ""
}