const qiniu  = require("qiniu")
const qiniuUtils = require('../utils/qiniu.js')

// node ./build/official/sync-book-to-qiniu.js $ACCESS_KEY $SECRET_KEY
// Prepare Qiniu configuration options
accessKey = process.argv.slice(2, 3)
secretKey = process.argv.slice(3)

qiniuUtils.uploadFiles({
    accessKey: accessKey,
    secretKey: secretKey
})
