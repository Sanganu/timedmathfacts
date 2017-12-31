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
                      score:0,
                      userreply:0
                    };
       }

       handleInputChange =(value,name) => {
         console.log('The Value in   Ancestor',value,name);

            this.setState({
               [name]: value
             });
              /*
            if(name === 'score')
            {
              this.setState({qno: this.state.qno++});

            }*/
       }



       startQuiz = () => {
               console.log("staartquiz",this.state.anslet);
               this.setState({
                 question:this.state.anslet[this.state.qno].q,
                 answer: this.state.anslet[this.state.qno].a

               },
               () => {
                 console.log('Q ans',this.state.question,this.state.answer,this.state.qno);
               });

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
                     anslet:questionarray,
                     qno:0,
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

      checkAnswers = () =>
      {
          console.log("Inside Checkans");
          var myscore = this.state.score;
          var userreply = this.state.userreply;
          var qno = this.state.qno;
          var correctanswer = this.state.answer[qno];
          var l = this.state.anslet.length;
          console.log('l is',l);

          qno++ ;

           if (userreply === correctanswer)
           {
             myscore++
           }
           console.log("Score",myscore,"qno",qno);
           if ( qno < l)
           {
                 this.setState({
                   myscore: myscore,
                   qno: qno,

                 },
                  () =>{
                       this.startQuiz();
                  });
           }
           else {
               console.log("End of Quiz");
           }

      }



       render() {
         const addition = this.state.addition;
         const subtraction = this.state.subtraction;
         const multiplication = this.state.multiplication;
         const division = this.state.division;
         const tquest = this.state.tquest;
         const anslet = this.state.anslet;
         const question = this.state.question;
         const answer = this.state.answer;
         const score = this.state.score;
         const qno = this.state.qno;

          return(
            <div>
                   <InputSection addition = {addition}
                                 subtraction = {subtraction}
                                 multiplication = {multiplication}
                                 division = {division}
                                 tquest = {tquest}
                                 onChange = {this.handleInputChange}
                                 onClick = {this.generateQuestion} />

                   <QuestList  currentq = {question}
                               currenta={answer}
                               currentqno = {qno}
                               onChange = {this.handleInputChange}
                                onClick = {this.checkAnswers} />
             </div>
           ); // end of return
       }; // end of render
}

export default MainSection;
