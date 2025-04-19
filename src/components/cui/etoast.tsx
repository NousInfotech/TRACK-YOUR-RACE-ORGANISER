import { toast } from "sonner"; // Adjust this import based on your project
import { X } from "lucide-react";
import React from "react";

type ToastType = "success" | "error" | "info" | "warning"; // Extend types as needed

type ToastOptions = {
  type: ToastType;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClick?: () => void;
};

export function showToast({ type, title, description, onClick }: ToastOptions) {
  toast[type](title, {
    description,
    action: {
      label: <X className="h-3 w-3" />,
      onClick: onClick || (() => console.log("Default Action")),
    },
  });
}
