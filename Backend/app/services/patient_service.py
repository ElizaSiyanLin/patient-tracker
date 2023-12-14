import os
import json


class PatientService:
    # Assuming __file__ is defined in the context where this class is used
    PATIENTS_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'patients.json')

    @staticmethod
    def get_all_patients():
        with open(PatientService.PATIENTS_FILE, 'r') as file:
            return json.load(file)

    @staticmethod
    def add_patient(new_patient):
        patients_data = PatientService.get_all_patients()
        patients_data.append(new_patient)
        with open(PatientService.PATIENTS_FILE, 'w') as file:
            json.dump(patients_data, file, indent=4)