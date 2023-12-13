# app/routes/__init__.py

from .patient_router import patient_bp
from .medical_record_router import medical_record_bp
from .appointments_router import appointment_bp

# Optionally, you can define a list of blueprints to be used elsewhere
__all__ = ['patient_bp', 'medical_record_bp', 'appointment_bp']