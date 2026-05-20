"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function MyRequestsPage() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("https://pawpal-server-bay.vercel.app/requests", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("REQUEST DATA:", data);

        if (Array.isArray(data)) {
          setRequests(data);
        } else {
          setRequests([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setRequests([]);
      });
  }, []);

  const handleCancel = async (id) => {

    const confirmDelete = confirm(
      "Are you sure you want to cancel this request?"
    );

    if (!confirmDelete) return;

    try {

      await fetch(
        `https://pawpal-server-bay.vercel.app/requests/${id}`,
        {
          method: "DELETE",
        }
      );

      setRequests(
        requests.filter(
          (request) => request._id !== id
        )
      );

      toast.success(
        "Request Cancelled Successfully!"
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to cancel request!"
      );

    }

  };

  return (

    <div className="px-6 lg:px-20 py-12 text-white min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        My Requests
      </h1>

      <div className="overflow-x-auto">

        <table className="table text-white">

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

            {Array.isArray(requests) &&
              requests.map((request) => (

                <tr key={request._id}>

                  <td>{request.petName}</td>

                  <td>{request.requestDate}</td>

                  <td>{request.pickupDate}</td>

                  <td>

                    <span className="badge badge-warning">
                      {request.status}
                    </span>

                  </td>

                  <td>

                    <Link
                      href={`/pets/${request.petId}`}
                      className="btn btn-sm bg-cyan-500 border-none text-white"
                    >
                      View
                    </Link>

                  </td>

                  <td>

                    <button
                      onClick={() =>
                        handleCancel(request._id)
                      }
                      className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white"
                    >
                      Cancel
                    </button>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

        {requests.length === 0 && (

          <p className="text-center mt-10 text-gray-300">
            No requests found.
          </p>

        )}

      </div>

    </div>

  );
}