import { useAuthState } from "@/context/auth";
import {
  bookings_path,
  dashboard_path,
  event_path,
  forget_password_path,
  home_path,
  login_path,
  root_path,
  service_path,
  signup_path,
  update_password_path,
  user_path,
} from "@/data/path";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./session/home";
import Login from "./auth/login";
import AlertDialogComponent from "@/components/cui/c-alert-dialong";
import { useLogoutMutation } from "@/api/session";
import { useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/components/cui/etoast";
import Signup from "./auth/signup";
import ForgetPassword from "./auth/forget-password";
import UpdatePassword from "./auth/update-password";
// import { AppSidebar } from "@/components/customcomponent/sidebarcomp";
import DashboardComp from "@/components/customcomponent/DashboardComp";
import TopBar from "@/components/customcomponent/topmenu";
import UserComponent from "@/components/customcomponent/UserComponent";
import EventComponent from "@/components/customcomponent/EventComponent";
import ServiceComponent from "@/components/customcomponent/ServiceComponent";
import BookingComponent from "@/components/customcomponent/BookingComponent";

function index() {
  const queryClient = useQueryClient();
  const { auth, setAuth, showLogoutModal, onToggleLogoutModal } =
    useAuthState();

  const logoutMutationFn = useLogoutMutation({
    onSuccess: () => {
      queryClient.removeQueries();
      setAuth(false);
    },
    onError: () => {
      showToast({
        type: "error",
        title: "Unable to logout",
        description: "Please clear your cache",
      });
    },
  });

  if (!auth) {
    return (
      <Router>
        <Routes>
          <Route path={login_path} element={<Login />} />
          <Route path={signup_path} element={<Signup />} />
          <Route path={forget_password_path} element={<ForgetPassword />} />
          <Route path={update_password_path} element={<UpdatePassword />} />
          <Route path={root_path} element={<Navigate to={login_path} />} />
          <Route path={dashboard_path} element={<DashboardComp/>} />
          <Route path={user_path} element={<UserComponent />} />
          <Route path={event_path} element={<EventComponent />} />
          <Route path={service_path} element={<ServiceComponent />} />
          <Route path={bookings_path} element={<BookingComponent />} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <AlertDialogComponent
        onClick={logoutMutationFn.mutate}
        open={showLogoutModal}
        title="Logout"
        description="Are you sure you want to logout?"
        actionText="Logout"
        onToggle={onToggleLogoutModal}
      />
      <Routes>
        <Route path={`${home_path}/*`} element={<Home />} />
        <Route path={root_path} element={<Navigate to={home_path} />} />
      </Routes>
    </Router>
  );
}

export default index;
