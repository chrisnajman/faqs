export default function ariaExpandedDetails() {
  document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      detail.setAttribute("aria-expanded", detail.open ? "true" : "false")
    })
  })
}
