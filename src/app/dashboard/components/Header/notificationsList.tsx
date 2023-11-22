'use client'

import Link from "next/link"

export function NotificationList() {

 const notifications = [
   {nome : "Nome da notificação", icon : ""},
   {nome : "Nome da notificação1", icon : ""},
   {nome : "Nome da notificação2", icon : ""},
   {nome : "Nome da notificação3", icon : ""},
   {nome : "Nome da notificação4", icon : ""},
   {nome : "Nome da notificação5", icon : ""},
   {nome : "Nome da notificação6", icon : ""},
 ]


  return (
    <div className="absolute -right-16 mt-3.5 flex h-90 w-75 flex-col z-40  rounded-md border bg-white
    shadow sm:right-0 sm:w-80">
     <div className="px-4 py-3">
          <h5 className="text-sm font-medium text-MyColor01">Mensagens</h5>
     </div>
      <ul className="flex h-auto flex-col overflow-y-auto">
         {notifications.map((notification) => (
           <li key={notification.nome}>
             <Link className="flex gap-4 border-t px-4 py-3 hover:bg-MyColor04" href={''}>
                {notification.nome}
             </Link>
           </li>
         ))}
      </ul>
    </div>
  )
}