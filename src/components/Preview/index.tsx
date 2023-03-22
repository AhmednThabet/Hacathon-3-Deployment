import { Card, Logo, Skeleton } from "components";

export const Preview = ({ data, withClintInfo = false }: any) => {
  return (
    <div className=" sticky top-[4rem]">
      <h3 className="font-semibold text-xl mb-2">Preview </h3>
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
                  {data?.firstName !== "" && data?.lastName !== "" ? (
                    <p className="">
                      {data?.firstName} {data?.LastName}
                    </p>
                  ) : (
                    <Skeleton height={20} />
                  )}
                  {data?.email !== "" ? (
                    <p>{data?.emai}</p>
                  ) : (
                    <Skeleton height={20} className="mt-2" />
                  )}

                  <p>Create Data</p>
                  <p>July 27 ,2022</p>
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
            <div className=" flex justify-between mb-4">
              <div>
                {/* {data.service.map((oneService: any) => (
                  <p>{oneService.serviceName} </p>
                ))} */}
              </div>

              <div>
                {/* {data.service.map((oneService: any) => (
                  <p>{oneService.serviceAmount} </p>
                ))} */}
              </div>
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
