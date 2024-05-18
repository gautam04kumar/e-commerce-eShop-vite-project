import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4 text-gray-700">Oops! The page you are looking for does not exist.</p>
        <Link to={'/'} className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-red-500 rounded hover:bg-red-600 transition-colors duration-300">Return to Home</Link>
      </div>
    </Layout>
  )
}

export default NoPage