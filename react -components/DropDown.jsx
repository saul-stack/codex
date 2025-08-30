//  DropDown component.
//  Users can select an option from a dropdown menu.

//  Input props
//  {options}   Required    An array of dropdown values the user can select from.
//                          To represent values with user-friendly strings, pass
//                          an array of objects, with keys "string" and "value" e.g:
//                          [{value: 1, string: "First option"}, {value: 1, string: "Second option"}]
//
//  {onChange}  Required    Function to execute when the user selects an option

export const DropDown = ({ onChange, options }) => {
  let values = Array.from(
    options.map((option) => (option.value != undefined ? option.value : option))
  );

  let strings = Array.from(
    options.map((option) =>
      option.string != undefined ? option.string : option
    )
  );

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((_, i) => {
        const string = strings[i];
        const value = values[i];

        return (
          <option key={value} value={value}>
            {string}
          </option>
        );
      })}
    </select>
  );
};
