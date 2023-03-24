import { Card, Logo, Skeleton } from "components";

export const Preview = ({ data, withClintInfo = false, className }: any) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  let arr = data && data.service;
  // const cleanArray = (arr: any) => {
  //   let filteredArray = arr.filter(
  //     (item: any) => item.serviceName !== "" && item.serviceAmount !== ""
  //   );
  //   return filteredArray;
  // };
  // console.log(cleanArray(arr), "from fuuuunction");

  return (
    <div className={` sticky top-[4rem] mx-10 ${className}`}>
      <h3 className="font-semibold text-xl mb-2">
        {!withClintInfo && "Preview"}
      </h3>
      <Card className="px-10">
        <div className="flex justify-between w-full my-5">
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">Invoice</h3>
            <span className="font-semibold text-sm ">#INN-003</span>
          </div>
          <Logo />
        </div>
        <div className="flex gap-14 justify-between my-8 text-gray-400 ">
          <div className="w-[50%] ">
            <p className="mb-4">From</p>
            <p>
              <span className="text-black font-semibold">
                Talents Valley LLC
              </span>
              <br></br>30 North Gould St. Sheridan, Wyoming 82801
              <br />
              United States
              <br />
              +1 307-217-6666
            </p>
          </div>
          <div className=" text-start  w-[200px] max-w-[40%] ">
            {withClintInfo && (
              <>
                <p className="mb-4">Bill To</p>
                <div className="CardInfo">
                  {data?.fullName !== "" ? (
                    <p className="text-black font-semibold">{data?.fullName}</p>
                  ) : (
                    <Skeleton height={20} />
                  )}
                  {data?.email !== "" ? (
                    <p>{data?.email} </p>
                  ) : (
                    <Skeleton height={20} className="mt-2" />
                  )}

                  <p>Issue Date</p>
                  <p>
                    {monthNames[date.getMonth()]} {date.getDate()}{" "}
                    {date.getFullYear()}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="">
          <header className="flex justify-between my-4 text-gray-dark font-normal text-[18px]">
            <p>service</p>
            <p>Amount</p>
          </header>
          <div className="w-full flex flex-col h-[100px] overflow-auto">
            <div>
              {/* {cleanArray(arr).map((oneService: any) => (
                <div className=" flex justify-between mb-4">
                  <p>{oneService.serviceName} </p>
                  <p>{oneService.serviceAmount} </p>
                </div>
              ))} */}
            </div>
            <hr />
            <div className="flex flex-col  items-end text-gray-dark ">
              <p>Sub Total $ ##### </p>
              <p>Fees $ ##### </p>
              <hr />
              <p>Total $ ##### </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Preview;
