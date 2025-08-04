function PasswordInput({ type, label, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border p-2"
      />
    </div>
  );
}
export default PasswordInput;
