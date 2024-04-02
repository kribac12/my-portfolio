import { Suspense, lazy } from "react";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Home />
      </Layout>
    </Suspense>
  );
};

export default App;
