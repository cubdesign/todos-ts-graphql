# backend

## 初期設定

### 環境変数の設定

.env をコピーして、.env ファイルを作成して環境変数を修正する

### DB の初期化

```
yarn prisma migrate dev
```

## script

db generate

```
yarn gen:db -- < input name ... >
```

prisma ui start

```
yarn db:gui
```
