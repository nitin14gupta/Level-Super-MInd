/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
  
	darkMode: ["class", "class"],
  
	theme: {
	  container: {
		center: true,
		padding: '2rem',
		screens: {
		  '2xl': '1400px',
		},
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  'custom-dark': '#1A1F2C',
		  'custom-gray': '#403E43',
		  'custom-accent': '#8E9196',
		},
  
		animation: {
		  'card-hover': 'card-hover 0.3s ease-in-out forwards',
		  spotlight: 'spotlight 2s ease .75s 1 forwards',
		},
  
		keyframes: {
		  'card-hover': {
			'0%': { transform: 'translateY(0)' },
			'100%': { transform: 'translateY(-5px)' },
		  },
		  spotlight: {
			'0%': {
			  opacity: 0,
			  transform: 'translate(-72%, -62%) scale(0.5)',
			},
			'100%': {
			  opacity: 1,
			  transform: 'translate(-50%,-40%) scale(1)',
			},
		  },
		},
  
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
  
	plugins: [
	  require("tailwindcss-animate"),
	],
  };
  