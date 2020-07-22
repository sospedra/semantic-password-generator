import nlp from 'compromise'
import request from './request'
import generator from './generator'

export default async function spg() {
  const article = await request()
  const doc = nlp(article)
  const sentences = doc.sentences().out('array')

  return generator(sentences)
}
