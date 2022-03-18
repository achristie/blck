import { Button } from "@components/common";
import { useWeb3 } from "@components/providers/web3";
import { useAccount } from "@components/hooks/web3";
export default function ConnectButton() {
  const { connect, requireInstall, isLoading, isWaiting } = useWeb3();
  console.log(isLoading);
  const { account } = useAccount();
  return isLoading ? (
    <span></span>
  ) : account.data ? (
    <div>
      {account.data.slice(0, 4) +
        "..." +
        account.data.slice(account.data.length - 4)}
    </div>
  ) : (
    <Button onClick={connect} disabled={isWaiting}>
      <img className="w-6 h-6 mr-4" src="/images/metamask.svg" />
      Connect Wallet
    </Button>
  );
}
