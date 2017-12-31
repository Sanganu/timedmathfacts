import React, { Component } from 'react';
import InputSection from './InputSection';
import QuestList from './DisplayQuestion'


class MainSection extends Component {
       constructor(props) {
                   super(props);
                   this.state = {
                      addition: true,
                      subtraction:  true,
                      multiplication: true,
                      division: true,
                      tquest: '10',
                      anslet: [],
                      question:'',
                      answer:'',
                      qno:0,
                      score:0
                    };
       }

       handleInputChange =(value,name) => {
         console.log('The Value in   Ancestor',value,name);

            this.setState({
               [name]: value
             });

            if(name === 'score')
            {
              this.setState({qno: this.state.qno++});

            }
       }



       startQuiz = () => {
               console.log("staartquiz",this.state.anslet);
               /*
               let allquest = quizlet;
               let i = 0//this.state.qno ;
               while( i < allquest.length)
               {

                    //this.setState.question = allquest[i].q
                    //this.setState.answer = allquest[i].a
                    this.handleInputChange(allquest[i].q,this.state.question);
                    console.log("The all quest",this.state.question,this.state.answer[i])
                    i++;

               }*/
               console.log("Start quiz:")
       }

      generateQuestion =() => {
         let maxnum = 0;
         let tqt = this.state.tquest;
         let add = this.state.addition;
         let sub = this.state.subtraction;
         let mul = this.state.multiplication;
         let div = this.state.division;
         console.log('Insidegenerate',tqt,add,sub,mul,div);
         let min = 2;
         let max = 12;
         let num1 = Math.floor(Math.random()*(max - min +1))+min;
         let num2 = Math.floor(Math.random()*(max));
         let  questionarray = [];

         if ( add || sub || mul || div)
         {
             while(maxnum < tqt)
             {
                         let num1 = Math.floor(Math.random()*(maxnum-1)+1);
                         let num2 = Math.floor(Math.random()*(maxnum-1)+1);
                         if( add && maxnum<tqt)
                         {
                              questionarray.push({
                              q:`${num1}+${num2}`,
                              a:num1+num2
                            })
                             maxnum++;
                         }
                         if( mul && maxnum<tqt)
                         {
                              questionarray.push({
                               q:`${num1}*${num2}`,
                               a:num1*num2
                             })
                             maxnum++;
                         }
                         if( sub && maxnum<tqt)
                         {
                                if(num1 > num2)
                                {
                                   questionarray.push({
                                     q:`${num1}-${num2}`,
                                    a:num1+num2
                                     })
                                      maxnum++;
                                }
                                 else if(num2 > num1)
                                 {
                                    questionarray.push({
                                     q:`${num2}-${num1}`,
                                     a:num2-num1
                                     })
                                      maxnum++;
                                 }

                         }
                          if( div && maxnum<tqt)
                          {
                              let num3 = num1*num2;
                               questionarray.push({
                                     q:`${num3} / ${num2}`,
                                      a:num1
                                  })

                              maxnum++ ;
                          }
             }//end while
             console.log("The Question array", questionarray);
             this.setState(
                   {
                     anslet:questionarray
                   }
                 ,
                    () => {
                       this.startQuiz( );
                     }
             );
         } //end if part
         else {
             alert("Choose an option");
         } // end if statement add sub mul div
      }//end generateQuestion


       render() {
         const addition = this.state.addition;
         const subtraction = this.state.subtraction;
         const multiplication = this.state.multiplication;
         const division = this.state.division;
         const tquest = this.state.tquest;
         const quizlet = this.state.quizlet;
         const question = this.state.question;
         const answer = this.state.answer;
         const score = this.state.score
          return(
            <div>
                   <InputSection addition = {addition}
                                 subtraction = {subtraction}
                                 multiplication = {multiplication}
                                 division = {division}
                                 tquest = {tquest}
                                 onChange = {this.handleInputChange}
                                 onClick = {this.generateQuestion} />

                   <QuestList  question  = {question}
                               answer = {answer}
                              score = {score}
                              onChange ={this.handleInputChange}
                                 />
             </div>
           ); // end of return
       }; // end of render
}

export default MainSection;

// The Problem is setting the state of array - startquiz, tried to set state os array and variable name not sure why it is not changing

/*
constructor(props) {
            super(props);
            this.state = {
               addition: true,
               subtraction:  true,
               multiplication: true,
               division: true,
               tquest: '10',
               thequizadd:[
                 {id:0,q:'1+2',a:3},
                 {id:1,q:'3+8',a:11},
                 {id:2,q:'5+5',a:10},
                 {id:3,q:'9+7',a:16},
                 {id:4,q:'6+2',a:8},
                 {id:5,q:'4+5',a:9},
                 {id:6,q:'2+7',a:9},
                 {id:7,q:'8+9',a:17},
                 {id:8,q:'9+4',a:13},
                 {id:9,q:'6+3',a:9}],
                 thequizsub:[
                   {id:10,q:'9-3',a:6},
                   {id:11,q:'6-4',a:2},
                   {id:12,q:'9-4',a:5},
                   {id:13,q:'9-2',a:7},
                   {id:14,q:'8-5',a:3},
                   {id:15,q:'7-3',a:4},
                   {id:16,q:'6-2',a:4},
                   {id:17,q:'7-5',a:2},
                   {id:18,q:'9-3',a:6},
                   {id:19,q:'5-3',a:2}],
                   thequizmul:[
                     {id:20,q:'7*2',a:14},
                     {id:21,q:'4*3',a:12},
                     {id:22,q:'5*7',a:35},
                     {id:23,q:'8*6',a:48},
                     {id:24,q:'7*9',a:63},
                     {id:25,q:'6*3',a:18},
                     {id:26,q:'2*4',a:8},
                     {id:27,q:'8*3',a:24},
                     {id:28,q:'9*5',a:45},
                     {id:29,q:'6*4',a:24}],
                     thequizdiv:[
                       {id:30,q:'12 / 3',a:3},
                       {id:31,q:'24/3',a:11},
                       {id:32,q:'45/7',a:10},
                       {id:33,q:'48/6',a:16},
                       {id:34,q:'64/8',a:8},
                       {id:35,q:'63/9',a:9},
                       {id:36,q:'21/3',a:9},
                       {id:37,q:'72/8',a:17},
                       {id:38,q:'56/8',a:7},
                       {id:39,q:'49/7',a:7}],
                    quizlet:[],
                    question:'',
                    answer:'',
                    qno:0,
                    score:0
             };
}
======

       buttonClick = (event) => {
           console.log('Start Button Click Event is',event);
           let tqt = this.state.tquest;
           let add = this.state.addition;
           let sub = this.state.subtraction;
           let mul = this.state.multiplication;
           let div = this.state.division;
           console.log(tqt,add,sub,mul,div);

           if ( add || sub || mul || div)
           {

                   let i =1;
                   while( i <= tqt )
                   {
                       let rndnum = Math.floor(Math.random() * 9);
                       if (add && i<= tqt)
                       {
                         this.state.quizlet.push(this.state.thequizadd[rndnum])
                         i++
                       }
                      if(sub && i<= tqt)
                      {
                        this.state.quizlet.push(this.state.thequizsub[rndnum])
                        i++
                      }
                      if(mul && i<= tqt)
                      {
                        this.state.quizlet.push(this.state.thequizmul[rndnum])
                        i++
                      }
                      if(div && i<= tqt)
                      {
                        this.state.quizlet.push(this.state.thequizdiv[rndnum])
                        i++
                      }
                      console.log("i value"+i)
                   } // end while


                   this.startQuiz()
               } //end if part
           else {
               alert("Choose an option");
           } // end if statement add sub mul div


       }; //button click
*/
