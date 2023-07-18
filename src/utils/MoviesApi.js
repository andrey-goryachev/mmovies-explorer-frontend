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
        return await response.json()
      }
      throw new Error(`Ошибка!!! статус ${response.status}`)
    } catch (e) {
      throw new Error(e)
    }
  }
}

const moviesApi = new MoviesApi(apiOptions)
export default moviesApi
