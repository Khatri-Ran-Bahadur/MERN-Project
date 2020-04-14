import Layout from "../components/Layout";
import SigninComponet from "../components/auth/SigninComponent";
import { withRouter } from "next/router";
const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };
  return (
    <Layout>
      <h1 className="text-center pt-4 pb-4">Signin</h1>
      <div className="row">
        <div className="col-md-4 offset-md-4 ">{showRedirectMessage()}</div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4 ">
          <SigninComponet />
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Signin);
