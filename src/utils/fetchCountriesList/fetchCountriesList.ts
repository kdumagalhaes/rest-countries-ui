export async function fetchCountriesList(url: string) {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error('No countries found!')
    throw error
  }

  return res.json()
}
