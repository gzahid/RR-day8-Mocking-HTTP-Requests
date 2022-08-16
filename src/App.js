import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
const [gitHubName, setGitHubName] = useState('') 
const [GitHubAvatar, setGitHubAvatar] = useState('')
const [GitHubURL, setGitHubURL] = useState('')                    


useEffect(() => {
    fetch('https://api.github.com/users/gzahid')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
        setGitHubAvatar(data.avatar_url)
        setGitHubURL(data.html_url)
    })
}, [])

return (
    <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <p>
          <a href={GitHubURL} target="_blank">
            <button>Link to Github Profile</button>
          </a>
        </p>
        <p>
          <img src={GitHubAvatar} alt="" height='' width='å' />
          
        </p>

    </div>
);
}

export default App
    