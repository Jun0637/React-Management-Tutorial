import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers =[{
  'id':1,
  'image': 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
  'name': 'kico1',
  'birthday': '961111',
  'gender': 'man',
  'job': 'college'
},
{
  'id':2,
  'image': 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
  'name': 'kico2',
  'birthday': '971111',
  'gender': 'waman',
  'job': 'college'
},
{
  'id':3,
  'image': 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
  'name': 'kico3',
  'birthday': '981111',
  'gender': '?',
  'job': 'college'
}
]
class App extends Component {
  render(){
    return(
      <div>
    {
      customers.map(c => {
        return(
          <Customer 
            key={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        )
      })
    }
    </div>
    );
  }
}
export default App;
