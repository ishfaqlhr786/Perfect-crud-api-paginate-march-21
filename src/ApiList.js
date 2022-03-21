import React ,{useState,useEffect,useMemo} from 'react'
//import data from './mock-data.json'
import {nanoid}  from 'nanoid'
import './App.css'
//import {SelectAll} from './components/SelectAll'
import axios from 'axios'
import Paginate  from './Paginate'


export const ApiList = () => {
    
    const [data,setData]= useState([])
   // const [limit,setLimit]=useState(5)
   
   
   
    const fetchData=async()=>{
        // const res= await axios.get(``)
      const res = await axios.get(
        `https://fakestoreapi.com/products`
      )
      console.log(res.data)
      setData(res.data)
          // console.log(list.data)
          // return res.data;
 
     }
     useEffect(()=>{
       fetchData()
     },[])
   console.log(data)
 

    
  
 
    return (
        <div className="container22" style={{width:"100vw"}} >
        <div style={{ marginLeft: "200px" }}>



        </div>



        <br />


                
                
                    
 <div >
         

          
             
              <Paginate items={data} />
           
   </div>
    

  

                               
                      
          
         
         
         


            
           
        </div>
    )
}
