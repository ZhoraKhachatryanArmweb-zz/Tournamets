import React, { Component } from 'react'

class SavedTournamets extends Component {

    constructor() {
		super()
		this.state = {
			data: JSON.parse(localStorage.getItem("deletedItems"))
		}
    }

    deleteItem = index => {
        const nextState = this.state.data.filter((_, i) => i !== index);
        localStorage.setItem("deletedItems", JSON.stringify(nextState));
        this.setState({ data: nextState });
    }

    deleteItem = (e, id) => {
        const newValue = (JSON.parse(localStorage.getItem('deletedItems')) || []).concat(id);
        localStorage.setItem('deletedItems', JSON.stringify(newValue));
      }

    getDeletedItems = () => {
        const data = JSON.parse(localStorage.getItem('deletedItems'))
		return  data && data.map((i,index) => {
            return (<div key={index}>
                <img src={i.image} width="50"/>
                <div>{i.title}</div> 
                <div>{i.description}</div>
                <div>{i.score}</div>
                <p style={{color:'red'}} onClick={() => this.deleteItem(index)}>Delete</p>
            </div>)
        })
    }
    

	render() {
        const data = JSON.parse(localStorage.getItem('deletedItems'))
		return(
			<div style={{display:'inline-block',float: 'right'}}>
                <p>Saved items</p>
                {this.state.data && this.state.data.map((i,index) => {
                return (<div key={index}>
                    <img src={i.image} width="50"/>
                    <div>{i.title}</div> 
                    <div>{i.description}</div>
                    <div>{i.score}</div>
                    <p style={{color:'red'}} onClick={() => this.deleteItem(index)}>Delete</p>
                </div>)
            })}
			</div>
		)
	}
}

export default SavedTournamets