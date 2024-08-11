import { useMutation } from "@tanstack/react-query";
import { Cookies } from "react-cookie";
import { useGlobalHooks } from "../globalHooks/globalhooks";
import { login } from "@/api/functions/login.api";
import { register } from "@/api/functions/register.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export const useSignInMutation = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: login, 
    onSuccess: (response) => {
      const {
        token,
        status,
        message,
        data: { name, email, _id },
      } = response || {};

      if (status === 200) {
        cookies.set("token", token, {
          path: "/",
          sameSite: "None",
          secure: true,
        });
        cookies.set("name", name, { path: "/" });
        cookies.set("_id", _id, { path: "/" });
        cookies.set("email", email, { path: "/" });
        toast.success(message);
        router.push("/");
      } else {
        toast.error(message);
      }

      queryClient.invalidateQueries(["USERS"]);
    },
    onError: (error) => {
      toast.error("an error occured");
      console.error(error);
    },
  });
};

export const useSignUpMutation = () => {
  const cookie = new Cookies();
  const routerRegister = useRouter();
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      const {
        status,
        message,
      } = response || {};
      if (status === true) {
        toast(message, "success");
        routerRegister.push("/auth/login");
      } else {
        toast(message, "error");
      }
      queryClient.invalidateQueries({ queryKey: ["AUTH"] });
    },
  });
};
