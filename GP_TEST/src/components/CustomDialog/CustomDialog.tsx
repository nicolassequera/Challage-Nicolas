import { dialogOpenSubjectService } from "@/service/sharing.service";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
interface Props {
  children: React.ReactNode;
}

export const CustomDialog = ({ children }: Props) => {
  const subscription$ = dialogOpenSubjectService.getSubject();
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
  });

  const handleExit = () => {
    dialogOpenSubjectService.setSubject(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleExit()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        {children}
      </Dialog>
    </div>
  );
};

export default CustomDialog;
