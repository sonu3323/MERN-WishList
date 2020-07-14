    const isState = {
        text: "" ,
        myWishes: [{id:1 ,wish: "loading" }]
    }
    
    const reducer =(state =isState , action)=>{
            console.log(action)

        switch (action.type) {
            case "TEXT":
                return {
                    ...state ,
                    text: action.payload
                }
            
            case "FETCH": 
            return {
                ...state ,
                 myWishes: action.payload
             }
            
             case "POST":
                 return{
                    ...state ,
                    myWishes: [...state.myWishes , action.payload] ,
                    text: ""
                 }

                 case "DELETE": 
               
                 return {
                         ...state ,
                         myWishes: state.myWishes.filter( item => item._id !== action.payload._id)
                     }

            default: 
            return state
        }
       
        
    };

    
    export default reducer;