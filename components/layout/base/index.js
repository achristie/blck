import { Header } from "@components/common";
import { Web3Provider } from "@components/providers";

export default function Layout({ children }) {
  return (
    <Web3Provider>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="mt-12 ml-16 relative">{children}</div>
    </Web3Provider>
  );
}
