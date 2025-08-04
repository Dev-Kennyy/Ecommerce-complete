function SignInput({ placeholder, type, name, onChange }) {
  return (
    <input
      type={type}
      name={name}
      className="w-[300px] border-b-2 border-gray-500 p-1 text-sm outline-none lg:text-[18px]"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default SignInput;
