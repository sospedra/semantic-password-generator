import semantic from '../src/semantic'
import stubs from './stubs'

test('clean semantically common use cases', () => {
  stubs.forEach((sentence) => {
    expect(semantic(sentence)).toMatchSnapshot()
  })
})
