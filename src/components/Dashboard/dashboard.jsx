
import React from 'react'

    import  Graph  from '../../assets/home/graph.png';


export default function Dashboard() {
  return (
     
    <>
         <div className=" flex flex-col bg-grey-100 min-h-screen bg-gray-100 ">
          <div className="black   font-bolder flex flex-row justify-start items-center mt-10 w-100">
              <header className=" ml-20 text-black text-2xl font-bold">Dashboard</header>
              <div>
                  <p className="ml-10 flex flex-row">Hello! Newspaper</p>
              </div>


              <div class="flex justify-end   gap-6    mr-16 w-full">


                  <div class="flex flex-row items-center space-x-4 text-gray-500 ">
                      <button class="hover:text-black">Daily</button>
                      <span>|</span>
                      <button class="hover:text-black">Weekly</button>
                      <span>|</span>
                      <button class="text-purple-600 font-semibold">Monthly</button>
                      <span>|</span>
                      <button class="hover:text-black">Yearly</button>
                  </div>


                  <div class="flex items-center space-x-4 text-gray-700">
                      <div class="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                          📅 <span>Mar 23, 2024</span>
                      </div>
                      <div class="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                          ⏰ <span>12:15 PM</span>
                      </div>
                  </div>

              </div>
          </div>
      
      
      
      <div class="flex  justify-center   p-4 ">

              
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6  h-40 mt-10">

                  
                  <div class="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2 w-56  ">
                      <div class="flex justify-between items-center">
                          <h3 class="text-gray-600 font-semibold">Article Engagement</h3>
                          <span class="bg-purple-100 p-2 rounded-full">📰</span>
                      </div>
                      <h2 class="text-2xl font-bold">2,000</h2>
                      <p class="text-green-600 flex items-center">⬆ 8.5%</p>
                  </div>

                 
                  <div class="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2 w-56 ">
                      <div class="flex justify-between items-center">
                          <h3 class="text-gray-600 font-semibold">Video Engagement</h3>
                          <span class="bg-yellow-100 p-2 rounded-full">📺</span>
                      </div>
                      <h2 class="text-2xl font-bold">55,000</h2>
                      <p class="text-green-600 flex items-center">⬆ 1.3%</p>
                  </div>

                 
                  <div class="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2 w-56">
                      <div class="flex justify-between items-center">
                          <h3 class="text-gray-600 font-semibold">Author Contributions</h3>
                          <span class="bg-green-100 p-2 rounded-full">✍️</span>
                      </div>
                      <h2 class="text-2xl font-bold">10,000</h2>
                      <p class="text-red-500 flex items-center">⬇ 4.3%</p>
                  </div>

                 
                  <div class="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2 w-56">
                      <div class="flex justify-between items-center">
                          <h3 class="text-gray-600 font-semibold">Likes & Share</h3>
                          <span class="bg-red-100 p-2 rounded-full">👍</span>
                      </div>
                      <h2 class="text-2xl font-bold">3.42M</h2>
                      <p class="text-green-600 flex items-center">⬆ 1.8%</p>
                  </div>
              </div>

          </div>
                     <div className=" flex flex-col justify-center  mt-10 ml-20 text-black text-1xl font-medium">

                        <h1>Analytics</h1>
                        <div className='flex flex-col align-center'>
                        <div class="w-[1000px] h-[500px]  rounded-4xl bg-white  shadow-lg mt-8 ml-[70px] ">
                        <div class="space-y-2 mt-10 ml-10">
                          <h2 class="text-blue-900 font-semibold">Graph</h2>
                  <div class="flex">
                      <select class="border border-blue-900 text-blue-900 bg-transparent px-4 py-2 w-[90px] rounded-md cursor-pointer appearance-none">
                        <option>All <span> ▼ </span> </option>
                      </select>
                      
                      <div class=" relative h-10 ml-[700px]  border border-gray-400 w-[200px] right-10 bg-white p-3 rounded-md shadow-md text-sm">
        <h2 class="font-bold text-black mb-2">2024</h2>
        <ul class="space-y-1">
            <li class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Sports</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Politics</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>Business & Economy</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Indian News</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>World</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Travel</li>
            <li class="flex items-center"><span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Others</li>
        </ul>
        
    </div>
    </div>
         <div>
         <img src={Graph} alt="image" className='h-50 w-[700px] flex mt-20 '/>
         <div class="inline-flex rounded-lg border border-gray-300 ml-[200px]  overflow-hidden i">
        <button class="px-4 py-2 text-gray-700 bg-white border-r border-gray-300 hover:bg-gray-200">Weekly</button>
        <button class="px-4 py-2 text-gray-700 bg-white border-r border-gray-300 hover:bg-gray-200">Monthly</button>
        <button class="px-4 py-2 text-gray-700 bg-white border-r border-gray-300 hover:bg-gray-200">Yearly</button>
        <button class="px-4 py-2 text-white bg-indigo-900">Revenue</button>
    </div>
          </div>
                       </div>
                        </div>
                       

                        </div>
                       </div>
                     </div>
          </> 
      
  );
}



