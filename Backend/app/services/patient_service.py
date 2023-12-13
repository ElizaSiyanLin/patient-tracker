import os
import json

PATIENTS_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'patients.json')

def get_all_patients():
    with open(PATIENTS_FILE, 'r') as file:
        return json.load(file)

def add_patient(new_patient):
    patients_data = get_all_patients()
    patients_data.append(new_patient)
    with open(PATIENTS_FILE, 'w') as file:
        json.dump(patients_data, file, indent=4)