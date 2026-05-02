export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/src/**/*.{js,ts,jsx,tsx}", // This catches that extra nested folder
],
  theme: {
    extend: {
      colors: {
        sparks: { coral: '#FF6F61', sunshine: '#FFD166', mint: '#06D6A0' },
        innovators: { blue: '#00A6FB', lime: '#9EF01A' },
        future: { slate: '#0F172A', cyan: '#06B6D4', violet: '#7C3AED' }
      }
    }
  },
  plugins: []
}
