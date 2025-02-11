import React, { useState } from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type CollegeDataType = {
    [key: string]: {
      [state: string]: string[]
    }
  }

// Colleges data by state and admission type
const collegeData : CollegeDataType = {
  "Engineering": {
    "West Bengal": [
      "Indian Institute of Technology, Kharagpur",
      "Jadavpur University",
      "Indian Institute of Engineering Science and Technology, Shibpur",
      "Bengal Engineering and Science University",
      "Netaji Subhas University of Technology"
    ],
    "Delhi": [
      "Indian Institute of Technology, Delhi",
      "Delhi Technological University",
      "Netaji Subhas University of Technology",
      "Indraprastha Institute of Technology",
      "Army Institute of Technology"
    ],
    "Pune": [
      "College of Engineering, Pune",
      "Indian Institute of Technology, Bombay (Pune Campus)",
      "Vishwakarma Institute of Technology",
      "Maharashtra Institute of Technology",
      "Pune Institute of Computer Technology"
    ],
    "Bangalore": [
      "Indian Institute of Science",
      "Indian Institute of Technology, Bangalore",
      "Bangalore Institute of Technology",
      "PES University",
      "RV College of Engineering"
    ]
  },
  "Medical": {
    "West Bengal": [
      "Medical College, Kolkata",
      "R.G. Kar Medical College",
      "Calcutta National Medical College",
      "Institute of Post Graduate Medical Education & Research",
      "Nil Ratan Sircar Medical College"
    ],
    "Delhi": [
      "All India Institute of Medical Sciences (AIIMS)",
      "Lady Hardinge Medical College",
      "Maulana Azad Medical College",
      "University College of Medical Sciences",
      "Ram Manohar Lohia Hospital"
    ],
    "Pune": [
      "B.J. Medical College",
      "Armed Forces Medical College",
      "Byramjee Jeejeebhoy Government Medical College",
      "Maharashtra Institute of Medical Education",
      "Dr. D. Y. Patil Medical College"
    ],
    "Bangalore": [
      "Bangalore Medical College",
      "Rajarajeshwari Medical College",
      "St. John's Medical College",
      "Vydehi Institute of Medical Sciences",
      "M.S. Ramaiah Medical College"
    ]
  },
  "BBA/BCA/MBA": {
    "West Bengal": [
      "Calcutta Business School",
      "XLRI Xavier School of Management",
      "Indian Institute of Management, Calcutta",
      "Globsyn Business School",
      "Heritage Business School"
    ],
    "Delhi": [
      "Faculty of Management Studies, Delhi University",
      "Indian Institute of Management, Ahmedabad (Delhi Campus)",
      "IMT Ghaziabad",
      "FORE School of Management",
      "Delhi School of Economics"
    ],
    "Pune": [
      "Symbiosis International University",
      "Pune University",
      "Institute of Industrial & Management Studies",
      "Tilak Maharashtra University",
      "Sinhgad Institute of Business Administration"
    ],
    "Bangalore": [
      "Indian Institute of Management, Bangalore",
      "Christ University",
      "Manipal Academy of Higher Education",
      "IFIM Business School",
      "Symbiosis Centre for Management Studies"
    ]
  },
  "Pharmacy": {
    "West Bengal": [
      "Bengal School of Pharmaceutical Sciences",
      "Calcutta Institute of Pharmaceutical Technology",
      "University Institute of Pharmaceutical Sciences",
      "Gupta College of Technological Sciences",
      "Midnapore College of Pharmacy"
    ],
    "Delhi": [
      "Delhi Institute of Pharmaceutical Sciences",
      "School of Pharmaceutical Education & Research",
      "University College of Medical Sciences",
      "Jamia Hamdard University",
      "University of Delhi"
    ],
    "Pune": [
      "Maharashtra Institute of Pharmacy",
      "Bharati Vidyapeeth College of Pharmacy",
      "Dr. D. Y. Patil College of Pharmacy",
      "Sinhgad College of Pharmacy",
      "Poona College of Pharmacy"
    ],
    "Bangalore": [
      "JSS College of Pharmacy",
      "Bangalore College of Pharmaceutical Sciences",
      "M.S. Ramaiah College of Pharmacy",
      "Manipal College of Pharmaceutical Sciences",
      "Dayananda Sagar College of Pharmacy"
    ]
  }
}

export default function AdmissionSelector({ 
  isOpen, 
  onClose, 
  onSelectCollege 
}: { 
  isOpen: boolean, 
  onClose: () => void,
  onSelectCollege: (colleges: string[]) => void 
}) {
  const [selectedAdmission, setSelectedAdmission] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<string | null>(null)

  const resetSelection = () => {
    setSelectedAdmission(null)
    setSelectedState(null)
  }

  const handleAdmissionSelect = (admission: string) => {
    setSelectedAdmission(admission)
    setSelectedState(null)
  }

  const handleStateSelect = (state: string) => {
    if (selectedAdmission) {
      const colleges = collegeData[selectedAdmission][state]
      onSelectCollege(colleges)
      onClose()
      resetSelection()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        onClose()
        resetSelection()
      }
    }}>
      <DialogContent className="sm:max-w-[425px]">
        {!selectedAdmission && (
          <>
            <DialogHeader>
              <DialogTitle>Select Admission Type</DialogTitle>
              <DialogDescription>
                Choose the type of admission you&apos;re interested in.
              </DialogDescription>
            </DialogHeader>
            <RadioGroup onValueChange={handleAdmissionSelect}>
              {Object.keys(collegeData).map((admission) => (
                <div key={admission} className="flex items-center space-x-2">
                  <RadioGroupItem value={admission} id={admission} />
                  <Label htmlFor={admission}>{admission} Admissions</Label>
                </div>
              ))}
            </RadioGroup>
          </>
        )}

        {selectedAdmission && !selectedState && (
          <>
            <DialogHeader>
              <DialogTitle>Select State</DialogTitle>
              <DialogDescription>
                Choose the state where you want to pursue {selectedAdmission} education.
              </DialogDescription>
            </DialogHeader>
            <RadioGroup onValueChange={handleStateSelect}>
              {Object.keys(collegeData[selectedAdmission]).map((state) => (
                <div key={state} className="flex items-center space-x-2">
                  <RadioGroupItem value={state} id={state} />
                  <Label htmlFor={state}>{state}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button 
              variant="outline" 
              onClick={() => setSelectedAdmission(null)}
              className="mt-2"
            >
              Back to Admission Types
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}