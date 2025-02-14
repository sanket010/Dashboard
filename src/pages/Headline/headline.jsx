import Photocover from "../../assets/images/cover.png"


export default function headline() {
    return(
        <div className=" flex flex-col bg-grey-100     bg-gray-100 ">
        <div className="black   font-bolder flex flex-row justify-start items-center mt-10 w-100">
            <header className=" ml-20 text-black text-2xl font-bold">Create New Headline</header>
            
            </div>
            <div className="flex flex-col h-[50px] w-[900px]  justify-center ml-20 items-center mt-[100px] cursor-pointer">
                <img src={Photocover} alt="photo-cover"/>
            </div>
            <div className="flex  flex-col mt-20">
            <h1 className=" ml-20 text-black text-2xl font-bold">Title</h1>
            <div className="flex  w-full h-10 ml-20 mt-5">
            <input type="text" className="ml-20 w-[900px] h-[50] mt " placeholder="A court in wwest bengal....."/> 
            </div>
            </div>
            <div className="flex  flex-col mt-20">
            <h1 className=" ml-20 text-black text-2xl font-bold">Description</h1>
            <div className="flex  w-full h-10 ml-20 mt-5">
            <input type="text" className="ml-20 w-[900px] h-[300px] mt " placeholder="A court in wwest bengal......"/> 
            </div>
            </div>
            <div className="flex  flex-col ml-20  mt-64 bg-grey-100 bg-grey-100 ">
                <h1 className="  text-black text-2xl font-bold">Posted by</h1>
                <div className="flex   h-10 ml-20 mt-5">
            <input type="text" className=" w-50 h-[200] mt " placeholder="Arun"/> 
            </div>
            
            <div className="flex  flex-col ml-20 mt-20 bg-grey-100 bg-grey-100 ">
                <h1 className="  text-black text-2xl font-bold">schedule your post</h1>
                
            </div>
               
              <div className="flex flex-row  mt-20 gap-64 items-center">
              <div className="w-80">
        <label className="block text-gray-700 font-semibold mb-2">Schedule Posting Date</label>
        <div className="relative">
            <span className="absolute inset-y-0 left- flex items-center text-gray-500">
                📅
            </span>
            <input type="date" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"/>
        </div>
    </div>
    <div className="w-80">
        <label className="block text-gray-700 font-semibold mb-2">Schedule Posting Time</label>
        <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                10AM
            </span>
            <input type="Time" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"/>
        </div>
    </div>

         
              </div>
              <div><button className="bg-gradient-to-b from-[#10104F] to-[#08082F] text-white px-6 w-[500px] py-2 rounded-lg border border-blue-500 shadow-lg hover:scale-105 transition w-64 mt-20 ml-64 ">
        Post Headline
    </button></div>

             </div>

            

            </div>
    )
}
