const Encore = require('@symfony/webpack-encore');
const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './app/index.tsx')

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    // .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()
    .configureSplitChunks(function (splitChunks) {
        // change the configuration
        // splitChunks.minSize = 0;
    })

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            // the directory where the postcss.config.js file is stored
            config: path.resolve(__dirname, 'postcss.config.js'),
        };
    })

    // uncomment if you use TypeScript
    .enableTypeScriptLoader(function (tsConfig) {
        // You can use this callback function to adjust ts-loader settings
        // https://github.com/TypeStrong/ts-loader/blob/master/README.md#loader-options
        // For example:
        // tsConfig.silent = false
        tsConfig.transpileOnly = true;
    })

    // optionally enable forked type script for faster builds
    // https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
    // requires that you have a tsconfig.json file that is setup correctly.
    // .enableForkedTypeScriptTypesChecking()

    // uncomment if you use React
    .enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    // .autoProvidejQuery()

    .addPlugin(new ESLintPlugin({ exclude: ['node_modules'], emitWarning: true }))
    ;

module.exports = Encore.getWebpackConfig();
