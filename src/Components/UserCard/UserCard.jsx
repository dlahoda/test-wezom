import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { CopyValue } from "Components";

const UserCard = ({ data, index, ...props }) => {
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

  const address = `${street.number} ${street.name}, ${city}, ${state}, ${postcode}`;

  return (
    <div className="h-full flex">
      <Card className="w-full" style={{ minWidth: 300 }}>
        <CardMedia image={picture.large} style={{ height: 240 }} />
        <CardContent>
          <div className="pb-4">
            <Typography className="leading-4">{userName}</Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >{`${dateOfBirth} - (${dob.age} years), ${region}`}</Typography>
          </div>
          <div className="flex items-center pb-1">
            <CopyValue value={email} />
            <Typography className="text-sm underline text-blue-600">
              <a href={`mailto:${email}`}>{email}</a>
            </Typography>
          </div>
          <div className="flex items-center pb-1">
            <CopyValue value={phone} />
            <Typography className="text-sm text-blue-600">
              <a href={`tel:${phone}`}>{phone}</a>
            </Typography>
          </div>
          <div className="flex items-center pb-1">
            <CopyValue value={`/${country}/ ${address}`} />
            <div>
              <Typography className="text-sm">{`/${country}/`}</Typography>
              <Typography className="text-sm">{address}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
