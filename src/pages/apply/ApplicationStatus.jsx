import { Progress } from "antd";
import { useParams } from "react-router-dom";
import { client } from "../../lib/client";
import { useEffect, useState } from "react";
import { blue } from "@ant-design/colors";
import { ApplicationSteps } from "../../components";
import { Link } from "react-router-dom";
import { Header, StatusBar } from "../../components";

const ApplicationStatus = () => {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [user, setuser] = useState(null);
  const { _id, stage, grant } = user ?? {};
  const { submitted } = stage ?? {};

  const fetchApplication = async () => {
    const query = `*[_type == "users" && _id == "${id}"]`;
    const user = await client.fetch(query).then((res) => res);
    console.log("fetched", user);
    setuser(user?.[0]);
    setLoading(false);
  };

  const ApplicationProgress = () => {
    return (
      <>
        <div className="py-4 hidden sm:block">
          <Progress
            size={40}
            percent={!submitted ? 30 : 50}
            steps={10}
            strokeColor={[blue[6]]}
          />
        </div>
        <div className="py-4  sm:hidden">
          <Progress size={"default"} percent={30} steps={10} />
        </div>
      </>
    );
  };

  const UnderReview = () => {
    return (
      <>
        <p className="mt-2 text-lg text-gray-800 ">
          Status: <span className="text-gray-500">Under Review.</span>
        </p>
        <p className="mt-2 text-xs  text-gray-800 ">
          Your documents are under review <br /> keep an eye on your email for
          updates or check back here.
        </p>
        {/* <div className="mt-4">
          <Link to={`/applicationstatus/verify/${_id}`} className="">
            <button className="btn"> Verify</button>
          </Link>
        </div> */}
      </>
    );
  };

  const PendingVerificationView = () => {
    return (
      <>
        <p className="mt-2 text-lg text-gray-800 ">
          Status: <span className="text-gray-500">Pending Verification.</span>
        </p>
        <p className="mt-2 text-xs  text-gray-800 ">
          You can start the verification process anytime <br /> by clicking the
          verify button below.
        </p>
        <div className="mt-4">
          <Link to={`/applicationstatus/verify/${_id}`} className="">
            <button className="btn"> Verify</button>
          </Link>
        </div>
      </>
    );
  };

  useEffect(() => {
    fetchApplication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <body className="bg-gray-50 min-h-screen ">
        {/* <!-- ========== HEADER ========== --> */}
        <Header user={user} />
        {/* <!-- ========== END HEADER ========== --> */}

        {/* <!-- ========== MAIN CONTENT ========== --> */}
        <main id="content" role="main">
          {/* <!-- Nav --> */}
          <StatusBar user={user} />
          {/* <!-- End Nav --> */}

          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 ">
            {/* <!-- Page Heading --> */}
            <ApplicationSteps ActiveStep={1} />
            <header className="max-w-xl mx-auto mt-8">
              {/* <p className="mb-2 text-sm font-semibold text-blue-600">
                {user?.grant}
              </p> */}
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl ">
                {grant}
              </h1>
              <div>
                <ApplicationProgress />
              </div>
              {!submitted ? <PendingVerificationView /> : <UnderReview />}
            </header>
            {/* <!-- End Page Heading --> */}
          </div>
        </main>
        {/* <!-- ========== END MAIN CONTENT ========== --> */}
      </body>
    </>
  );
};

export default ApplicationStatus;
