const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          scale0: 'hsla(203, 67%, 94%, 1)',
          scale5: 'hsla(205, 76%, 90%, 1)',
          scale10: 'hsla(205, 81%, 86%, 1)',
          scale20: 'hsla(205, 84%, 73%, 1)',
          scale30: 'hsla(205, 81%, 63%, 1)',
          scale40: 'hsla(206, 78%, 54%, 1)',
          scale50: 'hsla(208, 84%, 46%, 1)',
          scale60: 'hsla(209, 100%, 40%, 1)',
          scale70: 'hsla(211, 100%, 36%, 1)',
          scale80: 'hsla(213, 100%, 31%, 1)',
          scale90: 'hsla(216, 100%, 26%, 1)',
          scale100: 'hsla(218, 100%, 21%, 1)',
          yara: 'hsla(219, 100%, 18%, 1)',
        },
        green: {
          scale0: 'hsla(92, 66%, 91%, 1)',
          scale5: 'hsla(94, 76%, 87%, 1)',
          scale10: 'hsla(92, 69%, 81%, 1)',
          scale20: 'hsla(94, 73%, 70%, 1)',
          scale30: 'hsla(94, 60%, 60%, 1)',
          scale40: 'hsla(94, 56%, 50%, 1)',
          scale50: 'hsla(98, 79%, 40%, 1)',
          scale60: 'hsla(99, 79%, 36%, 1)',
          scale70: 'hsla(99, 100%, 30%, 1)',
          scale80: 'hsla(102, 100%, 28%, 1)',
          scale90: 'hsla(104, 100%, 23%, 1)',
          scale100: 'hsla(106, 100%, 14%, 1)'
        },
        brown: {
          scale0: 'hsla(21, 42%, 93%, 1)',
          scale5: 'hsla(22, 48%, 89%, 1)',
          scale10: 'hsla(21, 42%, 86%, 1)',
          scale20: 'hsla(22, 32%, 78%, 1)',
          scale30: 'hsla(23, 27%, 65%, 1)',
          scale40: 'hsla(23, 23%, 50%, 1)',
          scale50: 'hsla(25, 34%, 36%, 1)',
          scale60: 'hsla(25, 38%, 29%, 1)',
          scale70: 'hsla(26, 50%, 24%, 1)',
          scale80: 'hsla(20, 43%, 22%, 1)',
          scale90: 'hsla(26, 56%, 18%, 1)',
          scale100: 'hsla(27, 67%, 13%, 1)'
        },
        yellow: {
          scale0: 'hsla(48, 75%, 92%, 1)',
          scale5: 'hsla(48, 82%, 89%, 1)',
          scale10: 'hsla(48, 86%, 85%, 1)',
          scale20: 'hsla(48, 92%, 75%, 1)',
          scale30: 'hsla(48, 94%, 67%, 1)',
          scale40: 'hsla(48, 91%, 56%, 1)',
          scale50: 'hsla(48, 92%, 49%, 1)',
          scale60: 'hsla(48, 100%, 44%, 1)',
          scale70: 'hsla(47, 100%, 42%, 1)',
          scale80: 'hsla(44, 100%, 39%, 1)',
          scale90: 'hsla(41, 100%, 34%, 1)',
          scale100: 'hsla(38, 100%, 24%, 1)'
        },
        red: {
          scale0: 'hsla(348, 67%, 93%, 1)',
          scale5: 'hsla(347, 76%, 90%, 1)',
          scale10: 'hsla(348, 81%, 86%, 1)',
          scale20: 'hsla(349, 84%, 74%, 1)',
          scale30: 'hsla(350, 79%, 63%, 1)',
          scale40: 'hsla(351, 77%, 56%, 1)',
          scale50: 'hsla(352, 82%, 47%, 1)',
          scale60: 'hsla(351, 92%, 42%, 1)',
          scale70: 'hsla(353, 96%, 37%, 1)',
          scale80: 'hsla(355, 100%, 32%, 1)',
          scale90: 'hsla(357, 100%, 26%, 1)',
          scale100: 'hsla(359, 100%, 21%, 1)'
        },
        orange: {
          scale0: 'hsla(27, 66%, 94%, 1)',
          scale5: 'hsla(25, 80%, 90%, 1)',
          scale10: 'hsla(25, 93%, 86%, 1)',
          scale20: 'hsla(25, 100%, 82%, 1)',
          scale30: 'hsla(25, 93%, 71%, 1)',
          scale40: 'hsla(25, 90%, 58%, 1)',
          scale50: 'hsla(25, 85%, 49%, 1)',
          scale60: 'hsla(25, 100%, 44%, 1)',
          scale70: 'hsla(23, 100%, 41%, 1)',
          scale80: 'hsla(21, 100%, 38%, 1)',
          scale90: 'hsla(17, 100%, 32%, 1)',
          scale100: 'hsla(13, 100%, 24%, 1)'
        },
        black: {
          scale0: 'hsla(0, 0%, 6%, 0.02)',
          scale5: 'hsla(0, 0%, 6%, 0.05)',
          scale10: 'hsla(0, 0%, 6%, 0.1)',
          scale15: 'hsla(0, 0%, 6%, 0.15)',
          scale20: 'hsla(0, 0%, 6%, 0.2)',
          scale30: 'hsla(0, 0%, 6%, 0.3)',
          scale40: 'hsla(0, 0%, 6%, 0.4)',
          scale50: 'hsla(0, 0%, 6%, 0.5)',
          scale60: 'hsla(0, 0%, 6%, 0.6)',
          scale70: 'hsla(0, 0%, 6%, 0.7)',
          scale80: 'hsla(0, 0%, 6%, 0.8)',
          scale90: 'hsla(0, 0%, 6%, 0.9)',
          scale100: 'hsla(0, 0%, 6%, 0.97)'
        },
        white: {
          scale0: 'hsla(0, 0%, 100%, 0)',
          scale5: 'hsla(0, 0%, 100%, 0.05)',
          scale10: 'hsla(0, 0%, 100%, 0.1)',
          scale20: 'hsla(0, 0%, 100%, 0.2)',
          scale30: 'hsla(0, 0%, 100%, 0.3)',
          scale50: 'hsla(0, 0%, 100%, 0.5)',
          scale70: 'hsla(0, 0%, 100%, 0.7)',
          scale80: 'hsla(0, 0%, 100%, 0.8)',
          scale90: 'hsla(0, 0%, 100%, 0.9)',
          scale100: 'hsla(0, 0%, 100%, 1)'
        },
        gray: {
          scale0: 'hsla(0, 0%, 98%, 1)',
          scale5: 'hsla(0, 0%, 96%, 1)',
          scale10: 'hsla(0, 0%, 92%, 1)',
          scale20: 'hsla(0, 0%, 86%, 1)',
          scale30: 'hsla(0, 0%, 80%, 1)',
          scale40: 'hsla(0, 0%, 67%, 1)',
          scale50: 'hsla(0, 0%, 50%, 1)',
          scale60: 'hsla(0, 0%, 38%, 1)',
          scale70: 'hsla(0, 0%, 24%, 1)',
          scale80: 'hsla(0, 0%, 14%, 1)',
          scale90: 'hsla(0, 0%, 9%, 1)',
          scale100: 'hsla(0, 0%, 6%, 1)'
        },
        purple: {
          scale0: 'hsla(242, 66%, 94%, 1)',
          scale5: 'hsla(246, 80%, 90%, 1)',
          scale10: 'hsla(250, 80%, 85%, 1)',
          scale20: 'hsla(252, 83%, 76%, 1)',
          scale30: 'hsla(256, 80%, 64%, 1)',
          scale40: 'hsla(258, 75%, 59%, 1)',
          scale50: 'hsla(260, 69%, 55%, 1)',
          scale60: 'hsla(262, 61%, 49%, 1)',
          scale70: 'hsla(264, 67%, 43%, 1)',
          scale80: 'hsla(264, 79%, 36%, 1)',
          scale90: 'hsla(264, 92%, 27%, 1)',
          scale100: 'hsla(266, 100%, 21%, 1)'
        },
        transparent: 'rgba(0,0,0,0)'
      },
      fontFamily:{
        notoSans: ['Noto Sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
