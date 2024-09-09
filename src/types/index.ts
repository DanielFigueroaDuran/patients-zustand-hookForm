export type Patient = {
      id: string,
      name: string,
      caretaker: string,
      email: string,
      date: Date,
      Synptons: string
}

export type DraftPatient = Omit<Patient, 'id'>