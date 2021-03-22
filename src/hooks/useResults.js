import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export const getGeneralSearch = (term) => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)
  
  const searchApi = async () => {
    try {
      const {data} = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: term
        }
      })
      setResults(data.businesses)
      setErrorMessage(false)
    }
    catch(e) {
      setErrorMessage(true)
      console.log(e)
    }
  }

  return [searchApi, results, errorMessage]
}

export const getResultDetails = (id) => {
  const [result, setResult] = useState([])

  const getResult = async (id) => {
    try{
      const {data} = await yelp.get(`/${id}`)
      setResult(data)
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getResult(id)
  }, [])

  return result
}