import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  // Use Vercel's server output in production.
  // Keep the default target for the local/Lovable environment.
  nitro: isVercel ? { preset: "vercel" } : true,
});