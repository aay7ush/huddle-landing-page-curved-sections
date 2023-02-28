const ctaForm = document.querySelector(".footer__newsletter-sign-up")
const ctaInput = document.querySelector(".footer__newsletter-sign-up input")
const ctaError = document.querySelector(".footer__newsletter-sign-up .error")

function validateEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(input).toLowerCase())
}

ctaForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!validateEmail(ctaInput.value)) {
    ctaInput.style.borderColor = "hsl(0, 100%, 63%)"
    ctaError.style.display = "block"
  } else {
    alert("Thanks for signing up!")
  }
})

ctaInput.addEventListener("keypress", () => {
  ctaInput.style.borderColor = "hsl(207, 100%, 98%)"
  ctaError.style.display = "none"
})
