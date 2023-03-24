import { Card } from "components";
const dateCalculator = (createdAt: any) => {
  let time = createdAt - Date.now();
  if (time < 86400000) return "Today";
  if (time > 86400000 && time < 172800000) return "Yesterday";
  if (time > 172800000 && time < 259200000) return "2 days ago";
  return new Date(createdAt).toLocaleDateString();
};
export const Timeline = ({ history = [] }: any) => {
  return (
    <Card className="p-6 pr-0">
      <h3 className="text-xl font-bold mb-6">Timeline</h3>
      {history.map((item: any, index: any) => (
        <div key={item?._id} className="flex flex-start">
          <div className="flex flex-col">
            <p className={`text-md -mt-2 ${index !== 0 && "text-gray-400"}`}>
              {new Date(item?.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="text-md text-gray-400">
              {dateCalculator(new Date(item?.createdAt).getTime())}
            </p>
          </div>
          <div
            className={`${
              index === history.length - 1 ? "border-none" : "border-l"
            } ml-8 ${index === 0 ? "border-blue" : "border-gray-400"}`}
          >
            <div className="flex items-start justify-center">
              <div
                className={`-ml-[5px] h-[9px] w-[9px] rounded-full ${
                  index === 0 ? "bg-blue" : "bg-gray-400"
                }`}
              ></div>
              <div className="ml-4 mb-10 -mt-2">
                <p className={`text-md ${index !== 0 && "text-gray-400"}`}>
                  {item?.action}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Timeline;
