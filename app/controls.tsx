import Select from "react-select";

const Controls = ({
  handleFieldChange,
  handleDirectionChange,
}: {
  handleFieldChange: (h: string) => void;
  handleDirectionChange: (h: string) => void;
}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          defaultValue={fieldOptions[0]}
          onChange={(option) => handleFieldChange(option?.value)}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          defaultValue={directionOptions[0]}
          onChange={(option) => handleDirectionChange(option?.value)}
        />
      </div>
    </div>
  );
};

export default Controls;
