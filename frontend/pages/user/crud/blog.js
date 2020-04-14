import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import Link from "next/link";
import BlogCreate from "../../../components/crud/BlogCreate";

const CreateBlog = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <h1 className="center pt-4 pb-4">Create a New Blog</h1>

          <div className="row p-4">
            <div className="col-md-12">
              <BlogCreate />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default CreateBlog;
