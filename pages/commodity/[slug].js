import { Base } from "@components/layout";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Commodity({ props }) {
  const {
    query: { slug },
  } = useRouter();
  return <motion.div layoutId={slug}>{slug}</motion.div>;
}

const Wrapper = ({ ...props }) => {
  return (
    <Base>
      <Commodity />
    </Base>
  );
};

export default Wrapper;
