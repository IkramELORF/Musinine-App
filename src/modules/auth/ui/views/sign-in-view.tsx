"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Key, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

export default function SignInView() {
  const { register, handleSubmit } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Call your login API here
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f9fafa] via-[#7ad0cb]/80 to-[#54d4ce]/30 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-xl font-medium">Bienvenue l’équipe</h1>
            <h2 className="text-3xl font-bold text-[#1b7f79]">Musinine</h2>
          </div>
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
            <Input
              {...register("email")}
              placeholder="example@musinine.com"
              className="pl-10"
              type="email"
            />
          </div>

          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
            <Input
              {...register("password")}
              placeholder="Mot de passe"
              type={showPassword ? "text" : "password"}
              className="pl-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("remember")} />
              Se souvenir
            </label>
            <Link href="#" className="text-sky-500 hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-[#2ba7a0] hover:bg-[#24958f]">
            Connexion
          </Button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-6">
          Nous n’avez pas de compte ?{" "}
          <Link href="/sign-up" className="text-sky-500 hover:underline">
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}
