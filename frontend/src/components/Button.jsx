export const Button =({label,onClick})=>{
    return (
       <button onClick={onClick} className="w-full text-black bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" >{label}</button>
    )
}