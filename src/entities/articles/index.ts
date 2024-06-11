export type Article = {
  _id: string,
  name: string,
  content: string,
  sectionId: string,
  createdAt: string,
  updatedAt: string,
  _v: string,
}

export type Section = {
  _id: string,
  name: string,
  articles: Article[],
  createdAt: string,
  updatedAt: string,
  _v: string,
}