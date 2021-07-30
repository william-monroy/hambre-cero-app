import React from "react";
import { Container, Card, Typography } from "@material-ui/core";
import { CONTACT_EMAIL } from "../../js/constants";

const Deletion = () => {
  return (
    <Container maxWidth="md">
      <Card style={{ margin: "30", padding: "30px" }}>
        <Typography variant="title1" component="h3">
          FOR ACCOUNT DELETION PLEASE CONTACT
        </Typography>
        <Typography variant="title2" component="h3">
          {CONTACT_EMAIL}
        </Typography>
      </Card>
    </Container>
  );
};
export default Deletion;
