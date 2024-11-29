"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createAccount, login } from "../utils/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppwriteException } from "appwrite";
import Image from "next/image";
import Title from "@/public/Title.webp";
import Link from "next/link";
const schema = z
  .object({
    email: z
      .string()
      .email("Неверный формат email")
      .min(4, "email должен содержать как минимум 4 characters"),
    password: z
      .string()
      .min(8, "пароль должен содержать как минимум 8 characters"),
  })
  .required();
type FormData = z.infer<typeof schema>;

interface Props {
  type: "SignUp" | "SignIn";
}
const statusCodes = [
  {
    status: 200,
    text: "OK",
  },
  {
    status: 409,
    text: "Пользователь с такой почтой уже существует",
  },
  {
    status: 400,
    text: "Ошибка сервера, повторите попытку позже",
  },
  {
    status: 401,
    text: "Неверный адрес электронной почты либо пароль",
  },
];

const AuthForm = ({ type }: Props) => {
  const [resError, setResError] = useState<number>(200);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSubmit = async (data: FormData) => {
    setResError(200);
    setIsLoading(true);
    const { email, password } = data;
    try {
      if (type == "SignIn") {
        await login(email, password);
      } else {
        await createAccount(email, password);
      }
    } catch (error) {
      console.log(error);
      const err = (error as AppwriteException).code;
      setResError(err);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <h1 className="flex items-center gap-1 text-3xl font-bold relative right-4">
        <Image
          src={Title}
          alt="Terraria"
          width={160}
          height={40}
          className="relative bottom-[5px]"
        />
        Shop
      </h1>
      <h2 className="mt-8 text-2xl font-bold">
        {type == "SignIn" ? "Войти" : "Регистрация"}
      </h2>
      <p className="pt-2 text-gray-700">
        Добро пожаловать, пожалуйста введите ваши данные
      </p>
      <form onSubmit={onSubmit(handleSubmit)} className="mt-8 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-sm font-bold">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              disabled={isLoading}
              {...register("email")}
              className="py-2 px-6 border-[1px] border-gray-400 rounded-md"
            />
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 text-sm font-bold">
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              disabled={isLoading}
              {...register("password")}
              className="py-2 px-6 border-[1px] border-gray-400 rounded-md"
            />
            <p className="text-red-700">{errors.password?.message}</p>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center mt-8 w-full py-3 px-6 text-white bg-blue-500 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loader"></div>
          ) : type == "SignIn" ? (
            "Войти"
          ) : (
            "Зарегестрироватся"
          )}
        </button>
        {resError != 200 && (
          <p className="mt-12 py-3 px-8 text-white text-center text-lg font-semibold bg-red-600 absolute w-[480px] top-4 left-1/2 -translate-x-1/2">
            {statusCodes.find((status) => status.status == resError)?.text ||
              "Ошибка сервера"}
          </p>
        )}
      </form>
      <p className="mt-6 text-center text-sm font-light">
        {type == "SignIn" ? (
          <>
            Нет аккаунта?{" "}
            <Link href="/sign-up" className="text-blue-500">
              Зарегестрироватся
            </Link>
          </>
        ) : (
          <>
            Есть аккаунт?{" "}
            <Link href="/sign-in" className="text-blue-500">
              Войти
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
