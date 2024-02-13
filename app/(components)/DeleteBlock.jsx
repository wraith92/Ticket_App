"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
  if (!BASE_URL) {
    console.error("Base API URL not found in environment variables.");
    process.exit(1); // Exit the application if Base API URL is not set
  }

  const deleteTicket = async () => {
    const res = await fetch(`${BASE_URL}/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
