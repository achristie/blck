import { Header } from "@components/common";
import { Web3Provider } from "@components/providers";

export default function Layout({ children }) {
  return (
    <Web3Provider>
      <Header>{children}</Header>
    </Web3Provider>
  );
}
