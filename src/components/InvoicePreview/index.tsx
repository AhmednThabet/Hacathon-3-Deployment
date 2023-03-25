import { Card, Logo, Skeleton } from "components";

export const InvoicePreview = ({ data, isLoading, className }: any) => {
  return (
    <div className={`mt-5 ${className}`}>
      {/* <h3 className="font-semibold text-xl mb-2">Preview </h3> */}
      <Card className="w-full">
        <div className="flex justify-between w-full my-5">
          <div className="flex gap-3 items-center">
            <h3 className="font-bold text-2xl">Invoice</h3>
            <span className="font-semibold text-sm pt-2">#INN-003</span>
          </div>
          <Logo />
        </div>
        <div className="flex justify-between  text-gray-400">
          <div className="w-[50%]">
            <p className="mb-4">From</p>
            <p className="text-xs">
              <span className="text-black font-semibold text-sm">
                Talents Valley LLC
              </span>
              <br></br>30 North Gould St. Sheridan, Wyoming 82801
              <br />
              United States
              <br />
              +1 307-217-6666
            </p>
          </div>
          <div className="text-start max-w-[40%]">
            <>
              <p className="mb-4">Bill To</p>
              <div className="CardInfo">
                {isLoading ? (
                  <Skeleton height={20} />
                ) : (
                  <p className="text-black">
                    {data?.invoice?.client?.fullName}
                  </p>
                )}
                {isLoading ? (
                  <Skeleton height={20} className="mt-2" />
                ) : (
                  <p className="text-xs">{data?.invoice?.client?.email}</p>
                )}

                <div className="mt-5">
                  <p>Issue Date</p>
                  <p className="text-black">July 27 ,2022</p>
                </div>
              </div>
            </>
          </div>
        </div>
        <div className="">
          <header className="flex justify-between my-4 text-gray-dark font-normal text-[18px]">
            <p>Service</p>
            <p>Amount</p>
          </header>
          <div className="w-full flex flex-col h-[100px] overflow-auto">
            <div className=" flex justify-between mb-4">
              <div>
                {data?.invoice?.fixed?.map((oneService: any) => (
                  <p key={oneService._id}>{oneService.itemName} </p>
                ))}
              </div>

              <div>
                {data?.invoice?.fixed?.map((oneService: any) => (
                  <p key={oneService._id}>{oneService.price} </p>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex flex-col  items-end text-gray-dark ">
              <p>Sub Total ${data?.invoice?.subTotal} </p>
              <p>Fees ${data?.invoice?.ourFee + data?.invoice?.paymentFee} </p>
              <hr />
              <p>
                Total $
                {data?.invoice?.subTotal -
                  (data?.invoice?.ourFee + data?.invoice?.paymentFee)}{" "}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InvoicePreview;
