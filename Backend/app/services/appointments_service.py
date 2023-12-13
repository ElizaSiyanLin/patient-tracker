import os
import json

class AppointmentService:
    # Define the path to the appointments.json file based on the provided starter code
    APPOINTMENTS_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'appointments.json')

    @staticmethod
    def load_appointments():
        with open(AppointmentService.APPOINTMENTS_FILE, 'r') as file:
            return json.load(file)['Appointments']
        
    @staticmethod
    def save_appointments(appointments):
        with open(AppointmentService.APPOINTMENTS_FILE, 'w') as file:
            json.dump({'Appointments': appointments}, file, indent=4)
        
    @staticmethod
    def get_all_appointments():
        return AppointmentService.load_appointments()

    @staticmethod
    def get_appointment_by_id(appointment_id):
        appointments = AppointmentService.load_appointments()
        return next((appointment for appointment in appointments if appointment['AppointmentID'] == appointment_id), None)

    @staticmethod
    def add_appointment(appointment_data):
        appointments = AppointmentService.load_appointments()
        # Assign a new ID to the appointment. This is a simple incrementation and not suitable for production use.
        max_id = max([appointment['AppointmentID'] for appointment in appointments], default=0)
        appointment_data['AppointmentID'] = max_id + 1
        appointments.append(appointment_data)
        AppointmentService.save_appointments(appointments)
        return appointment_data
