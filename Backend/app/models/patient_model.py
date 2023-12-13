class Patient:
    def __init__(self, patient_id, first_name, last_name, gender, date_of_birth, phone, email, last_appointment_id, current_appointment_id):
        self.patient_id = patient_id
        self.first_name = first_name
        self.last_name = last_name
        self.gender = gender
        self.date_of_birth = date_of_birth
        self.phone = phone
        self.email = email
        self.last_appointment_id = last_appointment_id
        self.current_appointment_id = current_appointment_id

    @classmethod
    def from_json(cls, patient_data):
        return cls(
            patient_data['PatientID'],
            patient_data['FirstName'],
            patient_data['LastName'],
            patient_data['Gender'],
            patient_data['DateOfBirth'],
            patient_data['Phone'],
            patient_data['Email'],
            patient_data['LastAppointmentID'],
            patient_data['CurrentAppointmentID']
        )

    def to_json(self):
        return {
            'PatientID': self.patient_id,
            'FirstName': self.first_name,
            'LastName': self.last_name,
            'Gender': self.gender,
            'DateOfBirth': self.date_of_birth,
            'Phone': self.phone,
            'Email': self.email,
            'LastAppointmentID': self.last_appointment_id,
            'CurrentAppointmentID': self.current_appointment_id
        }