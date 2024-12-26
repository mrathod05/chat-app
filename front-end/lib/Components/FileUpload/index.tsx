import React, { useState } from "react";
import Image from "next/image";
import { UseFormClearErrors, UseFormTrigger } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";

import { ErrorMessage } from "../ErrorMessage";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl?: string;
  errorMessage?: string;
  /*  eslint-disable @typescript-eslint/no-explicit-any*/
  clearErrors: UseFormClearErrors<any>;
  /*  eslint-disable @typescript-eslint/no-explicit-any */
  trigger: UseFormTrigger<any>;
  fieldName: string;
  handleFile: (file: File) => void;
};

const FileUpload = ({
  errorMessage,
  fieldName,
  clearErrors,
  trigger,
  handleFile,
}: Props): React.JSX.Element => {
  const [image, setImage] = useState<string>();

  const handleFileChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (target.files && target.files[0]) {
      const file = target.files[0];

      handleFile(file);

      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
    void trigger(fieldName);
    clearErrors(fieldName);
  };

  const cancelImage = (): void => {
    setImage("");
    clearErrors(fieldName);
  };

  return (
    <div className="relative">
      {image ? (
        <div className="w-fit relative">
          <button
            className="absolute -top-3 -right-4 z-10"
            onClick={cancelImage}
          >
            <IoIosCloseCircle />
          </button>

          <div className="input-profile-pic relative h-36 w-36 rounded-10 bg-secondaryLight">
            <Image
              width={100}
              height={100}
              src={image}
              alt="media"
              className="rounded-10 object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ) : (
        <div className="py-[0.9375rem] bg-light_grey_100 rounded-lg relative flex flex-col items-center justify-center p-5">
          {/* <BlueUploadIcon /> */}

          <label>Upload file</label>
          <input
            type="file"
            className="absolute h-full w-full top-0 left-0 right-0 opacity-0 cursor-pointer"
            onChange={(e) => handleFileChange(e)}
          />
        </div>
      )}

      {errorMessage && (
        <ErrorMessage message={errorMessage} className="!pl-0" />
      )}
    </div>
  );
};

export default FileUpload;
