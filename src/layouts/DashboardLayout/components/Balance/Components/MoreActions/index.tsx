import { useState } from "react";
import { ThreeDots } from "components/svg";
import { Card, Link } from "components"
import { URL_PATHS } from "data/routes";
import { PlusIcon } from "lib/@heroicons"
import { PaperAirplan } from "components/svg/PaperAirplan";


const MoreActions = () => {
    const [toggle, setToggle] = useState(false);
    const openMenu = () => {
        setToggle(prev => !prev);
    }
    return (
        <>
            <ThreeDots width={16} height={16} className="cursor-pointer" onClick={openMenu} />
            {toggle && <Card className="absolute flex flex-col gap-2 top-[-140px] right-6">
                <Link href={URL_PATHS.HOME} className="bg-[#F3F6FF]  text-sm px-1 flex justify-center gap-1 md:gap-2 text-blue-light items-center rounded-lg hover:bg-blue-300 py-3 min-w-[170px] w-1/2"><PlusIcon className="text-blue-light" width={16} height={16} /> Create Link</Link>
                <Link href={URL_PATHS.HOME} className="bg-[#F3F6FF]  text-sm px-1 flex justify-center gap-1 md:gap-2 text-blue-light items-center rounded-lg hover:bg-blue-300 py-3 min-w-[170px] w-1/2"><PaperAirplan className="text-blue-light" width={16} height={16} /> Send Invoice</Link>
            </Card>}
        </>
    )
}

export default MoreActions