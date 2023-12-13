# Import the models to make them accessible from the package
from patient_model import Patient
from medical_record_model import MedicalRecord
from appointment_model import Appointment


__all__ = ['Patient', 'MedicalRecord', 'Appointment']