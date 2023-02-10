import { useState } from 'react'
import { getGitHubUser } from '../service/user'

function useGitSearch () {
  const [inputUser, setInputUser] = useState('octocat')
  const [data, setdata] = useState([])

  const getUser = async () => {
    const res = await getGitHubUser(inputUser)

    if (inputUser === 'octocat') {
      window.localStorage.setItem('octocat', JSON.stringify(res))
    }

    if (res.message === 'Not Found') {
      setInputUser('octocat')
      setdata(JSON.parse(window.localStorage.getItem('octocat')))
    } else {
      setdata(res)
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
