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

    //  componenDidMount =() => {
    //        console.log("Component Received Prop",this.props.anslet)
    //        if ( this.props.anslet.length  >0)
    //        {
    //              this.setState({
    //                     anslet : this.props.anslet,
    //                     currenta : this.state.anslet[this.state.qno].a,
    //                     currentq : this.state.anslet[this.state.qno].q,
    //                     myscore:0,
    //                     qno: 0
    //              });
     //
    //        }
     //
    //  }


      checkans = (event) => {
        let textval = this.refs.userreply.value
        console.log("checkans child usererpl",textval)
        this.props.onChange(textval,'usereply')
        this.props.onClick()
      }



    render(){
           const currentq = this.props.currentq;
           const currenta = this.props.currenta;
           const myscore = this.props.myscore;
           return(<div>
                     <div className ="summary">
                          <h6 name="score">Score: {this.state.myscore}</h6>
                          <h6>Time:</h6>
                          <h3 name="Question">{currentq}</h3>
                      </div>

                     <textarea type="text" ref = "userreply"></textarea>
                     <button onClick={this.checkans}>Submit</button>
                   </div>)
              }
}
export default QuestList;
