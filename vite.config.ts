import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            {
                find: 'react-module',
                replacement: '/src/core',
            },
        ],
    },

    /**打包 */
    build: {
        /**更小 */
        minify: true,
        sourcemap: true,
        // outDir: 'build',
    },
    /**服务 */
    server: {
        port: 8080,
    },

    plugins: [react(), WindiCSS()],
});
