import Image from "next/image";

interface ResponsiveImageProps {
  image: string;
  alt: string;
  responsiveSize: string;
  mask?: string;
  objectfit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export default function ResponsiveImage(props: ResponsiveImageProps) {
  return (
    <div className={`relative ${props.responsiveSize} w-full`}>
      <Image
        alt={props.alt}
        src={props.image}
        sizes="100vw"
        fill
        style={{
          objectFit: props.objectfit ?? "contain",
          height: "100%",
        }}
        className={props.mask ? props.mask : ""}
      />
    </div>
  );
}
