import * as password from '../src/password'

const longest = 'this is my long sentence to try and to check the length thiny'
const stubs = {
  sentences: [longest, 'a bit more short but medium long', 'super short'],
}

test('password returns max length given some sentences', () => {
  expect(password.getMaxLength(stubs.sentences)).toBe(longest.length)
})

test('password return input or default value as min length', () => {
  expect(password.getMinLength(20)).toBe(20)
  expect(password.getMinLength(4)).toBe(8)
})

test('password return the used length given an input length and max length', () => {
  expect(password.getLength(20, 40)).toBe(20)
  expect(password.getLength(30, 10)).toBe(10)
})
