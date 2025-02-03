import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    ssr: false,
    vite: {
        server: {
            allowedHosts: ['demo.kirato.dev', 'aleducation.be'],
        }
    }
});