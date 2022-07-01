import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Search,Inject,Toolbar} from '@syncfusion/ej2-react-grids'
import {employeesData,employeesGrid} from '../data/dummyData'
import {Header} from '../components'


const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className='m-2 p-2 bg-white rounded-3xl md:m-10 md:p-10'>
      <Header category="Page" title="Employees" />
      <GridComponent dataSource={employeesData} allowPaging allowSorting allowExcelExport allowPdfExport editSettings={editing} toolbar={['Search']} width="auto">
        <ColumnsDirective>
        {employeesGrid.map((item,index) => <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
        <Inject  services={[Page, Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees