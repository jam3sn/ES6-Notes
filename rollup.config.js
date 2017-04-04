import buble from 'rollup-plugin-buble';

export default{

    entry: 'src/main.js',
    dest: 'src/main.dist.js',
    plugins: [buble()]

}
