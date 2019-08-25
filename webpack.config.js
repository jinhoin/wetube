const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

const MODE = process.env.WBPACK_ENV;


// node 자체에서 제공해주는 현재 
const ENTRT_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// dirname 은 전연벽수로 현재 프로젝트 디렉토리이름
const OUTPUT_DIR = path.join(__dirname, "static");
// config파일은 반대로 실행 한다

const config = {
    entry: ["@babel/polyfill", ENTRT_FILE],
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ]
            },
            {
                // 테스트 파일을 알아봐라
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer({
                                    overrideBrowserslist: "cover 99.5%"
                                })];
                            }
                        }
                    },
                    {
                        // 먼저 
                        loader: "sass-loader"
                    }
                ]),
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [
        new ExtractCSS("styles.css")
    ]
}

module.exports = config;