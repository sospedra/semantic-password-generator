import test from 'ava'

import request from '../src/request'

test('request returns a promise', (t) => {
  t.plan(1)
  t.is(typeof request().then, 'function')
})
