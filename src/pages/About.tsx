import React, { useEffect } from 'react'

const About: React.FC = () => {
  useEffect(() => {
    document.title = '关于页面'
  }, [])
  return <h2>关于页面</h2>
}

export default About