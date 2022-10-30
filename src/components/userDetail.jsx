import { useState, useEffect } from "react";

// Get data
const getDataSubmission = () => {
  const person = localStorage.getItem("data");
  return JSON.parse(person);
};
const UserDetail = () => {
  const [data, setData] = useState([getDataSubmission()]);
  useEffect(() => {
    getDataSubmission();
  }, []);

  return (
    <div>
      {data.map((dataPerson) => (
        <tr key={dataPerson.namaLengkap}>
          <td>
            <>
              <div className="flex justify-around w-screen h-screen">
                <div>
                  <span className="font-bold">Data Personal</span>
                  <br></br>
                  <span>Nama Lengkap : {dataPerson[1].namaLengkap}</span>
                  <br></br>
                  <span>Nama Panggilan : {dataPerson[1].namaPanggilan}</span>
                  <br></br>
                  <span>email : {dataPerson[1].email}</span>
                  <br></br>
                  <span>alamat : {dataPerson[1].alamat}</span>
                  <br></br>
                  <span>no. Handphone : {dataPerson[1].noHandphone}</span>
                  <br></br>
                  <span>jenis Kelamin : {dataPerson[1].jenisKelamin}</span>
                  <br></br>
                  <span>agama : {dataPerson[1].agama}</span>
                  <br></br>
                  <span>tgl. Lahir : {dataPerson[1].tglLahir}</span>
                  <br></br>
                </div>
                <div>
                  <span className="font-bold">Riwayat Pendidikan</span>
                  <br></br>
                  <span>
                    Nama Institusi Pendidikan : {dataPerson[1].namaInstitusi}
                  </span>
                  <br></br>
                  <span>Kota : {dataPerson[1].kota}</span>
                  <br></br>
                  <span>Jurusan : {dataPerson[1].jurusan}</span>
                  <br></br>
                  <span>jenjang : {dataPerson[1].jenjang}</span>
                  <br></br>
                  <span>Tahun Masuk : {dataPerson[1].masuk}</span>
                  <br></br>
                  <span>Tahun Keluar : {dataPerson[1].keluar}</span>
                  <br></br>
                  <span>keterangan : {dataPerson[1].keterangan}</span>
                  <br></br>
                </div>
                <div>
                  <span className="font-bold">Pengalaman Kerja</span>
                  <br></br>
                  <span>Nama Perusahaan : {dataPerson[1].namaPerusahaan}</span>
                  <br></br>
                  <span>Jenis Industri : {dataPerson[1].jenisIndustri}</span>
                  <br></br>
                  <span>Jabatan : {dataPerson[1].jabatan}</span>
                  <br></br>
                  <span>periode : {dataPerson[1].periode}</span>
                  <br></br>
                  <span>Gaji : {dataPerson[1].gaji}</span>
                  <br></br>
                  <span>Alasan Berhenti : {dataPerson[1].alasanBerhenti}</span>
                  <br></br>
                </div>
                <div className="font-bold">
                  {" "}
                  <span>skill : {dataPerson[1].skill}</span>
                  <br></br>
                </div>
              </div>
            </>
          </td>
        </tr>
      ))}
    </div>
  );
};
export default UserDetail;
