"use client";

import FormCheckbox from "@/components/atoms/Main/FormCheckbox/FormCheckbox";
import FormInput from "@/components/atoms/Main/FormInput/FormInput";
import { FormSubmit } from "@/components/atoms/Main/FormSubmit/FormSubmit";
import FormTextarea from "@/components/atoms/Main/FormTextarea/FormTextarea";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormEmail {
  name: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
}

export const FormEmail = () => {
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormEmail>();

  const fields = {
    name: register("name", { required: "This is a required fields." }),
    email: register("email", { required: "This is a required fields." }),
    message: register("message", { required: "This is a required fields." }),
    aggree: register("agree", { required: "This is a required fields." }),
  };

  const onSubmit: SubmitHandler<IFormEmail> = async (emailRequest: any) => {
    console.log(emailRequest);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[20px]">
          <FormInput
            type="text"
            placeholder="Name"
            errorMessage={errors.name?.message?.toString()}
            showMessage={errors.name ? true : false}
            {...fields.name}
          />
        </div>
        <div className="mb-[20px]">
          <FormInput
            type="email"
            placeholder="Email"
            errorMessage={errors.email?.message?.toString()}
            showMessage={errors.email ? true : false}
            {...fields.email}
          />
        </div>
        <div className="mb-[20px]">
          <FormInput
            type="text"
            placeholder="Phone"
            errorMessage=""
            showMessage={false}
          />
        </div>
        <div className="mb-[20px]">
          <FormTextarea
            placeholder="Your question/message"
            showMessage={errors.message ? true : false}
            errorMessage={errors.message?.message?.toString()}
            {...fields.message}
          />
        </div>
        <div className="mb-[20px]">
          <FormCheckbox
            onClick={() => setCheckboxStatus(!checkboxStatus)}
            description="I consent to the processing of my data. You can read more about how we
          handle your data in our general terms and conditions ."
            isChecked={checkboxStatus ? true : false}
            showMessage={errors.agree ? true : false}
            errorMessage={errors.agree?.message?.toString()}
            {...fields.aggree}
          />
        </div>
        <div className="mb-[20px] flex justify-end">
          <FormSubmit label="Submit" />
        </div>
      </form>
    </>
  );
};
