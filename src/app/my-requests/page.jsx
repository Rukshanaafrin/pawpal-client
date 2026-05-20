"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PrivateRoute from "@/components/PrivateRoute";

function MyRequestsContent() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    const savedRequests =
      JSON.parse(localStorage.getItem("requests")) || [];

    setRequests(savedRequests);

  }, []);

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
            </tr>
          </thead>

          <tbody>

            {requests.map((request) => (
              <tr key={request.id}>
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
                    href="/pets"
                    className="btn btn-sm bg-cyan-500 border-none text-white"
                  >
                    View
                  </Link>
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

export default function MyRequestsPage() {
  return (
    <PrivateRoute>
      <MyRequestsContent />
    </PrivateRoute>
  );
}