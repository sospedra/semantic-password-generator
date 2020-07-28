import unfetch from 'unfetch'

const WIKI_ROOT = 'https://en.wikipedia.org/w/api.php?action=query'
const WIKI_RANDOM_PATH = [
  'generator=random',
  'grnnamespace=0',
  'prop=extracts',
  'exchars=500',
  'format=json',
  'origin=*',
].join('&')

type WikipediaQuery = {
  query: {
    pages: {
      [id: string]: {
        extract: string
      }
    }
  }
}

export default async function request() {
  const response = await unfetch(`${WIKI_ROOT}&${WIKI_RANDOM_PATH}`)

  if (response.status >= 400) {
    new Error(
      `Request failed. Code: ${response.status}. Text: ${response.statusText}`,
    )
  }

  const {
    query: { pages },
  }: WikipediaQuery = await response.json()

  return pages[Object.keys(pages)[0]].extract
}
