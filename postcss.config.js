module.exports = {
    plugins: [
        require('postcss-import')({ path: './src/app/styles/' }),
        require('postcss-cssnext')(),
    ],
};
