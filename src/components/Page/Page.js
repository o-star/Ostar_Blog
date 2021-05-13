import React from 'react'
import { Layout } from 'antd'
import '../../assets/css/Page.css'

const { Content } = Layout

const Page = ({ title, children }) => (
  <Content className="text-lg page-style">
    {title && <h1 className="post">{title}</h1>}
    <div className="">{children}</div>
  </Content>
)

export default Page
