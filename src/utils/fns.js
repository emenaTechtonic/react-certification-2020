function random(limit) {
  return Math.floor(Math.random() * limit)
}
const isElementIn = (id, arr) => arr.find((el) => el.id === id)

const removeElement = (id, arr) => arr.filter((el) => el.id !== id)
export { random, isElementIn, removeElement }
