import React, { Component } from 'react';


class QuestList extends Component {

      constructor(props){
        super(props);
      }
      state = {
        myscore : 0,
        myqno : 0,
        myans : 0
      }
      checkans()
      {
          var myscore = this.state.score;
          var myqno = this.state.myqno;
          myqno++
           if (this.userreply === this.state.myans)
           {
             myscore++
           }
           this.setState({myscore});
           this.setState({myqno});
           this.props.onChange(myscore,'score');
           this.props.onChange(myqno,'qno');
      }




    render(){
           this.state.myscore = this.props.score;
           this.state.myqno = this.props.qno;
           this.state.myans = this.props.answer;
           return(<div>
                     <div className ="summary">
                          <h6 name="score">Score: {this.state.myscore}</h6>
                          <h6>Time:</h6>
                     </div>
                     <h6 name="qno">{this.props.qno}</h6>
                     <h3>{this.props.question}</h3>
                     <input type="text" ref = "userreply" />
                     <button onClick={this.Checkans}>Submit</button>
                   </div>)
              }
}
export default QuestList;
