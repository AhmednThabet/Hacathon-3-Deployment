import axios from "axios";
import { Drawer, Skeleton } from "components";
import { API_ENDPOINT } from "data";
// import { useToggleDrawer } from "features/invoiceSystem/hooks/useToggleDrawer";
import { useSWR } from "lib/swr";
import { getAuthorizationHeader } from "utils";
import ActiveDrawer from "./ActiveDrawer";
import CancledDrawer from "./CancledDrawer";
import InActiveDrawer from "./InActiveDrawer";
import PendingApprovalDrawer from "./PendingApprovalDrawer";

const LinkDrawer = ({ linkId, isToggled, toggleDrawer }: any) => {
  const handeler = async (url: string) => {
    const res = await axios.get(url, {
      headers: {
        ...getAuthorizationHeader(),
      },
    });
    return res.data.data;
  };

  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINT}/service/details/${linkId}`,
    handeler
  );

  return (
    <Drawer
      title="Link"
      isToggled={isToggled}
      toggleDrawer={toggleDrawer}
      actionButtonText="cancle"
    >
      {isLoading && (
        <div className="flex flex-col gap-3">
          <Skeleton width={400} height={50} />
          <Skeleton width={400} height={50} />
          <Skeleton width={400} height={50} />
          <Skeleton width={400} height={50} />
          <Skeleton width={400} height={50} />
        </div>
      )}
      {error && error.message}
      {data?.service?.status === "active" && (
        <ActiveDrawer data={data && data} />
      )}
      {data?.service?.status === "pending_approval" && (
        <PendingApprovalDrawer data={data && data} />
      )}
      {data?.service?.status === "inactive" && (
        <InActiveDrawer data={data && data} />
      )}
      {data?.service?.status === "cancled" && (
        <CancledDrawer data={data && data} />
      )}
    </Drawer>
  );
};

export default LinkDrawer;
