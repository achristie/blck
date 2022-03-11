import { Base } from "@components/layout";
import { Card } from "@components/common";

const COMMODITIES = [
  { title: "Oil", body: "test" },
  { title: "Energy Transition", body: "test" },
  { title: "Agriculture", body: "test" },
  { title: "Metals", body: "test" },
];

function Home({ props }) {
  return (
    <section>
      <h3 className="text-4xl text-indigo-800 strong mb-4">Commodities</h3>
      <div className="grid grid-cols-1 gap-y-12 w-1/3">
        {COMMODITIES.map((c) => {
          return <Card key={c.title} title={c.title} body={c.body} />;
        })}
      </div>
    </section>
  );
}

const Wrapper = ({ ...props }) => {
  return (
    <Base>
      <Home {...props} />
    </Base>
  );
};
export default Wrapper;
