
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				natural: {
					50: '#F2FCF5',
					100: '#E6F9ED',
					200: '#C0EFD3',
					300: '#9AE5B9',
					400: '#4ED27F',
					500: '#38B364',
					600: '#32A25A',
					700: '#21693B',
					800: '#19502D',
					900: '#102818',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"slide-up": {
					"0%": {
						transform: "translateY(100px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1"
					}
				},
				"slide-in-right": {
					"0%": { 
						transform: "translateX(20px)",
						opacity: "0"
					},
					"100%": { 
						transform: "translateX(0)",
						opacity: "1" 
					}
				},
				"grow": {
					"0%": { 
						transform: "scale(0.95)", 
						opacity: "0.5" 
					},
					"100%": { 
						transform: "scale(1)", 
						opacity: "1" 
					}
				},
				"wave": {
					"0%": { transform: "rotate(0deg)" },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10deg)" },
					"60%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				"sway": {
					"0%": { transform: "translateX(0) rotate(0deg)" },
					"25%": { transform: "translateX(-5px) rotate(-2deg)" },
					"50%": { transform: "translateX(5px) rotate(2deg)" },
					"75%": { transform: "translateX(-5px) rotate(-2deg)" },
					"100%": { transform: "translateX(0) rotate(0deg)" },
				},
				"float": {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0)" },
				},
				"leaf-fall": {
					"0%": { 
						transform: "translateY(0) rotate(0deg)",
						opacity: "0" 
					},
					"10%": { opacity: "1" },
					"100%": { 
						transform: "translateY(100vh) rotate(360deg)",
						opacity: "0" 
					},
				},
				"blur-in": {
					"0%": { 
						filter: "blur(10px)",
						opacity: "0" 
					},
					"100%": { 
						filter: "blur(0)",
						opacity: "1" 
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"fade-in": "fade-in 0.6s ease-out forwards",
				"slide-up": "slide-up 0.8s ease-out forwards",
				"slide-in": "slide-in-right 0.5s ease-out forwards",
				"grow": "grow 0.5s ease-out forwards",
				"wave": "wave 2.5s ease-in-out infinite",
				"sway": "sway 5s ease-in-out infinite",
				"float": "float 6s ease-in-out infinite",
				"leaf-fall": "leaf-fall 10s ease-in-out forwards",
				"blur-in": "blur-in 0.6s ease-out forwards"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
