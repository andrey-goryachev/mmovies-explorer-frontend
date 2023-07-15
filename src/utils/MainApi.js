const apiOptions = {
  urlBase: `https://api.goryachev.nomoredomains.rocks`,
};

class MainApi {
  constructor(options) {
    this._urlBase = options.urlBase
  }

  createUser({name, email, password}) {
    return fetch(`${this._urlBase}/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        password,
      })
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    })
  }

  login({email, password}) {
    return fetch(`${this._urlBase}/signin`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password,
      })
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    })
  }

  getCurrentUser() {
    return fetch(`${this._urlBase}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    })
  }
}

export default new MainApi(apiOptions)
