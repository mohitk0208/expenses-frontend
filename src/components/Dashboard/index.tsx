import Navbar from "../Navbar"

function Dashboard() {

  /**
   * Dashboard will have two modes
   *     -> expanded
   *     -> minimized
   * -> expanded - it will have
   *      -> the top horizontal line will have logo, name, logout button
   *      -> on left most side `ALl time` and `This month`
   *      -> a graph (line chart)
   *      -> a graph (pie chart)
   *      -> an upward arrow at the bottom to minimize the Dashboard
   * -> minimized - it will be similar to a navbar
   *    -> will have a `All time` expense, `This month` expense, name and logout button
   *    -> a downward arrow at the bottom to expand the Dashboard
   */

  return (
    <div className="flex-1 w-screen relative flex flex-col mb-5 bg-gray-300 pb-5" >
      <Navbar />

      <div className="flex flex-1 items-center justify-around h-full lg:w-11/12  mx-auto bg-blue-300 py-5" >
        <div className=" w-72 bg-gray-500 h-48 " >

        </div>
        <div className=" w-72 bg-gray-500 h-48" >

        </div>
        <div className=" w-72 bg-gray-500 h-48" >

        </div>
      </div>

    </div >
  )
}


export default Dashboard