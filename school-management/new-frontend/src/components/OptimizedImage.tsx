import { IKImage } from "imagekitio-react";

type OptimizedImageProps = {
  path: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
};

export default function OptimizedImage({
  path,
  alt,
  width = 500,
  height = 300,
  quality = 80,
  className = "",
}: OptimizedImageProps) {
  return (
    <div className={`w-full max-w-[${width}px] mx-auto`}>
      <IKImage
        path={path}
        alt={alt}
        loading="lazy"
        lqip={{ active: true }}
        transformation={[{ width, height, quality, format: "webp" }]}
        className={`rounded-md shadow-lg w-full h-auto object-cover ${className}`}
      />
    </div>
  );
}
