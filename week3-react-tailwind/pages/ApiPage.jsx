import React from 'react'
import ApiList from '../../widgets/ApiList'

export default function ApiPage(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">API Browser (JSONPlaceholder)</h1>
      <ApiList />
    </div>
  )
}
