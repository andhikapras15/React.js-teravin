// list riwayat pendidikan
export const ListPendidikan = ({ data }) => {
  return (
    <>
      {data.map((pendidikan) => (
        <tr>
          <td>{pendidikan.namaInstitusi}</td>
          <td>{pendidikan.kota}</td>
          <td>{pendidikan.jurusan}</td>
          <td>{pendidikan.jenjang}</td>
          <td>{pendidikan.masuk}</td>
          <td>{pendidikan.keluar}</td>
          <td>{pendidikan.keterangan}</td>
        </tr>
      ))}
    </>
  );
};
