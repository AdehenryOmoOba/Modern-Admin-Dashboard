import React from 'react'
import {KanbanComponent,ColumnsDirective,ColumnDirective} from '@syncfusion/ej2-react-kanban'
import {kanbanData,kanbanGrid} from '../data/dummyData'
import {Header} from '../components'

const kanban = () => {
  return (
    <div className='m-2 mt-24 p-2 bg-white rounded-3xl md:m-10 md:p-10'>
    <Header category='App' title='Kanban'/>
    <KanbanComponent id='kanban' dataSource={kanbanData} cardSettings={{contentField: "Summary", headerField: 'Id'}} keyField='Status'>
      <ColumnsDirective>
       {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
   </div>
  )
}

export default kanban