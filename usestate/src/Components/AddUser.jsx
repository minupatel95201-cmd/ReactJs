import { useState } from "react"


const AddUser = () => {
const [Data, setData] = useState([{name: "Aarav Patel", email: "aaravpatel@gmail.com", color: "bg-red-400"}, {name: "Riya Sharma", email: "riyasharma@gmail.com", color: "bg-yellow-400"}, {name: "Vivan Mehta", email: "vivanmehta@gmail.com", color: "bg-green-400"}])

function Add(){
 let arr = [...Data];
 arr.push({name: "Ananya Gupta", email: "ananyagupta@gmail.com", color: "bg-teal-400"});
 if(Data[3]?.name || Data[5]?.name === "Ananya Gupta"){
    return alert("You can only use this button at a one time");
 }
 setData(arr);
}
function AddTwo(){
    let arr = [...Data];
     arr.push({name: "Mira Patel", email: "mirapatel@gmail.com", color: "bg-blue-400"}, {name: "Rahul Shah", email: "rahulshah@gmail.com", color: "bg-blue-400"});
  if(Data[4]?.name || Data[5]?.name === "Rahul Shah"){
     return alert("You can only use this button at a one time");
  }
setData(arr);
}

  return (
    <>
      <section className="flex flex-wrap justify-center items-center gap-6 my-10">
        {Data.map((user) => {
         return (<div className={`w-full h-auto max-w-sm rounded-xl p-2 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}>
            <h1 className="bg-[#222] w-full rounded-xl py-2 px-4">{user.name}</h1>
            <h1 className="bg-[#222] w-full rounded-xl py-2 px-4">{user.email}</h1>
        </div>);
      })}
      </section>

      <div className="flex justify-center items-center">
        <button className="bg-orange-600 text-center px-6 py-4 active:bg-orange-200 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all" onClick={Add}>Add One More User</button>
        <button className="bg-orange-600 text-center px-6 py-4 active:bg-orange-200 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all" onClick={AddTwo}>Add Two More User</button>
      </div>

    </>
  )
}

export default AddUser
