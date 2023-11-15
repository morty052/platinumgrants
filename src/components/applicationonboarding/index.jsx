/* eslint-disable react/prop-types */
import { Steps } from "../steps";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSignUp, useUser } from "@clerk/clerk-react";
import { logo } from "../../assets";
import { ListBox, ApplicationComplete } from "../../pages/apply";
import { message } from "antd";
import { client } from "../../lib/client";

export function EmailScreen({
  email,
  setEmail,
  password,
  setPassword,
  handleSignup,
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <section className="flex flex-col items-center space-y-6">
      <div className="pt-4">
        <p className="text-center font-semibold text-2xl">
          Create your account
        </p>
      </div>

      <div className="space-y-4 w-full flex flex-col items-center border py-6 px-4 rounded-xl bg-white max-w-sm sm:min-w-[350px]">
        <div className="flex flex-col gap-y-2">
          <div className="bg-blue-400 w-fit h-fit rounded-lg mx-auto">
            <img className="h-14 w-14" src={logo} alt="logo" />
          </div>
          <div className="">
            <p className=" font-medium text-center text-sm">
              Create your account
            </p>
            <p className="text-center text-xs font-medium text-gray-500">
              Get started with your application <br /> by creating an account
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-xs" htmlFor="email">
            Enter your email
          </label>
          <input
            id="email"
            className="rounded-lg "
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-xs" htmlFor="password">
            Create new password
          </label>
          <input
            id="password"
            className=" rounded-lg "
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-xs" htmlFor="password">
            Confirm password
          </label>
          <input
            id="confirm"
            className=" rounded-lg "
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="btn" onClick={handleSignup}>
          Create Account
        </button>
      </div>
    </section>
  );
}

export function CodeVerificationScreen({ code, setCode, handleVerification }) {
  return (
    <div className="pt-4 space-y-4">
      <p className="text-center text-2xl font-semibold">Verify your email</p>
      <section className="flex  flex-col items-center gap-y-4 bg-white max-w-sm mx-auto py-6 px-4 rounded-xl  shadow-lg ">
        <div className="px-6">
          {/* <p className="text-center">Check your email</p> */}
          <p className="text-center text-sm">
            We sent a verification code to your email <br /> please enter it
            below to continue
          </p>
        </div>
        <div className="flex flex-col gap-y-2 w-full items-center">
          <input
            className="rounded-lg max-w-sm w-full text-center placeholder:text-sm placeholder:text-gray-500"
            placeholder="Verification Code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="btn" onClick={handleVerification}>
            Verify
          </button>
          {/* <p className="text-xs">
            click here to resend if you did not receive the code.
          </p> */}
        </div>
      </section>
    </div>
  );
}

export const VerifyMail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);

  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  async function handleSignup() {
    if (!isLoaded) {
      return;
    }

    if (password != confirmPassword) {
      message.error("Passwords must match");
      return;
    }

    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification();
      setPendingVerification(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleVerification() {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.attemptVerification({ code, strategy: "email_code" });
      console.log("success");
      localStorage.setItem("email", email);
      navigate("application");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Steps ActiveStep={1} />
      <div className="w-full  max-w-3xl mx-auto">
        {!pendingVerification ? (
          <EmailScreen
            setConfirmPassword={setConfirmPassword}
            confirmPassword={confirmPassword}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            handleSignup={handleSignup}
          />
        ) : (
          <CodeVerificationScreen
            code={code}
            setCode={setCode}
            handleVerification={handleVerification}
          />
        )}
      </div>
    </>
  );
};

function NameAndEmail({
  setapplicant,
  gender,
  setGender,
  grant,
  setgrant,
  applicant,
  state,
  setState,
}) {
  const genders = [
    { name: "Select Gender" },
    { name: "Female" },
    { name: "Male" },
    { name: "I rather not say" },
  ];

  const list = [
    { name: "Select Grant Type" },
    { name: "Educational Grant" },
    { name: "Business Grant" },
    { name: "Healthcare Grant" },
    { name: "Personal Grant" },
    { name: "Home Development Grant" },
  ];

  const { loading, error, success } = state;

  async function checkPhone(phone) {
    const options = { method: "GET" };

    const response = await fetch(
      `https://phonevalidation.abstractapi.com/v1?api_key=ad18548df96e40f281b600ec25642779&phone=${phone}`,
      options
    );

    const data = await response.json();
    const { type, valid } = data;
    console.log(data);

    return { type, valid };
  }

  async function handlePhoneInputBlur(phone) {
    try {
      const { valid } = await checkPhone(phone);
      if (!valid) {
        setState((prev) => {
          return {
            ...prev,
            error: true,
          };
        });
      } else {
        setState((prev) => {
          return {
            ...prev,
            error: false,
            success: true,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
      <div className="sm:col-span-12"></div>
      {/* <!-- Phone Col --> */}

      <div className="sm:col-span-3">
        <label
          htmlFor="af-submit-application-full-name"
          className="inline-block text-sm font-medium text-gray-500 mt-2.5"
        >
          Full name <span className="text-red-600">*</span>
        </label>
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-9">
        <div className="sm:flex">
          <input
            onChange={(e) => {
              setapplicant((prev) => {
                return {
                  ...prev,
                  firstname: e.target.value,
                };
              });
            }}
            type="text"
            placeholder="first name"
            className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
          />
          <input
            onChange={(e) => {
              setapplicant((prev) => {
                return {
                  ...prev,
                  lastname: e.target.value,
                };
              });
            }}
            placeholder="last name"
            type="text"
            className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500  "
          />
        </div>
      </div>

      {/* <!-- Phone Col --> */}

      <div className="sm:col-span-3">
        <div className="inline-block">
          <label
            htmlFor="af-submit-application-phone"
            className="inline-block text-sm font-medium text-gray-500 mt-2.5"
          >
            Phone <span className="text-red-600">*</span>
          </label>
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-9">
        <input
          onFocus={() => {
            setState((prev) => {
              return {
                ...prev,
                error: false,
                success: false,
              };
            });
          }}
          onChange={(e) => {
            setapplicant((prev) => {
              return {
                ...prev,
                phone: e.target.value,
              };
            });
          }}
          onBlur={() => handlePhoneInputBlur(applicant?.phone)}
          placeholder="Phone number"
          type="text"
          className={`py-2 px-3 pr-11 block w-full  shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  ${
            !error ? "border-gray-200" : "border-red-600"
          } `}
        />
        {error && (
          <p className="text-red-600 text-xs">Phone number is not valid</p>
        )}
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-3">
        <div className="inline-block">
          <label
            htmlFor="af-submit-application-current-company"
            className="inline-block text-sm font-medium text-gray-500 mt-2.5"
          >
            Gender
          </label>
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-9">
        <ListBox
          z={"z-[80]"}
          active={gender}
          setActive={setGender}
          list={genders}
        />
      </div>

      <div className="sm:col-span-3">
        <div className="inline-block">
          <label
            htmlFor="af-submit-application-current-company"
            className="inline-block text-sm font-medium text-gray-500 mt-2.5"
          >
            Grant type <span className="text-red-600">*</span>
          </label>
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-9">
        <ListBox active={grant} setActive={setgrant} list={list} />
      </div>
      {/* <!-- End Col --> */}
    </div>
  );
}

function Address({ setapplicant }) {
  return (
    <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
      <div className="sm:col-span-12">
        <h2 className="text-lg font-semibold text-gray-800 ">
          Address Information <span className="text-red-600">*</span>
        </h2>
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-3">
        <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
          Street Address <span className="text-red-600">*</span>
        </label>
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-9">
        <input
          onChange={(e) => {
            setapplicant((prev) => {
              return {
                ...prev,
                street: e.target.value,
              };
            });
          }}
          type="text"
          className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
        />
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-3">
        <label
          htmlFor="af-submit-application-twitter-url"
          className="inline-block text-sm font-medium text-gray-500 mt-2.5"
        >
          Address line 2
        </label>
      </div>
      {/* <!-- End Col --> */}

      <div className="sm:col-span-9">
        <input
          type="text"
          className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
        />
      </div>
      {/* <!-- End Col --> */}

      <div className="  items-center  gap-x-4 grid grid-cols-6 grid-flow-row sm:grid-cols-9 sm:col-start-4 sm:col-span-9  ">
        <div className="col-span-6 sm:col-span-3">
          <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            City
          </label>
          <input
            onChange={(e) => {
              setapplicant((prev) => {
                return {
                  ...prev,
                  city: e.target.value,
                };
              });
            }}
            type="text"
            className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
          />
        </div>
        <div className="col-span-3 ">
          <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            State <span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              setapplicant((prev) => {
                return {
                  ...prev,
                  state: e.target.value,
                };
              });
            }}
            type="text"
            className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
          />

          {/* <ListBox list={states}/> */}
        </div>
        <div className="col-span-3">
          <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Zip <span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              setapplicant((prev) => {
                return {
                  ...prev,
                  zip: e.target.value,
                };
              });
            }}
            type="text"
            className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
          />
        </div>
      </div>
      {/* <!-- End Col --> */}
    </div>
  );
}

function ConfirmSubmit({ setapproved, approved, submitting, handleSubmit }) {
  return (
    <>
      <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Before sending your application, please let us know...
          </h2>
        </div>
      </div>

      {/* <!-- Section --> */}
      <div className="pt-2 pb-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
        <p className="mt-3 text-sm text-gray-600 ">Are you over 18?.</p>
        <div className="mt-5 flex">
          <input
            value={approved}
            onChange={() => setapproved(!approved)}
            type="checkbox"
            id="privacy-check"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600  focus:ring-blue-500 cursor-pointer   "
          />
          <label
            htmlFor="privacy-check"
            className="text-sm cursor-pointer text-gray-500 ml-2 "
          >
            By clicking this box i certify that i am over 18 years of age..
          </label>{" "}
          <span className="text-red-600">*</span>
        </div>
      </div>
      {/* <!-- End Section --> */}

      <button
        onClick={(e) => handleSubmit(e)}
        type="button"
        className="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
      >
        {!submitting ? "Submit application" : "Submitting..."}
      </button>
    </>
  );
}

export const ApplicationForm = () => {
  const accounts = [{ name: "Checking" }, { name: "Savings" }];

  const paymentmethods = [{ name: "Direct Deposit" }, { name: "Debit Card" }];
  const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
  });
  const [applicant, setapplicant] = useState({
    _type: "users",
    firstname: "",
    lastname: "",
    gender: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    phone: "",
    accountname: "",
    accountnumber: "",
    bankname: "",
    routingnumber: "",
    ssn: "",
    dob: "",
  });
  const [grant, setgrant] = useState("");
  const [gender, setGender] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [approved, setapproved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedFront, setsubmittedFront] = useState(false);
  const [submittedBack, setsubmittedBack] = useState(false);
  const dlfront = localStorage.getItem("dlfront");
  const dlback = localStorage.getItem("dlback");

  const { loading, error, success } = state;

  const doc = {
    ...applicant,
    // dlback: {
    //   _type: "file",
    //   asset: {
    //     _type: "reference",
    //     _ref: `${dlback}`,
    //   },
    // },
    // dlfront: {
    //   _type: "file",
    //   asset: {
    //     _type: "reference",
    //     _ref: `${dlfront}`,
    //   },
    // },
    grant: `${grant?.name}`,
    gender: `${gender?.name}`,
  };

  const DLfrontInput = ({ onChange, id }) => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = async (e) => {
      const file = await e.target.files[0];
      if (file) {
        setFileName(file.name);
        const unload = await client.assets.upload(`file`, file).then((res) => {
          localStorage.setItem("dlfront", res._id);
          //  setDisabled(false)
          message.success("File Uploaded");
          console.log(res);
          setsubmittedFront(true);
        });
        console.log(file.name);

        //  onChange(file);
      } else {
        setFileName("");
        message.error("Please select a supported file");
      }
    };

    return (
      <div>
        {/* <input id={id} className='hidden' type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} /> */}
        {
          <input
            onChange={handleFileChange}
            type="file"
            name=""
            accept=".png, .JPEG, .docx,JPG"
            className="block w-full border cursor-pointer border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   
          file:bg-transparent file:border-0
          file:bg-gray-100 file:mr-4
          file:py-2 file:px-3
         "
          />
        }
        {/* {loading && <LoadingStatus/>} */}
        {/* {submited && <p>Selected file: {fileName }</p>} */}
      </div>
    );
  };

  const DLbackInput = ({ onChange, id }) => {
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [submited, setsubmited] = useState(false);

    const handleFileChange = async (e) => {
      const file = await e.target.files[0];

      if (file) {
        setFileName(file.name);
        const { asset } = await client.assets
          .upload(`file`, file)
          .then((res) => {
            localStorage.setItem("dlback", res._id);
            message.success("File Uploaded");
            console.log(res);
            setsubmittedBack(true);
          });
        console.log(file.name);

        //  onChange(file);
      } else {
        setFileName("");
        message.error("Please select a supported file");
      }
    };

    return (
      <div className=" cursor-pointer">
        {/* <input id={id} className='hidden' type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} /> */}
        {
          <input
            onChange={handleFileChange}
            type="file"
            name=""
            accept=".png, .JPEG, .docx, JPG"
            className="block w-full border cursor-pointer border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   
          file:bg-transparent file:border-0
          file:bg-gray-100 file:mr-4
          file:py-2 file:px-3
         "
          />
        }
        {/* {loading && <LoadingStatus/>}
          {submited && <p>Selected file: {fileName }</p>} */}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error) {
      return message.error("Please fill all required fields");
    }

    if (
      !applicant.firstname ||
      !applicant.lastname ||
      !approved ||
      !applicant.phone
    ) {
      return message.error("Please fill all required fields");
    }
    const email = localStorage.getItem("email");
    const applicantDoc = { ...doc, email };
    localStorage.setItem("application", JSON.stringify(applicantDoc));

    console.log(applicantDoc);

    await client.create(doc);
    message.success("Application Submitted");

    setTimeout(() => {
      window.location.assign(`review`);
    }, 1000);
  };

  function Account() {
    return (
      <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Account Information
          </h2>
          <p className="text-gray-700 text-xs">Direct deposit details</p>
        </div>
        {/* <!-- End Col --> */}
        <div className="sm:col-span-3">
          <label
            htmlFor="af-submit-application-linkedin-url"
            className="inline-block text-sm font-medium text-gray-500 mt-2.5"
          >
            How to receive grant <span className="text-red-600">*</span>
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <ListBox
            active={paymentMethod}
            setActive={setPaymentMethod}
            list={paymentmethods}
          />
        </div>

        {paymentMethod?.name != "Debit Card" && (
          <>
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-linkedin-url"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Account Name <span className="text-red-600">*</span>
              </label>
            </div>
            {/* <!-- End Col --> */}

            {/* {account name} */}
            <div className="sm:col-span-9">
              <input
                onChange={(e) => {
                  setapplicant((prev) => {
                    return {
                      ...prev,
                      accountname: e.target.value,
                    };
                  });
                }}
                type="text"
                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-twitter-url"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Account Number <span className="text-red-600">*</span>
              </label>
            </div>
            {/* <!-- End Col --> */}

            {/* {account number} */}
            <div className="sm:col-span-9">
              <input
                onChange={(e) => {
                  setapplicant((prev) => {
                    return {
                      ...prev,
                      accountnumber: e.target.value.toString(),
                    };
                  });
                }}
                type="number"
                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                Routing Number <span className="text-red-600">*</span>
              </label>
            </div>
            {/* <!-- End Col --> */}

            {/* {routing number} */}
            <div className="sm:col-span-9">
              <input
                onChange={(e) => {
                  setapplicant((prev) => {
                    return {
                      ...prev,
                      routingnumber: e.target.value.toString(),
                    };
                  });
                }}
                type="number"
                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-portfolio-url"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Bank Name <span className="text-red-600">*</span>
              </label>
            </div>
            {/* <!-- End Col --> */}

            {/* {bankname} */}
            <div className="sm:col-span-9">
              <input
                onChange={(e) => {
                  setapplicant((prev) => {
                    return {
                      ...prev,
                      bankname: e.target.value,
                    };
                  });
                }}
                type="text"
                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500   "
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-other-website"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                Account Type <span className="text-red-600">*</span>
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <ListBox list={accounts} />
            </div>
          </>
        )}
        {/* <!-- End Col --> */}
      </div>
    );
  }

  function PersonalInformation() {
    return (
      <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold text-gray-800 ">
            Personal Information
          </h2>
        </div>

        {!submittedFront ? (
          <>
            <div className="sm:col-span-3">
              <label
                htmlFor=""
                className="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                State ID/License Front <span className="text-red-600">*</span>
              </label>
            </div>

            <div className="sm:col-span-9">
              <label htmlFor="" className="sr-only">
                Choose file
              </label>
              <DLfrontInput />
            </div>
          </>
        ) : (
          <>
            <div className="flex  sm:grid items-center sm:grid-cols-12 sm:col-span-12 ">
              <div className="sm:col-span-3">
                <label
                  htmlFor=""
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                  State ID/License Front <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="sm:col-span-9 sm:col-start-4 pl-1">
                <label htmlFor="" className="sr-only">
                  Choose file
                </label>
                <div className="block px-4 py-2 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                  <a className="flex items-center gap-x-2 font-normal text-gray-800">
                    Uploaded{" "}
                    <span>
                      <FaCheck className="text-green-300" />
                    </span>
                  </a>
                </div>
                {/* <DLbackInput/> */}
              </div>
            </div>
          </>
        )}

        {!submittedBack ? (
          <>
            <div className="sm:col-span-3">
              <label
                htmlFor=""
                className="inline-block text-sm font-medium text-gray-500 mt-2.5"
              >
                State ID/License Back <span className="text-red-600">*</span>
              </label>
            </div>

            <div className="sm:col-span-9">
              <label htmlFor="" className="sr-only">
                Choose file
              </label>
              <DLbackInput />
            </div>
          </>
        ) : (
          <>
            <div className="flex  sm:grid items-center sm:grid-cols-12 sm:col-span-12 ">
              <div className="sm:col-span-3">
                <label
                  htmlFor=""
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                  State ID/License Back <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="sm:col-span-9 sm:col-start-4 pl-1">
                <label htmlFor="" className="sr-only">
                  Choose file
                </label>
                <div className="block px-4 py-2 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                  <a className="flex items-center gap-x-2 font-normal text-gray-800">
                    Uploaded{" "}
                    <span>
                      <FaCheck className="text-green-300" />
                    </span>
                  </a>
                </div>
                {/* <DLbackInput/> */}
              </div>
            </div>
          </>
        )}
        {/* <!-- End Col --> */}

        {/* {DOB} */}
        <div className="sm:col-span-3">
          <div className="inline-block">
            <label
              htmlFor=""
              className="inline-block text-sm font-medium text-gray-500 mt-2.5"
            >
              Date of birth: <span className="text-red-600">*</span>
            </label>
          </div>
        </div>
        {/* <!-- End Col --> */}

        {/* DOB */}
        <div className="sm:col-span-9">
          <input
            onChange={(e) => {
              setapplicant((prev) => {
                return {
                  ...prev,
                  dob: e.target.value,
                };
              });
            }}
            type="date"
            className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500   "
            rows="6"
            placeholder="Add a cover letter or anything else you want to share."
          />
        </div>
        {/* <!-- End Col --> */}

        {/* {SSN} */}
        <div className="sm:col-span-3">
          <div className="inline-block">
            <label
              htmlFor=""
              className="inline-block text-sm font-medium text-gray-500 mt-2.5"
            >
              Social Security Number: <span className="text-red-600">*</span>
            </label>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:col-span-9">
          <input
            onChange={(e) => {
              setapplicant((prev) => {
                return {
                  ...prev,
                  ssn: e.target.value,
                };
              });
            }}
            type="password"
            className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
            rows="6"
            placeholder="**-****-***."
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Steps ActiveStep={2} />
      <div className="max-w-[85rem]  sm:px-6 lg:px-8  mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid  items-center gap-4">
          {/* <!-- End Col --> */}

          <div className="relative">
            {/* <!-- Card --> */}
            <div
              id="applicationform"
              className="pt-4 sm:pt-8 sm:px-12 lg:px-16 sm:py-8"
            >
              <h1 className="text-2xl text-center font-semibold sm:text-3xl">
                Create Application
              </h1>
              <p className="text-xs sm:text-lg font-semibold text-center text-gray-600 ">
                Fields Marked with <span className="text-red-600">*</span> are
                required <br /> to submit your application.
              </p>
            </div>

            {/* form */}
            <div className="max-w-3xl px-2 py-4 sm:px-6 lg:px-8  mx-auto ">
              {/* <!-- Card --> */}
              <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
                <form>
                  <NameAndEmail
                    grant={grant}
                    setgrant={setgrant}
                    gender={gender}
                    setGender={setGender}
                    setapplicant={setapplicant}
                    applicant={applicant}
                    state={state}
                    setState={setState}
                  />
                  <Address setapplicant={setapplicant} />
                  {/* <Account /> */}
                  {/* <PersonalInformation /> */}
                  <ConfirmSubmit
                    setapproved={setapproved}
                    approved={approved}
                    submitting={submitting}
                    handleSubmit={handleSubmit}
                  />
                </form>
              </div>
              {/* <!-- End Card --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </>
  );
};

export const ApplicationReview = () => {
  const cache = localStorage.getItem("application");
  const application = cache && JSON.parse(cache);

  const navigate = useNavigate();

  const { firstname, lastname, phone, state, city, zip, street, grant, email } =
    application || {};

  const query = `*[_type == "users" && email == "${email}"]`;

  async function handleSubmit() {
    const data = await client.fetch(query).then((res) => res);
    console.log(data);
    const id = data[0]._id;
    navigate(`/applicant/${id}`);
  }

  return (
    <>
      <Steps ActiveStep={3} />
      <div className="mt-6">
        <p className="text-center text-2xl font-semibold">
          Review your application
        </p>
        {/* <p className="text-center text-gray-600">
          Confirm or edit your information to continue
        </p> */}
      </div>
      <div className="py-4 px-2  max-w-sm mx-auto bg-white flex flex-col items-center rounded-xl mt-8 shadow-lg  sm:px-4">
        <ul className="w-full  space-y-4     ">
          <p className="text-center text-gray-600 text-sm">
            Confirm application information
          </p>
          <li className="flex items-center justify-between border-b pb-1   px-1.5">
            <p className=" text-sm font-medium">Fullname:</p>
            <p className=" text-sm font-medium">
              {firstname} {lastname}
            </p>
          </li>
          <li className="flex  justify-between items-center border-b pb-1   px-1.5">
            <p className=" text-sm font-medium">Grant:</p>
            <p className=" text-sm font-medium">{grant}</p>
          </li>
          <li className="flex  justify-between items-center border-b  pb-1  px-1.5">
            <p className=" text-sm font-medium">Phone:</p>
            <p className=" text-sm font-medium">{phone}</p>
          </li>
          <li className="flex  justify-between items-center border-b  pb-1 px-1.5">
            <p className=" text-sm font-medium">Street:</p>
            <p className=" text-sm font-medium">{street}</p>
          </li>
          <li className="flex  justify-between items-center  border-b  pb-1 px-1.5">
            <p className=" text-sm font-medium">City:</p>
            <p className=" text-sm font-medium">{city}</p>
          </li>
          <li className="flex  justify-between items-center border-b  pb-1 px-1.5">
            <p className=" text-sm font-medium">State:</p>
            <p className=" text-sm font-medium">{state}</p>
          </li>
          <li className="flex  justify-between items-center border-b pb-1  px-1.5">
            <p className=" text-sm font-medium">Zip:</p>
            <p className=" text-sm font-medium">{zip}</p>
          </li>
        </ul>

        <div className="mt-4 w-full flex justify-center ">
          <button onClick={handleSubmit} className="btn ">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export function SubmitScreen() {
  return (
    <>
      <p className="text-center">Submit your application</p>
      <div className=" max-w-xl bg-white mx-auto py-4 px-2 rounded-lg shadow-xl flex justify-center">
        <div className="">Submit</div>
      </div>
    </>
  );
}

export const ApplicationOnboarding = () => {
  return (
    <div className=" pt-4 bg-gray-200 min-h-screen pb-8 px-2">
      <div className="sm:max-w-5xl sm:mx-auto">
        {/* <p className="text-center">Onboarding</p> */}
        <Routes>
          <Route path="/" element={<VerifyMail />} />
          <Route path="/application" element={<ApplicationForm />} />
          <Route path="/review" element={<ApplicationReview />} />
          <Route path="/submit/:id" element={<ApplicationComplete />} />
        </Routes>
      </div>
    </div>
  );
};
