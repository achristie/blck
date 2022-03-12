import { Button } from "@components/common";
import { useWeb3 } from "@components/providers/web3";
export default function ConnectButton() {
  const { connect, requireInstall, isLoading } = useWeb3();
  return (
    <Button onClick={connect}>
      <img className="w-6 h-6 mr-4" src="/images/metamask.svg" />
      Connect
    </Button>
  );
}
