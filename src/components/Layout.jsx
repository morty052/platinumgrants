import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className="py-2">
    {children} 
    </div>  
    </>
  )
}

export default Layout