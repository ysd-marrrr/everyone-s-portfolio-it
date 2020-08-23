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

  async editPortfolio(portfolioData) {
    if (portfolioData.id === 0) {
      return await this.axios
        .$post(`/portfolios`, {
          title: portfolioData.title,
          url: portfolioData.url,
        })
        .then(() => {
          return {
            message: '',
          }
        })
        .catch((error) => {
          return {
            message: `追加に失敗しました(${error})`,
          }
        })
    } else {
      return await this.axios
        .$put(`/portfolios/${portfolioData.id}`, portfolioData)
        .then(() => {
          return {
            message: '',
          }
        })
        .catch((error) => {
          return {
            message: `編集に失敗しました(${error})`,
          }
        })
    }
  }

  async deletePortfolio(portfolioId) {
    const res = await this.axios
      .$delete(`/portfolios/${portfolioId}`)
      .then(() => {
        return {
          message: '',
        }
      })
      .catch((error) => {
        return {
          message: `削除に失敗しました(${error})`,
        }
      })
    return res
  }
}
