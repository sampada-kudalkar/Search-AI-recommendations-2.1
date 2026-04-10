/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
        'primary-hover': '#1565c0',
        'ai-purple': '#6834b7',
        'ai-purple-bg': '#f9f7fd',
        'ai-purple-border': '#b090e0',
        selected: '#e5e9f0',
        'l1-active': '#c7d6f6',
        'l2-bg': '#fafafa',
        'border-primary': '#eaeaea',
        'text-primary': '#212121',
        'text-secondary': '#555555',
        'text-disabled': '#cccccc',
        'green-bg': '#f1faf0',
        'green-text': '#377e2c',
        'green-value': '#4cae3d',
        'red-text': '#de1b0c',
        'red-bg': '#fef2f1',
        'orange-text': '#e67e00',
        'orange-bg': '#fff8ed',
        'blue-bg': '#e8f1fb',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        card: '0px 10px 24px 0px rgba(33,33,33,0.2)',
      },
    },
  },
  plugins: [],
}
