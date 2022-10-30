import { Link } from "react-router-dom";

// List data home page
export const List = ({ data }) => {
  return (
    <>
      {data.map((dataPerson) => (
        <tr key={dataPerson.namaLengkap}>
          <td>{dataPerson.namaLengkap}</td>
          <td>{dataPerson.alamat}</td>
          <td>
            <Link to={"userDetails/" + dataPerson.namaLengkap}>
              <button className="border-2 p-2 rounded-md text-black">
                lihat detail
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};
