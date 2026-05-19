import Link from "next/link";

export default function MyRequestsPage() {

  const requests = [
    {
      id: 1,
      petName: "Max",
      requestDate: "2026-05-19",
      pickupDate: "2026-06-20",
      status: "Pending",
    },
    {
      id: 2,
      petName: "Luna",
      requestDate: "2026-05-18",
      pickupDate: "2026-06-25",
      status: "Approved",
    },
  ];

  return (
    <div className="px-6 lg:px-20 py-12 text-white">

      <h1 className="text-4xl font-bold mb-8">
        My Requests
      </h1>

      <div className="overflow-x-auto">

        <table className="table">

          <thead>
            <tr className="text-cyan-300">

              <th>Pet Name</th>
              <th>Request Date</th>
              <th>Pickup Date</th>
              <th>Status</th>
              <th>View</th>
              <th>Cancel</th>

            </tr>
          </thead>

          <tbody>

            {requests.map((request) => (

              <tr key={request.id}>

                <td>{request.petName}</td>

                <td>{request.requestDate}</td>

                <td>{request.pickupDate}</td>

                <td>

                  <span
                    className={`badge ${
                      request.status === "Approved"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {request.status}
                  </span>

                </td>

                <td>

                  <Link
                    href="/pets"
                    className="btn btn-sm bg-cyan-500 border-none text-white"
                  >
                    View
                  </Link>

                </td>

                <td>

                  <button className="btn btn-sm btn-error text-white">
                    Cancel
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}