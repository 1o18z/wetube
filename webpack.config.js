const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");
// console.log(path.resolve(__dirname, "assets", "js"));
module.exports = {
    entry: {
        main : "./src/client/js/main.js", 
        videoPlayer: "./src/client/js/videoPlayer.js",
        recorder: "./src/client/js/recorder.js",
        commentSection: "./src/client/js/commentSection.js",
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/styles.css",
    })],
    mode: "development",
    watch: true,    // refresh와 compile 다시 해줌!
    output: {
        filename: "js/[name].js",   // [name]이라고 적으면 위 entry에 있는 이름 가져옴
        path: path.resolve(__dirname, "assets"),    // 작업이 끝난 후에 파일을 저장할 디렉토리
        clean: true,    // ouput 폴더를 build 전에 clean 해줌
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env", {targets: "defaults"}]],

                    },
                },
            },
            {   //여기가 rule로, webpack에서 어떻게 처리할건지 알려주는 역할
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                // webpack은 뒤에서부터 실행! (그래서 역순으로 적어줌)
            }
        ],
    },
};