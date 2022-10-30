import { useState, useEffect } from "react";
import { List } from "../components/list";
import { Table } from "reactstrap";
import { ListPendidikan } from "../components/listPendidikan";
import { Listpekerjaan } from "../components/listPekerjaan";
import { Skill } from "../components/skill";

const FormSubmission = () => {
  // state untuk menyimpan data
  const [data, setData] = useState([]);
  //state untuk perubahan tampilan tab
  const [tab, setTab] = useState(0);
  let initialValues = {
    namaLengkap: "",
    namaPanggilan: "",
    email: "",
    alamat: "",
    noHandphone: "",
    jenisKelamin: "",
    agama: "",
    tglLahir: "",
    namaInstitusi: "",
    kota: "",
    jurusan: "",
    jenjang: "",
    masuk: "",
    keluar: "",
    keterangan: "",
    namaPerusahaan: "",
    jenisIndustri: "",
    jabatan: "",
    periode: "",
    gaji: "",
    alasanBerhenti: "",
    skill: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // handle form data submit
  const handleDataSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);

    setData([...data, formValues]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // validasi error
  const validate = (values) => {
    const error = {};
    if (!values.namaLengkap) {
      error.namaLengkap = "nama lengkap harus diisi";
    }
    if (!values.namaPanggilan) {
      error.namaPanggilan = "nama panggilan harus diisi";
    }
    if (!values.email) {
      error.email = "email harus diisi";
    }
    if (!values.alamat) {
      error.alamat = "alamat lengkap harus diisi";
    }
    if (!values.noHandphone) {
      error.noHandphone = "No. Handphone harus diisi";
    }
    if (!values.jenisKelamin) {
      error.jenisKelamin = "jenis kelamin harus diisi";
    }
    if (!values.agama) {
      error.agama = "agama harus diisi";
    }
    if (!values.tglLahir) {
      error.tglLahir = "tgl. Lahir harus diisi";
    }
    if (!values.namaInstitusi) {
      error.namaInstitusi = "nama institusi harus diisi";
    }
    if (!values.kota) {
      error.kota = "kota harus diisi";
    }
    if (!values.jurusan) {
      error.jurusan = "jurusan harus diisi";
    }
    if (!values.jenjang) {
      error.jenjang = "jenjang harus diisi";
    }
    if (!values.masuk) {
      error.masuk = "tahun masuk harus diisi";
    }
    if (!values.keluar) {
      error.keluar = "keluar harus diisi";
    }
    if (!values.keterangan) {
      error.keterangan = "keterangan harus diisi";
    }
    if (!values.namaPerusahaan) {
      error.namaPerusahaan = "nama perusahaan harus diisi";
    }
    if (!values.jenisIndustri) {
      error.jenisIndustri = "jenis industri harus diisi";
    }
    if (!values.jabatan) {
      error.jabatan = "jabatan harus diisi";
    }
    if (!values.periode) {
      error.periode = "periode harus diisi";
    }
    if (!values.gaji) {
      error.gaji = "gaji harus diisi";
    }
    if (!values.alasanBerhenti) {
      error.alasanBerhenti = "alasan berhenti harus diisi";
    }
    if (!values.skill) {
      error.skill = "skill harus diisi";
    }
    return error;
  };

  return (
    <div className="p-5 bg-gray-400 h-fit">
      <div className="bg-white h-fit p-3 ">
        {/* tab Home start*/}
        {tab === 0 ? (
          <div>
            <div className="font-bold md:text-3xl text-xl mb-8">
              Teravin Test React.js
            </div>
            <button
              onClick={() => setTab(1)}
              className="text-sm border-2 border-gray-300 rounded-md p-1 mb-3"
            >
              + Add Data
            </button>
            <Table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Lihat Detail</th>
                </tr>
              </thead>
              <tbody>
                <List data={data} />
              </tbody>
            </Table>
          </div>
        ) : null}
        {/* tab Home end */}
        {/* tab form data profil start*/}
        {tab === 1 ? (
          <>
            <span>Form Submission</span>
            {/* Progress Bar */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center items-center py-5">
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-blue-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">data Profil</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pendidikan</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pengalaman </span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-xs">skill</span>
                </div>
              </div>
              {/* End Progress Bar  */}
              {/* Input form */}
              <div className="bg-gray-400 w-[800px] h-fit py-3 px-5">
                <div className="flex justify-between">
                  <div className="">
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Nama Lengkap</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          className=" focus:outline-none px-1"
                          name="namaLengkap"
                          onChange={handleChange}
                          value={formValues.namaLengkap}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.namaLengkap}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Nama Panggilan</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="namaPanggilan"
                          className=" focus:outline-none px-1 ml-3"
                          onChange={handleChange}
                          value={formValues.namaPanggilan}
                        />
                        <p className="text-xs text-red-600 ml-3">
                          {formErrors.namaPanggilan}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Email</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="email"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.email}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">alamat</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="alamat"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.alamat}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.alamat}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">No. Handphone</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="noHandphone"
                          className=" focus:outline-none px-1 ml-3"
                          onChange={handleChange}
                          value={formValues.noHandphone}
                        />
                        <p className="text-xs text-red-600 ml-3">
                          {formErrors.noHandphone}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Jenis Kelamin</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="jenisKelamin"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.jenisKelamin}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.jenisKelamin}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Agama</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="agama"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.agama}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.agama}
                        </p>
                      </div>
                    </div>
                    <div className="flex ">
                      <span className="mr-auto text-sm">Tgl. Lahir</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="tglLahir"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.tglLahir}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.tglLahir}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end mt-3">
              <button
                className="text-sm w-20 border-2 border-gray-300 rounded-md p-1 mb-3 "
                onClick={(e) => {
                  formValues.tglLahir ? setTab(2) : handleDataSubmit(e);
                }}
                type="submit"
              >
                Next
              </button>
            </div>

            {/* End Input */}
          </>
        ) : null}
        {/* tab form data profil end */}
        {/* tab riwayat pendidikan start */}
        {tab === 2 ? (
          <>
            {/* Progress Bar */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center items-center py-5">
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-green-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">data Profil</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-blue-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pendidikan</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pengalaman </span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-xs">skill</span>
                </div>
              </div>
              {/* End Progress Bar  */}
              {/* Input form */}
              <div className="bg-gray-400 w-fit h-fit py-2 flex px-8">
                <div className=" w-80">
                  <div className="flex mb-2">
                    <span className="mr-auto text-sm">Nama Institusi</span>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="namaInstitusi"
                        className=" focus:outline-none px-1"
                        onChange={handleChange}
                        value={formValues.namaInstitusi}
                      />
                      <p className="text-xs text-red-600">
                        {formErrors.namaInstitusi}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-2">
                    <span className="mr-auto text-sm">Kota</span>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="kota"
                        className=" focus:outline-none px-1"
                        onChange={handleChange}
                        value={formValues.kota}
                      />
                      <p className="text-xs text-red-600">{formErrors.kota}</p>
                    </div>
                  </div>

                  <div className="flex mb-2">
                    <span className="mr-auto text-sm">Jurusan</span>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="jurusan"
                        className=" focus:outline-none px-1"
                        onChange={handleChange}
                        value={formValues.jurusan}
                      />{" "}
                      <p className="text-xs text-red-600">
                        {formErrors.jurusan}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <span className="mr-auto text-sm">Jenjang</span>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="jenjang"
                        className=" focus:outline-none px-1"
                        onChange={handleChange}
                        value={formValues.jenjang}
                      />{" "}
                      <p className="text-xs text-red-600">
                        {formErrors.jenjang}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <span className="mr-auto text-sm">Tahun Masuk</span>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="masuk"
                        className=" focus:outline-none px-1"
                        onChange={handleChange}
                        value={formValues.masuk}
                      />{" "}
                      <p className="text-xs text-red-600">{formErrors.masuk}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <span className="mr-auto text-sm">Tahun Keluar</span>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="keluar"
                        className=" focus:outline-none px-1"
                        onChange={handleChange}
                        value={formValues.keluar}
                      />{" "}
                      <p className="text-xs text-red-600">
                        {formErrors.keluar}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <span className="mr-auto text-sm">Keterangan</span>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="keterangan"
                        className=" focus:outline-none px-1"
                        onChange={handleChange}
                        value={formValues.keterangan}
                      />
                      <p className="text-xs text-red-600">
                        {formErrors.keterangan}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end items-end mt-3">
                    <button
                      className="text-sm border-2 border-gray-300 rounded-md p-1 mb-3 text-right"
                      onClick={(e) => handleDataSubmit(e)}
                    >
                      + Add Riwayat Pendidikan
                    </button>
                  </div>
                </div>
                <div>
                  <span className="ml-5">Riwayat Pendidikan</span>
                  <Table className="ml-5">
                    <thead>
                      <tr>
                        <th>Nama Institusi</th>
                        <th>Kota</th>
                        <th>Jurusan </th>
                        <th>Jenjang</th>
                        <th>Masuk</th>
                        <th>Keluar</th>
                        <th>Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ListPendidikan data={data} />
                    </tbody>
                  </Table>
                </div>
                <div className="flex justify-end items-end mt-3">
                  <button
                    className="text-sm border-2 border-gray-300 rounded-md p-1 mb-3 text-right"
                    onClick={(e) => {
                      formValues.keterangan ? setTab(3) : handleDataSubmit(e);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/* End Input form */}
          </>
        ) : null}
        {/* tab riwayat pendidikan end */}
        {/* tab pengalaman kerja start */}
        {tab === 3 ? (
          <>
            {/* Progress Bar */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center items-center py-5">
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-green-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">data Profil</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-green-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pendidikan</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-blue-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pengalaman </span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-xs">skill</span>
                </div>
              </div>
              {/* End Progress Bar  */}
              {/* Input form */}
              <div className="bg-gray-400 w-fit h-fit pb-2 pt-3 px-8 flex">
                <div className="flex flex-col w-72">
                  <div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Nama Perusahaan</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="namaPerusahaan"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.namaPerusahaan}
                        />{" "}
                        <p className="text-xs text-red-600">
                          {formErrors.namaPerusahaan}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Jenis Industri</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="jenisIndustri"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.jenisIndustri}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.jenisIndustri}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Jabatan</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="jabatan"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.jabatan}
                        />{" "}
                        <p className="text-xs text-red-600">
                          {formErrors.jabatan}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Periode</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="periode"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.periode}
                        />{" "}
                        <p className="text-xs text-red-600">
                          {formErrors.periode}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Gaji</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="gaji"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.gaji}
                        />{" "}
                        <p className="text-xs text-red-600">
                          {formErrors.gaji}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <span className="mr-auto text-sm">Alasan Berhenti</span>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="alasanBerhenti"
                          className=" focus:outline-none px-1"
                          onChange={handleChange}
                          value={formValues.alasanBerhenti}
                        />
                        <p className="text-xs text-red-600">
                          {formErrors.alasanBerhenti}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-end mt-3">
                    <button
                      onClick={(e) => handleDataSubmit(e)}
                      className="text-sm border-2 border-gray-300 rounded-md p-1 mb-3 text-right"
                    >
                      + Add Riwayat Pekerjaan
                    </button>
                  </div>
                </div>
                <div>
                  <span className="ml-5">Riwayat Pendidikan</span>
                  <Table className="ml-5">
                    <thead>
                      <tr>
                        <th>Nama Perusahaan</th>
                        <th>Jenis Indsutri</th>
                        <th>jabatan </th>
                        <th>periode</th>
                        <th>gaji</th>
                        <th>Alasan Berhenti</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Listpekerjaan data={data} />
                    </tbody>
                  </Table>
                </div>
                <div className="flex justify-end items-end mt-3">
                  <button
                    className="text-sm border-2 border-gray-300 rounded-md p-1 mb-3 text-right"
                    onClick={(e) => {
                      formValues.alasanBerhenti
                        ? setTab(4)
                        : handleDataSubmit(e);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/* End Input form */}
          </>
        ) : null}
        {/* tab pengalaman kerja end */}
        {/* tab skill start */}
        {tab === 4 ? (
          <>
            {/* Progress Bar */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center py-5">
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-green-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">data Profil</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-green-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pendidikan</span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-green-700"></div>
                    <div className="h-1 w-28 bg-gray-400 mt-2"></div>
                  </div>
                  <span className="text-xs">pengalaman </span>
                </div>
                <div>
                  <div className="flex">
                    <div className="h-5 w-5 rounded-full bg-blue-700"></div>
                  </div>
                  <span className="text-xs">skill</span>
                </div>
              </div>
              {/* End Progress Bar  */}
              {/* Input form */}
              <div className="bg-gray-400 w-96 h-fit p-2">
                <input
                  type="text"
                  name="skill"
                  className=" focus:outline-none px-1 w-full text-sm"
                  placeholder="Input Skill"
                  onChange={handleChange}
                  value={formValues.skill}
                />
                <div>
                  <Skill data={data} />
                </div>
                <p className="text-xs text-red-600">{formErrors.skill}</p>
                <button
                  onClick={(e) => handleDataSubmit(e)}
                  className="text-sm border-2 w-full border-gray-300 rounded-md p-1 my-3 text-center"
                >
                  + Tambah Skill
                </button>
              </div>
              <div className="">
                <button
                  className="text-sm border-2 mt-3 w-96 border-gray-300 rounded-md p-1 mb-3 "
                  onClick={(e) => {
                    formValues.skill ? setTab(0) : handleDataSubmit(e);
                  }}
                  type="submit"
                >
                  submit
                </button>
              </div>
            </div>
            {/* End Input form */}
          </>
        ) : null}
        {/* tab skill end */}
      </div>
    </div>
  );
};
export default FormSubmission;
