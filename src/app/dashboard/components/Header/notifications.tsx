'use client'

import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NotificationList } from "./notificationsList";


export function NotificationsIcon() {
 const [isDropDownOpen, setIsDropDownOpen] = useState(false)

 const toggleDropDown = () => {
  setIsDropDownOpen((prev) => !prev)
 }
 

  return (
    <div className=" relative inline-block">
      <button onClick={toggleDropDown} className="text-3xl
      rounded-full p-1
    text-MyColor01 border-[0.5px]
      bg-gray-50 duration-300 
      ease-in-out hover:text-MyColor04 relative">
        <span className="absolute -top-0.5 -right-0.5 h-3 w-3 z-[1] rounded-full bg-red-700">
          <span className="absolute  inline-flex h-full w-full -z-[1] animate-ping  rounded-full bg-red-700 opacity-75">
          </span>
        </span>
      <IoIosNotificationsOutline />
    </button>
      {isDropDownOpen && <NotificationList/>}
    </div>
    
    
  )
}