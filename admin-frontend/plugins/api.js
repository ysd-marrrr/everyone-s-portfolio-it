export default function ({ $axios }, inject) {
  const api = new API($axios)

  inject('api', api)
}

class API {
  constructor(axios) {
    this.axios = axios
  }

  async getList(page = 1, size = 20) {
    const res = await this.axios
      .$get(`/portfolios?page=${page}&size=${size}`)
      .then((response) => {
        return {
          portfolioData: response,
          message: '',
        }
      })
      .catch((error) => {
        return {
          portfolioData: [],
          message: `取得に失敗しました(${error})`,
        }
      })
    return res
  }
}
