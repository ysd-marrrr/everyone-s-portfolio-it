# admin-batch

Webページのスクリーンショットを撮ってDBに登録する。

## ビルド方法

起動前にコンテナをビルドして準備する必要がある。

```bash
docker-compose up --build admin-batch
docker-compose run admin-batch yarn install
```

## 起動方法

### 指定されたURLのスクリーンショットを撮る

```bash
docker-compose run admin-batch yarn puppeteer
```

### 指定されたURLのスクリーンショットを撮って追加する(要DB)

既に撮っている場合は更新する。

### 画像がないページのスクリーンショットを撮って追加する(要DB)

DBに問い合わせて画像がないレコードに対してすべてスクリーンショットを撮影して追加する。