import React from 'react'
import {ScheduleComponent,Day,Week,Month,WorkWeek,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule'
import {scheduleData} from '../data/dummyData'
import {Header} from '../components'

const Calendar = () => {
  return (
    <div className='m-2 mt-24 p-2 bg-white rounded-3xl md:m-10 md:p-10'>
     <Header category='App' title='Calendar'/>
     <ScheduleComponent height="650px" eventSettings={{dataSource: scheduleData}}>
      <Inject services={[Day, Week, Month, WorkWeek,Agenda, Resize, DragAndDrop]}/>
     </ScheduleComponent>
    </div>
  )
}

export default Calendar