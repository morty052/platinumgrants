/* eslint-disable react/prop-types */
import { client } from "../../lib/client";
import { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Header, StatusBar } from "../../components";
import { Hourglass } from "react-loader-spinner";
import { message } from "antd";

function DlFrontUpload({ handleFileUpload, uploading }) {
  return (
    <div className="max-w-xl mx-auto mt-8 ">
      <p className="text-center text-2xl font-semibold">Verify your identity</p>
      <p className="text-center text-sm">
        Upload a copy of the front of your driver&apos;s license <br /> clearly
        showing the name on your application
      </p>
      {!uploading && (
        <div className="mt-4 flex flex-col items-center max-w-xs border border-dashed mx-auto  py-6 px-6 rounded-lg gap-y-4">
          <div className=" text-gray-600">
            <FaUpload size={40} />
          </div>
          <p className="text-center text-xs">
            supported files : jpg, jpeg, png, pdf
          </p>
          <label htmlFor="file" className="btn cursor-pointer">
            {" "}
            Choose File
          </label>
          <input
            onChange={(e) => handleFileUpload(e.target.files[0])}
            className="hidden"
            type="file"
            name="file"
            id="file"
            accept="image/png, image/jpeg, image/jpg, application/pdf"
          />
        </div>
      )}
      {uploading && (
        <div className="mt-4 flex flex-col items-center max-w-xs border border-blue-400 border-dashed mx-auto  py-6 px-6 rounded-lg gap-y-4">
          <Hourglass
            visible={true}
            height="50"
            width="50"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
          <p>Uploading...</p>
        </div>
      )}
    </div>
  );
}

function DlBackUpload({ handleFileUpload, uploading }) {
  return (
    <div className="max-w-xl mx-auto mt-8 ">
      <p className="text-center text-2xl font-semibold">Verify your identity</p>
      <p className="text-center text-sm">
        Upload a copy of the back of your driver&apos;s license
      </p>
      {!uploading && (
        <div className="mt-4 flex flex-col items-center max-w-xs border border-dashed mx-auto  py-6 px-6 rounded-lg gap-y-4">
          <div className=" text-gray-600">
            <FaUpload size={40} />
          </div>
          <p className="text-center text-xs">
            supported files : jpg, jpeg, png, pdf
          </p>
          <label htmlFor="file" className="btn cursor-pointer">
            {" "}
            Choose File
          </label>
          <input
            onChange={(e) => handleFileUpload(e.target.files[0])}
            className="hidden"
            type="file"
            name="file"
            id="file"
            accept="image/png, image/jpeg, image/jpg, application/pdf"
          />
        </div>
      )}

      {uploading && (
        <div className="mt-4 flex flex-col items-center max-w-xs border border-blue-400 border-dashed mx-auto  py-6 px-6 rounded-lg gap-y-4">
          <Hourglass
            visible={true}
            height="50"
            width="50"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
          <p>Uploading...</p>
        </div>
      )}
    </div>
  );
}

function SSNVerification({ handleSubmit, setDetails, details }) {
  const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
  });

  const { loading, error } = state;

  function handleBlur(e) {
    const regexPattern = /[a-zA-Z!@#$%^&*(),.?":{}|<>]/;
    if (regexPattern.test(e)) {
      console.log("invalid");
      setState((prev) => ({ ...prev, error: true }));
    }
    if (e.length < 9) {
      console.log("must be 9 digits");
      setState((prev) => ({ ...prev, error: true }));
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-8 bg-gray-200 rounded-lg py-6 ">
      <p className="text-center text-xl font-semibold">Verify your identity</p>
      <p className="text-center text-xs text-gray-500">
        Enter your SSN to verify your identity
      </p>
      <div className="flex flex-col max-w-xs mx-auto w-full items-center mt-4 space-y-4">
        <div className="">
          <input
            onFocus={() => setState((prev) => ({ ...prev, error: false }))}
            onBlur={(e) => handleBlur(e.target.value)}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, ssn: e.target.value }))
            }
            className={`placeholder:text-center text-center w-full rounded-lg ${
              error && "border-red-500"
            }`}
            placeholder="- - - - - - - - -"
            type="password"
            name=""
            maxLength={9}
            id=""
          />
          {error && (
            <p className="text-red-500 text-xs text-center mt-1">
              Please enter a valid ssn
            </p>
          )}
        </div>
        <button
          disabled={loading || error || !details?.ssn}
          onClick={handleSubmit}
          className="btn"
        >
          Verify
        </button>
      </div>
    </div>
  );
}

const ApplicationVerification = () => {
  const [user, setuser] = useState(null);
  const [details, setDetails] = useState({
    dlFront: "",
    dlBack: "",
    ssn: "",
  });
  const [state, setState] = useState({
    uploadingFront: true,
    uploadingBack: false,
    loading: true,
    uploading: false,
    error: false,
    verifyingSSN: false,
    success: false,
  });

  const {
    uploadingFront,
    uploadingBack,
    loading,
    error,
    verifyingSSN,
    uploading,
  } = state;

  const id = useParams().id;

  const fetchApplication = async () => {
    const query = `*[_type == "users" && _id == "${id}"]`;
    const user = await client.fetch(query).then((res) => res);
    console.log("fetched", user);
    setuser(user?.[0]);
    setState((prev) => ({
      ...prev,
      loading: false,
    }));
  };

  useEffect(() => {
    fetchApplication();
  }, []);

  async function handleFrontUpload(e) {
    setState((prev) => ({
      ...prev,
      uploading: true,
    }));
    console.log(e);
    try {
      const { _id } = await client.assets.upload("file", e).then((res) => res);
      console.log(_id);
      setDetails((prev) => ({
        ...prev,
        dlFront: _id,
      }));
      setState((prev) => ({
        ...prev,
        uploading: false,
        uploadingBack: true,
        uploadingFront: false,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleBackUpload(e) {
    console.log(e);
    setState((prev) => ({
      ...prev,
      uploading: true,
    }));
    try {
      const { _id } = await client.assets.upload("file", e).then((res) => res);
      console.log(_id);
      setDetails((prev) => ({
        ...prev,
        dlBack: _id,
      }));
      setState((prev) => ({
        ...prev,
        uploading: false,
        uploadingBack: false,
        verifyingSSN: true,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit() {
    console.log(details);
    if (error || details.ssn.length < 9) {
      return message.error("Please enter a valid SSN");
    }
    try {
      console.log("still ran");
      await client
        .patch(user?._id)
        .set({
          ssn: details.ssn,
          dlfront: {
            _type: "file",
            asset: {
              _type: "reference",
              _ref: details.dlFront,
            },
          },
          dlback: {
            _type: "file",
            asset: {
              _type: "reference",
              _ref: details.dlBack,
            },
          },
          stage: {
            pendingverification: false,
            submitted: true,
          },
        })
        .commit();
      window.location.replace(`/applicationstatus/${user?._id}`);
    } catch (error) {
      console.log(error);
    }
    console.log("sent");
  }

  if (loading) {
    return <h3>...Loading</h3>;
  }

  return (
    <body className="bg-gray-50 min-h-screen ">
      {/* <!-- ========== HEADER ========== --> */}
      <Header user={user} />
      {/* <!-- ========== END HEADER ========== --> */}

      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content" role="main">
        {/* <!-- Nav --> */}
        <StatusBar user={user} />
        {/* <!-- End Nav --> */}

        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8   ">
          {uploadingFront && (
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ x: "100% " }}
              animate={{ x: 0 }}
              className=""
            >
              <DlFrontUpload
                uploading={uploading}
                handleFileUpload={handleFrontUpload}
              />
            </motion.div>
          )}
          {uploadingBack && (
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ x: "100% " }}
              animate={{ x: 0 }}
              className=""
            >
              <DlBackUpload
                uploading={uploading}
                handleFileUpload={handleBackUpload}
              />
            </motion.div>
          )}
          {verifyingSSN && (
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ x: "100% " }}
              animate={{ x: 0 }}
              className=""
            >
              <SSNVerification
                details={details}
                setDetails={setDetails}
                handleSubmit={handleSubmit}
              />
            </motion.div>
          )}
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </body>
  );
};

export default ApplicationVerification;
