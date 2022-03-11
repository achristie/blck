import { Header } from "@components/common";
import { Web3Provider } from "@components/providers";

export default function Layout({ children }) {
  return (
    <Web3Provider>
      <Header />
      <div className="mt-12 ml-16">{children}</div>
    </Web3Provider>
  );
}
