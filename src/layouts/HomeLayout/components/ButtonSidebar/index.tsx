export const ButtonSidebar = ({ children, classname, icon }: any) => {
  return (
    <li
      className={
        classname +
        " hover:bg-[#EAEEF2] hover:text-[#4375FF] items-center p-3 flex gap-3 justify-center rounded pl-10"
      }
    >
      <span className=" h-5 w-5 ">{icon}</span>
      <h2 className={"flex-1"}>{children}</h2>
    </li>
  );
};

export default ButtonSidebar;
