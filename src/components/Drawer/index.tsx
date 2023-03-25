import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "components";
// import { useToggleDrawer } from "features/invoiceSystem/hooks/useToggleDrawer";

export const Drawer = ({
  children,
  title = "panel title",
  actionButtonText = "cancle",
  actionButtonFunction,
  isToggled = true,
  toggleDrawer = (f: any) => f,
}: any) => {
  return (
    <Transition.Root show={isToggled} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => toggleDrawer()}>
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
                    <div className="sticky mr-0 top-0 right-0 items-center w-full flex pt-8 pb-4 px-4 bg-gray-light">
                      <button
                        type="button"
                        className="rounded-md text-black focus:outline-none focus:ring-2 "
                        onClick={() => toggleDrawer()}
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
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-light py-6 shadow-xl">
                    <div className="relative mt-6 px-4 sm:px-6">{children}</div>
                    <div className="px-6 gap-3 my-4 pb-10 w-full flex items-center justify-center">
                      <Button
                        className="!bg-white !text-blue-500 !border !border-gray-300 !hover:bg-transparent"
                        fullWidth
                        onClick={actionButtonFunction || toggleDrawer()}
                      >
                        {actionButtonText}
                      </Button>
                      <Button
                        className="!bg-white !text-blue-500 !border !border-gray-300 !hover:bg-transparent"
                        fullWidth
                        onClick={() => console.log("edit")}
                      >
                        Edit
                      </Button>
                    </div>
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
export default Drawer;
