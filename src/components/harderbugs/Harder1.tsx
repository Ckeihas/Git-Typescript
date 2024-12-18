import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <label>
        Name:
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" onClick={() => console.log(formData)}>
        Submit
      </button>
    </form>
  );
};

export default Form;
