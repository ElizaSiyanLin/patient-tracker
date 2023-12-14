import os
import json
import pytest
from app.services.medical_record_service import MedicalRecordService

@pytest.fixture(scope="module")
def test_medical_records_file(tmpdir_factory):
    # Create a temporary test file for medical records
    test_medical_records = [
        {
            "MedicalRecordID": 1,
            "PatientID": 1,
            "CreatedBy": "Dr. Smith",
            "CreatedAt": "2023-12-13",
            "Diabetes": True,
            "HighBP": False,
            "HighCol": True,
            "BMI": 22.5,
            "Smoker": False,
            "PhysActivity": "Moderate",
            "HvyAlcoholConsump": False,
            "GenHlth": "Good",
            "MentHlth": "Good",
            "PhysHlth": "Good"
        },
        {
            "MedicalRecordID": 2,
            "PatientID": 2,
            "CreatedBy": "Dr. Jones",
            "CreatedAt": "2023-12-14",
            "Diabetes": False,
            "HighBP": True,
            "HighCol": False,
            "BMI": 27.8,
            "Smoker": True,
            "PhysActivity": "Low",
            "HvyAlcoholConsump": True,
            "GenHlth": "Fair",
            "MentHlth": "Fair",
            "PhysHlth": "Fair"
        }
    ]
    test_file_path = tmpdir_factory.mktemp("data").join("test_medical_records.json")
    with open(str(test_file_path), 'w') as file:
        json.dump({'MedicalRecords': test_medical_records}, file)
    return str(test_file_path)

def test_get_all_medical_records(test_medical_records_file):
    MedicalRecordService.MEDICAL_RECORDS_FILE = test_medical_records_file
    records = MedicalRecordService.get_all_medical_records()
    assert len(records) == 2  # Check if the correct number of records is returned
    assert records[0] == {
            "MedicalRecordID": 1,
            "PatientID": 1,
            "CreatedBy": "Dr. Smith",
            "CreatedAt": "2023-12-13",
            "Diabetes": True,
            "HighBP": False,
            "HighCol": True,
            "BMI": 22.5,
            "Smoker": False,
            "PhysActivity": "Moderate",
            "HvyAlcoholConsump": False,
            "GenHlth": "Good",
            "MentHlth": "Good",
            "PhysHlth": "Good"
        }

def test_get_medical_record_by_id(test_medical_records_file):
    MedicalRecordService.MEDICAL_RECORDS_FILE = test_medical_records_file
    record = MedicalRecordService.get_medical_record_by_id(1)
    assert record is not None
    assert record['MedicalRecordID'] == 1  # Check if the correct record is returned

def test_get_medical_record_by_patient_id(test_medical_records_file):
    MedicalRecordService.MEDICAL_RECORDS_FILE = test_medical_records_file
    record = MedicalRecordService.get_medical_record_by_patient_id(1)
    assert record is not None
    assert record['MedicalRecordID'] == 1  # Check if the correct record is returned
    assert record['PatientID'] == 1



def test_add_medical_records(test_medical_records_file):
    MedicalRecordService.MEDICAL_RECORDS_FILE = test_medical_records_file
    test_medical_record = {
            "MedicalRecordID": 3,
            "PatientID": 1,
            "CreatedBy": "Dr. Smith",
            "CreatedAt": "2023-12-14",
            "Diabetes": True,
            "HighBP": False,
            "HighCol": True,
            "BMI": 23.5,
            "Smoker": False,
            "PhysActivity": "Moderate",
            "HvyAlcoholConsump": False,
            "GenHlth": "Good",
            "MentHlth": "Good",
            "PhysHlth": "Good"
        }
    MedicalRecordService.add_medical_record(test_medical_record)
    medical_records = MedicalRecordService.get_all_medical_records()
    assert len(medical_records) == 3
    assert medical_records[2]['MedicalRecordID'] == 3
    
def test_save_medical_records(test_medical_records_file):
    MedicalRecordService.MEDICAL_RECORDS_FILE = test_medical_records_file
    test_medical_records = [
        {
            "MedicalRecordID": 1,
            "PatientID": 1,
            "CreatedBy": "Dr. Smith",
            "CreatedAt": "2023-12-13",
            "Diabetes": True,
            "HighBP": False,
            "HighCol": True,
            "BMI": 22.5,
            "Smoker": False,
            "PhysActivity": "Moderate",
            "HvyAlcoholConsump": False,
            "GenHlth": "Good",
            "MentHlth": "Good",
            "PhysHlth": "Good"
        },
        {
            "MedicalRecordID": 2,
            "PatientID": 2,
            "CreatedBy": "Dr. Jones",
            "CreatedAt": "2023-12-14",
            "Diabetes": False,
            "HighBP": True,
            "HighCol": False,
            "BMI": 27.8,
            "Smoker": True,
            "PhysActivity": "Low",
            "HvyAlcoholConsump": True,
            "GenHlth": "Fair",
            "MentHlth": "Fair",
            "PhysHlth": "Fair"
        },
        {
            "MedicalRecordID": 3,
            "PatientID": 1,
            "CreatedBy": "Dr. Smith",
            "CreatedAt": "2023-12-14",
            "Diabetes": True,
            "HighBP": False,
            "HighCol": True,
            "BMI": 23.5,
            "Smoker": False,
            "PhysActivity": "Moderate",
            "HvyAlcoholConsump": False,
            "GenHlth": "Good",
            "MentHlth": "Good",
            "PhysHlth": "Good"
        }
    ]
    MedicalRecordService.save_medical_records(test_medical_records)
    records = MedicalRecordService.get_all_medical_records()
    assert len(records) == 3
    assert records == test_medical_records