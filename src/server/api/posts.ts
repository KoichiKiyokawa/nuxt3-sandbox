export default async () => {
  return Array.from(Array(20).keys()).map((i) => ({
    title: `title${i}`,
    body: `body${i}`,
  }))
}
