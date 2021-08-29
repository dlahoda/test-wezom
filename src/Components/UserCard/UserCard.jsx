import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const UserCard = ({ data, ...props }) => {
  const {
    picture,
    name,
    nat,
    phone,
    email,
    location: { country, street, city, state, postcode },
    dob,
  } = data;

  const dateOfBirth = new Intl.DateTimeFormat("en-US").format(
    new Date(dob.date)
  );

  const userName = Object.values(name).join(" ");

  const region = new Intl.DisplayNames(["en"], { type: "region" }).of(nat);

  return (
    <div className="h-full flex">
      <Card className="w-full" style={{ minWidth: 300 }}>
        <CardMedia image={picture.large} style={{ height: 240 }} />
        <CardContent>
          <div>
            <Typography>{userName}</Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >{`${dateOfBirth} - (${dob.age} years), ${region}`}</Typography>
          </div>
          <div>
            <Typography>{email}</Typography>
          </div>
          <div>
            <Typography>{phone}</Typography>
          </div>
          <div>
            <Typography>{`/${country}/`}</Typography>
            <Typography>{`${street.number} ${street.name}, ${city}, ${state}, ${postcode}`}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
