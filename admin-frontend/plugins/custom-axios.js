export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.headers.Authorization = `Bearer ${process.env.VUE_APP_ADMIN_TOKEN}`
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    console.log('エラーを起こしたリクエスト')
    console.log(error.config)

    if (error.response) {
      console.log('responseあり')
      console.log(error.response)
    } else if (error.request) {
      console.log('requestあり')
      console.log(error.request)
    } else {
      console.log('requestを生成できませんでした')
    }
  })
}
