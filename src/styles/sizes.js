export default {
  up() {

  },
  down(size) {
    const sizes = {
      xs: "519.98px",
      sm: "727.98px",
      md: "939.98px",
      lg: "1049.98px"
    }
    return `@media (max-width: ${sizes[size]})`
  }
}