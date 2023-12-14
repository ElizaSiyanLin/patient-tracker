from flask import Blueprint, jsonify, request
from app.services.patient_service import PatientService
import os

# Create a Blueprint object for patient-related routes
patient_bp = Blueprint('patients', __name__)

# Define routes for handling patient-related requests

@patient_bp.route('/patients', methods=['GET'])
def get_patients():
    patients = PatientService.get_all_patients()
    return jsonify(patients), 200

@patient_bp.route('/patients', methods=['POST'])
def create_patient():
    new_patient_data = request.json
    PatientService.add_patient(new_patient_data)
    return jsonify({"message": "Patient added successfully"}), 20