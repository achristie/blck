import { Base } from "@components/layout";

function Home() {
  return (
    <Base>
      <h1 className="text-cyan-800">Hello!</h1>
    </Base>
  );
}

const Wrapper = ({ ...props }) => (
  <Base>
    <Home {...props} />
  </Base>
);
export default Wrapper;
