import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// const loadEnvVariables = (mode: string): void => {
//   Object.assign(process.env, loadEnv(mode, process.cwd()))
// };
process.env.HOST = '0.0.0.0';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tsconfigPaths(), svgr()],
    server: {
      host: process.env.HOST,
    },
  };
});
