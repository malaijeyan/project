import React, { useEffect } from 'react';
import { useState } from 'react';

function Pagination() {
    const [data,setData]=useState([]);
    const [search,setSearch]=useState([]);
    const [presentPage,setPresentPage]=useState(1);
    const [dataPerPage]=useState(5);
    // const [filterValue,setFilterValue]=useState(''); 

    const pages = [];
    for(let i=1;i<=Math.ceil(data.length/dataPerPage);i++){
      pages.push(i);
      console.log(pages);
    }
    const handleClick= (pages)=>{
      // const value=e.target.value;
      setPresentPage(pages)
    }
    const handlePrevious = ()=>{
      setPresentPage(presentPage-1)
    }
    const handleNext = ()=>{
      setPresentPage(presentPage+1)
    }
    // const filteredData = data.filter((item)=>{return item.values(item).toLowerCase().includes(search.toLowerCase())})
    // const [filteredValue,setFilteredValue]=useState([]);
    const handleSearch = (e)=>{
      // const value=currentData.filter((val)=>{
      //     if(search === ''){
      //       return val;
      //     }else if(
      //       val.name.toLowerCase().includes(search.toLowerCase())
      //     ){
      //       return val;
      //     }
      //     setData(value);
      //   })
      // if(e.target.value === ''){
      //   setData(search)
      // }else{
      //   const filteredData = search.filter(item=>item.name.toLowerCase().includes(e.target.value).toLowerCase())
      //   setData(filteredData)
      // }
      e.preventDefault();
      // setFilterValue(e)
      setSearch(search)
      // if(search !== ''){
      // const filteredValue=data.filter((item)=>{return item.values(item).toLowerCase().includes(search.toLowerCase())})
      // setFilteredValue(filteredData)
            // console.log(search);
      // }else{
      //   setFilteredValue(filteredValue)
      // }
    }
      const indexOfLastData = presentPage * dataPerPage;
      const indexOfFirstData = indexOfLastData - dataPerPage;
      const currentData = data.slice(indexOfFirstData,indexOfLastData);

      // const pageNumber = pages.map((num)=>{
      //   return( onClick={(pages)=>(handleClick())} [num] );
      // })
      
      // 
  //     if(search !== ''){
  //   setFilteredResult(filteredData)
  // }
  // else{
  //   setFilteredResult(data)
  // }
      // data.filter((item)=>{return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())})
    
    // const filteredData = data.filter((item)=>{return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())})
    // setFilteredResult(filteredData)

    // if(search.length>0){
    //   data.filter((name)=>{return name.name.match(search);});
    // }
  // {
  //   data.filter(value=>{
  //     if(search === ""){
  //       return value;
  //     }
  //     else if(value.name.toLowerCase().includes(search.toLowerCase())){
  //       return value;
  //     }
  //   }).map((value,index)=>{
  //     <div key={index}>
  //     <tr>
  //         <td>{value.id}</td>
  //         <td>{value.name}</td>
  //         <td>{value.age}</td>
  //         <td>{value.email}</td>
  //       </tr>
  //       </div>
  //   })
  // }


    
    useEffect(()=>{
        fetch('http://localhost:4000/values')
        .then(response=>response.json())
        .then(result=>{setData(result)});
        // setSearch(result)
        // console.log(data);
    },[])
    
  return (
    <div>
    <input type="text" placeholder='search here'  onChange={(e)=>handleSearch(e.target.value)} ></input><br></br>
    
    
    
      <table className='one'>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
        </tr>
        {
          data && data.length>0 ? currentData.map(value=>(
          <tr>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>{value.email}</td>
          </tr>)): 'getting'
        }
      </table>
      
    
      <div className="pageno"> 
      {/* {pageNumber} */}
      {
        pages.map((num)=>{
        return( <div>
         <button onClick={()=>handleClick(num)}>{num}
         </button>
         </div> );
         
      })
      }
      <button className='btn' onClick={handlePrevious} disabled={presentPage === pages[0] }>previous</button>
      <button className='btn' onClick={handleNext} disabled={presentPage === pages[pages.length-1]}>next</button>
      </div>      
    </div>
  )
}

export default Pagination;
