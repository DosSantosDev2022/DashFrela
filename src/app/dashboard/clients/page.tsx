'use client'
import { ClientModal } from './components/clientModal'

export default function ClientsPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <ClientModal />
      </div>
    </>
  )
}
