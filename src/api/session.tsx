import {
  MutateOptions,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";

export const logoutMutationFn = async (): Promise<void> => {};
export const useLogoutMutation = (
  props: MutateOptions
): UseMutationResult<void, Error, void> =>
  useMutation({ mutationFn: logoutMutationFn, ...props });
