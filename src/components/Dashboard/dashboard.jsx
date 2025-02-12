


export default function Dashboard() {
  return (
     
    <>
          <div className="black  font-bolder flex flex-row justify-start items-center mt-10 w-100">
              <header className="font-bold ml-20">Dashboard</header>
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
      
      
      
      <div class="flex  justify-center min-h-screen bg-gray-100 p-4 ">

              
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

          </div></> 
      
  );
}



