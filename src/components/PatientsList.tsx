import { usePatientStorage } from "../store/store"


const PatientsList = () => {
      const patients = usePatientStorage(state => state.patients);
      console.log(patients);
      return (
            <div>PtientsList</div>
      )
}

export default PatientsList