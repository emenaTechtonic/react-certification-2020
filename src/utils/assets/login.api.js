const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl: 'https://image.flaticon.com/icons/png/512/4753/4753316.png',
}

export default async function loginApi({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'colorado' && password === '123') {
        return resolve(mockedUser)
      }
      return reject(new Error('Username or password invalid'))
    }, 500)
  })
}
