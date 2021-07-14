import React, { Component, useState } from 'react';
import "./TodoApp.css";

export class TodoApp extends Component {
    state={
        input:"",
        items:[]
    };

    handleChange=event=> {
        this.setState({
            input:event.target.value
        });
        
    };   

    storeItems = event =>{
        event.preventDefault();
        const {input}=this.state;
        

        this.setState({
            items:[...this.state.items,input],
            input :""


        });


    };
    deleteItem=key=>{
        const allItems= this.state.items;

        allItems.splice(key,1);
        
        this.setState({
            items:allItems
        })
       
    };
    
    


    render() {
        const { input,items } =this.state;
        console.log(items); 
        return ( 
            <div className="todo-base">
                

                <form className="input-section" onSubmit={this.storeItems}>
                <h2>TASK LIST</h2>
                
                    <input  className ="textarea"
                    value={input}
                    onChange={this.handleChange}
                    type="text" placeholder="Enter taks..."/>
                    
                </form>

                <ul>
                    {items.map((data,index)=>(
                        
                        <li 
                         key={index}>{data} <input type="checkbox"  />  <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
                    ))}
                    
                </ul>
            </div>
         );
    }
}
 
export default TodoApp;