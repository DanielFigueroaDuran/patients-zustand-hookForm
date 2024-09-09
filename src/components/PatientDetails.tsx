import { Patient } from "../types";

type PatientDetailsProps = {
      patient: Patient
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {

      return (
            <div className="text-black">

                  {patient.name}
            </div>
      )
}

export default PatientDetails