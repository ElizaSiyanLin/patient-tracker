import os
import json
import pytest
from app.services.patient_service import PatientService

@pytest.fixture
def patients_file(tmpdir):
    patients_data = []
    patients_file_path = tmpdir.join('patients.json')
    with open(patients_file_path, 'w') as file:
        json.dump(patients_data, file)
    return patients_file_path

def test_get_all_patients_empty_file(patients_file):
    PatientService.PATIENTS_FILE = patients_file
    patients = PatientService.get_all_patients()
    assert patients == []

def test_add_patient(patients_file):
    PatientService.PATIENTS_FILE = patients_file
    test_patient = {
        "PatientID": "P003",
        "FirstName": "Test",
        "LastName": "Patient",
        "Gender": "Male",
        "DateOfBirth": "1995-01-01",
        "Phone": "123-456-7890",
        "Email": "test@example.com",
        "LastAppointmentID": "A1003",
        "CurrentAppointmentID": "A1004"
    }
    PatientService.add_patient(test_patient)
    patients = PatientService.get_all_patients()
    assert len(patients) == 1
    assert patients[0]['PatientID'] == "P003"