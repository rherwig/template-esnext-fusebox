import {
    FuseBox,
    BabelPlugin
} from 'fuse-box';

const fuseBox = new FuseBox({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './public/js/app.js.map',
    },
    outFile: './public/js/app.js',
    plugins: [
        BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ['latest'],
                plugins: [
                    'transform-decorators-legacy',
                    'transform-class-properties',
                    'transform-runtime'
                ]
            }
        })
    ]
});

fuseBox.devServer('> index.js', {
    root: 'public'
});