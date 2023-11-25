import React from 'react'

interface ProgressBarProps {
  progress: string
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const parsedProgress = parseInt(progress, 10)

  const progressWidth = {
    width: `${parsedProgress}%`,
  }

  return (
    <div className="w-full  bg-gray-200 rounded-full h-3.5 mb-4 p-2 dark:bg-gray-700 relative">
      <div
        className={` bg-blue-600 h-3.5 rounded-full dark:bg-blue-500 absolute -top-0 right-0 p-2`}
        style={progressWidth}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white text-xs font-bold">
          {parsedProgress}%
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
