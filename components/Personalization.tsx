"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface FormData {
  role: string
  farmingTechniques: string[]
  alertTypes: string[]
  personalize: string
}

export default function MultiStepForm() {
    const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    role: "",
    farmingTechniques: [],
    alertTypes: [],
    personalize: "",
  })

  const roles = [
    { id: "farmer", label: "Farmer" },
    { id: "trader", label: "Trader" },
    { id: "govt-official", label: "Gov't Official" },
  ]

  const farmingTechniques = [
    { id: "organic", label: "Organic Farming" },
    { id: "irrigation", label: "Irrigation Methods" },
    { id: "modern", label: "Modern" },
    { id: "traditional", label: "Traditional" },
  ]

  const alertTypes = [
    { id: "price-changes", label: "Price Changes" },
    { id: "weather-updates", label: "Weather Updates" },
    { id: "demand-spikes", label: "Demand Spikes" },
  ]

  const handleRoleSelect = (roleId: string) => {
    setFormData((prev) => ({ ...prev, role: roleId }))
  }

  const handleTechniqueToggle = (techniqueId: string) => {
    setFormData((prev) => ({
      ...prev,
      farmingTechniques: prev.farmingTechniques.includes(techniqueId)
        ? prev.farmingTechniques.filter((id) => id !== techniqueId)
        : [...prev.farmingTechniques, techniqueId],
    }))
  }

  const handleAlertToggle = (alertId: string) => {
    setFormData((prev) => ({
      ...prev,
      alertTypes: prev.alertTypes.includes(alertId)
        ? prev.alertTypes.filter((id) => id !== alertId)
        : [...prev.alertTypes, alertId],
    }))
  }

  const handlePersonalizeSelect = (preference: string) => {
    setFormData((prev) => ({ ...prev, personalize: preference }))
  }

  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
        router.push("/dashboard")
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getProgressSteps = () => {
    return Array.from({ length: 4 }, (_, index) => {
      const stepNumber = index + 1
      const isCompleted = stepNumber < currentStep
      const isActive = stepNumber === currentStep

      return {
        number: stepNumber,
        isCompleted,
        isActive,
      }
    })
  }

  const canProceedFromStep1 = formData.role !== ""
  const canProceedFromStep2 = formData.personalize !== ""
  const canProceedFromStep3 = formData.farmingTechniques.length > 0
  const canProceedFromStep4 = formData.alertTypes.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-2 border-green-200 rounded-3xl">
        <CardContent className="p-8">
          {/* Header Section */}
          <div className="flex items-start gap-6 mb-8">
            {/* Illustration */}
            <div className="bg-green-100 rounded-2xl p-6 flex-shrink-0">
              <div className="w-24 h-24 relative">
                <Image
                  src={currentStep === 1 ? "/farmer-illustration.png" : "/dashboard-step3-illustration.png"}
                  alt={currentStep === 1 ? "Person with plant illustration" : "Person with charts illustration"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Personal details</h1>
              <p className="text-gray-600 text-base leading-relaxed">
                Discover a diverse array of valuable insights and updates shared by our community on GreenNet.
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4">
              {getProgressSteps().map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.isCompleted || step.isActive
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500 border border-gray-300"
                    }`}
                  >
                    {step.number}
                  </div>
                  {index < 3 && (
                    <div className={`w-16 h-0.5 ${step.isCompleted ? "bg-green-500" : "bg-gray-200"}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <>
              {/* Question */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">Which best describes you?</h2>
              </div>

              {/* Role Selection */}
              <div className="flex justify-center gap-4 mb-12">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className={`px-8 py-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.role === role.id
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span className="font-medium">{role.label}</span>
                  </button>
                ))}
              </div>

              {/* Continue Button */}
              <div className="flex justify-end">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium"
                  disabled={!canProceedFromStep1}
                  onClick={goToNextStep}
                >
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              {/* Question */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">Would you like a personalized experience?</h2>
              </div>

              {/* Personalization Selection */}
              <div className="flex justify-center gap-4 mb-12">
                <button
                  onClick={() => handlePersonalizeSelect("yes")}
                  className={`px-8 py-4 rounded-xl border-2 transition-all duration-200 ${
                    formData.personalize === "yes"
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium">Yes</span>
                </button>
                <button
                  onClick={() => handlePersonalizeSelect("no")}
                  className={`px-8 py-4 rounded-xl border-2 transition-all duration-200 ${
                    formData.personalize === "no"
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium">No</span>
                </button>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-medium bg-transparent"
                  onClick={goToPreviousStep}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>

                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium"
                  disabled={!canProceedFromStep2}
                  onClick={goToNextStep}
                >
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              {/* Farming Techniques Section */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What farming techniques do you use or are interested in?
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12 max-w-md mx-auto">
                {farmingTechniques.map((technique) => (
                  <div key={technique.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={technique.id}
                      checked={formData.farmingTechniques.includes(technique.id)}
                      onCheckedChange={() => handleTechniqueToggle(technique.id)}
                      className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                    />
                    <label
                      htmlFor={technique.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {technique.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-medium bg-transparent"
                  onClick={goToPreviousStep}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>

                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium"
                  disabled={!canProceedFromStep3}
                  onClick={goToNextStep}
                >
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              {/* Alert Types Section */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What types of alerts would you like to receive?
                </h2>
              </div>

              <div className="flex justify-center gap-4 flex-wrap mb-12">
                {alertTypes.map((alert) => (
                  <button
                    key={alert.id}
                    onClick={() => handleAlertToggle(alert.id)}
                    className={`px-6 py-3 rounded-xl border-2 transition-all duration-200 ${
                      formData.alertTypes.includes(alert.id)
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span className="font-medium">{alert.label}</span>
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl font-medium bg-transparent"
                  onClick={goToPreviousStep}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>

                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium"
                  disabled={!canProceedFromStep4}
                  onClick={goToNextStep}
                >
                  Complete
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
