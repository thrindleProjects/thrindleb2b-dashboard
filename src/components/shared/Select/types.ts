import { FormikErrors } from 'formik';

export type SelectProps = React.SelectHTMLAttributes<
  HTMLSelectElement | HTMLInputElement
> & {
  className?: string;
  id: string;
  error?: boolean | string;
  label?: string;
  errorText?: string;
  options?: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  defaultValue?: {
    value: string | undefined;
    label: string | undefined;
  };
  onChangeValue?: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<unknown>>;
  onBlurEvent?: (
    field: string,
    touched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<unknown>>;
  value: string | undefined;
};
