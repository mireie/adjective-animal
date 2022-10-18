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
  const previousText = "Click the animal name to copy, click anywhere else for another name."
  const notification = document.getElementById('try-again')
  notification.innerHTML = 'Copied to clipboard!'
  setTimeout(() => {
    notification.innerHTML = previousText
  }, 2000)
}

function setTitleAdjective() {
  document.getElementById('title-adjective').innerHTML = pickAdjective('a')
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

export { copyName, setTitleAdjective, phrase }