const getObjectFromLocal = (key) => new Promise((resolve, reject) => {
  reject(new objectNotFoundError)
})

export default getObjectFromLocal
