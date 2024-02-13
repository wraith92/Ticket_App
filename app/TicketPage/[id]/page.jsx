import EditTicketForm from "@/app/(components)/EditTicketForm";

const getTicketById = async (id) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
  if (!BASE_URL) {
    console.error("Base API URL not found in environment variables.");
    process.exit(1); // Exit the application if Base API URL is not set
  }
  try {
    const res = await fetch(`${BASE_URL}/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <EditTicketForm ticket={updateTicketData} />;
};

export default TicketPage;
