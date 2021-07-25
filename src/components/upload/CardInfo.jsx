import { Card, CardContent, Container, Grid, Box, ListItem, List } from "@material-ui/core";

const demo = {
  suggested_price: 3.3,
  status: "excelente",
  expiration: 4,
  viable_distance: 30,
  nearby_providers: 5,
  donatable: true,
  salable: true,
  precision: 97,
  entity: "banana",
  category: "fruta",
  lote: 234467,
};

const CardInfo = ({ data }) => {
  data = demo;
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
                        <strong>${data.suggested_price}</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Estado:{" "}
                        <strong>
                          {data.status.charAt(0).toUpperCase() +
                            data.status.slice(1)}
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
                        <strong>{data.viable_distance} KM</strong>
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
                        Precisión: <strong>{data.precision}%</strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Entidad:{" "}
                        <strong>
                          {data.entity.charAt(0).toUpperCase() +
                            data.entity.slice(1)}
                        </strong>
                      </span>
                    </ListItem>
                    <ListItem>
                      <span className="item">
                        Categoria:{" "}
                        <strong>
                          {data.category.charAt(0).toUpperCase() +
                            data.category.slice(1)}
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
