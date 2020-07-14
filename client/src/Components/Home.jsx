import React, { useState , useEffect } from "react";
import Navigation from "./Navigation";
import { connect } from 'react-redux';
import  {action , fetchAction , handleChangeActtion, deleteFetchAction } from '../Redcuer/action'

const Home = (props) => {

  
  useEffect(() => {
   
   props.fetchData()
  
}, [])

  

  return (
    <div className="container">
      <Navigation />
      <h1>Hello this is Home page</h1>
      <div className="row">
        <div className="col-8 offset-2">
          <form onSubmit={(e) => props.handleSubmit(e)}>
            <div className="form-group">
              <label>Wish List</label>
              <input
                type="text"
                className="form-control"
                name="wish"
                value={props.text}
                onChange={(e) => props.onChange(e.target.value)}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
       
        {props.myWishes.map( (wish) => {
         return (
            <div key={wish._id} className="card my-4">
            <ul className="list-group list-group-flush">
           <li className="list-group-item"
            onClick={(id)=> props.deleteHandle(wish._id)}
           >{wish.wish}</li>
            </ul>
          </div>
           )
         })} 
        </div>
      </div>
    </div>
  );
};


//For use State
const mapStateToProps = state => {
  return {
    text: state.text ,
    myWishes: state.myWishes
  }
};


//For action/dispatch 
const mapDispatchToProps =dispatch => {
  return {
      onChange: (text) => {dispatch(action('TEXT' , text))} ,
      fetchData:  ()=> {dispatch(fetchAction())} ,
      handleSubmit: (e) => {dispatch(handleChangeActtion(e))} ,
      deleteHandle: (id) => {dispatch(deleteFetchAction(id))}
  }
};


export default connect(mapStateToProps , mapDispatchToProps)(Home);
