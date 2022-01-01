module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFEBF8',
      },
      backgroundImage: {
        'logo': "url('./Images/logo.svg')",
        'new': "url('./Images/new.svg')",
        'community': "url('./Images/community.svg')",
        'profile': "url('./Images/profile.svg')",
        'search': "url('./Images/search.svg')",
        'heart': "url('./Images/heart.svg')",
        'sphere': "url('./Images/sphere.svg')",
        'bulb': "url('./Images/bulb.svg')",
        'notebook': "url('./Images/notebook.svg')",
        'hash': "url('./Images/hash.svg')",
        'avatar': "url('./Images/avatar.svg')",
        'outline-heart': "url('./Images/outline-heart.svg')",
        'message': "url('./Images/message.svg')",
        'share': "url('./Images/share.svg')",
        'option': "url('./Images/option.svg')",
        'send': "url('./Images/send.svg')",
        'video': "url('./Images/video.svg')",
        'guidelines': "url('./Images/guidelines.svg')",
        'camera': "url('./Images/camera.svg')",
        'pin': "url('./Images/pin.svg')",
        'open': "url('./Images/open.svg')",
        'close': "url('./Images/close.svg')",
        'cancel': "url('./Images/cancel.svg')",
        'add_a_photo': "url('./Images/add_a_photo.svg')",
        'mail': "url('./Images/mail.svg')",
        'speak': "url('./Images/speak.svg')",
        'location': "url('./Images/location.svg')",
        'cake': "url('./Images/cake.svg')",
        'gender': "url('./Images/gender.svg')",
        'profile_photo': "url('./Images/profile_photo.svg')",
      },
      fontFamily: {
        Dm: ['DM Sans', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif'],
      },
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
        'min_sm': { 'min': '639px' },
        // => @media (min-width: 639px) { ... }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
