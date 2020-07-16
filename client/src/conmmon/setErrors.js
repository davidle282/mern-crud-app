export const setErrors = (title, description, category) => {
  let errors = {};
  errors.title = title ? "" : "Title is required";
  errors.description = description ? "" : "Description is required";
  errors.category = category ? "" : "Category is required";
  return errors;
};
