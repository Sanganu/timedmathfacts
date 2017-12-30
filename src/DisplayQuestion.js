import React, { Component } from 'react';


class QuestList extends Component {
/*
  componentDidMount() {
    axios.get('/api/posts')
        .then(function(response){
            console.log(response.data);

        })
  }

*/
  render()
  {
         console.log("in render of displayQuestion")

          return(<table className = "details">
                {this.props.thequiz.map( question =>(<dispquest question ={question} />))}
                </table>
           ); // end return
   }// end render
} // End class
class dispquest  extends Component{
        constructor(props){
          super(props);
        }
    render(){
           return(<div><tr key={this.props.question.id}><th>{this.props.question.q}</th>
                       <th><input type="text" id={this.props.question.id} vans={this.props.question.a} />
                       </th></tr>
                       </div>)
              }
}
export default QuestList;
