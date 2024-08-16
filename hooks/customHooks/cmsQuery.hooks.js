import { useMutation, useQuery } from "@tanstack/react-query";
import { useGlobalHooks } from "../globalHooks/globalhooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { doctorList } from "@/api/functions/list.api";
import { getDetails } from "@/api/functions/details.api";
import { docByDept } from "@/api/functions/docbydept.api";
import { Cookies } from "react-cookie";
import { CreateAppointment } from "@/api/functions/appointment.api";
import { Department } from "@/api/functions/department.api";
import { getDashboard } from "@/api/functions/dashboard.api";
import { Featured } from "@/api/functions/featured.api";
import { Childcare } from "@/api/functions/childcare.api";
import { Personalcare } from "@/api/functions/personal.api";
import { Bloglist } from "@/api/functions/blog.api";
import { BlogDetail } from "@/api/functions/singleBlog.api";
import { recentBlog } from "@/api/functions/recentblog.api";
import { BlogComment } from "@/api/functions/getcomment.api";
import { Createcomment } from "@/api/functions/createcomment.api";
import { Create } from "@/api/functions/create.api";
import { Search } from "@/api/functions/search.api";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useGetDoctorsQueries = (page, perPage) => {
  return useQuery({
    queryKey: ["Doctors", page, perPage],
    queryFn: () => doctorList({ page, perPage }),

    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const DetailsQuery = (id) => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["DETAILS", id],
    queryFn: () => getDetails(id)
    ,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["DETAILS"] });
    },
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 600000,
  });
};

export const DepartmentQuery = () => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["Department"],
    queryFn: () => Department(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Department"] })
    },
    staleTime: 3000,
    cacheTime: 6000,
  });

};

export const getDoctorByDepartment = (id) => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["DocByDepartment"],
    queryFn: () => docByDept(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["DocByDepartment"] });
    },
    enabled: !!id,
  });
};

export const getDashboardDetails = (id) => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["Dashboard"],
    queryFn: () => getDashboard(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Dashboard"] });
    },
    enabled: !!id,
     staleTime: 3000, 
     cacheTime: 6000, 
  });
};

export const getFeaturedDoctors = () => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["featured"],
    queryFn: () => Featured(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["featured"] })
    },
    staleTime: 3000,
    cacheTime: 6000,
  });

};
export const getRecentBlog = () => {
  const queryClient = useGlobalHooks();

  return useQuery({
    queryKey: ["recent"],
    queryFn: () => recentBlog(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent"] })

    },
    staleTime: 3000,
    cacheTime:6000

  }
  )
};

export const getBlogComment = (id) => {
  const queryClient = useGlobalHooks();

  return useQuery({
    queryKey: ["blogcomment"],
    queryFn: () => BlogComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogcomment"] })

    },
    enabled:!!!id,
    staleTime: 3000,
    cacheTime:6000
  }
  )
};
export const getChildcareDoctors = () => {
  const { queryClient } = useGlobalHooks();
  return useQuery({
    queryKey: ["childcare"],
    queryFn: () => Childcare(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["childcare"] })
    },
    staleTime: 3000,
    cacheTime: 6000,
  });
};

export const getPersonalcareDoctors = () => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["personalcare"],
    queryFn: () => Personalcare(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["personalcare"] })
    },
    staleTime: 3000,
    cacheTime: 6000,
  });

};

export const getBloglist = (page, perPage) => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["blog", page, perPage],
    queryFn: () => Bloglist(page, perPage),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] })
    },
    staleTime: 3000,
    cacheTime: 6000,
  });

};

export const getBlogDetails = (id) => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["blogDetail"],
    queryFn: () => BlogDetail(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogDetail"] });
    },
    enabled: !!id,
    staleTime: 3000,
    cacheTime: 6000,
  });
};

export const getBlogSearch = (id) => {
  const { queryClient } = useGlobalHooks();

  return useQuery({
    queryKey: ["blogSearch"],
    queryFn: () => Search(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogSearch"] });
    },
    enabled: !!id,
    onError: (error) => {
      toast.error(error.response.data?.message);
    },
  });
};

export const useAppointment = () => {
  const {queryClient} =useGlobalHooks();
  const router = useRouter();
  return useMutation({
    queryKey: ["Appointment"],
    mutationFn: CreateAppointment,
    onSuccess: (response) => {
      const {
        status,
        message,
      } = response || {};
     if (status=== true)
       toast.success(message);
      else 
      {
        toast.error(message);
        router.push("/cms/home");
      }
      queryClient.invalidateQueries(["Appointment"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message);
      console.error(error);
    },
  });
};

export const useCreatecomment = () => {
  const { queryClient } = useGlobalHooks();
  const router = useRouter();
  return useMutation({
    mutationFn: Createcomment,
    onSuccess: (response) => {
      const {
        status,
        message,
      } = response || {};

      if (status === 200) {
        toast.success(message);

      }
      queryClient.invalidateQueries(["comment"]);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message);
    },
  });
};

export const useCreateContact = () => {
  const { queryClient } = useGlobalHooks();
  return useMutation({
    mutationFn: Create,
    onSuccess: (response) => {
      const {
        status,
        message,
      } = response || {};

      if (status === true) {
        toast.success(message);

      }
      else {
        toast.error(message);
      }
      queryClient.invalidateQueries(["createContact"]);
    },
    onError: (error) => {
      toast.error("error occured");
      console.error(error);
    },
  });
};

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
};