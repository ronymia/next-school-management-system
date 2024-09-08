"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import TextField from "../inputFields/TextField";

export interface ITeacherForm {
  type: "create" | "update" | "view";
  data?: any;
}

export const teacherSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .min(3, { message: "Username must be at least 3 character long" })
    .max(8, { message: "Username must be at most 8 character long" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please provide valid Email" }),
  firstName: z.string({ required_error: "First Name is required" }),
  lastName: z.string({ required_error: "Last Name is required" }),
  phone: z.string({ required_error: "Phone is required" }),
  address: z.string({ required_error: "Address is required" }),
  dateOfBirth: z.string({ required_error: "Birth date is required" }),
  sex: z.string({ required_error: "Gender is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

export type Inputs = z.infer<typeof teacherSchema>;

export default function TeacherForm({ type, data }: ITeacherForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(teacherSchema),
  });

  const handleOnSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-8">
      <h1>Create a Teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <TextField
        id={"username"}
        name="username"
        register={register}
        label="Username"
        error={errors?.username}
      />
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <button type="submit" className="bg-blue-400 text-white rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
}
