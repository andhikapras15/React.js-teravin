//list pengalaman kerja
export const Listpekerjaan = ({ data }) => {
  return (
    <>
      {data.map((pekerjaan) => (
        <tr>
          <td>{pekerjaan.namaPerusahaan}</td>
          <td>{pekerjaan.jenisIndustri}</td>
          <td>{pekerjaan.jabatan}</td>
          <td>{pekerjaan.periode}</td>
          <td>{pekerjaan.gaji}</td>
          <td>{pekerjaan.alasanBerhenti}</td>
        </tr>
      ))}
    </>
  );
};
