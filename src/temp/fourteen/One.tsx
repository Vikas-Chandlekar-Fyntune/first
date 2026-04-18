import { Button } from "@headlessui/react";
import { useState } from "react";

import MyDialog from "./components/Dialog";

const One = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    console.log("openDialog");
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <Button
          onClick={openDialog}
          className="bg-gray-500 text-white p-2 rounded-md"
        >
          Open Dialog
        </Button>

        <MyDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          title="Customer Feedback"
        //   fullscreen
          footer={
            <div className="flex justify-end">
              <Button
                onClick={closeDialog}
                className="bg-red-400 text-white p-2 rounded-md px-5"
                title="Close"
              >
                Close
              </Button>
            </div>
          }
        >
          {[...Array(2)].map((_, i) => (
            <p key={i}>Line {i + 1}</p>
          ))}
        </MyDialog>
      </div>
    </>
  );
};

export default One;
