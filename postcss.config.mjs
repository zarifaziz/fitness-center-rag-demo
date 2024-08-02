import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const config = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    ['cssnano', {
      preset: 'default',
    }],
  ],
};

export default config;