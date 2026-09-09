import { Input } from '@nextui-org/react'
import React from 'react'
import { BiError } from 'react-icons/bi'

interface InputProps {
  name: string
  field?: any
  type?: string
  label?: string
  placeholder?: string
  className?: string
  conClassName?: string
  endContent?: React.JSX.Element
  errors: any
  hidden?: boolean
  classNames?: object
  style?: object
  labelPlacement?: 'inside' | 'outside' | 'outside-left'
  defaultValue?: string | number
  description?: string
  value?: any
  startContent?: React.JSX.Element
  disabled?: boolean
}

const styles = {
  // label: "text-black/50 dark:text-white/90",
  input: [
    '',
    // "text-black/90 dark:text-white/90",
    // "placeholder:text-default-700/50 dark:placeholder:text-white/60",
  ],
  // innerWrapper: "bg-transparent",
  inputWrapper: [
    'border-gray-300/40',
    'border-[0.5px]',
    'h-16',
    'group-data-[focus=true]:border-primary',
  ],
}

export default function InputField({
  name,
  errors,
  className,
  conClassName,
  endContent,
  field,
  label,
  placeholder,
  type,
  hidden,
  classNames,
  style,
  labelPlacement = 'outside',
  defaultValue,
  description,
  value,
  disabled,
  startContent,
}: InputProps) {
  return (
    <div className={`relative flex flex-col ${conClassName}`}>
      <Input
        type={type}
        label={label}
        placeholder={placeholder}
        hidden={hidden}
        labelPlacement={labelPlacement}
        onChange={(e) => {
          field.defaultValues = e.target.value
        }}
        size="lg"
        className={`${className}`}
        endContent={endContent}
        {...field}
        classNames={styles}
        variant="bordered"
        style={style}
        defaultValue={defaultValue}
        value={value}
        description={description}
        isDisabled={disabled}
        startContent={startContent}
      />
      {errors[name] && (
        <span
          className={
            'text-xs text-red-600  transition-transform delay-200 duration-300 ease-in-out ' +
            (errors[name].message ? 'translate-y-2' : 'translate-y-0')
          }
        >
          <div className="flex flex-row items-center gap-2">
            <BiError size={16} />
            {errors[name].message}
          </div>
        </span>
      )}
    </div>
  )
}
