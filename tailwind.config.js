/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darkblue':{
        100:'hsl(217, 28%, 15%)', //(intro and email sign up background)
        200:' hsl(218, 28%, 13%)', //(main background)
        300:'hsl(216, 53%, 9%)', //(footer background)
        400:' hsl(219, 30%, 18%)', //(testimonials background)
      },
        'slate':'#94a3b8',
        'cyan-gradient':'hsl(176, 68%, 64%)',
        'blue-gradient':'hsl(198, 60%, 50%)',
        'error':'hsl(0, 100%, 63%)',
        'white':'hsl(0, 0%, 100%)',
        
    },
    fontFamily:{
      'raleway':['Raleway','san-serif']
    },
  },
  plugins: [],
}

