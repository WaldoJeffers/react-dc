import React from 'react';
import dc from 'dc';

class BaseChart extends React.Component{
  componentDidMount(){
    console.log('origin', this.element)
  }
  render(){
    return <div ref={element => this.element = element}></div>
  }
}

/*export class BarChart extends React.Component{
  constructor(){
    super()
  }
  componentDidMount(){
    console.log('componentDidMount !', this.element)
  }

  render(){
    return <BaseChart ref={element => this.element = element} />;
  }
}*/

export class BarChart extends BaseChart{
  componentDidMount(){
    console.log(super.componentDidMount)
  }
}
