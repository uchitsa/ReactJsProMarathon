const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-modules-typescript-loader?modules', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.bmp$/, /\.jpe?g$/, /\.png$/],
                use: ['url-loader'],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
};
