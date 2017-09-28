import React, { Component } from 'react';
class QuizOptions extends Component {

constructor(props){

	super(props);
	this.state={};
	this.callParentsCheckOptions=this.callParentsCheckOptions.bind(this);
}

callParentsCheckOptions(){
	this.props.checkResults(this.props.option);
}
  render() {
    return (
    <div className="fields animated flip" onClick={this.callParentsCheckOptions}>
    <div className="field-block">{this.props.option}</div></div>
    );
}
}
export default QuizOptions;