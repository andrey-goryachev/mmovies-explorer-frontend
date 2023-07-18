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
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    })
  }

  updateUser(name, email) {
    return fetch(`${this._urlBase}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    });
  }

  getSavedMovies() {
    return fetch(`${this._urlBase}/movies`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    });
  }

  saveMovie(movie) {
    return fetch(`${this._urlBase}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        year: movie.year,
        description: movie.description,
        duration: movie.duration,
        image: movie.image,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: movie.id,
      })
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    });
  }

  deleteMovie(movieId) {
    return fetch(`${this._urlBase}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result.message);
    });
  }
}

const mainApi = new MainApi(apiOptions)
export default mainApi
