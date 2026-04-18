import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import cn from "../../../lib/cn";

interface IDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  fullscreen?: boolean;
}

const MyDialog = ({
  isOpen,
  onClose,
  title,
  footer,
  children,
  fullscreen = false,
}: IDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Container */}
      <div
        className={`fixed inset-0 ${
          fullscreen ? "" : "flex items-center justify-center p-4"
        }`}
        className={cn("fixed inset-0", {
          "flex items-center justify-center p-4": !fullscreen,
        })}
      >
        <DialogPanel
          className={cn("bg-white shadow-xl grid grid-rows-[auto_1fr_auto]", {
            "w-screen h-screen": fullscreen,
            "w-full max-w-lg max-h-[90vh] rounded-lg": !fullscreen,
          })}
        >
          {/* Header */}
          <DialogTitle className="bg-gray-600 text-white p-3 font-semibold">
            {title}
          </DialogTitle>

          {/* Content */}
          <div className="p-4 overflow-y-auto">{children}</div>

          {/* Footer */}
          {footer && <div className="p-4 border-t bg-gray-50">{footer}</div>}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MyDialog;
