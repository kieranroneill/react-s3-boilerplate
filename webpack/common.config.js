'use strict';

const autoprefixer = require('autoprefixer');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// Config.
const strings = require('../config/strings');

const distPath = path.join(__dirname, '..', 'dist');
const srcPath = path.join(__dirname, '..', 'src');
const uriLimit = 50000;

module.exports = {
    commonLoaders: [
        // Handlebars.
        {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        },

        // Assets.
        {
            test: /\.gif/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'image/gif'
            }
        },
        {
            test: /\.jpg/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'image/jpeg'
            }
        },
        {
            test: /\.png$/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'image/png'
            }
        },
        {
            test: /\.svg$/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'image/svg+xml'
            }
        },
        {
            test: /\.woff$/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'application/font-woff'
            }
        },
        {
            test: /\.woff2$/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'application/font-woff2'
            }
        },
        {
            test: /\.[ot]tf$/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'application/octet-stream'
            }
        },
        {
            test: /\.eot$/,
            loader: 'url-loader',
            options: {
                limit: uriLimit,
                mimeType: 'application/vnd.ms-fontobject'
            }
        }
    ],
    commonPlugins: [
        new FaviconsWebpackPlugin({
            logo: path.resolve(srcPath, 'favicon.png'),
            title: strings.document.title
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: () => [
                    autoprefixer({ browsers: ['last 3 versions'] })
                ]
            }
        })
    ],
    devtool: 'source-map',
    distPath: distPath,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    srcPath: srcPath
};
