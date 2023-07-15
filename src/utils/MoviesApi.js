const apiOptions = {
  urlBase: `https://api.nomoreparties.co/beatfilm-movies`,
};

class MoviesApi {
  constructor(options) {
    this._urlBase = options.urlBase
  }

  async getMovies() {
    try {
      const response = await fetch(this._urlBase)
      if (response.ok) {
        const movies = await response.json()
        return movies;
      }
      throw new Error(`Ошибка!!! статус ${response.status}`)
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new MoviesApi(apiOptions)
