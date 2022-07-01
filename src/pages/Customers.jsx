import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar, Sort,Filter} from '@syncfusion/ej2-react-grids'
import {customersData,customersGrid} from '../data/dummyData'
import {Header} from '../components'

const Customers = () => {
  return (
    <div className='m-2 p-2 bg-white rounded-3xl md:m-10 md:p-10'>
      <Header category="Page" title="Customers" />
      <GridComponent dataSource={customersData} allowPaging allowSorting allowExcelExport allowPdfExport toolbar={['Delete']} width="auto" editSettings={{allowDeleting:true, allowEditing:true}}>
        <ColumnsDirective>
        {customersGrid.map((item,index) => <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
        <Inject  services={[Page,Toolbar,Selection, Edit,Sort,Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers