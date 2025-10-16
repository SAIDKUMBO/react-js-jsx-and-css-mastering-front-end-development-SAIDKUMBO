import React, { useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Button from '../components/Button'

export default function TaskManager(){
  const [tasks, setTasks] = useLocalStorage('tasks', [
    { id: 1, text: 'Example task', completed: false }
  ])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  function addTask(e){
    e.preventDefault()
    const trimmed = text.trim()
    if(!trimmed) return
    setTasks(prev => [{ id: Date.now(), text: trimmed, completed: false }, ...prev])
    setText('')
  }

  function toggle(id){ setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t)) }
  function remove(id){ setTasks(prev => prev.filter(t => t.id !== id)) }

  const filtered = useMemo(()=>{
    if(filter === 'active') return tasks.filter(t => !t.completed)
    if(filter === 'completed') return tasks.filter(t => t.completed)
    return tasks
  }, [tasks, filter])

  return (
    <div className="space-y-4">
      <form onSubmit={addTask} className="flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} className="flex-1 p-2 rounded-md border" placeholder="New task..." />
        <Button> Add </Button>
      </form>

      <div className="flex gap-2">
        <Button variant={filter==='all'?'secondary':'secondary'} onClick={()=>setFilter('all')}>All</Button>
        <Button variant='secondary' onClick={()=>setFilter('active')}>Active</Button>
        <Button variant='secondary' onClick={()=>setFilter('completed')}>Completed</Button>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && <div className="text-sm text-gray-500">No tasks</div>}
        {filtered.map(task => (
          <div key={task.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.completed} onChange={()=>toggle(task.id)} />
              <div className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</div>
            </div>
            <div className="flex gap-2">
              <Button variant="danger" onClick={()=>remove(task.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
