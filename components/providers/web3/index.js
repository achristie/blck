const {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} = require("react");
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
const Web3Context = createContext(null);
import { setupHooks } from "./hooks/setupHooks";

const createWeb3State = ({ web3, provider, isLoading, isWaiting }) => {
  return {
    web3,
    provider,
    isLoading,
    isWaiting,
    hooks: setupHooks({ web3, provider }),
  };
};

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState(
    createWeb3State({
      web3: null,
      provider: null,
      isLoading: true,
      isWaiting: false,
    })
  );

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api(
          createWeb3State({
            web3,
            provider,
            isLoading: false,
            isWaiting: false,
          })
        );
      } else {
        setWeb3Api((api) => ({ ...api, isLoading: false }));
        console.error("Install metamask");
      }
    };
    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    const { web3, provider, isLoading } = web3Api;
    return {
      ...web3Api,
      requireInstall: !isLoading && !web3,
      connect: provider
        ? async () => {
            try {
              setWeb3Api((api) => ({ ...api, isWaiting: true }));
              await provider.request({ method: "eth_requestAccounts" });
            } catch {
              console.error("Cannot retrieve an account");
              // location.reload();
            } finally {
              setWeb3Api((api) => ({ ...api, isWaiting: false }));
            }
          }
        : () => console.log("cannot connect to metamask"),
    };
  }, [web3Api]);
  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks(cb) {
  const { hooks } = useWeb3();
  return cb(hooks);
}
