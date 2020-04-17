export default {
  up() {

  },
  down(size) {
    const sizes = {
      xs: "578.98px",
      sm: "767.98px",
      md: "939.98px",
      lg: "1049.98px"
    }
    return `@media (max-width: ${sizes[size]})`
  }
}