//  DropDown component.
//  Users can select an option from a dropdown menu.

//  Input props
//  {label}     Optional    Label on the dropdown value ("time", "color" etc.)
//  {options}   Required    Array of values the user can select from
//  {onChange}  Required    Function to execute when the user selects an option

export const DropDown = ({ label, onChange, options }) => {
  return (
    <div>
      <select onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {label && `${label}: `}
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
