import { useEffect, useState } from 'react'
import { getGitHubUser } from '../service/user'

function useGitSearch () {
  const [inputUser, setInputUser] = useState('octocat')
  const [data, setdata] = useState([])
  const [notFound, setNotFound] = useState(false)

  const getUser = async () => {
    const res = await getGitHubUser(inputUser)

    if (inputUser === 'octocat') {
      window.localStorage.setItem('octocat', JSON.stringify(res))
    }

    if (res.message === 'Not Found') {
      setInputUser('octocat')
      setdata(JSON.parse(window.localStorage.getItem('octocat')))
      setNotFound(true)
    } else {
      setdata(res)
      setNotFound(false) // **
    }
  }

  return {
    inputUser,
    data,

    setInputUser,
    setdata,
    getUser
  }
}

export default useGitSearch
