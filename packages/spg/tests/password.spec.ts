import * as password from '../src/password'
import stubs from './stubs'

test('password returns max length given some sentences', () => {
  expect(password.getMaxLength(Array.from(stubs.values()))).toBe(
    stubs.get('html').length,
  )
})

test('password return input or default value as min length', () => {
  expect(password.getMinLength(20)).toBe(20)
  expect(password.getMinLength(4)).toBe(8)
})

test('password return the used length given an input length and max length', () => {
  expect(password.getLength(20, 40)).toBe(20)
  expect(password.getLength(30, 10)).toBe(10)
})
