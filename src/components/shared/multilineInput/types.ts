export interface MultiLineInputProps {
  formikTouched?: boolean;
  formikErrors?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  label: string;
  className: string;
  placeholder?: string;
  id: string;
  name: string;
  numbOfRows: number;
  variant?: 'primary' | 'secondary';
}
