import {NavLink} from "react-router-dom"
import { client } from "../lib/client"
import {useState} from "react"
import {message} from "antd"

const Footer = () => {
  const [email, setemail] = useState("")

  const handleNewsletter = (e) => {
    e.preventDefault()
    const doc = {
      _type:"applicants",
      email:email
    }

    if(!email.includes('@')){
      return message.error("Please enter a valid email")
    }

    client.create(doc).then(res => {
      console.log(res)
      message.success("Subscribed to our Newsletter")
      setemail("")
    })
  }


  return (
    <>
    <footer class="bg-gray-900">
  <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    {/* <!-- Grid --> */}
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div class="col-span-full lg:col-span-1">
        {/* <a class="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">Brand</a> */}
        <div className="flex items-center">
      <a className="bg-transparent  self-start rounded-full h-10 w-10 border border-blue-600 "></a>
      <NavLink to={'/'} className=" -ml-4 whitespace-nowrap  text-xl font-semibold text-blue-600" href="#" aria-label="Brand">Northwest Grants</NavLink>
      </div>
      </div>
      {/* <!-- End Col --> */}

      {/* <div class="col-span-1">
        <h4 class="font-semibold text-gray-100">Product</h4>

        <div class="mt-3 grid space-y-3">
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Pricing</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Changelog</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Docs</a></p>
        </div>
      </div> */}
      {/* <!-- End Col --> */}

      <div class="col-span-1">
        <h4 class="font-semibold text-gray-100">Company</h4>

        <div class="mt-3 grid space-y-3">
          <p><NavLink to={'/aboutus'} className="inline-flex gap-x-2 text-white hover:text-gray-200" >About us</NavLink></p>
          {/* <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Blog</a></p> */}
          {/* <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Careers</a> <span class="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">We're hiring</span></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Customers</a></p> */}
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div class="col-span-2">
        <h4 class="font-semibold text-gray-100">Stay up to date</h4>

        <form>
          <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
            <div class="w-full">
              <label for="hero-input" class="sr-only">Search</label>
              <input value={email} onChange={(e) => setemail(e.target.value)} type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email"/>
            </div>
            <a onClick={e => handleNewsletter(e)} class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" href="#">
              Subscribe
            </a>
          </div>
          <p class="mt-3 text-sm text-gray-400">
            Get alerts if you qualify for new grants.
          </p>
        </form>
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}

    <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-400">© 2021 Northwest Grants. All rights reserved.</p>
      </div>
      {/* <!-- End Col --> */}

      {/* <!-- Social Brands --> */}
     <div className="flex flex-col">
     <p className="text-gray-50  font-semibold">Contact us</p>
      <p className="text-gray-400 text-sm  font-semibold">
        +14052770691
      </p>
      <p className="text-gray-400 text-sm  font-semibold">
        +18472614848
      </p>
     </div>
      {/* <!-- End Social Brands --> */}
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer