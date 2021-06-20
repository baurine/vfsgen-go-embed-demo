import React from 'react'

import { Button } from 'antd'

import styles from './style.module.less'

export default function AntdPage() {
  return (
    <div className={styles.container}>
      <h1>AntdPage Title</h1>
      <p>AntdPage Content</p>
      <Button>Antd Button</Button>
    </div>
  )
}
