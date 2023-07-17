import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [todo, setTodo] = useState({title:"",desc:""})


  const addTodo=()=>{
  let todos=localStorage.getItem("todos")
  if(!todos){
    localStorage.setItem("todos",JSON.stringify([todo]))
  }else{
    let todosJson=JSON.parse(todos)
    if(todosJson.filter(value=>{return value.title==todo.title}).length>0){
      alert("You have already added this demand")
    
    }else{
      todosJson.push(todo)
      localStorage.setItem("todos",JSON.stringify(todosJson))
      alert("Your demand has been added")
      setTodo({title:"",desc:""})   // to disappear the input fields
    }
   
  }
  }
  const onChange=(e)=>{
    setTodo({
      ...todo,
      [e.target.name]:e.target.value
    })
  }

  return (
  <div className="my-2 font-bold text-3xl">
  
  <section class="text-black-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
  
    <div class=" bg-gray-100 rounded-lg p-8 flex  flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-black-900 text-lg font-bold  text-2xl title-font mb-5">Add your Demands</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Title फरमाइए</label>
        <input onChange={onChange}  value={todo.title} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="desc" class="leading-7 text-sm text-gray-600">Description कर्म बताइये</label>
        <input onChange={onChange} value={todo.desc} type="text" id="desc" name="desc" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={addTodo} class="text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none w-fit hover:bg-pink-600 rounded text-lg">ORDER!</button>
      <p class="text-sm text-gray-500 mt-3">Please show some mercy, bas khule bazaar mein bezzati na ho :')</p>
    </div>
  </div>
</section>
  </div>
  )
}
