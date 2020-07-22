import request from '../src/request'

jest.mock('../src/request')

test('request returns a promise', () => {
  request()
  expect(request).toHaveBeenCalled()
})
