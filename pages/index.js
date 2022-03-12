import { Base } from "@components/layout";
import { Card } from "@components/common";

const COMMODITIES = [
  { title: "Oil", body: "test", img: "oil.jpg" },
  { title: "Energy Transition", body: "test", img: "et.jpeg" },
  { title: "Agriculture", body: "test", img: "agri.jpeg" },
  { title: "Metals", body: "test", img: "metal.jpeg" },
];

function Home({ props }) {
  return (
    <section>
      <h3 className="text-4xl text-indigo-800 strong mb-4">Commodities</h3>
      <div className="grid grid-cols-1 gap-y-12 w-2/5">
        {COMMODITIES.map((c) => {
          return (
            <Card key={c.title} title={c.title} body={c.body} img={c.img} />
          );
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
