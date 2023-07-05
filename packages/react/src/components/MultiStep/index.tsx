import { Label, MultiStepContainer, Steps, Step } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  const stepArray = Array.from({ length: size }, (_, i) => i + 1)

  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--step-size': size }}>
        {stepArray.map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
