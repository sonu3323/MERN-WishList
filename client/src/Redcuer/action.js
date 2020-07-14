
//action for text change **
export const action = (type , payload) => {
    return{
        type: type ,
        payload: payload
     }
};

  //****Asyncrous Methods use  ****

//Fetching data from server action **
export const fetchAction = () => {
    return dispatch => {
        fetch("./data")
        .then(res => res.json())
        .then(data => {
            dispatch({type: "FETCH" , payload: data})
        })
        .catch(error => console.log(error))
    }
}

//Posting data from server action **
export const handleChangeActtion =(e)=>{
   return dispatch =>{

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
         
           dispatch({type:"POST" , payload:data})
         })
         .catch((error) => console.log(error));
   }

      
};


//delete data from server action
export const deleteFetchAction = (id) => {
    return dispatch => {
        fetch(`/remove/${id}`, {
          method:"delete"
         })
         .then(res =>  res.json())
         .then(data => {
             dispatch({type:"DELETE" , payload:data})
         })
         .catch(error => console.log(error))
    }
};

