"use client";
import { useSelector, useDispatch } from "react-redux";
import userAvatar from "../../assets/userAvatar.png";
import Link from "next/link";
import { logoutUser } from "@/redux/thunkApi/thunkApi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const SideBar = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(logoutUser()).then(() => {
      router.push("/"); // Redirect to the home page after logout
    });
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-base-200 lg:hidden">
            <label htmlFor="my-drawer-2" className="btn drawer-button">
              <AiOutlineMenuUnfold />
            </label>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/item">Food Items</Link>
            </li>
            <li>
              <Link href="/item/cart">Cart</Link>
            </li>
            <li>
              <Link href="/item/order">My Orders</Link>
            </li>
            <li>
              {user?.email ? (
                <div className="lg:flex items-center gap-2">
                  <div className="items-center gap-1 hidden md:flex">
                    <span>{user?.email}</span>
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <Image
                          src={userAvatar}
                          alt="User Avatar"
                          height={50}
                          width={50}
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={logoutHandler} className="btn btn-warning">
                    Log out
                  </button>
                </div>
              ) : (
                <Link href="/login" passHref>
                  <button className="btn btn-warning">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
