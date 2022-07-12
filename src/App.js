// import 'antd/dist/antd.css'
// import './App.css';
// import {Button} from 'antd'

// function App() {

//   function onButtonClick(e){

//     console.log("Hello");
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button type='link' onClick={onButtonClick}>new</Button>
//       </header>
//     </div>
//   );
// }

// export default App;
import 'antd/dist/antd.css';

import './App.css';
import {Table} from 'antd';

function App() {
  const data =[
    {

      Task_name: 'name1',
      Environment_name : 'env',
      Request_data:'data',
      Response_data :'data22',
      Due_date:23,
      Created_date:24,
      Start_date: 1,
      key:'1'

    },
    {

    

      Task_name: 'name2',
      Environment_name : 'env',
      Request_data:'data',
      Response_data :'data22',
      Due_date:23,
      Created_date:24,
      Start_date: 1,
      key:'1'
  
    },
    {

    

    Task_name: 'name3',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name4',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name5',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name6',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name7',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name7',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name7',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name7',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },{

    

    Task_name: 'name7',
    Environment_name : 'env',
    Request_data:'data',
    Response_data :'data22',
    Due_date:23,
    Created_date:24,
    Start_date: 1,
    key:'1'

  },
  ]
const columns = [
  {
    title:'taskName ',
    dataIndex:'Task_name',
    key:'key'
  },
  {
    title:' Environment_name ',
    dataIndex:'Task_name',
    key:'key'
  },
  {
    title:'Request_data ',
    dataIndex:'Task_name',
    key:'key'
  },
  {
    title:'Response_data ',
    dataIndex:'Task_name',
    key:'key'
  },
  {
    title:'Due_date ',
    dataIndex:'Task_name',
    key:'key'
  },
  {
    title:'Created_date ',
    dataIndex:'Task_name',
    key:'key'
  },
  {
    title:'Start_date ',
    dataIndex:'Task_name',
    key:'key'
  },
  {
    title:'Status ',
    dataIndex:'Task_name',
    key:'key'
  },
  
]

  return (
    <div className="App">
      <header className="App-header">
        {/* <Button type='primary'>Add Task</Button> */}
        


        <Table 
        dataSource={data}
        columns={columns}
        >

        </Table>
      </header>
    </div>
  );
}

export default App;
