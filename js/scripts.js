import { adjectiveList } from './adjectives.js'
import { animalList } from './animals.js'

function phrase() {
  const animal = pickAnimal()
  const letter = animal[0].toLocaleLowerCase()
  const adjective = pickAdjective(letter)
 
  document.getElementById('result').innerHTML = `${adjective.toLocaleLowerCase()} ${animal.toLocaleLowerCase()}`
}

function copyName() {
  const copyText = document.getElementById('result').textContent
  navigator.clipboard.writeText(copyText)
  notifyCopy()
}

function notifyCopy() {
  const previousText = document.getElementById('try-again').textContent
  const notification = document.getElementById('try-again')
  notification.innerHTML = 'Copied to clipboard!'
  setTimeout(() => {
    notification.innerHTML = previousText
  }, 2000)
}

function setTitle() {
  const title = document.getElementById('title')
  title.innerHTML = "Here's an " + pickAdjective('a') + ' animal:'
}

function pickAdjective(letter) {
  const adjectives = adjectiveList
  const aAdjectives = adjectives.filter(adjective => adjective.toLowerCase().charAt(0).toLowerCase() === letter)
  return aAdjectives[Math.floor(Math.random() * aAdjectives.length)]
}

function pickAnimal() {
  const animals = animalList
  return animals[Math.floor(Math.random() * animals.length)]
}

export { copyName, setTitle, phrase }