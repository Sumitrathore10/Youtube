import moment from 'moment'
import React from 'react'

const Time = ({time}) => {
    const vediotime = moment()?.startOf("day")?.seconds(time)?.format("mm:ss")
  return (
    <div className='absolute bottom-2 right-2 bg-gray-950 text-white px-1 py-1 text-xs font-bold font-sans rounded-sm'>
      {vediotime}
    </div>
  )
}

export default Time
