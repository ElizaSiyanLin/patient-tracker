# app/services/__init__.py

from .patient_service import PatientService
from .medical_record_service import MedicalRecordService
from .appointments_service import AppointmentService

__all__ = ['PatientService', 'MedicalRecordService', 'AppointmentService']