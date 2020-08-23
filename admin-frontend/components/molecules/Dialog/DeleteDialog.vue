<template>
  <v-dialog :value="dialogProp" max-width="400" @click:outside="cancel">
    <v-card>
      <v-card-title class="headline">ポートフォリオを削除</v-card-title>
      <v-card-text v-if="deleteItemProp">
        次のポートフォリオを削除します。この操作は元に戻せません。
        <ul>
          <li>id: {{ deleteItemProp.id }}</li>
          <li>title: {{ deleteItemProp.title }}</li>
          <li>url: {{ deleteItemProp.url }}</li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="cancel">
          いいえ
        </v-btn>
        <v-btn color="green darken-1" text @click="execDelete">
          はい
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    dialogProp: {
      type: Boolean,
      default: false,
    },
    deleteItemProp: {
      type: Object,
      default() {
        return {
          id: 0,
          title: 'default value',
          url: 'http://127.0.0.1',
        }
      },
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    cancel() {
      this.$emit('deleteCancel')
    },
    execDelete() {
      this.$emit('deleteExecute')
    },
  },
})
</script>
