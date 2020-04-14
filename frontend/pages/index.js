import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <h1>Index</h1>
      <Link href="signup">
        <a>Signup</a>
      </Link>
    </Layout>
  );
};

export default Index;
