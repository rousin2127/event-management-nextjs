import Link from 'next/link'
import React from 'react'

export default function EventsPage() {
  return (
    <div className='flex flex-col'>
        <Link href={'/events/1'}>event 1</Link>
        <Link href={'/events/2'}>event 2</Link>
        <Link href={'/events/3'}>event 3</Link>
        <Link href={'/events/4'}>event 4</Link>
        <Link href={'/events/5'}>event 5</Link>
    </div>
  )
}
