import generator from '../src/generator'

const stubs = {
  sentences: ['this is my long sentence to try and to check the length thiny'],
}

test('generator is a function which returns null when no init', () => {
  expect(typeof generator).toBe('function')
  expect(generator()()).toBe(null)
})

test('generator transforms with default args when not provided', () => {
  expect(generator(stubs.sentences)()).toMatchSnapshot()
})

test('generator takes one arg as number as length', () => {
  expect(generator(stubs.sentences)(40)).toMatchSnapshot()
})
