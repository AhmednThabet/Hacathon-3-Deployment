import axios from "axios";
import { Drawer } from "components";
import { API_ENDPOINT } from "data";
// import { useToggleDrawer } from "features/invoiceSystem/hooks/useToggleDrawer";
import { useSWR } from "lib/swr";
import { getAuthorizationHeader } from "utils";
import ActiveDrawer from "./ActiveDrawer";

const LinkDrawer = ({ linkId, isToggled, toggleDrawer }: any) => {
  // const { isToggled, toggleDrawer } = useToggleDrawer(true);

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

  // TODO: active case
  return (
    <Drawer
      title="Link"
      isToggled={isToggled}
      toggleDrawer={toggleDrawer}
      actionButtonText="Deactivate"
    >
      {data?.service?.status === "pending_approval" && (
        <ActiveDrawer data={data && data} />
      )}
      {/* {data?.service?.status === "pending_approval" && (
        <PendingApprovalDrawer
          data={data && data}
          isToggled={true}
          toggleDrawer={() => {}}
        />
      )}
      {data?.service?.status === "pending_approval" && (
        <PendingApprovalDrawer
          data={data && data}
          isToggled={true}
          toggleDrawer={() => {}}
        />
      )} */}
    </Drawer>
  );
  // TODO: InActive case

  // TODO: disapproaved case
};

export default LinkDrawer;
