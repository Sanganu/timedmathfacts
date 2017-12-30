import React, { Component } from 'react';


class InputSection extends Component {
       constructor(props){
          super(props);
          this.handleInputdesc = this.handleInputdesc.bind(this);
          this.handleClickdesc = this.handleClickdesc.bind(this);
       }

      handleInputdesc = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const   name = target.name;
        console.log('The Value in descendant',value,name);
        this.props.onChange(value,name);
      }
      handleClickdesc = (event) =>{
          console.log('handle click',this.props.addition,this.props.multiplication);
           this.props.onClick(event.target.value);

      };



        render(){
          return(
               <fieldset>
                               <label className ="checkbox-inline cloptions">
                                   <input type = "checkbox"  checked={this.props.addition} onChange = {this.handleInputdesc} name = "addition" />Addition
                                </label>
                                <label className ="checkbox-inline cloptions">
                                    <input type = "checkbox"  checked={this.props.subtraction} onChange = {this.handleInputdesc} name = "subtraction" />Subtraction
                                </label>
                                 <label className ="checkbox-inline cloptions">
                                     <input type = "checkbox"  checked={this.props.multiplication} onChange = {this.handleInputdesc} name = "multiplication" />Multiplication
                                  </label>
                                 <div className = "form-group">
                                      <label>Number of Questions</label>
                                       <select value={this.props.tquest} onChange = {this.handleInputdesc} className = "form-control" name = "tquest">
                                          <option value ='10'>10</option>
                                          <option value ='9'>9</option>
                                          <option value ='7'>7</option>
                                          <option value ='5'>5</option>
                                      </select>
                                  </div>
                                   <br />
                            <button className = "btn btn-info"  name = "getquest" onClick = {this.handleClickdesc}>Start the Quiz</button>
                   </fieldset>
             );
        }
}

export default InputSection;