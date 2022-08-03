/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainpage-background': "url('img/mainpage-background.jpg')",
        'techCore-background': "url('img/techCore-background.jpg')",
        'shadow-background': "url('img/shadow.png')",
        'products-background': "url('img/products-background.jpg')",
        'contact-background': "url('img/contact-background.jpg')",
        'about-background': "url('img/about-background.png')",
        'about-background01': "url('img/about-background01.jpg')",
        'about-background02': "url('img/about-background02.jpg')",
        'about-background03': "url('img/about-background03.jpg')",
       },
       animation:{
        'shake-slow': 'shake 4s cubic-bezier(.36,.07,.19,.97) infinite',
        'shake-slow2': 'shake2 4s cubic-bezier(.36,.07,.19,.97) infinite',
       },
       keyframes:{
         shake:{
           '10%,90%':{transform: 'translate3d(-1px, 0, 0)'},
           '20%,80%':{transform: 'translate3d(2px, 0, 0)'},
           '30%,50%,70%':{transform: 'translate3d(-4px, 0, 0)'},
           '40%,60%':{transform: 'translate3d(4px, 0, 0)'}
         },
         shake2:{
          '10%,90%':{transform: 'translate3d(1px, 0, 0)'},
          '20%,80%':{transform: 'translate3d(-2px, 0, 0)'},
          '30%,50%,70%':{transform: 'translate3d(4px, 0, 0)'},
          '40%,60%':{transform: 'translate3d(-4px, 0, 0)'}
        },
       }
    },
  },
  plugins: [],
}
