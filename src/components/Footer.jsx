import React from 'react'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      Copyright ⓒ {year}
    </p>
  </div>
  )
}

export default Footer