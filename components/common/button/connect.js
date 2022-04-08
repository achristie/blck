import { Button } from "@components/common";
import { useWeb3 } from "@components/providers/web3";
import { useAccount } from "@components/hooks/web3";
import { Popover } from "@headlessui/react";

const AccountPopover = ({ label }) => {
  return (
    <Popover className="relative">
      <Popover.Button>{label}</Popover.Button>
      <Popover.Panel className="absolute z-10">
        <ul className="grid grid-cols-2">
          <li>Name</li>
          <li>Email</li>
          <li>Network</li>
        </ul>
      </Popover.Panel>
    </Popover>
  );
};

export default function ConnectButton() {
  const { connect, requireInstall, isLoading, isWaiting } = useWeb3();
  console.log(isLoading);
  const { account } = useAccount();
  return isLoading ? (
    <span></span>
  ) : account.data ? (
    <div>
      <AccountPopover
        label={
          account.data.slice(0, 4) +
          "..." +
          account.data.slice(account.data.length - 4)
        }
      ></AccountPopover>
    </div>
  ) : (
    <Button onClick={connect} disabled={isWaiting}>
      <img className="w-6 h-6 mr-4" src="/images/metamask.svg" />
      Connect Wallet
    </Button>
  );
}
