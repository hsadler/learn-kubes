

# LOADTEST KUBES CLUSTER VS. BARE DOCKER INSTANCE
# abandoned: using node.js instead for concurrent requests


import requests

r = requests.get("http://192.168.99.100:32294/")
print(r.status_code)
print(r.headers)
print(r.content)

