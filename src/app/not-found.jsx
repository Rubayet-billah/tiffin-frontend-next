import Image from "next/image";
import Link from "next/link";
import errorPage from "../assets/errorPage.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">404 Error</h1>
        <p className="text-lg text-gray-600">Page not found!</p>
        <Image
          src={errorPage}
          alt="Error"
          className="mt-8"
          height={300}
          width={450}
        />
        <Link href="/home" className="text-primary hover:underline mt-4">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
