import React from 'react'
import { Space, Spin } from 'antd'

export default function Loader() {
  return (
    <div>
      <Space size="middle" className='loader'>
        <Spin size="large" />
      </Space>
    </div>
  )
}
