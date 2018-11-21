
import requests


URL = "http://192.168.99.100:30855/"
PARAMS = {}

while(1):
	r = requests.get(url=URL, params=PARAMS)
	print(r.text)


print('All done, Chief!')

