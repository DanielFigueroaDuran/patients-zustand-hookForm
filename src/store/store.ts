import { create } from "zustand";
import { Patient } from "../types";

type PatientState = {
      patients: Patient[]
}

export const usePatientStorage = create<PatientState>(() => ({
      patients: []
}))