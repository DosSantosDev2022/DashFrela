'use client'

import React from 'react'
import * as Progress from '@radix-ui/react-progress'

interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [localprogress, setLocalProgress] = React.useState(progress)

  React.useEffect(() => {
    const timer = setTimeout(() => setLocalProgress(progress), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress.Root
      className="relative overflow-hidden bg-MyColor03 rounded-full w-full h-[20px]"
      style={{
        transform: 'translateZ(0)',
      }}
      value={localprogress}
    >
      <Progress.Indicator
        className="bg-MyColor01 w-full h-full relative transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(${100 - localprogress}%)` }}
      >
        <span className="absolute top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-semibold">
          {`${localprogress}%`}
        </span>
      </Progress.Indicator>
    </Progress.Root>
  )
}

export default ProgressBar
