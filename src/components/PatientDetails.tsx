import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
      patient: Patient
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {
      //console.log(patient.name);
      return (
            <div className="mx-5 my-10 px-5 py-6 bg-white shadow-md rounded-xl ">
                  <PatientDetailItem
                        label="ID"
                        data={patient.id}
                  />

                  <PatientDetailItem
                        label="Nombre"
                        data={patient.name}
                  />

                  <PatientDetailItem
                        label="Propietario"
                        data={patient.caretaker}
                  />

                  <PatientDetailItem
                        label="Email"
                        data={patient.email}
                  />

                  <PatientDetailItem
                        label="Fecha de Alta"
                        data={patient.date.toString()}
                  />

                  <PatientDetailItem
                        label="Sintomas"
                        data={patient.symptoms}
                  />
            </div>
      )
}

export default PatientDetails