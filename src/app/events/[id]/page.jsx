import React from 'react'

export default async function EventDetails({params}) {
    const { id } = await params
  return (
    <div>
        Product page: {id}
    </div>
  )
}
