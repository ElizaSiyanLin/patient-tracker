import os
import json
import pytest
from app.services.appointments_service import AppointmentService

@pytest.fixture(scope="module")
def test_appointments_file(tmpdir_factory):
    # Create a temporary test file for appointments
    test_appointments = [
        {
            "AppointmentID": 1002,
            "Time": "2023-12-20 10:00:00",
            "DoctorID": 1,
            "PatientID": 1,
            "FirstName": "John",
            "LastName": "Doe",
            "Status": "Scheduled",
            "DoctorNote": "Initial consultation.",
            "MedicalRecordID": 1
        },
        {
            "AppointmentID": 1004,
            "Time": "2023-12-21 15:00:00",
            "DoctorID": 2,
            "PatientID": 2,
            "FirstName": "Jane",
            "LastName": "Smith",
            "Status": "Scheduled",
            "DoctorNote": "Follow-up on blood pressure.",
            "MedicalRecordID": 2
        }
    ]

    # Create a temporary test file for appointments
    test_file_path = tmpdir_factory.mktemp("data").join("test_appointments.json")
    with open(str(test_file_path), 'w') as file:
        json.dump({'Appointments': test_appointments}, file)
    return str(test_file_path)

def test_get_all_appointments(test_appointments_file):
    AppointmentService.APPOINTMENTS_FILE = test_appointments_file
    appointments = AppointmentService.get_all_appointments()
    assert len(appointments) == 2  # Check if the correct number of appointments is returned

def test_get_appointment_by_id(test_appointments_file):
    AppointmentService.APPOINTMENTS_FILE = test_appointments_file
    appointment = AppointmentService.get_appointment_by_id(1002)
    assert appointment is not None
    assert appointment['AppointmentID'] == 1002  # Check if the correct appointment is returned

def test_add_appointment(test_appointments_file):
    AppointmentService.APPOINTMENTS_FILE = test_appointments_file
    test_appointment = {
            "AppointmentID": 1003,
            "Time": "2024-12-20 90:00:00",
            "DoctorID": 2,
            "PatientID": 2,
            "FirstName": "Something",
            "LastName": "Else",
            "Status": "Scheduled",
            "DoctorNote": "Initial consultation.",
            "MedicalRecordID": 9
        }
    AppointmentService.add_appointment(test_appointment)
    appointments = AppointmentService.get_all_appointments()
    assert len(appointments) == 3
    assert appointments[2]['MedicalRecordID'] == 9
    
def test_save_medical_records(test_appointments_file):
    AppointmentService.APPOINTMENTS_FILE = test_appointments_file
    test_appointments = [
        {
            "AppointmentID": 1002,
            "Time": "2023-12-20 10:00:00",
            "DoctorID": 1,
            "PatientID": 1,
            "FirstName": "John",
            "LastName": "Doe",
            "Status": "Scheduled",
            "DoctorNote": "Initial consultation.",
            "MedicalRecordID": 1
        },
        {
            "AppointmentID": 1004,
            "Time": "2023-12-21 15:00:00",
            "DoctorID": 2,
            "PatientID": 2,
            "FirstName": "Jane",
            "LastName": "Smith",
            "Status": "Scheduled",
            "DoctorNote": "Follow-up on blood pressure.",
            "MedicalRecordID": 2
        }, 
        {
            "AppointmentID": 1003,
            "Time": "2024-12-20 90:00:00",
            "DoctorID": 2,
            "PatientID": 2,
            "FirstName": "Something",
            "LastName": "Else",
            "Status": "Scheduled",
            "DoctorNote": "Initial consultation.",
            "MedicalRecordID": 9
        }
    ]
    AppointmentService.save_appointments(test_appointments)
    appointments = AppointmentService.get_all_appointments()
    assert len(appointments) == 3
    assert appointments == test_appointments