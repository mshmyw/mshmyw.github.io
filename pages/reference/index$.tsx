/**
 * @title Users
 */

import React from 'react'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div>
      Test dynamic routes: <br />
      <Link to="/guide/test">/guide/test</Link>
      <br />
      <Link to="/users/userA/posts/1">/users/userA/posts/1</Link>
      <br />
      <Link to="/users/userB">/users/userB</Link>
      <br />
      <Link to="/users/userB/posts/1">/users/userB/posts/1</Link>
    </div>
  )
}

export default Page
