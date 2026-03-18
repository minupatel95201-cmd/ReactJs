import React, { useState } from 'react'
import axios from 'axios';


const ApiFetch = () => {
    const [Data1, setData1] = useState([]);
    const [Data2, setData2] = useState([]);
    const [Data3, setData3] = useState([]);
    // Method1
    function Method1(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((rawData)=>{
         return rawData.json();
        })
       .then((data)=>{
          return setData1(data);
       })
         .catch((err)=>{
          console.log(err);
         });
    }

    // Method2
  let Method2 = async () => {
    try {
    let response = await fetch("https://dummyjson.com/products?limit=10")
    console.log(response);
    let data =  await response.json();
    console.log(data.products);
    return setData2(data.products);
    } catch (error) {
      console.log(error);
    }
  }

 
  // Method3

let Method3 = async () => {
  let res =  await axios.get('https://dummyjson.com/recipes?limit=10')
  console.log(res.data.recipes);
  setData3(res.data.recipes);
  //HTTPS Methods: 
  //Get --> receive data only
  //Post --> send data only
  //Patch --> Update Data
  //Put --> Update Data
  //Delete --> Delete Data
};


  return (
   <>
   {/* Method 1 */}
   <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 bg-green-100'>
     <h1 className='text-center text-bold text-3xl'>Method 1: Fetch - then - then - catch</h1>
     <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-4 '> 
      {Data1.map((user, id)=>{
       return (
        <div className='bg-[#222] rounded-md w-84 p-2 text-xl 'key={id}>
          <h1><span className='font-bold'>Name :</span>{user.name}</h1>
          <h1><span className='font-bold'>Email :</span>{user.email}</h1>
          <h1><span className='font-bold'>Website :</span>{user.website}</h1>
        </div>
       )
      })}
     </div>
     <button className='w-36 px-4 py-2 text-center text-white bg-green-950 rounded-md font-bold text-xl active:bg-green-700 active:text-green-950 active:scale-95 transition-all' onClick={Method1}>Get Data 1</button>
     
   </section>

   {/* Method 2 */}
   <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 bg-blue-100'>
     <h1 className='text-center text-bold text-3xl'>Method 2: Async - Await - Fetch</h1>
     <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 flex flex-wrap items-center justify-center gap-4'>
      {Data2.map((pro, id) =>{
        return (
          <div className=''key={id}>
             <div className="card w-full h-auto max-w-md bg-gray-800 rounded-[10%] p-2 text-white shadow-2xl">
        <div className="bg-gray-700 text-center rounded-b-[12%] rounded-[10%] overflow-hidden">
                <img src={pro.images[0]} alt="img" className="w-full object-cover rounded-[10%] max-h-112"/>

        </div>
         
        <div className="content flex justify-between items-center px-6 py-2">
            <div className="details ">
                <h2 className="text-green-50 font-semiold text-2xl">{pro.title}</h2>
            </div>

            <div className="price border-l-2 border-gray-400/20 pl-6">
                <h2 className="text-4xl font-bold">{pro.price} $</h2>
                <p className="flex text-[14px] items-center gap-1">Order Now</p>
            </div>
        </div>
     </div>
          </div>
        )
        
      })}
       </div>
     <button className='w-36 px-4 py-2 text-center text-white bg-blue-950 rounded-md font-bold text-xl active:bg-blue-700 active:text-blue-950 active:scale-95 transition-all'onClick={Method2}>Get Data 2</button>
   </section>

   {/* Method 3 */}
   <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 bg-orange-100'>
    <h1 className='text-center text-bold text-3xl'>Method 3: Async - Await - Axios</h1>
    <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-4'> 
      {Data3.map((resipes, id)=>{
        return(
          <div key={id} className='bg-[#555] w-84 rounded-md p-2'><img src={resipes.image} alt="" className='rounded-md'/>
           <div className='text-center bg-[#222] my-2 rounded-md'>
            <h1>{resipes.name}</h1>
            <h1>{resipes.rating} / 5.0</h1>
           </div>
          </div>
          
        )
      })}
    </div>
     <button className='w-36 px-4 py-2 text-center text-white bg-orange-800 rounded-md font-bold text-xl active:bg-orange-600 active:text-orange-950 active:scale-95 transition-all' onClick={Method3}>Get Data 3</button>
   </section>
   </>
  )
}

export default ApiFetch
