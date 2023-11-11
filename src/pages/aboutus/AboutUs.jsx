import { Footer } from "../../components"
import { mary, wingard , hans } from "../../assets"
import Faq from "../home/Faq"
import {Link} from "react-router-dom"

const AboutUs = () => {

const Vision = () => {
  return(
    <>
    {/* <!-- Icon Blocks --> */}
  <div class="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8  mx-auto">
    <div class="max-w-2xl mx-auto">
      {/* <!-- Grid --> */}
      <div class="grid gap-12">
        <div>
          <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl ">
            Dedicated to providing relief
          </h2>
          <p class="mt-3 text-gray-800 ">
            Northwest grants was put together by our founding team in partnership with undp with one goal in mind. to provide relief to people who need it the most hence why we have a very low credit score qualification bar.
          </p>
        </div>

        <div class="space-y-6 lg:space-y-10">
          {/* <!-- Icon Block --> */}
          <div class="flex">
            <svg class="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
            </svg>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 ">
                Home Development Grants
              </h3>
              {/* <p class="mt-1 text-gray-600 ">
                Our fully furnished spaces are designed and purpose-built with Co-Living in mind, featuring high-end finishes and amenities that go far beyond traditional apartment buildings.
              </p> */}
            </div>
          </div>
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
          <div class="flex">
            <svg class="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 ">
                Personal Grants
              </h3>
              {/* <p class="mt-1 text-gray-600 ">
                Our passion is bringing people together. Beyond creating beautiful spaces, we provide shared experiences.
              </p> */}
            </div>
          </div>
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
          <div class="flex">
          <svg class="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 " width="16" height="16"    fill="#000000" viewBox="0 0 100.4 100.4" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M20.4,19.3L32,24.4c-2.3,3.4-3.5,7.3-3.5,11.4c0,11.2,9.1,20.4,20.4,20.4s20.4-9.1,20.4-20.4c0-4-1.2-8-3.4-11.3l10.2-4.8 l0,19.4L73,45.7c-0.2,0.5-0.2,1,0.1,1.4s0.8,0.7,1.3,0.7h5.9c0.5,0,1-0.2,1.2-0.7c0.3-0.4,0.3-0.9,0.1-1.4l-2.7-6.6V18.4 c0-0.8-0.1-1.4-1.5-2C77.1,16.3,49.6,4.1,49.6,4.1c-0.4-0.2-0.8-0.2-1.2,0l-28,12.4c-0.5,0.2-0.9,0.8-0.9,1.4S19.8,19,20.4,19.3z M66.2,35.8c0,9.6-7.8,17.4-17.4,17.4s-17.4-7.8-17.4-17.4c0-3.7,1.2-7.2,3.3-10.2l13.6,6.1c0.2,0.1,0.4,0.1,0.6,0.1s0.4,0,0.6-0.1 l13.4-6C65.1,28.7,66.2,32.2,66.2,35.8z M76.7,44.8l0.7-1.5l0.6,1.5H76.7z M49,7.1l24.3,10.8L49,28.7L24.7,17.9L49,7.1z"></path> <path d="M49.4,59.8C29.9,59.8,14,75.7,14,95.2c0,0.8,0.7,1.5,1.5,1.5h67.8c0.8,0,1.5-0.7,1.5-1.5C84.8,75.7,68.9,59.8,49.4,59.8z M17.1,93.7c0.8-17.2,15-30.9,32.4-30.9S81,76.6,81.8,93.7H17.1z"></path> </g> </g></svg>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 ">
                Educational Grants
              </h3>
              {/* <p class="mt-1 text-gray-600 ">
                We worry about the details so that our residents don't have to. From our online application process to simple, all-inclusive billing we aim to make the living experience as effortless as possible.
              </p> */}
            </div>
          </div>
         <div className="block space-y-2">
         <h2 class="text-xl text-gray-800 font-bold l">
            And Many Others
          </h2>
          <p class="-mt-2 text-gray-800 ">
            Northwest Grants is always growing and constantly involving to expand our reach keep checking back if you qualify for any of our future grants.
          </p>
         </div>
          {/* <!-- End Icon Block --> */}
        </div>
      </div>
      {/* <!-- End Grid --> */}
    </div>
  </div>
  {/* <!-- End Icon Blocks --> */}
    </>
  )
}

const Cta = () => {
  return (
    <>
      <div class="py-16 bg-blue-600">
        <div class="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          {/* <div class="flex items-center justify-center -space-x-2">
      <img
        loading="lazy"
        width="220"
        height="220"
        src="images/avatars/second_user.webp"
        alt="member photo"
        class="h-8 w-8 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="images/avatars/first_user.webp"
        alt="member photo"
        class="h-12 w-12 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="images/avatars/third_user.webp"
        alt="member photo"
        class="z-10 h-16 w-16 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="images/avatars/first_user.webp"
        alt="member photo"
        class="relative h-12 w-12 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width="220"
        height="220"
        src="images/avatars/second_user.webp"
        alt="member photo"
        class="h-8 w-8 rounded-full object-cover"
      />
    </div> */}
          <div class="m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 class="text-center text-4xl font-bold text-white ">
              Apply for a grant
            </h1>
            <p class="text-center text-xl text-white ">
              See if you qualify for any of our grants.
            </p>
            <div class="flex flex-wrap justify-center gap-6">
              <Link
                to={"/application"}
                className="relative flex min-w-[137px] h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-transparent before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95  sm:w-max"
              >
                <span class="relative text-base font-semibold text-white ">
                  Apply
                </span>
              </Link>
              <a
                href="#faq"
                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95  sm:w-max"
              >
                <span class="relative text-base font-semibold text-primary ">
                  View FAQ
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  return (
    <>
    
<div class="py-4">
  <div class="container mx-auto sm:px-6 text-center md:px-12">
    <div class="mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800  md:text-4xl">
        Northwest Grants leadership
      </h2>
      <p class="text-gray-600  lg:mx-auto lg:w-8/12 sm:text-2xl text-center">
        Our mission requires great people. <br/> meet the men and women behind Northwest grants.
      </p>
    </div>
    <div class="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
      <div class="group space-y-8 border-t-4 border-gray-100 ">
        <div class="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
          <img
            class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
            src={hans}
            alt="woman"
            loading="lazy"
            width="640"
            height="805"
          />
        </div>
        <div class="space-y-4 text-center">
          <div>
            <h4 class="text-2xl text-gray-700 ">Hans Stegeman</h4>
            <span class="block text-sm text-gray-500">Chief Economist Triodos Bank</span>
          </div>
          {/* <a href="#" class="mx-auto block w-max text-primary">View Bio</a> */}
        </div>
      </div>

      <div class="group space-y-8 border-t-4 border-gray-100 ">
        <div class="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
          <img
            class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
            src={mary}
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
        </div>
        <div class="space-y-4 text-center">
          <div>
            <h4 class="text-2xl text-gray-700 ">Mary Barra</h4>
            <span class="block text-sm text-gray-500">Chair at General Motors</span>
          </div>
          {/* <a href="#" class="mx-auto block w-max text-primary">View Bio</a> */}
        </div>
      </div>

      <div class="group space-y-8 border-t-4 border-gray-100 ">
        <div class="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
          <img
            class="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
            src={wingard}
            alt="man"
            loading="lazy"
            width="1000"
            height="667"
          />
        </div>
        <div class="space-y-4 text-center">
          <div>
            <h4 class="text-2xl text-gray-700 ">Dr Jason wingard</h4>
            <span class="block text-sm text-gray-500">Philadephia education job board</span>
          </div>
          {/* <a href="#" class="mx-auto block w-max text-primary">View Bio</a> */}
        </div>
      </div>
    </div>
  </div>
</div>
<Vision/>
<Cta/>
<Faq/>
<Footer/>                             
    </>
  )
}

export default AboutUs