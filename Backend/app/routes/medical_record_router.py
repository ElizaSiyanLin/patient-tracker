from flask import Blueprint, jsonify, request
from app.services.medical_record_service import MedicalRecordService

# Create a Blueprint object for medical record-related routes
medical_record_bp = Blueprint('medical_records', __name__)

# Define routes for handling medical record-related requests

@medical_record_bp.route('/medical_records', methods=['GET'])
def get_medical_records():
    medical_records = MedicalRecordService.get_all_medical_records()
    return jsonify(medical_records), 200

@medical_record_bp.route('/medical_records/<int:record_id>', methods=['GET'])
def get_medical_record(record_id):
    medical_record = MedicalRecordService.get_medical_record_by_id(record_id)
    if medical_record:
        return jsonify(medical_record), 200
    else:
        return jsonify({"message": "Medical record not found"}), 404

@medical_record_bp.route('/medical_records', methods=['POST'])
def create_medical_record():
    new_medical_record_data = request.json
    MedicalRecordService.add_medical_record(new_medical_record_data)
    return jsonify({"message": "Medical record added successfully"}), 201
