import { useState } from 'react'
import { DndContext, PointerSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core'
import type { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core'
import { useAppStore } from '../../store/useAppStore'
import KanbanColumn from './KanbanColumn'
import type { RecStatus } from '../../types'

const COLUMNS: { status: RecStatus; label: string; color: string }[] = [
  { status: 'pending', label: 'Pending', color: 'text-text-secondary' },
  { status: 'accepted', label: 'Accepted', color: 'text-primary' },
  { status: 'in_progress', label: 'In Progress', color: 'text-orange-text' },
  { status: 'completed', label: 'Completed', color: 'text-green-text' },
]

export default function KanbanBoard() {
  const { recommendations, moveRec, reorderRecs } = useAppStore()
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  )

  const handleDragStart = (e: DragStartEvent) => {
    setActiveId(e.active.id as string)
  }

  const handleDragEnd = (e: DragEndEvent) => {
    setActiveId(null)
    const { active, over } = e
    if (!over) return

    const fromId = active.id as string
    const toId = over.id as string

    if (fromId === toId) return

    const activeRec = recommendations.find(r => r.id === fromId)
    const overRec = recommendations.find(r => r.id === toId)

    if (!activeRec) return

    // Dropped on a column
    const columnStatuses: RecStatus[] = ['pending', 'accepted', 'in_progress', 'completed']
    if (columnStatuses.includes(toId as RecStatus)) {
      if (activeRec.status !== toId) {
        moveRec(fromId, toId as RecStatus)
      }
      return
    }

    // Dropped on a card
    if (overRec) {
      if (activeRec.status === overRec.status) {
        reorderRecs(fromId, toId)
      } else {
        moveRec(fromId, overRec.status)
      }
    }
  }

  return (
    <div className="flex-1 overflow-x-auto p-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 h-full min-w-max">
          {COLUMNS.map(col => {
            const items = recommendations.filter(r => r.status === col.status)
            return (
              <KanbanColumn
                key={col.status}
                status={col.status}
                label={col.label}
                labelColor={col.color}
                items={items}
                activeId={activeId}
              />
            )
          })}
        </div>
      </DndContext>
    </div>
  )
}
