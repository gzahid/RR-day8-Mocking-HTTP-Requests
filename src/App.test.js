import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
require('jest-fetch-mock').enableMocks()

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })

describe('GitHub REST API using jest fetch mock', () =>{

    test("receives GitHub name", async () => {
        fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
        render(<App />)
        const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
        expect(gitHubName).toHaveTextContent('coder')
    })

    test("receives GitHub URL", async () => {
        fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/gzahid'}))
        render(<App />)
        const GitHubURL = await waitFor(() => screen.getByRole('link'))
        expect(GitHubURL).toHaveAttribute('href', expect.stringContaining('gzahid'))
    })

    test("receives GitHub Avatar URL", async () => {
        fetch.mockResponseOnce(JSON.stringify({avatar_url: 'https://avatars.githubusercontent.com/u/8547997?v=4'}))
        render(<App />)
        const GitHubAvatar = await waitFor(() => screen.getByRole('img'))
        expect(GitHubAvatar).toHaveAttribute('src', expect.stringContaining('githubusercontent'))
    })

})