from app.routes.appointments_router import appointment_bp
from app.routes.medical_record_router import medical_record_bp
from app.routes.patient_router import patient_bp
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Register the patient blueprint
app.register_blueprint(patient_bp)
app.register_blueprint(medical_record_bp)
app.register_blueprint(appointment_bp)

if __name__ == '__main__':
    app.run(debug=True)