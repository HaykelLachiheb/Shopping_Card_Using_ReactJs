




class Header extends React.Component {
 


    render(){     

      return <p>Name : {this.props.Name} {this.props.LastName}<br></br> <br></br>
      Fidelity Number : {this.props.Fidelity_Number}</p>  ;  
          

      
    }
         


}


class InputList extends React.Component {


       constructor(){

              super();
              this.state = {
                     products : [],
                     item : "5",
              }

              

              


       }

       render(){
   
         return(
         <div id="Div_Items">
            <Item1 MyNum = {this.state.Number} MyPrice = {this.state.Price} />
            <Item2  />
            <Item3  />
            <Item4  />

            
            

         </div>
         );
       }
   
   
}


class Item1 extends React.Component {

constructor(){
 
       super();
       this.state = {

              Name : "KeyBoards",
              Number : "0",
              Price : "100",
              
              
             
             
              }

              this.ChangeInput1 = (e) => {


                     this.setState({
       
                            Number : e.target.value,
                     })
       
       
       }

       



}       

render(){

return <p >    {this.state.Name}<br></br>     Price : {this.state.Price}    Number: <input type="text" onChange={this.ChangeInput1} ></input>    Total Price : {this.state.Number*this.state.Price}  </p>

}


}

class Item2 extends React.Component {

      
       constructor(){

              super();
              this.state = {

                     Name : "Mouse",
                     Number : "",
                     Price : "50",
              }

              this.ChangeInput1 = (e) => {


                     this.setState({
       
                            Number : e.target.value,
                     })
       
       
       }



       }

       render(){
       
       return <p>{this.state.Name}<br></br>  Price : {this.state.Price}    Number: <input type="text" onChange={this.ChangeInput1}></input>    Total Price : {this.state.Number*this.state.Price}</p>
       
       }
       
       
       }

class Item3 extends React.Component {


constructor(){


       super();
       this.state = {

              Name : "Screen",
              Number : "",
              Price : "200",
       }

       this.ChangeInput1 = (e) => {


              this.setState({

                     Number : e.target.value,
              })


}

}


 render(){
              
   return <p>{this.state.Name}<br></br>  Price : {this.state.Price}    Number: <input type="text" onChange={this.ChangeInput1}></input>    Total Price : {this.state.Number*this.state.Price}</p>
              
 }
              
              
} 

class Item4 extends React.Component {

 constructor(){

     super();
     this.state = {

        Name : "Camera",
        Number : "",
        Price : "300",

     }

     this.ChangeInput1 = (e) => {


       this.setState({

              Number : e.target.value,
       })


}



 }      

 render(){
                    
  return <p>{this.state.Name}<br></br>   Price : {this.state.Price}   Number: <input type="text" onChange={this.ChangeInput1}></input>    Total Price : {this.state.Number*this.state.Price}</p>
                    
 }
                    
                    
} 





class TotalPrice extends React.Component {


       constructor(){

              super();           
       
              
              
       }

render () {
       
  return (

   <div id="Btn_Div">
     <Text />
     <Result />
     

   </div>



  )

}


}


class Text extends React.Component {

       constructor(){

              super();
              this.state = {

                     
                     Number : "",
                     
              }

              



       }
       

       render(){

              return (
              <div>
              <p id="Text_Total_Price">Total Price</p> 
              <p id="Teeext">{this.state.Number}</p>
              </div>

              )
       }
}

class Result extends React.Component {

       render () {

             
       }
}




class MyApp extends React.Component {

       constructor(){

              super();
              this.state = {
                     Phone : "25123456",
                     Adress : "750 Elnobel Road,Elezdihar City",
                     Postal : "6011",
                     City : "Gabes",
                     
                     
              }                 

              
       }
       render (){

              

              return (

                     <div id="First_Div">

                            


                        <Header Name="Haykel" LastName="Lachiheb" Fidelity_Number="1234"  />
                        Phone Number : {this.state.Phone}
                        <br></br><br></br>
                        Adress : {this.state.Adress} {this.state.Postal} {this.state.City}
                        <br></br><br></br><br></br>


                        <InputList  />
                        <b></b>
                        <TotalPrice />  

                        <button  id="Btn"> Validate </button>
                        
                        
                                       
                     
                      
                     </div>

              )
       }
}






ReactDOM.render(<MyApp />,document.getElementById('App'));


        



