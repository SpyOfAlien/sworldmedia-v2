import Particles from "react-particles-js";
import { FC } from "react";
import particles from "../../../lib/particels/particels";
import cn from "classnames";
import styles from "./particels-layout.module.css";

interface Props {
  children?: any;
  className?: string;
}

const ParticelsLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <Particles
        className={cn("bg-gray-800 absolute w-full h-screen", styles.under)}
        params={particles}
      />
      {children}
    </>
  );
};

export default ParticelsLayout;
