/* eslint-disable react/prop-types */
import { logo, undpwhite } from "../../assets";
import { DropdownMenu } from "../../pages/apply";
import { message } from "antd";

export const Header = ({ user }) => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4">
      <nav
        className="max-w-[85rem] flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="mr-5 md:mr-8">
          {/* <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">Brand</a> */}
          <div className="flex items-center">
            <img className="w-20" src={logo} alt="" />
          </div>
        </div>

        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="hidden mx-auto sm:block">
            <div className="flex items-center gap-x-2">
              <img src={undpwhite} alt="" className="h-10 w-10" />
              <h3 className="text-lg text-white font-semibold">
                United Nations Development Programme
              </h3>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <DropdownMenu />
            <button
              onClick={() => message.info("No notiifications")}
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs"
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
            </button>

            <div
              className="hs-dropdown relative inline-flex"
              data-hs-dropdown-placement="bottom-right"
            >
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs"
              >
                <div
                  className="inline-flex justify-center items-center  h-[2.375rem] w-[2.375rem] rounded-full bg-white text-blue-600"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                >
                  <p className="text-xl">
                    {user?.firstname?.charAt([0])}
                    {user?.lastname?.charAt([0])}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export const StatusBar = ({ user }) => {
  const { _id, stage } = user ?? {};
  const { submitted, pendingverification } = stage ?? {};

  return (
    <nav
      className="sticky -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px  "
      aria-label="Jump links"
    >
      <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto scrollbar-x px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto dark:scrollbar-x">
        <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last-pr-0">
          <a className="inline-flex items-center gap-x-2 hover:text-gray-500  ">
            Reference No:{_id}
          </a>
        </div>
        <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last-pr-0">
          <a className="inline-flex items-center gap-x-2 hover:text-gray-500  ">
            Application status:{" "}
            <span className="text-gray-500">
              {submitted ? "Under Review" : "Pending Verification"}
            </span>
          </a>
        </div>
        <div className="snap-center shrink-0 pr-5 sm:pr-8 sm:last-pr-0 hidden sm:block">
          <a className="inline-flex items-center gap-x-2 hover:text-gray-500  ">
            Expected Amount: <span className="text-green-400"> $37,000.00</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
