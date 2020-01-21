/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

let value_1 = 0;
let value = 0;
let button = 0;
let result = 0;
let operator = '';
let lastOperator = '';
class Calculator extends React.Component {



  state = {
    currentState: 0,
    firstValue: '',
    secondValue: '',
    operator: '',
  }



  firstMethod = (value) => {

    if (button == 0) {
      button = 1;
      switch (value) {

        case 1:
          this.setState({
            currentState: this.state.currentState = 1,
          })
          break;
        case 2:
          this.setState({
            currentState: this.state.currentState = 2,
          })

          break;
        case 3:
          this.setState({
            currentState: this.state.currentState = 3,
          })
          break;
        case 4:
          this.setState({
            currentState: this.state.currentState = 4,
          })
          break;
        case 5:
          this.setState({
            currentState: this.state.currentState = 5,
          })
          break;
        case 6:
          this.setState({
            currentState: this.state.currentState = 6,
          })
          break;
        case 7:
          this.setState({
            currentState: this.state.currentState = 7,
          })
          break;
        case 8:
          this.setState({
            currentState: this.state.currentState = 8,
          })
          break;
        case 9:
          this.setState({
            currentState: this.state.currentState = 9,
          })
          break;
        case 10:

          this.setState({
            currentState: this.state.currentState = 0,
          })
          break;

      }

    } else {
      if (button == 1) {
        switch (value) {

          case 1:
            this.setState({
              currentState: this.state.currentState + "" + 1

            })
            break;
          case 2:
            this.setState({
              currentState: this.state.currentState + "" + 2,
            })
            break;
          case 3:
            this.setState({
              currentState: this.state.currentState + "" + 3,
            })
            break;
          case 4:
            this.setState({
              currentState: this.state.currentState + "" + 4,
            })
            break;
          case 5:
            this.setState({
              currentState: this.state.currentState + "" + 5,
            })
            break;
          case 6:
            this.setState({
              currentState: this.state.currentState + "" + 6,
            })
            break;
          case 7:
            this.setState({
              currentState: this.state.currentState + "" + 7,
            })
            break;
          case 8:
            this.setState({
              currentState: this.state.currentState + "" + 8,
            })
            break;
          case 9:
            this.setState({
              currentState: this.state.currentState + "" + 9,
            })
            break;
          case 10:

            this.setState({
              currentState: this.state.currentState + "" + 0,
            })
            break;

        }
      }
    }
  }

  calculations = (lastOperator, operator) => {
    switch (lastOperator) {
      case '+':

        value_1 = this.state.currentState;
        value_1 = parseInt(value_1);
        result = result + value_1;
        this.setState({
          currentState: this.state.currentState = '',
          firstValue: this.state.firstValue = this.state.firstValue + value_1 + operator,
          secondValue: this.state.secondValue = result,
        });
    break;
       
      case '-':
        if (result==0){
          value_1 = this.state.currentState;
          result = parseInt(value_1);            
          this.setState({
            currentState: this.state.currentState = '',
            firstValue: this.state.firstValue = this.state.firstValue + value_1 + operator,
            secondValue: this.state.secondValue = result,
          });
          break;
         }
        else{
         value_1 = this.state.currentState;
         value_1 = parseInt(value_1);
        result = result - value_1;
        this.setState({
          currentState: this.state.currentState = '',
          firstValue: this.state.firstValue = this.state.firstValue + value_1 + operator,
          secondValue: this.state.secondValue = result,
        });
      
        break;
      }
        
      case '*':
        
        if(result==0){   
        value_1 = this.state.currentState;
        result = parseInt(value_1);
        this.setState({
          currentState: this.state.currentState = '',
          firstValue: this.state.firstValue = this.state.firstValue + value_1 + operator,
          secondValue: this.state.secondValue = result,
        });
        break;
      }
        else{
          value_1 = this.state.currentState;
          result = parseInt(value_1);
          result= result * value_1;
          this.setState({
            currentState: this.state.currentState = '',
            firstValue: this.state.firstValue = this.state.firstValue + value_1 + operator,
            secondValue: this.state.secondValue = result,
          });
          break;
        }
      case '/':
       if (result==0){  
          value_1 = this.state.currentState;
          result = parseInt(value_1);
          this.setState({
          currentState: this.state.currentState = '',
          firstValue: this.state.firstValue = this.state.firstValue + value_1 + operator,
          secondValue: this.state.secondValue = result,
        });
        
        break;
      }else {
        value_1 = this.state.currentState;
        value_1 = parseInt(value_1);
        result = result / value_1;
        this.setState({
          currentState: this.state.currentState = '',
          firstValue: this.state.firstValue = this.state.firstValue + value_1 + operator,
          secondValue: this.state.secondValue = result,
        });
      
        break;
      }
    }


  }

  showResult = (operator) => {
    switch (operator) {
      case '+':
        value_1 = this.state.currentState;
        value_1 = parseInt(value_1);
        result = result + value_1;
        this.setState({
          currentState: this.state.currentState =0,
          firstValue: this.state.firstValue ='',
          secondValue: this.state.secondValue = result,
        });
        result = 0;
        break;
      case '-':
        value_1 = this.state.currentState;
        value_1 = parseInt(value_1);
        result = result - value_1;
        this.setState({
          currentState: this.state.currentState = 0,
          firstValue: this.state.firstValue = '',
          secondValue: this.state.secondValue = result,
        });
        result = 0;
        break;
      case '*':
        value_1 = this.state.currentState;
        value_1 = parseInt(value_1);
        result = result * value_1;
        this.setState({
          currentState: this.state.currentState = 0,
          firstValue: this.state.firstValue = '',
          secondValue: this.state.secondValue = result,
        });
        result = 0;
        break;
      case '/':
        value_1 = this.state.currentState;
        value_1 = parseInt(value_1);
        result = result / value_1;
        this.setState({
          currentState: this.state.currentState = 0,
          firstValue: this.state.firstValue = '',
          secondValue: this.state.secondValue = result,
        });
        result = 0;
        break;
    }
  }



  render() {

    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: 'white' }}>

        {/*calculator screen  */}
        <View style={{ width: "100%", height: "25%", backgroundColor: "#e1ccec" }}>
          <Text style={{
            width: "100%", height: "100%",

            color: 'white', fontSize: 40, marginLeft: "3%"
          }}>
            {this.state.firstValue}{this.state.currentState}</Text>
        </View>

        <View style={{ width: "100%", height: "11%", backgroundColor: "#e1ccec" }}>
          <Text style={{
            color: 'white', fontSize: 35, marginLeft: "3%", marginTop: "-1%"
          }}>
            {this.state.secondValue}</Text>
        </View>

        {/* end of calculator screen  */}


        {/* start of  first row  */}
        <View style={{ flexDirection: "row", width: "100%", height: "16%", }}>

          <View style={{
            flexDirection: "row", width: "70%", height: "100%",
            backgroundColor: "#be9fe1", padding: 5
          }}>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              borderWidth: 1, borderRadius: 5, borderColor: 'white',
              marginLeft: "2.5%", justifyContent: 'center', alignItems: 'center'
            }}
              onPress={() => {
                value = 1
                this.firstMethod(value)
              }}
            >

              <Text style={{ color: 'white', fontSize: 40 }}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1,
              borderColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 2
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 3
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>3</Text>
            </TouchableOpacity>
          </View>


          <View style={{ width: "30%", height: "100%", backgroundColor: "#be9fe1", justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
              width: "90%", height: "90%",
              borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {



              this.setState({
                currentState: this.state.currentState = 0,
                secondValue: this.state.secondValue = 0,
                firstValue: this.state.firstValue = '',

              })
              value_1 = 0;
              button = 0;
              value = 0;
              operator = '';
              lastOperator = '';
              result = 0;
            }}


            >
              <Text style={{ color: 'white', fontSize: 40 }}>DEL</Text>
            </TouchableOpacity>

          </View>
        </View>
        {/* end of first row  */}



        {/* start of  second row  */}
        <View style={{ flexDirection: "row", width: "100%", height: "16%" }}>

          <View style={{
            flexDirection: "row", width: "70%", height: "100%",
            backgroundColor: "#be9fe1", padding: 5
          }}>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              borderWidth: 1, borderRadius: 5, borderColor: 'white',
              marginLeft: "2.5%", justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 4
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1,
              borderColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 5
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 6
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>6</Text>
            </TouchableOpacity>
          </View>


          <View style={{ width: "30%", height: "100%", backgroundColor: '#be9fe1', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
              width: "90%", height: "90%",
              borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {

              if (lastOperator == '') {
                lastOperator = '+';
                operator = '+';
                this.calculations(lastOperator, operator);
              }
              else {
                lastOperator = operator;
                operator = '+';
                this.calculations(lastOperator, operator);
              }

            }
            }

            >
              <Text style={{ color: 'white', fontSize: 40 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* end of second row  */}




        {/* start of  third row  */}
        <View style={{ flexDirection: "row", width: "100%", height: "16%" }}>

          <View style={{ flexDirection: "row", width: "70%", height: "100%", backgroundColor: "#be9fe1", padding: 5 }}>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              borderWidth: 1, borderRadius: 5, borderColor: 'white',
              marginLeft: "2.5%", justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 7
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1,
              borderColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 8
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 9
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>9</Text>
            </TouchableOpacity>
          </View>


          <View style={{ width: "30%", height: "100%", backgroundColor: '#be9fe1', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
              width: "90%", height: "90%",
              borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {


              if (lastOperator == '') {
                lastOperator = '-';
                operator = '-';
                this.calculations(lastOperator, operator);
              }
              else {
                lastOperator = operator;
                operator = '-';
                this.calculations(lastOperator, operator);
              }

            }


            }
            >
              <Text style={{ color: 'white', fontSize: 40 }}>-</Text>
            </TouchableOpacity>

          </View>
        </View>
        {/* end of third row  */}


        {/* start of  fourth row  */}
        <View style={{ flexDirection: "row", width: "100%", height: "16%" }}>

          <View style={{ flexDirection: "row", width: "70%", height: "100%", backgroundColor: "#be9fe1", padding: 5 }}>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              borderWidth: 1, borderRadius: 5, borderColor: 'white',
              marginLeft: "2.5%", justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              if (lastOperator == '') {
                lastOperator = '*';
                operator = '*';
                this.calculations(lastOperator, operator);
              }
              else {
                lastOperator = operator;
                operator = '*';
                this.calculations(lastOperator, operator);
              }

            }}
            >
              <Text style={{ color: 'white', fontSize: 40 }}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1,
              borderColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              value = 10
              this.firstMethod(value)
            }}

            >
              <Text style={{ color: 'white', fontSize: 40 }}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              width: "30%", height: "100%",
              marginLeft: "2.5%", borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              this.showResult(operator);
            }}
            >
              <Text style={{ color: 'white', fontSize: 40 }}>=</Text>
            </TouchableOpacity>
          </View>


          <View style={{ width: "30%", height: "100%", backgroundColor: '#be9fe1', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{
              width: "90%", height: "90%",
              borderWidth: 1, borderColor: 'white',
              borderRadius: 5, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => {
              if (lastOperator == '') {
                lastOperator = '/';
                operator = '/';
                this.calculations(lastOperator, operator);
              }
              else {
                lastOperator = operator;
                operator = '/';
                this.calculations(lastOperator, operator);
              }

            }}
            >
              <Text style={{ color: 'white', fontSize: 40 }}>/</Text>
            </TouchableOpacity>

          </View>
        </View>
        {/* end of fourth row  */}



      </View>

    );
  }
}
export default Calculator;
