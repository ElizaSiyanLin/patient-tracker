from flask import Blueprint, jsonify, request
from app.services.appointments_service import AppointmentService

# Create a Blueprint object for appointment-related routes
appointment_bp = Blueprint('appointments', __name__)

# Define routes for handling appointment-related requests

@appointment_bp.route('/appointments', methods=['GET'])
def get_appointments():
    appointments = AppointmentService.get_all_appointments()
    return jsonify(appointments), 200

@appointment_bp.route('/appointments/<int:appointment_id>', methods=['GET'])
def get_appointment(appointment_id):
    appointment = AppointmentService.get_appointment_by_id(appointment_id)
    if appointment:
        return jsonify(appointment), 200
    else:
        return jsonify({"message": "Appointment not found"}), 404


@appointment_bp.route('/appointments', methods=['POST'])
def create_appointment():
    new_appointment_data = request.json
    AppointmentService.add_appointment(new_appointment_data)
    return jsonify({"message": "Appointment added successfully"}), 201