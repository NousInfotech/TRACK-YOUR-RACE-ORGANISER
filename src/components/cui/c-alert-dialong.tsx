import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
  } from "@/components/ui/alert-dialog";
  
  import { Separator } from "@/components/ui/separator";
  
  interface DeleteConfirmationProps {
    /**
     * Indicates whether the alert dialog is open.
     */
    open: boolean;
  
    /**
     * Callback function to toggle the open state of the alert dialog.
     */
    onToggle: () => void;
  
    /**
     * Callback function triggered when the action button is clicked.
     */
    onClick: () => void;
  
    /**
     * The title text displayed in the alert dialog.
     */
    title: string;
  
    /**
     * The description text displayed in the alert dialog.
     */
    description: string;
  
    /**
     * The text displayed on the action button.
     */
    actionText: string;
  }
  
  /**
   * AlertDialogComponent is a reusable component that displays a confirmation dialog
   * with customizable title, description, and actions.
   *
   * @param {DeleteConfirmationProps} props - The props for configuring the alert dialog.
   * @param {boolean} props.open - Determines if the dialog is open.
   * @param {() => void} props.onToggle - Toggles the dialog open state.
   * @param {() => void} props.onClick - Handles the action button click event.
   * @param {string} props.title - The title of the dialog.
   * @param {string} props.description - The description text in the dialog.
   * @param {string} props.actionText - The text for the action button.
   */
  const AlertDialogComponent = ({
    open,
    onToggle,
    onClick,
    title,
    description,
    actionText,
  }: DeleteConfirmationProps) => {
    return (
      <AlertDialog open={open} onOpenChange={onToggle}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Separator orientation="vertical" />
            <AlertDialogAction onClick={onClick}>{actionText}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default AlertDialogComponent;
  