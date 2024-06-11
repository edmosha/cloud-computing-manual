import { API_URL, VERIFICATION_CODE } from 'shared/lib'

const response = (url: string, options?: Request) => {
  return fetch(API_URL + url, {
    ...options,
    credentials: "include",
    cache: "reload",
  })
    .then(res => res.ok ? res : Promise.reject())
    .then(res => res.json())
}

export const auth = () => {
  return response('/auth', {
    headers: {
      "X-Verification-Code": VERIFICATION_CODE,
    }
  })
}

export const getContent = async () => {
  try {
    const res = await response('/articles')
    return {
      data: res.data
    }
  } catch (e) {
    console.log(e)
  }
}

export const getArticle = (articleId: string) => {
  return response('/articles/' + articleId)
}

export const createSection = async (payload) => {
  try {
    const authData = await auth()

    const res = await response('/articles/create-section', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Baerer " + authData.accessToken,
        "X-Verification-Code": VERIFICATION_CODE,
      },
      body: JSON.stringify(payload)
    })
    return res.data
  } catch (e) {
    console.log('ошибка создния раздела')
  }
}

export const createArticle = async (payload) => {
  try {
    const authData = await auth()

    const res = await response('/articles/create-article', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Baerer " + authData.accessToken,
        "X-Verification-Code": VERIFICATION_CODE,
      },
      body: JSON.stringify(payload)
    })
  } catch (e) {
    console.log('ошибка создния статьи')
  }
}