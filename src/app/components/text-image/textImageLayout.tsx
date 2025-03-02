import React from "react";
import Image from "next/image";

interface TextImageComponentProps {
  title: string;
  text1: string;
  text2?: string;
  imageUrl: string;
  reverseOrder?: boolean;
}

const TextImageComponent = ({
  title,
  text1,
  text2,
  imageUrl,
  reverseOrder,
}: TextImageComponentProps) => {
  return (
    <div
      className={`flex flex-col ${
        reverseOrder ? " md:flex-row-reverse " : "md:flex-row"
      }  items-center justify-center gap-20 px-10  py-10 max-w-7xl mx-auto`}
    >
      <div className=" w-full md:w-auto flex-shrink-0">
        <Image
          src={imageUrl}
          alt="image"
          width={250}
          height={100}
          className="w-auto h-80 rounded object-cover"
        />
      </div>
      <div className={`w-full md:w-1/3 text-center space-y-4`}>
        <h2 className="subheading">{title}</h2>
        <p className=" body">{text1}</p>
        <p className=" body">{text2}</p>
      </div>
    </div>
  );
};

export default TextImageComponent;
