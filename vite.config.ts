import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import loaderUtils from 'loader-utils';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
      generateScopedName: (name, filename) => {
        const fileNameOrFolder = filename.match(/index\.module\.(css|scss|sass)$/) ? '[folder]' : '[name]';
        function replacePlaceholders(str) {
          const replacementMap = {
            '\\[name\\]': name,
            '\\[folder\\]': path.basename(path.dirname(filename)),
            '\\[hash\\]': hash,
          };

          for (const placeholder in replacementMap) {
            str = str.replace(new RegExp(placeholder, 'g'), replacementMap[placeholder]);
          }

          return str;
        }
        // Create a hash based on the file location and class name. Will be unique across a project, and close to globally unique.
        const relativePath = path.relative(__dirname, filename) + name;
        const hash = loaderUtils.getHashDigest(Buffer.from(relativePath), 'md5', 'base32', 5);
        // Use loaderUtils to find the file or folder name
        // Use hash to find the file or folder name
        const className = replacePlaceholders(fileNameOrFolder + '_' + name + '__' + hash);
        // Remove the .module that appears in every classname when based on the file and replace all "." with "_".
        return className.replace('.module_', '_').replace(/\./g, '_');
      },
      globalModulePaths: [/\.\/componentB\.module\.css$/],
    },
  },
});
