import test from 'ava'

import generator from '../src/generator'

const stubs = {
  sentences: [
    'this is my long sentence to try and to check the length thiny'
  ]
}

test('generator is a function which returns null when no init', (t) => {
  t.plan(2)
  t.is(typeof generator, 'function')
  t.is(generator()(), null)
})

test('generator transforms with default args when not provided', (t) => {
  t.plan(1)
  t.snapshot(generator(stubs.sentences)())
})

test('generator takes one arg as number as length', (t) => {
  t.plan(1)
  t.snapshot(generator(stubs.sentences)(40))
})
