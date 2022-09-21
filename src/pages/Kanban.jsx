import React from 'react'
import {ColumnDirective, ColumnsDirective, KanbanComponent} from '@syncfusion/ej2-react-kanban'
import {Header} from '../components';
import {kanbanData, kanbanGrid} from '../data/dummy';

const Kanban = () => (
  
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
         <Header category="App" title="Kanban" />
         <KanbanComponent dataSource={kanbanData} id="kanban" keyField="Status" cardSettings={{contentField:'Summary', headerField:'Id'}}>
         <ColumnsDirective>
             {
                 kanbanGrid.map((item, index) => 
                     <ColumnDirective key={index} {...item}/>
                 )
             }
         </ColumnsDirective>
         </KanbanComponent>
    </div>
  
)

export default Kanban
