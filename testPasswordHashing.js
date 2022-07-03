const User = require("./models/user");
async function hashonsLePassword(password) {
  const hashedPassword = await User.hashPassword(password);
  console.log(hashedPassword);
  return hashedPassword;
}

hashonsLePassword("basileCarle");

User.verifyPassword(
  "basileCarledgfd",
  "$argon2id$v=19$m=65536,t=5,p=1$rKNXHquDZsnl/QVKdGB+kQ$AsdztALlJWPiw7MReMvj2evajRoy58R2pozPEVOoM9Y"
).then((resultat) => console.log(resultat));
