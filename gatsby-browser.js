// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}
