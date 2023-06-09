import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { json } from "stream/consumers";

export const TestDrawer = ({
  children,
  title = "panel title",
  actionButtonText = "cancle",
  actionButtonFunction,
  data,
  isToggled,
  toggleDrawer,
}: any) => {
  //   const [open, setOpen] = useState(true);
  const router = useRouter();

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  console.log("data", data);

  return (
    <Transition.Root show={isToggled} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => toggleDrawer(false)}
      >
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-4 sm:left-16 items-center w-full flex pt-8 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-black focus:outline-none focus:ring-2 "
                        onClick={() => toggleDrawer(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <ArrowLeftIcon
                          className="h-6 w-6 outline-none"
                          fill="#000"
                          aria-hidden="true"
                        />
                      </button>
                      <div className="px-4 sm:px-6 m-auto">
                        <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900">
                          {title}
                        </Dialog.Title>
                      </div>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-light py-6 pt-[75px] shadow-xl">
                    <div className="relative mt-6 px-4 sm:px-6">{children}</div>
                    {actionButtonText.status === "paid" ? (
                      <></>
                    ) : (
                      <div className="px-8">
                        <div className=" gap-3 my-4 left-0 w-full flex items-center justify-center">
                          <Button
                            className="!bg-white !text-black border !border-gray-300 hover:bg-transparent"
                            fullWidth
                            onClick={actionButtonFunction}
                          >
                            {actionButtonText.text}
                          </Button>
                          <Button
                            className="!bg-white !text-blue-500 border !border-gray-300 hover:bg-transparent"
                            fullWidth
                            onClick={() =>
                              router.push({
                                pathname: "/hackathon3/createInvoice",
                                query: {
                                  vid: data?.invoice?._id,
                                  Data: JSON.stringify(data.invoice),
                                },
                              })
                            }
                          >
                            Edit
                          </Button>
                        </div>
                        {actionButtonText.status === "sent" && (
                          <Button
                            className="!bg-white !text-blue-500 border !border-gray-300 hover:bg-transparent"
                            fullWidth
                            onClick={() => console.log("edit")}
                          >
                            Send Reminder
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default TestDrawer;
