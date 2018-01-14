import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './commonts/head';
import ComponentFooter from './commonts/foot';
import ComponentBody from './commonts/body';

class Index extends React.Component{

  render(){
    return (
      <div> 
        <ComponentHeader/>
        <ComponentBody userId={123}/>
        <ComponentFooter/>
      </div>
    )
  }
}

ReactDOM.render(<Index/>,document.getElementById('example'));