import generator from '../src/generator'
import stubs from './stubs'

test('generator is a function which returns null when no init', () => {
  expect(typeof generator).toBe('function')
  expect(generator()()).toBe(null)
})

test('generator transforms with default args when not provided', () => {
  stubs.forEach((sentence) => {
    expect(generator([sentence])()).toMatchSnapshot()
  })
})

test('generator takes one arg as number as length', () => {
  expect(generator([stubs.get('large')])(40)).toMatchSnapshot()
})
