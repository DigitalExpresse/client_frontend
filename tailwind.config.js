module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',                 // Fichiers dans le répertoire racine
    './src/pages/**/*.{js,jsx,ts,tsx}',           // Fichiers dans le répertoire "pages" et ses sous-dossiers
    './src/components/**/*.{js,jsx,ts,tsx}',      // Fichiers dans le répertoire "components" et ses sous-dossiers
    './src/sections/**/*.{js,jsx,ts,tsx}',        // Fichiers dans le répertoire "sections" et ses sous-dossiers
  ],
  theme: {
    extend: {},

      screens: {
          'xs': '520px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
      },

      colors: {
          primaire: '#1d252d',
          secondaire: '#1c1b1b',
          white: '#ffffff',
          tertiary: '#427bc7',
          black: '#000000',
          bgGray: 'rgba(241,241,241,0.45)',
          grayLight: 'rgba(0, 0, 0, 0.5)',
          ligth: 'rgba(73,71,71,0.78)',
          dark: '#0c1226',
          grayLighter: '#f1f1f1',
          danger : '#ff0000',
        },

      fontSize: {
           'xxs': '.7rem',
          'xs': '.75rem',
          'sm': '.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.5rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
      },

        fontFamily: {
            'rufina': ['Rufina', 'sans-serif'],
            'serif': ['Merriweather', 'serif'],
        },

        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            'md': '0.375rem',
            'lg': '0.5rem',
            'xl': '0.75rem',
        },

         maxWidth: {
            'none': 'none',
             'xxs': '16rem',
            'xs': '20rem',
            'sm': '24rem',
            'md': '28rem',
            'lg': '32rem',
            'xl': '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
             'full': '100%',
         },

      minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            '50px': '50px',
            '100px': '100px',
            '150px': '150px',
            '200px': '200px',
            '250px': '250px',
            '300px': '300px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
      },

      maxHeight: {
          '0': '0',
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
          'full': '100%',
          '50px': '50px',
          '100px': '100px',
          '150px': '150px',
          '200px': '200px',
          '250px': '250px',
          '300px': '300px',
          '350px': '350px',
          '400px': '400px',
          '450px': '450px',
          '500px': '500px',
          '550px': '550px',
          '600px': '600px',
          '700px': '700px',
          '800px': '800px',
          'fit': 'fit-content',

      },

  },
  plugins: [],
};
