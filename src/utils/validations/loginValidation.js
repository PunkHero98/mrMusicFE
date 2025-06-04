export const loginValidation = (form) => {
  const errors = {};
  // Username must start with a letter, between 3 and 16 characters long, can contain letters, numbers, and underscores.
  // [a-zA-Z] : start with a letter
  // [a-zA-Z0-9_]+ : can contain letters, numbers, and underscores
  if (!form.username.trim()) {
    errors.username = "Username is required";
  } else {
    if (!/^[a-zA-Z]/.test(form.username)) {
      errors.username = "Username must start with a letter";
    } else if (!/^[a-zA-Z0-9_]+$/.test(form.username)) {
      errors.username =
        "Username cannot contain special characters except underscores";
    } else if (form.username.length < 3 || form.username.length > 16) {
      errors.username = "Username must be between 3 and 16 characters long";
    }
  }
  if (!form.password.trim()) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  return errors;
};
