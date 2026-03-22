import React from "react";

const bar = (w: string | number, h = 14) => (
  <span
    className="placeholder d-block rounded"
    style={{ width: typeof w === "number" ? `${w}px` : w, height: h }}
  />
);

const pill = (w = 72, h = 22) => (
  <span
    className="placeholder rounded-pill d-inline-block"
    style={{ width: w, height: h }}
  />
);

const avatarNameCell = () => (
  <div className="d-flex align-items-center">
    <span
      className="placeholder rounded-circle flex-shrink-0 me-2"
      style={{ width: 38, height: 38 }}
    />
    <div className="flex-grow-1" style={{ minWidth: 0 }}>
      {bar("7rem")}
    </div>
  </div>
);

const twoLineDate = () => (
  <div>
    {bar("5.5rem", 12)}
    <span className="d-block mt-1">{bar("3.5rem", 10)}</span>
  </div>
);

const SKELETON_ROWS = 6;

export const InvoicesListTableSkeleton = () => {
  const keys = Array.from({ length: SKELETON_ROWS }, (_, i) => i);
  return (
    <div className="custom-table antd-custom-table">
      <div className="table-responsive">
        <table className="table datanew dataTable no-footer mb-0">
          <thead>
            <tr>
              <th>INVOICE NO</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CREATED DATE</th>
              <th>DUE DATE</th>
              <th>INVOICE AMOUNT</th>
              <th>STATUS</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody className="placeholder-glow">
            {keys.map((k) => (
              <tr key={k}>
                <td className="align-middle">{bar("6.5rem")}</td>
                <td className="align-middle">{avatarNameCell()}</td>
                <td className="align-middle">{bar("8rem")}</td>
                <td className="align-middle">{twoLineDate()}</td>
                <td className="align-middle">{twoLineDate()}</td>
                <td className="align-middle">{bar("4.25rem")}</td>
                <td className="align-middle">{pill()}</td>
                <td className="align-middle text-end">
                  <span
                    className="placeholder rounded d-inline-block"
                    style={{ width: 28, height: 28 }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const PaymentsListTableSkeleton = () => {
  const keys = Array.from({ length: SKELETON_ROWS }, (_, i) => i);
  return (
    <div className="custom-table antd-custom-table">
      <div className="table-responsive">
        <table className="table datanew dataTable no-footer mb-0">
          <thead>
            <tr>
              <th>TRANSACTION ID</th>
              <th>NAME</th>
              <th>AMOUNT</th>
              <th>PAYMENT METHOD</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody className="placeholder-glow">
            {keys.map((k) => (
              <tr key={k}>
                <td className="align-middle">{bar("8rem")}</td>
                <td className="align-middle">{avatarNameCell()}</td>
                <td className="align-middle">{bar("4rem")}</td>
                <td className="align-middle">{bar("5rem")}</td>
                <td className="align-middle">{bar("5.5rem")}</td>
                <td className="align-middle">{pill()}</td>
                <td className="align-middle text-end">
                  <span
                    className="placeholder rounded d-inline-block"
                    style={{ width: 28, height: 28 }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
