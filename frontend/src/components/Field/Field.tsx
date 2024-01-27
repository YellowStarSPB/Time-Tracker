import styles from './Field.module.scss';

function Field({
  type,
  name,
  placeholder,
  required,
  className
}) {
  return (
    <label className={`${styles.field} ${className}`}>
      <input type={type} name={name} placeholder={placeholder} required={required} className={className + '-input'} />
    </label>
  )
}

export default Field;