/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide"
import tailwindScrollbar from "tailwind-scrollbar"
import tailwindCssAnimate from "tailwindcss-animate"
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'base-gradient': 'linear-gradient(0deg,hsl(0deg 0% 0%) 16%,hsl(145deg 88% 5%) 42%,hsl(145deg 88% 7%) 54%,hsl(145deg 88% 8%) 62%,hsl(145deg 88% 9%) 69%,hsl(145deg 88% 10%) 74%,hsl(145deg 88% 11%) 78%,hsl(145deg 88% 12%) 82%,hsl(145deg 88% 13%) 85%,hsl(145deg 88% 14%) 88%,hsl(145deg 88% 15%) 91%,hsl(145deg 88% 16%) 93%,hsl(145deg 88% 16%) 95%,hsl(145deg 88% 17%) 96%,hsl(145deg 88% 18%) 98%,hsl(145deg 88% 18%) 99%,hsl(145deg 88% 19%) 100%,hsl(145deg 88% 19%) 100%,hsl(145deg 88% 20%) 101%,hsl(145deg 88% 20%) 101%,hsl(145deg 88% 21%) 102%,hsl(145deg 88% 21%) 102%,hsl(145deg 88% 22%) 101%,hsl(145deg 88% 22%) 101%,hsl(145deg 88% 23%) 100%)',
  			'custom-background': 'url(/icons/Circle.png)',
  			'startupHub-background': 'url(/bg2.png)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [tailwindCssAnimate,tailwindScrollbarHide,tailwindScrollbar({ nocompatible: true })],
}
