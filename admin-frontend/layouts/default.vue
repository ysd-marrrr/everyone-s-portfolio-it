<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-alert v-if="!isSetEnv" prominent type="error">
        <v-row align="center">
          <v-col class="grow"
            >環境変数<code>VUE_APP_ADMIN_TOKEN</code>にAPIキーを設定してサーバーを再起動してください。正しく設定しないとデータの操作ができません。
          </v-col>
        </v-row>
      </v-alert>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: 'mdi-apps',
          title: 'トップ',
          to: '/',
        },
        {
          icon: 'mdi-order-bool-descending-variant',
          title: 'データ管理',
          to: '/portfolios',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'みんなのポートフォリオ 管理画面',
    }
  },
  computed: {
    isSetEnv() {
      return !!process.env.VUE_APP_ADMIN_TOKEN
    },
  },
}
</script>
