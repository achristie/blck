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
    <div className="grid grid-cols-2 gap-x-20">
      <section>
        <h3 className="text-4xl text-indigo-800 strong mb-4">Commodities</h3>
        <div className="grid gap-y-12 w-full">
          {COMMODITIES.map((c) => {
            return (
              <Card key={c.title} title={c.title} body={c.body} img={c.img} />
            );
          })}
        </div>
      </section>
      <section>
        <h3 className="text-4xl text-indigo-800 strong mb-4">
          Popular Symbols
        </h3>
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BlahSymbolSymbol</td>
              <td>BlahSymbolSymbol</td>
              <td>BlahSymbolSymbol</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
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
