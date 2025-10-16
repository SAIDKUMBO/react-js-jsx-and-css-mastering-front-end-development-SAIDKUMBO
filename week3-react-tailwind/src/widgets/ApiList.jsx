import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function ApiList(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const perPage = 10

  useEffect(()=>{
    setLoading(true)
    setError(null)
    const controller = new AbortController()
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setItems(prev => page === 1 ? data : [...prev, ...data]))
      .catch(err => { if(err.name !== 'AbortError') setError(err.message) })
      .finally(()=> setLoading(false))

    return ()=> controller.abort()
  }, [page])

  const filtered = items.filter(it => it.title.includes(query) || it.body.includes(query))

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input className="flex-1 p-2 rounded-md border" placeholder="Search posts..." value={query} onChange={e=>setQuery(e.target.value)} />
        <Button onClick={()=>{ setPage(1); setItems([]) }}>Refresh</Button>
      </div>

      {error && <div className="text-red-500">{error}</div>}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map(item => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button onClick={()=>setPage(p => Math.max(1, p-1))} disabled={page === 1}>Previous</Button>
        <div>Page {page}</div>
        <Button onClick={()=>setPage(p => p + 1)}>Load more</Button>
      </div>

      {loading && <div className="text-center">Loading...</div>}
    </div>
  )
}

