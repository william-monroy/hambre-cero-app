import { Card, CardContent, Container, Grid, Box, ListItem, List } from "@material-ui/core";
import { VALID_STATES } from "../../js/constants"

const CardInfo = ({ data }) => {
  return (
    <Container maxWidth="md">
      <Grid>
        <Card style={{ background: "#FFBC25" }}>
          <Box>
            <CardContent>
              <Grid>
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Result:
                </h3>
              </Grid>
              <Grid justifyContent="space-between" container>
                <Grid item>
                  <List>
                    <ListItem>
                      <span className="item">
                        Precio Sugerido:{" "}
                        <strong>${data.suggested_price.toFixed(2)}</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Estado:{" "}
                        <strong>
                          {VALID_STATES[data.status]}
                        </strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Vencimiento: <strong>{data.expiration} días</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Disancia Viable:{" "}
                        <strong>{data.viable_distance.toFixed(2)} KM</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Proveedores cercanos:{" "}
                        <strong>{data.nearby_providers}</strong>
                      </span>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem>
                      <span className="item">
                        Donable: <strong>{data.donatable ? "Sí" : "No"}</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Vendible: <strong>{data.salable ? "Sí" : "No"}</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Precisión: <strong>{data.precision.toFixed(2)}%</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Entidad:{" "}
                        <strong>
                          {data.entity}
                        </strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Categoria:{" "}
                        <strong>
                          {data.category}
                        </strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        # de lote: <strong>{data.lote}</strong>
                      </span>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default CardInfo;
