import React from 'react'

import { Button } from 'antd'

import styles from './style.module.less'

export default function AntdPage() {
  function ping() {
    fetch('/api/v1/ping')
      .then((res) => res.json())
      .then((data) => {
        window.alert(`${data.message} ${data.count}`)
      })
  }

  return (
    <div className={styles.container}>
      <h1>AntdPage Title</h1>
      <p>AntdPage Content</p>
      <Button onClick={ping}>Ping</Button>
    </div>
  )
}
