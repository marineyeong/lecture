export default function Form({ value, setValue, handleSubmit }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: '10', padding: '5px' }}
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="btn" style={{ flex: '1' }}>
        입력
      </button>
    </form>
  );
}
