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

let value = 0;

class Calculator extends React.Component {



  state = {
    currentState: 0,
    firstValue:'',
    secondValue:'',
    operator:'',
    result:'',
  }



  firstMethod = (value) => {

    if (this.state.firstValue =='') {

      switch (value) {

        case 1:
          this.setState({
            currentState: this.state.currentState = 1,
            firstValue: this.state.firstValue = 1
          })
          break;
        case 2:
          this.setState({
            currentState: this.state.currentState = 2,
            firstValue: this.state.firstValue = 2
          })
          break;
        case 3:
          this.setState({
            currentState: this.state.currentState = 3,
            firstValue: this.state.firstValue = 3
          })
          break;
        case 4:
          this.setState({
            currentState: this.state.currentState = 4,
            firstValue: this.state.firstValue = 4
          })
          break;
        case 5:
          this.setState({
            currentState: this.state.currentState = 5,
            firstValue: this.state.firstValue = 5
          })
          break;
        case 6:
          this.setState({
            currentState: this.state.currentState = 6,
            firstValue: this.state.firstValue = 6
          })
          break;
        case 7:
          this.setState({
            currentState: this.state.currentState = 7,
            firstValue: this.state.firstValue = 7
          })
          break;
        case 8:
          this.setState({
            currentState: this.state.currentState = 8,
            firstValue: this.state.firstValue = 8
          })
          break;
        case 9:
          this.setState({
            currentState: this.state.currentState = 9,
            firstValue: this.state.firstValue = 9
          })
          break;
        case 10:

          this.setState({
            currentState: this.state.currentState = 0,
            firstValue: this.state.firstValue = 0
          })
          break;

      }
    } else if (this.state.secondValue == '') {

      switch (value) {

        case 1:
          this.setState({
            secondValue: this.state.secondValue = 1
          })
          break;
        case 2:
          this.setState({
            secondValue: this.state.secondValue = 2
          })
          break;
        case 3:
          this.setState({
            secondValue: this.state.secondValue = 3
          })
          break;
        case 4:
          this.setState({
            secondValue: this.state.secondValue = 4
          })
          break;
        case 5:
          this.setState({
            secondValue: this.state.secondValue = 5
          })
          break;
        case 6:
          this.setState({
            secondValue: this.state.secondValue = 6
          })
          break;
        case 7:
          this.setState({
            secondValue: this.state.secondValue = 7
          })
          break;
        case 8:
          this.setState({
            secondValue: this.state.secondValue = 8
          })
          break;
        case 9:
          this.setState({
            secondValue: this.state.secondValue = 9
          })
          break;
        case 10:

          this.setState({
            secondValue: this.state.secondValue = 0
          })
          break;
      }
    }
      else {
        alert("You are not allow to enter value greater than 10 or please enter please type operator")
    }
  }

  calculations=()=>{
    switch(this.state.operator){
      case '+':
      
      this.setState({
         
        currentState:this.state.firstValue + this.state.secondValue,       
        firstValue: this.state.firstValue = '',
        operator: this.state.operator = '',
        secondValue:this.state.secondValue='',     
      })   
      alert(this.state.currentState);
      
      break;  
         
      case '-':
            this.setState({
              currentState:this.state.firstValue - this.state.secondValue,
              firstValue: this.state.firstValue = '',
              operator: this.state.operator = '',
              secondValue:this.state.secondValue='',
          
            })
            break;
      case '*':
              this.setState({
                
                currentState:this.state.firstValue * this.state.secondValue,
                firstValue: this.state.firstValue = '',
                operator: this.state.operator = '',
                secondValue:this.state.secondValue='',
                        
              })
              break;
      case '/':
      this.setState({
        currentState:this.state.firstValue / this.state.secondValue,
        firstValue: this.state.firstValue = '',
        operator: this.state.operator = '',
        secondValue:this.state.secondValue='',
      })
           
        break;
    }

  }
  
  render() {

    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: 'white' }}>

        {/*calculator screen  */}
        <View style={{ width: "100%", height: "36%", backgroundColor: "#e1ccec" }}>
          <Text style={{
            width: "100%", height: "100%",
            color: 'white', fontSize: 40, marginLeft: "3%"
          }}>
  {this.state.currentState}{this.state.operator}{this.state.secondValue}{this.state.result}</Text>
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
                firstValue: this.state.firstValue = '',
                operator: this.state.operator = '',
                secondValue:this.state.secondValue='',
              })
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
              this.setState({
                operator: this.state.operator = '+',
              })
            }}
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
            }}onPress={() => {
              this.setState({
                operator: this.state.operator = '-',
              })
            }}
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
            }}onPress={()=>{
              this.setState({
                operator:this.state.operator='*',   
              })           
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
            }}onPress={()=>{
              this.calculations();
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
            }}onPress={() => {
              this.setState({
                operator: this.state.operator = '/',
              })
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
