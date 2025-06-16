export default function App() {
  return (
  <>
  
  <div className="">

    {/* Navigation */}
    <div className="w-full h-[99.33px] bg-[#2C3B55]" />

    <div className="w-full h-[300px] bg-[#C0DCF4] flex flex-col justify-center items-center content-center space-y-4">
      <span className="font-montserrat font-semibold text-6xl">Talk to Us!</span>

      <div className="relative w-1/3">
        <div className="absolute inset-y-1 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input className="w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 " placeholder="What do you need help with?" />
      </div>
    </div>

    <div className="grid grid-cols-2 mx-64 font-montserrat">

      <div className="flex flex-col content-center items-center space-y-8 px-8">

        <div className="gap-x-8 mt-8 flex">
          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100" href="https://www.securitybank.com/better-banking-anytime/" >
            <span className="text-xl font-bold text-gray-900">Online Bank Services</span>
            <p className="text-md font-normal text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </a>
          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100" href="#" >
            <span className="text-xl font-bold text-gray-900">Service #2</span>
            <p className="text-md font-normal text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </a>
        </div>
        
        <hr className="bg-gray-200 text-gray-50 h-[2px] w-full"></hr>

        <div className="w-full justify-start space-y-8 text-justify rounded-xl p-2">
          <p className="text-3xl font-semibold">Here is how we handle your concerns,</p>

          <div className="space-y-2">
            <p className="text-xl font-semibold">Step #1. Acknowledge</p>
            <p className="text-md">Our branch personnel or Customer Care agent acknowledges and documents your concern in the Bank's system.</p>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold">Step #2. Review & Investigate</p>
            <p className="text-md">Our Bank representative investigates and, as appropriate, performs the account action/adjustment. Turnaround time (TAT) differs based on the type of complaint.*</p>
            <div className="text-xs italic pt-4">*Turnaround time (TAT): Simple complaints may take 9 to 10 banking days and complex complaints may take 45 to 53 banking days.</div>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold">Step #3. Provide Feedback</p>
            <p className="text-md">Our Bank representative communicates with you as soon as feedback or resolution information is available.</p>
          </div>
        </div>

      </div>
      
      {/* <div className="flex flex-col content-center items-center">hello!</div> */}
    </div>

    {/* <span className="font-montserrat font-semibold italic text-md flex justify-center items-center content-center">Stay safe and bank online! Check out our online bank services here.</span> */}




  </div>
  
  </>
  )
}