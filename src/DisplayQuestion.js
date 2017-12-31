import React, { Component } from 'react';


class QuestList extends Component {

      constructor(props){
        super(props);
        this.state = {
          score : 0,
          currentq : '',
          currenta: 0,
          anslet : [],
          qno:0
        }
      }


      checkans = (event) => {
        let textval = this.refs.userreply.value
        console.log("checkans child usererpl",textval)
        this.props.onChange(textval,'usereply')
        this.props.onClick()
      }

     componentWillReceiveProps(nextprops)
     {
       if(nextprops != this.props.qno)
       {
         this.refs.userreply.value =""; 
       }
     }


    render(){
           const currentq = this.props.currentq;
           const currenta = this.props.currenta;
           const myscore = this.props.myscore;
           const qno = this.props.qno;

           return(<div>
                     <div className ="summary">
                          <h6 name="score">Score: {this.state.myscore}</h6>
                          <h6>Time:</h6>
                          <h6>Question:{qno}</h6>
                      </div>
                      <div>
                            <h3 name="Question">{currentq}</h3>
                           <textarea type="text" ref = "userreply"></textarea>
                           <button onClick={this.checkans}>Submit</button>
                      </div>
                   </div>)
              }
}
export default QuestList;
