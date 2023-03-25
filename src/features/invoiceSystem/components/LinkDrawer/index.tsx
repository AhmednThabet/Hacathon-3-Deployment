import axios from "axios";
import { Drawer } from "components";
import { API_ENDPOINT } from "data";
import { useToggleDrawer } from "features/invoiceSystem/hooks/useToggleDrawer";
import { useSWR } from "lib/swr";
import { getAuthorizationHeader } from "utils";
import ActiveDrawer from "./ActiveDrawer";
import PendingApprovalDrawer from "./PendingApprovalDrawer";

const LinkDrawer = ({ linkId }: any) => {
  const { isToggled, toggleDrawer } = useToggleDrawer(true);

  // TODO:SWR data fetch for the link using its id
  const handeler = async (url: string) => {
    const res = await axios.get(url, {
      headers: {
        ...getAuthorizationHeader(),
      },
    });

    console.log("Link data", res.data.data);
    return res.data.data;
  };

  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINT}/service/details/${linkId}`,
    handeler
  );

  return (
    <Drawer
      title="Link"
      isToggled={true}
      toggleDrawer={toggleDrawer}
      actionButtonText="cancle"
    >
      {data?.service?.status === "active" && (
        <ActiveDrawer data={data && data} />
      )}
      {data?.service?.status === "pending_approval" && (
        <PendingApprovalDrawer data={data && data} />
      )}
    </Drawer>
  );
  // TODO: InActive case

  // TODO: disapproaved case

  return <div>LinkDrawer</div>;
};

export default LinkDrawer;
