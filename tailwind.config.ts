import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        MyColor01:'#352F44',
        MyColor02: '#5C5470',
        MyColor03: '#B9B4C7',
        MyColor04: '#CBD5E1'
    }
    },
  },
  plugins: [
    require ( 'tailwind-scrollbar' ) ,
  ],
}
export default config
