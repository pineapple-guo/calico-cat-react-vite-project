import React, { useEffect } from 'react'

const Home: React.FC = () => {
  useEffect(() => {
    document.title = '首页'
  }, [])
  return <h2>首页</h2>
}

export default Home