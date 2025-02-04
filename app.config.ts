import { defineConfig } from "@solidjs/start/config";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    ssr: false,
    vite: {
        plugins: [
            nodePolyfills(),
        ],
        server: {
            allowedHosts: ['demo.kirato.dev', 'aleducation.be'],
        },
    }
});