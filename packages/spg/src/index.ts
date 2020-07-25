import request from './request'
import semantic from './semantic'
import generator from './generator'

export default async function spg() {
  const article = await request()
  const sentences = semantic(article)

  return generator(sentences)
}
