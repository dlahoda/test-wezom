export default function prepareData(entry, index) {
  let result = {
    index,
  };

  const {
    picture,
    name,
    dob,
    nat,
    phone,
    email,
    location: { country, street, city, state, postcode },
    gender,
  } = entry;

  result.picture_url = picture.large;
  result.full_name = Object.values(name).join(" ");

  const dateOfBirth = new Intl.DateTimeFormat("en-US").format(
    new Date(dob.date)
  );

  result.date_of_birth = {
    dateOfBirth,
    age: dob.age,
  };
  result.phone = phone;
  result.email = email;
  result.location = {
    country,
    address: `${street.number} ${street.name}, ${city}, ${state}, ${postcode}`,
  };
  result.region = new Intl.DisplayNames(["en"], { type: "region" }).of(nat);
  result.nat = nat;
  result.gender = gender;

  return result;
}
