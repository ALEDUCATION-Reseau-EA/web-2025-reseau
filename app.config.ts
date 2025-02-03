import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    vite: {
        server: {
            allowedHosts: ['demo.kirato.dev', 'aleducation.be'],
        }
    }
});
