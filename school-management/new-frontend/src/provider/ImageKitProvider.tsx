import { IKContext } from "imagekitio-react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode; // ✅ TypeScript ke liye required
};

export const ImageKitProvider = ({
  children,
}: Props) => {
  return (
    <IKContext
      publicKey="public_ikCJnq8uODDyvvPV3Fy004X8jKw="
      urlEndpoint="https://ik.imagekit.io/abcd1234abcd"
      tranformationPosition="path"
    >
      {children} 
    </IKContext>
  );
};
