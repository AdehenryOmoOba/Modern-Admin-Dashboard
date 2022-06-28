import React from 'react'
import {GridComponent,ColumnDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids'
import {ordersData,contextMenuItems,ordersGrid} from '../data/dummyData'
import {Header} from '../components'

const Orders = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Orders