# Backend_PatientTracker

For the backend, to run the file you need to navigate into the project directory and use the command 

### `python run.py`

Runs the app in development mode.\
Open http://127.0.0.1:5000 to view it in your browser

To run the test suite, run the following command:

### `pytest`

The entire backend consists of several Python and JSON files under a directory `app`, each serving a specific purpose in the system:

###JSON Data Files
stored under `data` folder
patients.json: Stores patient demographic and contact information.
appointments.json: Contains details about patient appointments.
medical_records.json: Holds patient medical records and histories.

###Python Model Files
stored under `models` folder
patient_model.py: The data model for patient information.
appointment_model.py: The data model for managing appointments.
medical_record_model.py: The data model for medical records.

###Service Layer
stored under `services` folder
patient_service.py: Handles the business logic for patient data management.
appointments_service.py: Manages the appointment scheduling and logistics.
medical_record_service.py: Deals with operations related to medical records.

###Router Layer
stored under `routers` folder
patient_router.py: API routes for patient-related operations.
medical_record_router.py: API routes for accessing and modifying medical records.
appointments_router.py: API routes for managing appointments.

###Test Files
stored under `tests` folder
test_patient_service.py: Unit tests for patient services.
test_appointments_service.py: Unit tests for appointment services.
test_medical_record_service.py: Unit tests for medical record services.
