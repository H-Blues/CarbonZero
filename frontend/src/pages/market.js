import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/base/PageHeader'
import BlogWithSideBar from '@/components/modules/blog-with-sidebar/BlogWIthSideBar'
import Footer from '@/components/Footer'

const Market = () => {
  return (
    <>
      <Header />
      <PageHeader title="Market" text="Market" />
      <BlogWithSideBar />
      <Footer />
    </>
  )
}

export default Market