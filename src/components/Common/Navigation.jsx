"use client";
import { useSelector, useDispatch } from "react-redux";
import userAvatar from "../../assets/userAvatar.png";
import Link from "next/link";
import { logoutUser } from "@/redux/thunkApi/thunkApi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { userRole } from "@/constants/constants";

const Navigation = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(user?.role);

  const menu =
    user?.role === userRole.admin ? (
      <>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/user-management">Manage Users</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </>
    ) : (
      <>
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
          <Link href="/profile">Profile</Link>
        </li>
      </>
    );

  const logoutHandler = () => {
    dispatch(logoutUser()).then(() => {
      router.push("/"); // Redirect to the home page after logout
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link href="/home" passHref>
          <button className="btn btn-ghost upper-case text-2xl font-bold">
            Tiffin
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
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
      </div>
    </nav>
  );
};

export default Navigation;
