const BASE_URL = 'https://farmageapi.herokuapp.com/api/v1'

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    })
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }
}

export const User = {
  current(){
   return fetch(`${BASE_URL}/users/current`, {
     credentials: 'include'
   }).then(res => res.json()) 
  }, 
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    })
  },
}

export const Field = {
  index() {
    return fetch(`${BASE_URL}/fields`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/fields`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    })
  },
  show(id) {
    return fetch(`${BASE_URL}/fields/${id}`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  update(id, params) {
    return fetch(`${BASE_URL}/fields/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    })
  },
  destroy(id) {
    return fetch(`${BASE_URL}/fields/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  },
}

export const Polygon = {
  index(id) {
    return fetch(`${BASE_URL}/users/${id}/polygons`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  indexByField(id) {
    return fetch(`${BASE_URL}/fields/${id}/polygons`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  create(id, params) {
    return fetch(`${BASE_URL}/fields/${id}/polygons`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    })
  },
  show(id) {
    return fetch(`${BASE_URL}/polygons/${id}`, {
      credentials: 'include'
    }).then(res => res.json())
  },
  update(id, params) {
    return fetch(`${BASE_URL}/polygons/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    })
  },
  destroy(id) {
    return fetch(`${BASE_URL}/polygons/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  },
}
