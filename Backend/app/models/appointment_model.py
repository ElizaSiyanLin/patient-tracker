class Appointment:
    def __init__(
        self, appointment_id, appointment_time, doctor_id, patient_id,
        status, doctor_note, medical_record_id
    ):
        self.appointment_id = appointment_id
        self.appointment_time = appointment_time
        self.doctor_id = doctor_id
        self.patient_id = patient_id
        self.status = status
        self.doctor_note = doctor_note
        self.medical_record_id = medical_record_id

    @classmethod
    def from_json(cls, appointment_data):
        return cls(
            appointment_data['AppointmentID'],
            appointment_data['Time'],
            appointment_data['DoctorID'],
            appointment_data['PatientID'],
            appointment_data['Status'],
            appointment_data['DoctorNote'],
            appointment_data['MedicalRecordID']
        )

    def to_json(self):
        return {
            'AppointmentID': self.appointment_id,
            'Time': self.appointment_time,
            'DoctorID': self.doctor_id,
            'PatientID': self.patient_id,
            'Status': self.status,
            'DoctorNote': self.doctor_note,
            'MedicalRecordID': self.medical_record_id
        }