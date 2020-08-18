<template>
  <v-dialog :value="dialogProp" max-width="400" @click:outside="cancel">
    <v-card>
      <v-card-title v-if="editItemProp.id === 0" class="headline"
        >ポートフォリオを追加</v-card-title
      >
      <v-card-title v-else class="headline">ポートフォリオを編集</v-card-title>
      <v-card-text v-if="editItemProp">
        <v-container>
          <v-form ref="form">
            <v-row>
              <v-col cols="12" xs="12">
                <v-text-field
                  v-model="editItem.title"
                  label="title"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12">
                <v-text-field
                  v-model="editItem.url"
                  :rules="[rules.required, rules.url]"
                  label="url"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="cancel">
          キャンセル
        </v-btn>
        <v-btn color="green darken-1" text @click="execEdit">
          OK
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <v-row>
          <v-col cols="12" xs="12">
            サムネイル画像は自動的に更新されます。<br />すぐに更新したい場合は追加されたポートフォリオの「操作」メニューから更新を実行してください。
          </v-col>
        </v-row>
      </v-card-text>
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
    editItemProp: {
      type: Object,
      default() {
        return {
          id: 0,
          title: '',
          url: '',
        }
      },
    },
  },
  data() {
    return {
      dialog: false,
      rules: {
        required: (value: string) => !!value || '必須項目です',
        url: (value: string) => {
          // https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url
          const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i
          return pattern.test(value) || 'URLの形ではありません'
        },
      },
    }
  },
  computed: {
    editItem(): {} {
      return this.editItemProp
    },
  },
  methods: {
    cancel() {
      this.$emit('editCancel')
    },
    execEdit() {
      if ((this.$refs.form as any).validate()) {
        this.$emit('editExecute', this.editItem)
      }
    },
  },
})
</script>
