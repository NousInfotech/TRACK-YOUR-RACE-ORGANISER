import { showToast } from "@/components/cui/etoast";
function useHelperFunctions() {
  const emailErrorHandler = (res: any) => {
    if (res.data) {
      if (res.data.exist.emailExists) {
        showToast({
          type: "error",
          title: "Email already in use",
          description: "Please use different email address",
        });
      }
      if (res.data.exist.mobileExists) {
        showToast({
          type: "error",
          title: "Phone number already in use",
          description: "Please use different Phone Number",
        });
      }
      if (!res.data.exist.mobileExists && !res.data.exist.emailExist) {
        return true;
      }
    }
    return false;
  };
  return { emailErrorHandler };
}

export default useHelperFunctions;
