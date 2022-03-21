import React from 'react'
import './App.css'
export const Editproduct2 = ({editform,handleEditForm,handleCancel,changeImageEdit}) => {
  //  export const Editproduct2 = () => {
  // console.log("changeImageEdit >>><<<<<><<<>< : ",changeImageEdit)
  
    return (
        <>
            
            <div className='container-fluid' style={{backgroundColor:"#C4E538"}}>    
         <tr style={{backgroundColor:"lightgray",border:"solid grey 5px"}}>
            {/* <td >
                    <input type="number" name="id"  
                    value={editform.id}/>
                </td> */}
                <td >
                    <input type="text" name="title" required="required"  
                    value={editform.title} onChange={handleEditForm}/>
                </td>
                <td >
                    <input type="text" name="category" required="required" 
                    value={editform.category} onChange={handleEditForm}
                    />
                </td>
                <td >
                    <input type="text" name="price" required="required" 
                    value={editform.price} onChange={handleEditForm}
                    />
                </td>
               
                
 <td>
 {/* <input type="file1" onChange={simple} name="editform.image"
                
                className="editImage"

/> */}
  <input type="file" onChange={changeImageEdit} 
                
                className="editImage"

/>

  
   <img src={editform.image} width="200px" height="190px" style={editform.image === "" ? {display: "none"} : {display:"block"
   
   }}
   
   />
   
                 </td>
               
                
                <td>
                    <button 
                    className="btn btn-md btn-success"
                    type="submit">Save<i class="fa fa-plus-square" aria-hidden="true"></i></button>
                   
                </td>
                <td>
                    <button onClick={handleCancel}>cancel</button>
                </td>
              
                
            </tr>
            
            
          
                 
                 
             </div>   
                 
        </>
    )
}
