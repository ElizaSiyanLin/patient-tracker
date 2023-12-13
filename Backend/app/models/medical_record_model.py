class MedicalRecord:
    def __init__(
        self, medical_record_id, patient_id, created_by, created_at,
        diabetes, high_bp, high_col, bmi, smoker, phys_activity,
        hvy_alcohol_consump, gen_hlth, ment_hlth, phys_hlth
    ):
        self.medical_record_id = medical_record_id
        self.patient_id = patient_id
        self.created_by = created_by
        self.created_at = created_at
        self.diabetes = diabetes
        self.high_bp = high_bp
        self.high_col = high_col
        self.bmi = bmi
        self.smoker = smoker
        self.phys_activity = phys_activity
        self.hvy_alcohol_consump = hvy_alcohol_consump
        self.gen_hlth = gen_hlth
        self.ment_hlth = ment_hlth
        self.phys_hlth = phys_hlth

    @classmethod
    def from_json(cls, medical_record_data):
        return cls(
            medical_record_data['MedicalRecordID'],
            medical_record_data['PatientID'],
            medical_record_data['CreatedBy'],
            medical_record_data['CreatedAt'],
            medical_record_data['Diabetes'],
            medical_record_data['HighBP'],
            medical_record_data['HighCol'],
            medical_record_data['BMI'],
            medical_record_data['Smoker'],
            medical_record_data['PhysActivity'],
            medical_record_data['HvyAlcoholConsump'],
            medical_record_data['GenHlth'],
            medical_record_data['MentHlth'],
            medical_record_data['PhysHlth']
        )

    def to_json(self):
        return {
            'MedicalRecordID': self.medical_record_id,
            'PatientID': self.patient_id,
            'CreatedBy': self.created_by,
            'CreatedAt': self.created_at,
            'Diabetes': self.diabetes,
            'HighBP': self.high_bp,
            'HighCol': self.high_col,
            'BMI': self.bmi,
            'Smoker': self.smoker,
            'PhysActivity': self.phys_activity,
            'HvyAlcoholConsump': self.hvy_alcohol_consump,
            'GenHlth': self.gen_hlth,
            'MentHlth': self.ment_hlth,
            'PhysHlth': self.phys_hlth
        }