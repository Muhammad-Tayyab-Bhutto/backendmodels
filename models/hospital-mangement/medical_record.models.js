import mongooose from 'mongoose'

const medicalRecordSchema = new mongooose.Schema(
  {

  },
  {
    timestamps: true
  }
)

export const MedicalRecord = mongooose.model('MedicalRecord', medicalRecordSchema)