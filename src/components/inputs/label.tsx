interface LabelProps {
  htmlFor: string
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-base font-medium text-MyColor02">
      {children}
    </label>
  )
}

export default Label
