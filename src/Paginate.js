



import React, { useEffect, useState ,useCallback} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { SelectAll2 } from './SelectAll2'
import {Editproduct2}  from './Editproduct2'
import {nanoid} from 'nanoid'
import './App.css'
import axios from 'axios'
// Example items, to simulate fetching from another resources.
//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems ,handleChange,items,handleDelete,deleteSelected
,handleEditFormSubmit,handleEditForm,clickEdit,productId,handleCancel,editform,
handleSearch,handleSearchByCategory, changeImageEdit,simple
}) {
  const [data,setData]= useState([...items])
  const [category,setCategory]=useState("enetr category")
   
 const [searchId,setSearchId] = useState(0)
  console.log(data)
 
    console.log(productId)
    const [pid,setpId]  = useState(0)
  return (
    <>
    <div className='container-fluid1' style={{backgroundColor:"#C4E538",width:"100%"}}>
    <form >
                       <table>
                         <tr><td>
                       <label className="custom-control-label">Search by id</label></td>
                       <td>
                       <input type="number" 
                       className="form-control1" name="searchId" onChange={(e)=>setSearchId(e.target.value)}
                       value={searchId} /></td>
                       <td>
                       <button 
                       className="btn btn-md btn-warning" 
                       onClick={(e)=>handleSearch(e,searchId)}><i className="fa fa-search-plus" 
                       style={{fontSize:"20px"}}
                       aria-hidden="true"></i></button>
                       </td>
                       </tr>
                       <tr>
                         <td>
                       <label className="custom-control-label">Search by Category</label></td>
                       <td>
                       <input type="text" 
                        className="form-control1"
                       value={category} onChange={(e)=>setCategory(e.target.value)}/></td>
                       <td>
                       <button 
                       className="btn btn-md btn-warning"
                       onClick={(e)=>handleSearchByCategory(e,category)}><i className="fa fa-search-plus" 
                       style={{fontSize:"20px"}}
                       aria-hidden="true"></i></button></td>
                       </tr>
                       </table>
                     </form>
    <span>
                  
                  <button 
                  className="btn btn-lg btn-danger"
                  onClick={(e)=>deleteSelected(e)}>Delete selected rows
                  <i class="fa fa-trash" aria-hidden="true"></i></button>
                  </span>  
                  <form onSubmit={handleEditFormSubmit} >
       <table 
       width="700px" border="10" style={{marginLeft:"400px",borderRadius:"20%"}} 
       cellSpacing={6} cellPadding={6}
       
       >
               <tr style={{backgroundColor:"grey"}}>
                   <th style={{paddingLeft:"20px"}}>
                   <SelectAll2 list={currentItems}   handleChange={handleChange} />
                   </th>
                   <th>
                       id
                   </th>
                   <th>
                       title
                   </th>
                   <th>
                       category
                   </th>
                  
                   <th>
                       price
                   </th>
                   <th>
                       Picture
                   </th>
                   <th>Edit</th>
                   <th>Remove</th>
               </tr>
      { currentItems &&
        currentItems?.map((item) => (
          <>
        {
productId === item.id?   (<Editproduct2 
 editform={editform}
handleEditForm={handleEditForm}
handleCancel={handleCancel}
changeImageEdit={changeImageEdit}
//simple={simple}


/>) : 
          
          
               <tr style={{backgroundColor:"lightgray",border:"solid grey 5px"}}>
                    <td style={{paddingLeft:"20px"}}>
                <input type="checkbox" 
              className="  custom-control-input"
                name={item.id}
                    checked={item?.isChecked || false}
                    onChange={handleChange} 
                    />
                </td>
                   <td >
                       {item.id}
                   </td>
                   <td>
                       {item.title}
                   </td>
                   <td>
                       {item.category}
                   </td>
                   <td>
                       {item.price}
                   </td>
                   <td>
                       <img src={item.image} alt="ll" height="200px" width="200px"/>
                   </td>
                 
   <td>
        <button 
        className="btn btn-lg btn-warning"
        onClick={(e)=>clickEdit(e,item.id,item)}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </td>
    <td>
        <button 
        className="btn btn-lg btn-danger"
        onClick={(e)=>handleDelete(e,item.id)}> <i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>
             
               </tr>
              
               
               
          
          
        }
        
        </>
        ))
      }
     
         </table>
         </form>
         </div>
         
    </>
  );
        
  
  
}

function Paginate({ items}) {
   console.log(items)
  // const [items1,setItems]=useState(items)
 //  const [name,setName]=useState("Name")
   const [form,setForm]= useState({
 id:0,
    category:"",
   price:0,
    title:"",
    image:""
})
const [productId,setProductId]= useState(0)
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([...items]);
  const [pageCount, setPageCount] = useState(1);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  //const [ placeholder,setPlaceHoler]= useState("select rows per page")
  //var [startPage,setstartPage]=  useState(0)  //console.log(startPage)
 // const [initialSelected,setSelected]= useState(null)
  const [forcePage,setForcePage]= useState(0)
  const [data,setData]= useState([...items])
  console.log(data)
  const [list,setList]= useState([])
  const [editform,setEditForm]= useState({
    //  id:0,
 id:0,
   title:"",
  price:0,
   category:"",
   image:""
})
const [limit,setLimit]=useState(5)
//const [itemsPerPage,setItemsPerPage]  = useState(limit)
let itemsPerPage= limit;
  


  useEffect(() => {
    // Fetch items from another resources.
  
    const endOffset =parseInt( itemOffset) +parseInt (itemsPerPage);
    console.log(endOffset)
    console.log(endOffset)
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const current=items
    console.log(current)
    //setCurrenttPage(0)
   // console.log(data.slice(itemOffset, endOffset));
   setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
//   useEffect(()=>{

//   },[])
  const handleChangeChk = (e) => {
      const { name, checked } = e.target;
    console.log(name)
    console.log(checked)
    if (name === "Allselect") {
      let tempUser = currentItems.map(item => {
        return { ...item, isChecked: checked }
      })
      setCurrentItems(tempUser)
    } else {
      let tempUser = currentItems.map(item => item.id    === parseInt(name)? { ...item, isChecked: checked } : item)
console.log(tempUser)
      setCurrentItems(tempUser)




    }

  }
 
  const changeImageEdit = (e) => {
   
    try {
      //  e.preventDefault()
      setEditForm({ ...editform, image: URL.createObjectURL(e.target.files[0]) }

      )
    }
    catch {
      return 0
    }


  }
  const handleDelete=(e,id)=>{
    e.preventDefault()
   var a=window.confirm("Are you sure to Delete current recod?");
    if(a){
        const newList = [...currentItems];
      //  console.log(productid)
        const index = newList.findIndex((product) => product.id === id)
        newList.splice(index, 1)
        setCurrentItems(newList)
    }
    
  
  }
  const deleteSelected = (e) => {
    e.preventDefault()
    var a=window.confirm("Are you sure to Delete Selected recods?");
    if(a){
    const arrIds = []
    const newList = [...currentItems]
   
    const a = currentItems.filter((item) => item?.isChecked === true)
    console.log("checked array", a)
  
    for (let i = 0; i < a.length; i++) {
      const ind = newList.findIndex(p => p.id === a[i].id)
      console.log(ind)
      newList.splice(ind, 1)
      //setData(newList)
      setCurrentItems(newList)
    }
    }
  
  
    }
    const handleChange=(e)=>{
      e.preventDefault()
      setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log("form data is=",form)
      const res=await axios.post(`https://fakestoreapi.com/products/`,form)
      console.log(res.data)
      
      let arr=[...currentItems]

      const newContact={
     //  id: parseInt( nanoid()),
      id: parseInt( form.id),
        title:form.title,
       price: form.price,
        category: form.category,
        image:form.image
    }
  //  const newContacts=[...currentItems,newContact]
   // setCurrentItems(newContacts)
    arr.push(newContact)
     setCurrentItems(arr)
     

    alert("New User is Created successfully")
     
  
  }
  const clickEdit=(e,id,item)=>{
    e.preventDefault()
    console.log("edit called")
    setProductId(id)
    console.log(productId)
    const editData={
       id:productId,
        title:item.title,
       price:item.price,
        category: item.category,
       image:item.image


    }
    setEditForm(editData)
    //console.log(editData)
  }

const handleEditForm=(event)=>{
  event.preventDefault()
  
  setEditForm({...editform,[event.target.name]: event.target.value})


}
const  handleEditFormSubmit=async(e)=>{
e.preventDefault();
console.log(editform)

  await axios.put(`https://fakestoreapi.com/products/${productId}`, editform)
    .then(res => {
      console.log(res.data)
    const newproducts = [...currentItems]
    // console.log(contactId)

    const index = newproducts.findIndex((product) => product.id === productId)
    console.log(index)
    newproducts[index] = res.data;
    console.log(newproducts[index])
  //  newproducts[index]= editform
  //  const newList=[editform]
    //setList(newList)
 //   const newList=[editform]
    //setData(newproducts)
    setCurrentItems(newproducts)
    console.log(currentItems)
    setProductId(null)
  //  alert("Record is updated successfully")
 })
}

const changeImage1=(e)=>{
    try {
      setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) }

      )
    }
    catch {
      return 0
    }


  }
const handleCancel=()=>{
  setProductId(null)
}
  
  const handlePageClick = (event) => {
   let selected = event&& event.selected;

   console.log(selected)
  

    setForcePage( event.selected)
    console.log("force page is",forcePage)
    
    const newOffset=(selected * limit)
   

   console.log("newOffset", newOffset)
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  
    
  }

const handleSearch=async(e,id)=>{
  e.preventDefault()
console.log("search clicked")
console.log("id is", id)
const res = await axios.get(
    `https://fakestoreapi.com/products/${id}`
  )
  console.log(res.data)
const newList=[]
currentItems.map(el=>
  
  el.id === parseInt(id )? newList.push(el): el
  )
  //setData(newList)
  setCurrentItems(newList)
}
// console.log(newList)
const handleSearchByCategory=async(e,category)=>{
    e.preventDefault();
    console.log(category)
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      )
      console.log(res.data)
var list=[...currentItems]
    const a = list.filter((item) => item?.category === category)
    console.log("a is " ,a)
    list=a;
    console.log(list)
    
     setCurrentItems(list)
    // }
    
    }



const handleLimit=(e)=>{
  e.preventDefault()
  setLimit(e.target.value)
  
  setItemOffset(0)
  
    setForcePage(0);
 
}
const changeImage=(e)=>{
    try {
      setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) }

      )
    }
    catch {
      return 0
    }


  }
//   const changeImageE=()=>{
//       console.log("image changer")
//     // try {
//     //     setEditForm({ ...editform, image: URL.createObjectURL(e.target.files[0]) }

  
//     //     )
//     //     console.log("sadsadsa >>>> ",URL.createObjectURL(e.target.files[0]))
//     //   }
//     //   catch {
//     //       console.log("erorrrrrr")
//     //     return 0
//     //   }
  
  


//   }
  
  return (
    <>
    <div className='container-fluid1' style={{backgroundColor:"#C4E538",width:"80%"}}>
      <Items currentItems={currentItems} 
      items={items} handleDelete={handleDelete} deleteSelected={deleteSelected}
      handleEditFormSubmit={handleEditFormSubmit}
      handleEditForm={handleEditForm}
      handleChange={handleChangeChk}
      clickEdit={clickEdit}
      productId={productId}
      handleCancel={handleCancel}
      editform={editform}
      handleSearch={handleSearch}
      handleSearchByCategory={handleSearchByCategory}
      changeImageEdit={changeImageEdit}
      
      />
      <div>
       

     
      <ul style={{ display: "flex", listStyleType: "none" ,marginLeft:"100px"}}>
            <li style={{ position: "relative", top: "10px",left:"-20px" }}>
              <select style={{height:"50px"}}
              //  value={limit}
                name="limit"
              //  placeholder={placeholder}
                onChange={e=>handleLimit(e)}
                
              >
                <option value="select Limit">Select Rows on one page</option>
                <option value="5">5</option>
                <option value="10">
                  10
                  </option>
                <option value="15">15</option>
              </select>
            </li>
            <li style={{ position: "relative", top: "10px",left:"-20px" }}>
      <ReactPaginate 
      
       pageClassName="page-item"
       pageLinkClassName="page-link"
       previousClassName="page-item"
       previousLinkClassName="page-link"
       nextClassName="page-item"
       nextLinkClassName="page-link"
      breakClassName="page-item"
        breakLabel="..."
        nextLabel="next >"
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageClick}
       

        pageRangeDisplayed={5}
        
        renderOnZeroPageCount={null}

      
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
       // initialPage={initialPage}
       forcePage={forcePage}
     
     / >
       </li>
       </ul>
       
       

   
          
        
      
       
      </div>
 <h2>Add new User</h2>
            <form onSubmit={handleSubmit}>
            <label className="custom-control-label">ID</label>
                <input type="numer" 
                 className="form-control1" required="required"
                name="id"  value={form.id}
                onChange={handleChange}
                />
            
              <label className="custom-control-label">Title</label>
                <input type="text" 
                 className="form-control1"
                name="title" required="required" value={form.title}
                onChange={handleChange}
                />
                <label className="custom-control-label">Category</label>
                <input type="text" 
                 className="form-control1"
                name="category" required="required" value={form.category}
                onChange={handleChange}
                />
                 <label className="custom-control-label">Price</label>
                <input type="number" 
                 className="form-control1"
                name="price" required="required" value={form.price}
                onChange={handleChange}
                />
                <div style={{position:"relative", top:"100px",left:"500px"}}>
                 <label for="file">Please select am image</label>
               </div>
                <input type="file" onChange={changeImage} name="form.image" id="file"

/>


  <div>
  
   <img src={form.image} width="200px" height="190px" style={form.image === "" ? {display: "none"} : {position:"relative",bottom:"300px",left:"300px"
   
   }}
   
   />
   
   </div>



  
                <button 
                className="btn btn-md btn-success"
                type="submit">Add
                <i class="fa fa-plus-square" aria-hidden="true"></i></button>
            </form>   
            </div>
    </>
  );
}

export default Paginate;
