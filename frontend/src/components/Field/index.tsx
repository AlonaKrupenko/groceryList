import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface FieldProps {
  label?: string;
  errorText?: string;
  children?: ReactNode;
  isRequired?: boolean;
  className?: string;
}

export const Field: React.FC<FieldProps> = ({
  label,
  errorText,
  isRequired,
  children,
  className,
}) => {
  return (
    <div className={className}>
      <p className={styles.label}>
        <p className={styles.labelText}>{label}</p>
        {isRequired ? <span className={styles.required}>*</span> : null}
      </p>
      {children}
      {errorText ? <p className={styles.errorText}>{errorText}</p> : null}
    </div>
  );
};
