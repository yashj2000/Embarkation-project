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
      ship:'DREAM',
      embarkation_counts:100,
      oci_completed :100,
      moci_completed:33,
      checkin_time:'12:50',
      onboard_time:2,
      key:'1'
    },
    {
      ship:'MAGIC',
      embarkation_counts:100,
      oci_completed :100,
      moci_completed:10,
      checkin_time:'07:00',
      onboard_time:2,
      key:'2'
    },
    {
      ship:'SCARLET',
      embarkation_counts:100,
      oci_completed :90,
      moci_completed:100,
      checkin_time:'19:00',
      onboard_time:2,
      key:'3'
    },
    {
      ship:'VALIANT',
      embarkation_counts:100,
      oci_completed :100,
      moci_completed:100,
      checkin_time:'12:10',
      onboard_time:2,
      key:'4'
    }
  ]
const columns = [
  {
    title:'SHIP NAME',
    dataIndex:'ship',
    key:'key'
  },
  {
    title:' EC ',
    dataIndex:'embarkation_counts',
    key:'key'
  },
  {
    title:'OCI ',
    dataIndex:'oci_completed',
    key:'key'
  },
  {
    title:'MOCI ',
    dataIndex:'moci_completed',
    key:'key'
  },
  {
    title:'CHECK IN ',
    dataIndex:'checkin_time',
    key:'key'
  },
  {
    title:'ONBOARD TIME',
    dataIndex:'onboard_time',
    key:'key'
  }
]

  return (
    <div className="App">
      <header className="App-header">
  

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
