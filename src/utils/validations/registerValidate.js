export const registerValidation = (form) => {
  const errors = {};
  /**
   * - Username: không được trống, 3-30 ký tự, không chứa ký tự đặc biệt
    - Email: bắt buộc, định dạng email chuẩn
    - Password: ít nhất 8 ký tự, ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt
    - Confirm Password: phải trùng với password
   */
  if (!form.username.trim()) {
    errors.username = "Username is required";
  } else if (form.username.length < 3 || form.username.length > 30) {
    errors.username = "Username must be between 3 and 30 characters long";
  } else if (!/^[a-zA-Z0-9_]+$/.test(form.username)) {
    errors.username =
      "Username cannot contain special characters except underscores";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Email is not valid";
  }

  if (!form.password.trim()) {
    errors.password = "Password is required";
  } else if (form.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(form.password)) {
    errors.password = "Password must be at least 1 uppercase letter";
  } else if (!/[a-z]/.test(form.password)) {
    errors.password = "Password must be at least 1 lowercase letter";
  } else if (!/[0-9]/.test(form.password)) {
    errors.password = "Password must contain at least 1 number";
  } else if (!/[!@#$%^&*()..?":{}|<>]/.test(form.password)) {
    errors.password = "Password must contain at least 1 special character";
  }

  if (!form.confirmPassword.trim()) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (form.confirmPassword !== form.password) {
    errors.confirmPassword = "Confirm Password must match Password";
  }

  return errors;
};
