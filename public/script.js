document.getElementById("form").onsubmit = (e) => {

    e.preventDefault();
    
    let URL = "/sent";

    const fromData = new URLSearchParams()

    for(let pair of new FormData(e.target)) {
        console.log(pair);
         fromData.append(pair[0] , pair[1])
    };

    fetch(URL ,
    {
        method:"POST" ,
        body: fromData
    }
    ).then(data => data.json())
    .then(res => {
        data = res
        location.reload()
        console.log(res)
    })
    .catch(error => console.log(error))
 };

const deleteItem =(item) => {
      
    
    
    fetch(`/remove/${item.innerText}` ,{
            method:"delete"
        })
        
        .then(() => {
           
            location.reload()
        })
        .catch(error => console.log(error))
 }