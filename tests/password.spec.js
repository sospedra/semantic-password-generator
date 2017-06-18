import test from 'ava'

import password from '../src/password'

const longest = 'this is my long sentence to try and to check the length thiny'
const stubs = {
  sentences: [
    longest,
    'a bit more short but medium long',
    'super short'
  ]
}

test('password returns max length given some sentences', (t) => {
  t.plan(1)
  t.is(password.getMaxLength(stubs.sentences), longest.length)
})

test('password return input or default value as min length', (t) => {
  t.plan(2)
  t.is(password.getMinLength(20), 20)
  t.is(password.getMinLength(4), 8) // min
})

test('password return the used length given an input length and max length', (t) => {
  t.plan(2)
  t.is(password.getLength(20, 40), 20)
  t.is(password.getLength(30, 10), 10)
})
