import os
import json

class MedicalRecordService:
    # Assuming __file__ is defined in the context where this class is used
    MEDICAL_RECORDS_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'medical_records.json')

    @staticmethod
    def load_medical_records():
        with open(MedicalRecordService.MEDICAL_RECORDS_FILE, 'r') as file:
            return json.load(file)['MedicalRecords']
        
    @staticmethod
    def save_medical_records(records):
        with open(MedicalRecordService.MEDICAL_RECORDS_FILE, 'w') as file:
            json.dump({'MedicalRecords': records}, file, indent=4)


    @staticmethod
    def get_all_medical_records():
        return MedicalRecordService.load_medical_records()


    @staticmethod
    def get_medical_record_by_id(record_id):
        records = MedicalRecordService.load_medical_records()
        return next((record for record in records if record['MedicalRecordID'] == record_id), None)

    @staticmethod
    def add_medical_record(medical_record_data):
        records = MedicalRecordService.load_medical_records()
        # Assign a new ID to the medical record. This is a simple incrementation and not suitable for production use.
        max_id = max([record['MedicalRecordID'] for record in records], default=0)
        medical_record_data['MedicalRecordID'] = max_id + 1
        records.append(medical_record_data)
        MedicalRecordService.save_medical_records(records)
        return medical_record_data
