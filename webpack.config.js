const path = requie('path')
module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}