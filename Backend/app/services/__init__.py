# app/services/__init__.py

from .patient_service import get_all_patients, add_patient
from .medical_record_service import MedicalRecordService
from .appointments_service import AppointmentService

__all__ = ['get_all_patients', 'add_patient', 'MedicalRecordService', 'AppointmentService']