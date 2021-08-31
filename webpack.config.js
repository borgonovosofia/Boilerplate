const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // manera en la que se compilará el output
    mode: 'development',
    // que es lo que tiene que compilar
    entry: path.join(__dirname, "src", "index.js"),
    // donde dejar la version complada
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {//plugin para css
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {//para importar archivos
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ["file-loader"],
            },
            {//empaquetar los svg para poder mandarlos al navegador
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}