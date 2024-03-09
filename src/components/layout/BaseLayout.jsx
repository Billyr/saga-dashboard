import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

const BaseLayout = () => {
  return (
    <>
      <div className="page-wrapper">
        <SideBar />
        <div className="content-wrapper">
        </div>
      </div>
    </>
  )
}

export default BaseLayout