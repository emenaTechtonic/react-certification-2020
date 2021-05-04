// import { useEffect, useState } from 'react'

// const jsonFile = require('../assets/youtube-videos-mock.json')

// export const useFetch = (searchTarget) => {
//   const [data, setData] = useState(null)
//   const [error, setError] = useState(null)
//   const [isLoading, setLoading] = useState(false)

//   useEffect(() => {
//     const getData = async () => {
//       let list = []
//       try {
//         setLoading(true)
//         list = await jsonFile
//       } catch (err) {
//         setError(err)
//       }
//       setData(list)
//       setLoading(false)
//     }
//     getData()
//   }, [searchTarget])

//   return { data, error, isLoading }
// }
import { useEffect, useState } from 'react'

export const useFetch = (searchTarget) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${searchTarget}`)
        const json = await response.json()
        setData(json.items)
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    getData()
  }, [searchTarget])

  return { data, error, isLoading }
}
