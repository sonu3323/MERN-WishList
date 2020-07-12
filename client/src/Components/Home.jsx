import React, { useState , useEffect } from "react";
import Navigation from "./Navigation";

const Home = () => {
  const [text, setText] = useState("");
  const [myWish, setmyWish] = useState([{
    id:1 ,
    wish: "loading"
  }])

  useEffect(() => {
   
   
    fetch('/data')
    .then(res => res.json())
    .then(data => {
      console.table(data)
    setmyWish(data)
  })
  .catch(error => console.log(error))
}, [])

//console.log(myWish)
  
  //Method for hendling the Form ****
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new URLSearchParams();

    for (let pair of new FormData(e.target)) {
      data.append(pair[0], pair[1]);
    }

    fetch("/sent", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setmyWish([...myWish , data])
      })
      .catch((error) => console.log(error));

      setText("")
  };

  const deleteHandle =(id) => {
     const mywish= myWish.filter(item => item._id !==id);
     
     fetch(`/remove/${id}`, {
       method:"delete"
      })
      .then(res =>  res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
      setmyWish(mywish)
  }




  return (
    <div className="container">
      <Navigation />
      <h1>Hello this is Home page</h1>
      <div className="row">
        <div className="col-8 offset-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Wish List</label>
              <input
                type="text"
                className="form-control"
                name="wish"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
       
        {myWish.map( (wish) => {
         return (
            <div key={wish._id} className="card my-4">
            <ul className="list-group list-group-flush">
           <li className="list-group-item"
            onClick={()=> deleteHandle(wish._id)}
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

export default Home;
