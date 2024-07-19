import requests
def fetch_joke():
    response = requests.get('https://api.chucknorris.io/jokes/random')
    joke = response.json()['value']
    return joke