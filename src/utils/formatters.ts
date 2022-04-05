type ComicOriginalData = {
  id: number
  title: string
  description: string
  images: [
    {
      path: string
      extension: string
    }
  ]
  dates: [
    {
      date: string
    }
  ]
  creators: { items: [{ name: string }] }
}

export const comicsFormatter = (comics: ComicOriginalData[]) => {
  const rarityRate = Math.floor(comics.length * 0.1)

  const formatted = comics.map((item, index) => {
    const slug = item.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/\s/g, '-')

    const cover = item.images[0].path + '.' + item.images[0].extension

    let creators = 'Desconhecido'

    if (item.creators.items.length > 0) {
      creators = item.creators.items.map((creator) => creator.name).join(', ')
    }

    const published = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full'
    }).format(new Date(item.dates[0].date))

    return {
      id: item.id,
      title: item.title,
      description: item.description,
      slug,
      cover,
      creators,
      published,
      isRare: index < rarityRate
    }
  })

  return formatted
}
